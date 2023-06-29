import {useLoaderData} from '@remix-run/react'
import React from 'react'

import FilterRow from './filter-row'
import {
  getBrandFilterValues,
  getConditionFilterValues,
  getStoreFilterValues,
} from '~/utils/products-filter'
import PriceRangeSlider from './price-range-slider'
import type {LoaderDataProps} from '~/routes/products.$searchTerm'

interface DesktopFilterProps {
  handleOnChange: (e: any) => void
}
const DesktopFilter = ({handleOnChange}: DesktopFilterProps) => {
  const {
    data: {products},
    filterBy,
  } = useLoaderData<LoaderDataProps>()
  const productsPriceList = products.map(({price}) => price)
  const defaultPriceRange = {
    min: Math.min(...productsPriceList),
    max: Math.max(...productsPriceList),
  }

  const brandNames = getBrandFilterValues(products)
  const storeNames = getStoreFilterValues(products)
  const conditions = getConditionFilterValues(products)

  return (
    <div
      className="sticky h-[100] min-w-[245px] bg-white px-5 py-8 drop-shadow-lg tablet:hidden"
      aria-label="filters"
    >
      <div className="mt-2 flex flex-col gap-12" id="filter-sort">
        <div className="flex flex-row justify-between">
          <h1 className="text-[15px]">Filter by</h1>
          <button
            className="text-[15px] font-light text-[#7b7b7b] underline"
            aria-label="clear-all"
          >
            Clear all
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Pricing range</h1>
          <PriceRangeSlider onSubmit={handleOnChange} defaultPriceRange={defaultPriceRange} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Pricing</h1>
          <FilterRow
            title="Fixed"
            value="fixed"
            isChecked={filterBy?.pricing.includes('fixed')}
            filterBy="byPricing"
            onSubmit={handleOnChange}
          />
          <FilterRow
            title="Discounted Products"
            value="discounted"
            isChecked={filterBy?.pricing.includes('discounted')}
            filterBy="byPricing"
            onSubmit={handleOnChange}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Store</h1>
          {storeNames.map((store, i) => {
            return (
              <React.Fragment key={`${store}-${i}`}>
                <FilterRow
                  title={store}
                  value={store}
                  isChecked={filterBy?.store.includes(store)}
                  filterBy={`byStore`}
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Condition</h1>
          {conditions.map((condition, i) => {
            return (
              <React.Fragment key={`${condition}-${i}`}>
                <FilterRow
                  title={condition}
                  value={condition}
                  isChecked={filterBy?.condition.includes(condition)}
                  filterBy="byCondition"
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Brand</h1>
          {brandNames.map((brand, i) => {
            return (
              <React.Fragment key={`${brand}-${i}`}>
                <FilterRow
                  title={brand}
                  value={brand}
                  isChecked={filterBy?.brand.includes(brand)}
                  filterBy="byBrand"
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-[#7b7b7b]">Other</h1>
          <FilterRow
            title="Free Shipping"
            value="shipping"
            isChecked={filterBy?.shipping.includes('shipping')}
            filterBy="byShipping"
            onSubmit={handleOnChange}
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopFilter
