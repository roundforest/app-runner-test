import {useLoaderData} from '@remix-run/react'
import React, {useMemo} from 'react'
import {useReportItemSeen, useSendPartnerProductClickout} from '~/hooks/analytics-hooks'
import {useTranslation} from '~/localization/translation'
import type {LoaderDataProps, Product} from '~/types'
import {BdtIconShipping} from '~/icons/bdt-icon-free-shipping'
import {TopDealBadge} from '~/icons/top-deal-badge'
import {TopSellerBadge} from '~/icons/top-seller-badge'
import {getFirstSixTopDealIds} from '~/utils/products/products-utils'

const ProductCard = ({product, index}: {product: Product; index: number}) => {
  const translations = useTranslation()

  const {
    data: {products},
    language,
    currencyCode,
    categoryName,
    slug,
    locale,
  } = useLoaderData<LoaderDataProps>()
  const sixTopDealsIds = getFirstSixTopDealIds(products)
  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
      }),
    [language, currencyCode],
  )
  const [cardRef] = useReportItemSeen(
    {
      item_list_id: slug,
      item_name: product.title,
      item_source: 'list',
      partner_item_brand: product.brandName ?? '',
      partner_item_id: product.publicItemId,
      affiliation: product.shop,
      currency: currencyCode,
      is_dws: product.source === 'dws',
      price: product.price,
      click_element_name: 'List',
      index,
      variation: product.condition,
    },
    {},
  )
  const handleClickout = useSendPartnerProductClickout({
    product,
    index,
    listName: 'list',
    locale,
    currencyCode,
    categorySlug: slug,
    categoryName,
  })

  return (
    <a
      ref={cardRef}
      aria-label="product card"
      href={product.redirectLinkTo}
      onClick={handleClickout}
      rel="noreferrer"
      target="_blank"
      className="relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-sm bg-white drop-shadow-md"
    >
      <div className="pb-8">
        {getMerchantLogo(product) && (
          <img
            className="absolute right-3 top-3 h-5 w-14 object-scale-down mobile:hidden"
            src={product.merchantLogo}
            alt={product.title}
          />
        )}
      </div>
      {product.discount && (
        <div className="whitespace-no-wrap absolute left-[-12px] top-16 flex h-8 w-32 origin-left rotate-[-45deg] items-center justify-center bg-red-500 text-white">
          {Math.ceil(product.discount)}% {translations.ProductCard.off}
        </div>
      )}
      <div className="mx-auto flex h-32 w-32 items-center justify-center p-3">
        <img className="mx-auto h-32 w-32 object-scale-down" src={product.image} alt={product.title} />
      </div>
      <div className="h-32 p-3">
        <div className="whitespace-no-wrap block w-full overflow-hidden text-ellipsis text-center">
          <span className="line-clamp-1">{product.title}</span>
        </div>
        <div className="mb-2 text-center capitalize">
          <span>{product.condition}</span>
        </div>
        <div className="mx-[-30px] border-b-[1px]" />
        <div className="flex flex-row justify-center gap-2 mt-2 [&>svg]:h-6 [&>svg]:mobile:h-5">
          {sixTopDealsIds.includes(product.publicItemId) && <TopDealBadge />}
          {product.salesRank && product.salesRank <= 2 && <TopSellerBadge />}
        </div>
        <div className="my-2 text-center text-red-500 line-through">
          {product.oldPrice && <span>{currencyFormatter.format(product.oldPrice)}</span>}
        </div>
      </div>
      <div className="h-5 flex flex-row justify-center tablet:hidden mt-2">
        {product.freeShipping && (
          <>
            <BdtIconShipping fill="#595959" />
            <span className="text-[15px] font-normal uppercase text-[#595959]">
              {translations.ProductCard.freeShipping}
            </span>
          </>
        )}
      </div>
      <div className="hidden flex-row justify-center mobile:flex mobile:mt-2 h-5">
        {getMerchantLogo(product) && (
          <img className="h-5 w-14 object-scale-down" src={product.merchantLogo} alt={product.title} />
        )}
      </div>
      <div>
        <div className="p-3">
          <button
            className="mobile:text-sm w-full bg-[#61c200] p-0 px-4 py-2 font-normal uppercase text-white hover:bg-[#52a102]"
            aria-label="go to product page"
            onClick={handleClickout}
          >
            {translations.ProductCard.ctaText()}
          </button>
        </div>
      </div>
    </a>
  )
}

export default ProductCard

export function getMerchantLogo(product: Product): string | undefined {
  const {merchantLogoUrl, originalMerchantLogo, svgMerchantLogo, merchantLogo} = product

  if (svgMerchantLogo) return svgMerchantLogo
  if (originalMerchantLogo) return originalMerchantLogo
  if (merchantLogoUrl) return merchantLogoUrl
  if (merchantLogo) return merchantLogo

  return
}
