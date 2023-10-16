import {useLoaderData} from '@remix-run/react'
import React from 'react'
import {useTranslation} from '~/localization/translation'
import SortDropdown from './sort-dropdown'
import MobileFilter from './mobile-filter'
import type {LoaderDataProps} from '~/types'
import {getProductsByFilters, getSortedProducts} from '~/utils/products/products-utils'

const ProductsTopbar = () => {
  const {
    data: {products, metadata},
    filters,
    sorters,
  } = useLoaderData<LoaderDataProps>()
  const translation = useTranslation()
  const filteredProducts = getProductsByFilters(products, filters)
  const sortedProducts = getSortedProducts(filteredProducts, sorters)

  return (
    <div className="overflow-visible">
      <div className="mt-5 flex flex-col gap-4">
        <div className="ml-[-4px] flex flex-row text-[13px] leading-normal text-gray-500">
          {metadata.breadcrumbs.map((crump, i) => (
            <a
              key={i}
              className='capitalize after:content-["/"] last:after:content-[""]'
              aria-label={`go to ${crump.title} category`}
              href={crump.path}
            >
              &nbsp;&nbsp;{`${crump.title}`}
              &nbsp;&nbsp;
            </a>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row tablet:flex-col w-full">
            <div className="flex flex-col flex-wrap gap-1 tablet:gap-3 mobile:pr-0">
              <span className="text-2xl capitalize">
                {translation.PageTitleDeals(metadata.query)}
                &nbsp;{translation.PageTitleLocale}
              </span>
              <span className="text-xl font-medium text-[#f44945]">
                {translation.pageSubtitlePrefix}
                <em className="text-xl font-medium text-[#4896f7] not-italic">{translation.pageSubtitleText}</em>
              </span>
            </div>
            <span className="flex self-end mx-auto tablet:mx-0 tablet:self-start tablet:mt-4 text-end items-center text-base font-light leading-none text-[#686868]">
              {sortedProducts.length} {translation.PageHeader.dealsFound}
            </span>
          </div>
          <SortDropdown />
          <MobileFilter />
        </div>
        <div className="sm:hidden border-b-[1px]" />
        <span className="text-[13px] font-light mobile:hidden">{metadata?.queryInfoTop}</span>
      </div>
    </div>
  )
}

export default ProductsTopbar
