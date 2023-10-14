import type {ReactElement, ReactNode, Ref} from 'react'
import type {UseReportWidgetClickCallbackProps} from '../hooks/analytics-hooks'
import type {CamelCasedProperties} from 'type-fest'

export interface ProductConditions {
  condition: string
  link: string
}

export type Product = CamelCasedProperties<ProductOriginalApiModel> & {
  clickId: number
  productConditions?: ProductConditions[]
}
export interface ProductOriginalApiModel {
  id: string | null
  alternativeId: string
  title: string
  truncatedTitle: string
  publicItemId: string
  source: string
  categoryId: string
  categoryName?: string | null
  total_new: number | null
  total_used: number | null
  total_refurbished: number | null
  shop: string
  expiring: string | null
  auction: boolean
  brandName: string | null
  condition: string
  salesRank: number | null
  price: number
  oldPrice: number | null
  discount: number | null
  freeShipping: boolean
  shippingPrice: number
  imageUrl: string
  image: string
  bigImage: string | null
  imageOrigin: string
  merchantId: number | null
  merchantLogo: string
  merchantLogoUrl: string | null
  svgMerchantLogo: string
  originalMerchantLogo: string | null
  redirectLinkTo: string
  position: number
  productCode: string
  account: string
  couponCode: string | null
  dwsType: string | null
  isSponsored: boolean
  min_hours_availability: null
  max_hours_availability: null
  mainCategoryInfo?: MainCategoryInfoProps | null | undefined
}

export type Metadata = CamelCasedProperties<MetadataOriginalApiModel>
export interface PriceRange {
  min: number
  max: number
}
export interface MainCategoryInfoProps {
  browseNodeId?: string
  browseNodeName?: string
}
export interface MetadataOriginalApiModel {
  id: number
  query: string
  queryInfoTop: string
  queryInfoBottom: Array<string | null | undefined>
  related: Array<string>
  locale: string
  description: string | null | undefined
  for_adult: boolean | null | undefined
  adult_ratio: number
  pageSize: number
  breadcrumbs: Array<{title: string; path: string}>
  noindex: boolean
  amazon_search_url: string
  ebay_search_url: string
  mainCategoryInfo?: MainCategoryInfoProps
}

export interface ProductsAndMetadataOriginalApiResponse {
  products: ProductOriginalApiModel[]
  metadata: MetadataOriginalApiModel
}

export interface ProductsAndMetadataResponse {
  products: Product[]
  metadata: Metadata
  TEST_apiUrl?: string
}

export interface FiltersProps {
  byPriceRange: string[]
  byPriceRanges: string[]
  byPricing: string[]
  byStore: string[]
  byCondition: string[]
  byBrand: string[]
  byShipping: string[]
}
export type DropdownSort = 'bestMatch' | 'discountDescending' | 'expiringDate' | 'priceAscending' | 'priceDescending'

export interface LoaderDataProps {
  data: ProductsAndMetadataResponse
  featureFlags: Record<string, boolean | string>
  locale: string
  language: string
  slug: string
  categoryName: string
  currencyCode: string
  filters: FiltersProps
  sorters: DropdownSort
  itemsPerPage?: number
  pageLoadIdCookie?: string
}

export type Filters =
  | 'byPricing'
  | 'byStore'
  | 'byCondition'
  | 'byBrand'
  | 'byShipping'
  | 'byPriceRange'
  | 'byPriceRanges'
export type FilterFunc = (products: Product[], filterValues: string[]) => Product[]
export type FiltersType = Record<Filters, string[]>
export type FiltersMapType = Record<Filters, FilterFunc>

export type Trigger = 'scroll-intent' | 'exit-intent' | 'immediate'
export type Placement = 'prime-day-popup' | 'prime-day-sticky-footer'
export type TriggerMap = Record<Trigger, (children: ReactElement) => ReactElement>
export type PlacementMap = Record<
  Placement,
  ({targetUrl, widgetSeenRef, sendElementClickEvent}: PlacementProps) => ReactElement
>

export interface TriggerWrapperProps {
  trigger: Trigger
  children: ReactElement
}
export interface PlacementWrapperProps {
  placement: Placement
  children: ReactElement
}

export type AssetsConfigProps = {
  placement: Placement
  trigger: Trigger
  delay?: number
  targetUrl: string
}

export interface PlacementProps {
  widgetSeenRef: Ref<HTMLDivElement>
  sendElementClickEvent: (props?: UseReportWidgetClickCallbackProps) => void
  targetUrl: string
  delay?: number
}

export type FeedbackStep = 'hide' | 'rate' | 'review' | 'bookMeeting' | 'thank-dailog' | 'calendly'

export interface FeedbackMainProps {
  children?: ReactNode
  categorySlug: string
}
export interface FeedbackState {
  rating?: number
  review?: string
  email?: string
  error?: string
  step: FeedbackStep
}
export interface SlackPayload {
  slug: string
  rating?: number
  review?: string
  email?: string
  error?: string
}