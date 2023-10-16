import type {ActionFunctionArgs, LoaderFunction, MetaFunction} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'
import {isMobile} from 'react-device-detect'
import {slugToText, textToSlug} from '@roundforest/text-transforms-commons'
import type {DropdownSort, LoaderDataProps, ProductsAndMetadataResponse} from '~/types'
import {makeId, userId} from '~/utils/cookies.server'
import {mapHostHeaderToLocaleParams} from '~/utils/map-locale'
import {getFakeData, getRealData} from '~/utils/products/products-data.server'
import {useEffect} from 'react'
import {gaClient} from '~/utils/ga/gtag.client'
import DesktopFilter from './desktop-filter/desktop-filter'
import ProductsList from './products-list'
import ProductsTopbar from './products-topbar'
import {mapTranslationByLocale} from '~/localization/translation'
import {calculateMaxDiscount, getProductsByFilters, getSortedProducts} from '~/utils/products/products-utils'
import {FeedbackMain} from './feedback'
import {ScrollTrigger} from '~/hooks/use-scroll-intent'
import {getLaunchDarklyFeatureFlags} from '~/utils/launchdarkly/launchdarkly'

export const loader: LoaderFunction = async ({params, request}) => {
  const url = new URL(request.url)
  const host = request.headers.get('host') || ''
  const cookieHeader = request.headers.get('Cookie')
  const userIdCookie = await userId.parse(cookieHeader)
  const {searchParams} = url
  const {searchTerm: slug = ''} = params
  const categoryName = slugToText(slug)
  const featureFlags = await getLaunchDarklyFeatureFlags(request)
  const {locale, language, currencyCode} = mapHostHeaderToLocaleParams(host)

  const headers = new Headers()

  if (!userIdCookie) headers.append('Set-Cookie', await userId.serialize(makeId()))

  const byPriceRange = searchParams.get('byPriceRange')?.split('|') ?? []
  const byPriceRanges = searchParams.get('byPriceRanges')?.split('|') ?? []
  const byPricing = searchParams.get('byPricing')?.split('|') ?? []
  const byStore = searchParams.get('byStore')?.split('|') ?? []
  const byCondition = searchParams.get('byCondition')?.split('|') ?? []
  const byBrand = searchParams.get('byBrand')?.split('|') ?? []
  const byShipping = searchParams.get('byShipping')?.split('|') ?? []
  const sorters = (searchParams.get('sortBy') ?? 'bestMatch') as DropdownSort

  const data: ProductsAndMetadataResponse =
    process.env.NODE_ENV === 'production' ? await getRealData(slug, host, locale) : getFakeData()

  const itemsPerPage = isMobile ? 8 : 25
  const filters = {byPriceRange, byPriceRanges, byPricing, byStore, byCondition, byBrand, byShipping}
  const filteredProducts = getSortedProducts(getProductsByFilters(data.products, filters), sorters)
  return json<LoaderDataProps>(
    {
      data,
      filteredProducts,
      locale,
      language,
      slug,
      categoryName,
      itemsPerPage,
      currencyCode,
      featureFlags,
      filters,
      sorters,
    },
    // {headers},
  )
}

export const meta: MetaFunction<typeof loader, {'routes/products.$searchTerm': LoaderDataProps}> = ({data}) => {
  const {locale, categoryName, data: productsData} = data as LoaderDataProps
  const maxDiscount = calculateMaxDiscount(productsData.products ?? [])
  const title = mapTranslationByLocale[locale].Page.title(categoryName, maxDiscount ?? 70)
  const description = mapTranslationByLocale[locale].Page.description(categoryName)

  return [
    {title},
    {property: 'og:locale', content: locale},
    {property: 'og:description', content: description},
    {property: 'description', content: description},
    {property: 'og:title', content: title},
    {property: 'title', content: title},
  ]
}

export async function action({request}: ActionFunctionArgs) {
  const body = await request.formData()
  const query = body.get('search-query') as string
  return redirect(`/${textToSlug(query)}`)
}

export default function Products() {
  useEffect(() => {
    gaClient.sendPageInfoEvent({in: 'aaa'})
  }, [])

  return (
    <div className="flex flex-row">
      <DesktopFilter />
      <div className="h-full w-full px-6">
        <div className="mb-4 mt-4 flex flex-col justify-center tablet:mt-0">
          <ProductsTopbar />
          <ProductsList />
          <ScrollTrigger config={{percent: 0.1, delay: 7}}>
            <FeedbackMain />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}
