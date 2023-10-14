import React from 'react'
import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
  Meta,
} from '@remix-run/react'
import {json, type LoaderFunction, type LinksFunction} from '@remix-run/node'
import stylesheet from '~/styles/app.css'
import {mapHostHeaderToLocaleParams, mapLocaleToGoogleAnalyticsMeasurementId} from './utils/map-locale'
import {makeId, pageId, sessionId, userId} from './utils/cookies.server'

import {GOOGLE_ADS_KEY} from './utils/ga/gtag.client'
import {getABTests} from './utils/launchdarkly/feature-flags'
import Appbar from './components/appbar'
import Footer from './components/footer'
import type {LoaderDataProps} from './models'
import {getLaunchDarklyFeatureFlags} from './utils/launchdarkly/launchdarkly'
import {initAppConfig} from './app-config'

export const links: LinksFunction = () => [
  {rel: 'preload', href: stylesheet, as: 'style'},
  {rel: 'stylesheet', href: stylesheet},
]

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>Something went wrong!</h1>
        <p className="text-[1px]">{error.data}</p>
      </>
    )
  } else if (error instanceof Error) {
    return (
      <>
        <h1>Something went wrong!</h1>
        <p className="text-[1px]">{error.message}</p>
      </>
    )
  } else {
    return (
      <>
        <h1>Something went wrong!</h1>
      </>
    )
  }
}

export const loader: LoaderFunction = async ({request}) => {
  const cookieHeader = request.headers.get('Cookie')
  const host = request.headers.get('host') || ''
  const {locale} = mapHostHeaderToLocaleParams(host)

  await initAppConfig()

  const userIdCookie = await userId.parse(cookieHeader)
  const sessionIdCookie = await sessionId.parse(cookieHeader)
  const pageLoadIdCookie = await pageId.parse(cookieHeader)

  const headers = new Headers()

  if (!userIdCookie) headers.append('Set-Cookie', await userId.serialize(makeId()))
  if (!sessionIdCookie) headers.append('Set-Cookie', await sessionId.serialize(makeId()))
  if (!pageLoadIdCookie) headers.append('Set-Cookie', await pageId.serialize(makeId()))

  const featureFlags = await getLaunchDarklyFeatureFlags(request)

  return json(
    {
      locale,
      pageLoadIdCookie,
      featureFlags,
    },
    {headers},
  )
}

export default function App() {
  const {locale, pageLoadIdCookie, featureFlags} = useLoaderData<LoaderDataProps>()
  const googleAnalyticsMeasurementId = mapLocaleToGoogleAnalyticsMeasurementId(locale)

  const windowConfig = {
    pageLoadIdCookie,
    referrer: '',
    featureFlags: featureFlags,
    featureFlagsHash: '',
    abTests: getABTests(featureFlags),
    abTestsHash: '',
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://www.bestdeals.today/" />
        <meta property="og:site_name" content="Best Deals Today" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.__CONFIGURATION__= ${JSON.stringify(windowConfig)};`,
          }}
        />
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`} />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_KEY}');
              gtag('config', '${googleAnalyticsMeasurementId}', {'page_load_id': '${pageLoadIdCookie}'});
              gtag('event', 'nonceReady');
            `,
              }}
            />
          </>
        )}
        <Appbar />
        <Outlet />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
