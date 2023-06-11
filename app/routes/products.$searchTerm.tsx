import type {ActionArgs, LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'

import Appbar from '~/components/appbar'
import Content from '~/components/content'

import Footer from '~/components/footer'
import {getData, getFakeData} from 'server/clients'

export const loader: LoaderFunction = async ({params}) => {
  const {searchTerm} = params
  const data =
    process.env.NODE_ENV === 'production'
      ? await getData(searchTerm || '')
      : await getFakeData(searchTerm || '')
  return json(data)
}

export async function action({request}: ActionArgs) {
  const formData = await request.formData()
  const byFixedPrice = formData.getAll('byFixedPrice')
  const byDiscounted = formData.getAll('byDiscounted')
  const byStore = formData.getAll('byStore')
  const byCondition = formData.getAll('byCondition')
  const byBrand = formData.getAll('byBrand')
  const byShipping = formData.getAll('byShipping')

  return json({filters: {byBrand, byFixedPrice, byDiscounted, byStore, byCondition, byShipping}})
}

export default function MainRoute() {
  return (
    <main className="flex flex-col">
      <Appbar />
      <Content />
      <Footer />
    </main>
  )
}
