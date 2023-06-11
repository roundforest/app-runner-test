import type {ActionArgs} from '@remix-run/node'
import {redirect} from '@remix-run/node'
import {Outlet} from '@remix-run/react'

export async function action({request}: ActionArgs) {
  const body = await request.formData()
  const query = body.get('search-query')
  return redirect(`/products/${query}`)
}

export default function Products() {
  return <Outlet />
}
