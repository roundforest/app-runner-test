import {useLoaderData, useSearchParams} from '@remix-run/react'
import React from 'react'
import type {LoaderDataProps} from '~/models'
import {getBrandFilterValues} from '~/utils/products/products-utils'
import FilterRow from '../desktop-filter/filter-row'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import {useReportWidgetClickCallback} from '~/hooks/analytics-hooks'

const MobileFilterBrand = () => {
  const {
    data: {products},
  } = useLoaderData<LoaderDataProps>()
  const brandNames = getBrandFilterValues(products)
  const [searchParams, setSearchParams] = useSearchParams()
  const sendWidgetClickEvent = useReportWidgetClickCallback()

  return (
    <div className="flex flex-col gap-6">
      {brandNames.map((brand, i) => {
        return (
          <React.Fragment key={`${brand}-${i}`}>
            <FilterRow
              title={brand}
              value={brand}
              isChecked={extractFromUrlSearchParams(searchParams, 'byBrand').includes(brand)}
              filterBy="byBrand"
              onSubmit={() => {
                sendWidgetClickEvent({
                  name: 'filter-mobile',
                  placement: 'top',
                  triggerType: 'brands',
                  variation: JSON.stringify({
                    [brand]: !extractFromUrlSearchParams(searchParams, 'byBrand').includes(brand),
                  }),
                })
                setSearchParams((prev) => {
                  toggleUrlSearchParams(prev, 'byBrand', brand)
                  return prev
                })
              }}
            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default MobileFilterBrand
