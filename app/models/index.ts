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

export interface FilterByProps {
  priceRange: string[]
  pricing: string[]
  store: string[]
  condition: string[]
  brand: string[]
  shipping: string[]
}
export type DropdownSortBy =
  | 'bestMatch'
  | 'discountDescending'
  | 'expiringDate'
  | 'priceAscending'
  | 'priceDescending'

export interface LoaderDataProps {
  data: ProductsAndMetadataResponse
  locale: string
  language: string
  currencyCode: string
  featureFlags: Record<string, any>
  filterBy: FilterByProps
  sortBy: DropdownSortBy
  itemsPerPage?: number
}

export type Filters = 'priceRange' | 'pricing' | 'store' | 'condition' | 'brand' | 'shipping'

export type FilterFunc = (products: Product[], filterValues: string[]) => Product[]
export type FiltersType = Record<Filters, string[]>
export type FiltersMapType = Record<Filters, FilterFunc>
