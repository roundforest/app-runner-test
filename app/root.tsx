import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import type {ActionArgs, LinksFunction} from '@remix-run/node' // or cloudflare/deno
import {redirect} from '@remix-run/node' // or cloudflare/deno
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

export async function action({request}: ActionArgs) {
  const body = await request.formData()
  const query = body.get('search-query')
  return redirect(`/products/${query}`)
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
