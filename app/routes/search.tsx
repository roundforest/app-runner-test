import type {ActionArgs} from '@remix-run/node'
import {redirect} from '@remix-run/node'

export async function action({request}: ActionArgs) {
  const body = await request.formData()
  const query = body.get('search-query')
  return redirect(`/products/${query}`)
}
