import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useEffect} from 'react'
import {isMobile} from 'react-device-detect'

import Appbar from '~/components/appbar'
import Content from '~/components/content'

import Footer from '~/components/footer'
import type {DropdownSortBy, LoaderDataProps} from '~/models'
import {makeId, userId} from '~/utils/cookies.server'
import {gaClient} from '~/utils/ga/gtag.client'
import {
  extractFeatureFlagOverridesFromQueryParams,
  normalizeFeatureFlags,
} from '~/utils/launchdarkly/feature-flags'
import {getLdClient} from '~/utils/launchdarkly/launch-darkly.server'
import {mapHostHeaderToLocaleParams} from '~/utils/map-locale'
import {getFakeData, getRealData} from '~/utils/products/products-data.server'

export const loader: LoaderFunction = async ({params, request}) => {
  const url = new URL(request.url)
  const host = request.headers.get('host') || ''
  const cookieHeader = request.headers.get('Cookie')
  const userIdCookie = await userId.parse(cookieHeader)
  const {searchParams} = url
  const {searchTerm} = params
  const {locale, language, currencyCode} = mapHostHeaderToLocaleParams(host)

  const headers = new Headers()
  if (!userIdCookie) headers.append('Set-Cookie', await userId.serialize(makeId()))

  const priceRange = searchParams.getAll('byPriceRange')
  const pricing = searchParams.getAll('byPricing')
  const store = searchParams.getAll('byStore')
  const condition = searchParams.getAll('byCondition')
  const brand = searchParams.getAll('byBrand')
  const shipping = searchParams.getAll('byShipping')
  const sortBy = (searchParams.get('sortBy') ?? 'bestMatch') as DropdownSortBy

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
  const featureFlagsOverrides = extractFeatureFlagOverridesFromQueryParams(
    Object.fromEntries(searchParams),
  )
  const overridedFeatureFlags = normalizeFeatureFlags(
    allFeatureFlags?.allValues(),
    featureFlagsOverrides,
  )

  const data =
    process.env.NODE_ENV === 'production' ? await getRealData(searchTerm || '') : getFakeData()

  const itemsPerPage = isMobile ? 8 : 25

  return json<LoaderDataProps>(
    {
      data,
      locale,
      language,
      itemsPerPage,
      currencyCode,
      featureFlags: overridedFeatureFlags,
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
    // {headers},
  )
}

export default function Products() {
  useEffect(() => {
    gaClient.sendPageInfoEvent({main_info: 'remix-products-page-info'})
  }, [])

  return (
    <main className="flex flex-col">
      <Appbar />
      <Content />
      <Footer />
    </main>
  )
}
