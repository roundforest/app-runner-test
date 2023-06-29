import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'
import type {LinksFunction} from '@remix-run/node'
import stylesheet from '~/styles/app.css'
import type {CamelCasedProperties} from 'type-fest'

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
