import {Form, useActionData, useFetcher, useLoaderData, useSubmit} from '@remix-run/react'
import React from 'react'

import FilterRow from './filter-row'
import {
  getBrandFilterValues,
  getConditionFilterValues,
  getStoreFilterValues,
} from '~/utils/products-filter'

const DesktopFilter = () => {
  const {products} = useLoaderData()
  const submit = useSubmit()
  const toggle = useFetcher()
  const data = useActionData()
  const brandNames = getBrandFilterValues(products)
  const storeNames = getStoreFilterValues(products)
  const conditions = getConditionFilterValues(products)

  const isFixedPriceChecked = data?.filters ? data?.filters?.byFixedPrice.includes('fixed') : false
  const isDiscountChecked = data?.filters
    ? data?.filters?.byDiscounted.includes('discounted')
    : false

  const handleOnChange = (e: any) => {
    e.preventDefault()
    submit(e.target.form)
  }

  return (
    <div
      className="tablet:hidden sticky min-w-[245px] drop-shadow-lg h-[100] bg-white px-5 py-8"
      aria-label="filters"
    >
      <toggle.Form method="post">
        <div className="flex flex-row justify-between ">
          <h1 className="text-[15px]">Filter by</h1>
          <button
            className="underline font-light text-[15px] text-[#7b7b7b]"
            onClick={handleOnChange}
            aria-label="clear-all"
          >
            Clear all
          </button>
        </div>
      </toggle.Form>

      <Form method="post" className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#7b7b7b] text-[15px]">Pricing</h1>

          <FilterRow
            title="Fixed"
            value="fixed"
            isChecked={isFixedPriceChecked}
            filterBy="byFixedPrice"
            onSubmit={handleOnChange}
          />
          <FilterRow
            title="Discounted Products"
            value="discounted"
            isChecked={isDiscountChecked}
            filterBy="byDiscounted"
            onSubmit={handleOnChange}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#7b7b7b] text-[15px]">Store</h1>
          {storeNames.map((store, i) => {
            return (
              <React.Fragment key={`${store}-${i}`}>
                <FilterRow
                  title={store}
                  value={store}
                  isChecked={data?.filters ? data?.filters?.byStore.includes(store) : false}
                  filterBy="byStore"
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#7b7b7b] text-[15px]">Condition</h1>
          {conditions.map((condition, i) => {
            return (
              <React.Fragment key={`${condition}-${i}`}>
                <FilterRow
                  title={condition}
                  value={condition}
                  isChecked={data?.filters ? data?.filters?.byCondition.includes(condition) : false}
                  filterBy="byCondition"
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#7b7b7b] text-[15px]">Brand</h1>
          {brandNames.map((brand, i) => {
            return (
              <React.Fragment key={`${brand}-${i}`}>
                <FilterRow
                  title={brand}
                  value={brand}
                  isChecked={data?.filters ? data?.filters?.byBrand.includes(brand) : false}
                  filterBy="byBrand"
                  onSubmit={handleOnChange}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#7b7b7b] text-[15px]">Other</h1>
          <FilterRow
            title="Free Shipping"
            value="shipping"
            isChecked={data?.filters ? data?.filters?.byShipping.includes('shipping') : false}
            filterBy="byShipping"
            onSubmit={handleOnChange}
          />
        </div>
      </Form>
    </div>
  )
}

export default DesktopFilter
