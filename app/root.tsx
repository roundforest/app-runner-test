import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import {type LinksFunction} from '@remix-run/node'
import stylesheet from '~/styles/app.css'

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

export default function App() {
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
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
