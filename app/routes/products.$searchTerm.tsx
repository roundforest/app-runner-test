import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'

import Appbar from '~/components/appbar'
import Content from '~/components/content'

import Footer from '~/components/footer'
import type {DropdownSortBy, LoaderDataProps} from '~/models'
import {makeId, pageId, sessionId, userId} from '~/utils/cookies.server'
import {
  extractFeatureFlagOverridesFromQueryParams,
  normalizeFeatureFlags,
} from '~/utils/feature-flags'
import {mapHostHeaderToLocaleParams} from '~/utils/host-header-locale'
import {getLdClient} from '~/utils/launch-darkly.server'

import {getFakeData, getRealData} from '~/utils/products-data.server'

export const loader: LoaderFunction = async ({params, request}) => {
  const cookieHeader = request.headers.get('Cookie')
  const userIdCookie = await userId.parse(cookieHeader)
  const sessionIdCookie = await sessionId.parse(cookieHeader)
  const pageIdCookie = await pageId.parse(cookieHeader)
  const headers = new Headers()
  if (!userIdCookie) headers.append('Set-Cookie', await userId.serialize(makeId()))
  if (!sessionIdCookie) headers.append('Set-Cookie', await sessionId.serialize(makeId()))
  if (!pageIdCookie) headers.append('Set-Cookie', await pageId.serialize(makeId()))

  const url = new URL(request.url)
  const {searchParams} = url
  const {searchTerm} = params
  const host = request.headers.get('host') || ''
  const {locale, language, currencyCode} = mapHostHeaderToLocaleParams(host)

  const featureFlagsOverrides = extractFeatureFlagOverridesFromQueryParams(
    Object.fromEntries(searchParams)
  )
  const priceRange = searchParams.getAll('byPriceRange')
  const pricing = searchParams.getAll('byPricing')
  const store = searchParams.getAll('byStore')
  const condition = searchParams.getAll('byCondition')
  const brand = searchParams.getAll('byBrand')
  const shipping = searchParams.getAll('byShipping')
  const sortBy = (searchParams.get('sortBy') ?? 'bestMatch') as DropdownSortBy
  const data =
    process.env.NODE_ENV === 'production' ? await getRealData(searchTerm || '') : getFakeData()

  const launchDarkly = await getLdClient()
  launchDarkly.identify({
    custom: {
      domain: host,
    },
    key: userIdCookie,
    country: locale,
  })

  const featureFlags = await launchDarkly?.allFlagsState({key: userIdCookie})

  const allFlags = normalizeFeatureFlags(featureFlags?.allValues(), featureFlagsOverrides)

  return json<LoaderDataProps>(
    {
      data,
      locale,
      language,
      currencyCode,
      featureFlags: allFlags,
      filterBy: {
        priceRange,
        pricing,
        store,
        condition,
        brand,
        shipping,
      },
      sortBy,
    },
    {headers}
  )
}

export default function Products() {
  return (
    <main className="flex flex-col">
      <Appbar />
      <Content />
      <Footer />
    </main>
  )
}
