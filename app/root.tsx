import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import {json, type LoaderFunction, type LinksFunction} from '@remix-run/node'
import stylesheet from '~/styles/app.css'
import {
  mapHostHeaderToLocaleParams,
  mapLocaleToGoogleAnalyticsMeasurementId,
} from './utils/map-locale'
import {makeId, pageId, sessionId, userId} from './utils/cookies.server'

import {GOOGLE_ADS_KEY} from './utils/ga/ga-commons'
import {getABTests, normalizeFeatureFlags} from './utils/launchdarkly/feature-flags'
import {getLdClient} from './utils/launchdarkly/launch-darkly.server'
import {isMobile} from 'react-device-detect'

export const links: LinksFunction = () => [{rel: 'stylesheet', href: stylesheet}]

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

  const userIdCookie = await userId.parse(cookieHeader)
  const sessionIdCookie = await sessionId.parse(cookieHeader)
  const pageLoadIdCookie = await pageId.parse(cookieHeader)

  const headers = new Headers()

  if (!userIdCookie) headers.append('Set-Cookie', await userId.serialize(makeId()))
  if (!sessionIdCookie) headers.append('Set-Cookie', await sessionId.serialize(makeId()))
  if (!pageLoadIdCookie) headers.append('Set-Cookie', await pageId.serialize(makeId()))

  const launchDarkly = await getLdClient()

  launchDarkly.identify({
    custom: {
      domain: host,
      device: isMobile ? 'mobile' : 'desktop',
    },
    key: userIdCookie,
    country: locale,
  })

  const allFeatureFlags = await launchDarkly?.allFlagsState({key: userIdCookie ?? 'key'})

  const featureFlags = normalizeFeatureFlags(allFeatureFlags?.allValues())

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
  const {locale, pageLoadIdCookie, featureFlags} = useLoaderData<typeof loader>()
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
        <meta property="og:locale" content="US" />
        <meta property="og:site_name" content="Best Deals Today" />
        <meta
          property="og:description"
          content="Best Deals Today analyzes thousands of articles and customer reviews to find the top-rated products at today's lowest prices. Best products, best offers."
        />
        <meta
          name="description"
          content="Best Deals Today analyzes thousands of articles and customer reviews to find the top-rated products at today's lowest prices. Best products, best offers."
        />

        <meta property="og:title" content="Best Products Deals" />
        <Links />
        <title>Store Page</title>
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__CONFIGURATION__ = ${JSON.stringify(windowConfig)};`,
          }}
        />
        {process.env.NODE_ENV === 'development' ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
            />
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
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
