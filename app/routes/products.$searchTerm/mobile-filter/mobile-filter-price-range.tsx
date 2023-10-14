import React, {Fragment, useMemo} from 'react'
import {useLoaderData, useSearchParams} from '@remix-run/react'
import type {LoaderDataProps} from '~/models'
import {getPriceRangesFilters, getProductsPriceRange} from '~/utils/products/products-utils'
import FilterPriceRangeRow from './mobile-filter-price-range-row'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import {useReportWidgetClickCallback} from '~/hooks/analytics-hooks'

const MobileFilterPriceRange = () => {
  const {
    language,
    currencyCode,
    data: {products},
  } = useLoaderData<LoaderDataProps>()
  const [searchParams, setSearchParams] = useSearchParams()
  const sendWidgetClickEvent = useReportWidgetClickCallback()

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
      }),
    [language, currencyCode],
  )

  const priceRange = getProductsPriceRange(products)
  const priceRangeOptions = getPriceRangesFilters(priceRange)

  return (
    <div className="flex flex-col gap-6">
      {priceRangeOptions.map(({min, max}) => (
        <Fragment key={`${min}-${max}`}>
          <FilterPriceRangeRow
            title={`${currencyFormatter.format(min)} - ${currencyFormatter.format(max)}`}
            value={`${min}-${max}`}
            isChecked={extractFromUrlSearchParams(searchParams, 'byPriceRanges').includes(`${min}-${max}`)}
            filterBy="byPriceRanges"
            onSubmit={() => {
              sendWidgetClickEvent({
                name: 'filter-mobile',
                placement: 'top',
                triggerType: 'price-range',
                variation: JSON.stringify({
                  min,
                  max,
                }),
              })
              setSearchParams((prev) => {
                toggleUrlSearchParams(prev, 'byPriceRanges', `${min}-${max}`)
                return prev
              })
            }}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default MobileFilterPriceRange
