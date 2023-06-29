import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'

import Appbar from '~/components/appbar'
import Content from '~/components/content'

import Footer from '~/components/footer'
import {mapHostHeaderToLocaleParams} from '~/utils/host-header-locale'
import type {DropdownSortBy} from '~/utils/products-sort'
import type {ProductsAndMetadataResponse} from '~/root'

export interface FilterByProps {
  priceRange: string[]
  pricing: string[]
  store: string[]
  condition: string[]
  brand: string[]
  shipping: string[]
}
export interface LoaderDataProps {
  data: ProductsAndMetadataResponse
  locale: string
  language: string
  currencyCode: string
  filterBy: FilterByProps
  sortBy: DropdownSortBy
}

export const loader: LoaderFunction = async ({params, request}) => {
  const {searchTerm} = params
  const url = new URL(request.url)
  const priceRange = url.searchParams.getAll('byPriceRange')
  const pricing = url.searchParams.getAll('byPricing')
  const store = url.searchParams.getAll('byStore')
  const condition = url.searchParams.getAll('byCondition')
  const brand = url.searchParams.getAll('byBrand')
  const shipping = url.searchParams.getAll('byShipping')
  const sortBy = url.searchParams.get('sortBy')
  const {locale, language, currencyCode} = mapHostHeaderToLocaleParams(request.headers.get('host'))
  const res = await fetch(`https://www.bestdeals.today/bdt-proxy/${searchTerm}`)
  const data = await res.json()
  // const data =
  //   process.env.NODE_ENV === 'production'
  //     ? await getData(searchTerm || '')
  //     : await getFakeData(searchTerm || '')
  return json({
    data,
    locale,
    language,
    currencyCode,
    filterBy: {
      priceRange,
      pricing,
      store,
      condition,
      brand,
      shipping,
    },
    sortBy,
  })
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
