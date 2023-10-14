import {useLoaderData, useSearchParams} from '@remix-run/react'
import React, {useEffect, useMemo, useState} from 'react'
import {useReportWidgetClickCallback} from '~/hooks/analytics-hooks'
import type {LoaderDataProps} from '~/models'
import {getProductsPriceRange} from '~/utils/products/products-utils'

const PriceRangeSlider = () => {
  const {
    filters,
    language,
    currencyCode,
    data: {products},
  } = useLoaderData<LoaderDataProps>()

  const [searchParamsMin, searchParamsMax] = !filters?.byPriceRange.length
    ? [
        Math.min(...products.map(({price}) => price)).toString(),
        Math.max(...products.map(({price}) => price)).toString(),
      ]
    : filters?.byPriceRange

  const sendWidgetClickEvent = useReportWidgetClickCallback()
  const [minPriceValue, setMinPriceValue] = useState(Number(searchParamsMin))
  const [maxPriceValue, setMaxPriceValue] = useState(Number(searchParamsMax))
  const [searchParams, setSearchParams] = useSearchParams()

  const {min: globalMinPrice, max: globalMaxPrice} = getProductsPriceRange(products)

  useEffect(() => {
    if (!filters?.byPriceRange.length) {
      setMinPriceValue(Number(searchParamsMin))
      setMaxPriceValue(Number(searchParamsMax))
    }
  }, [searchParams, filters?.byPriceRange.length, searchParamsMin, searchParamsMax])

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 0,
      }),
    [language, currencyCode],
  )
  const minPricePercentage = (minPriceValue * 100) / globalMaxPrice
  const maxPricePercentage = (maxPriceValue * 100) / globalMaxPrice

  const handlePriceRangeOnChange = () => {
    sendWidgetClickEvent({
      name: 'filter-desktop',
      placement: 'left',
      triggerType: 'price-range',
      variation: JSON.stringify({
        min: minPriceValue,
        max: maxPriceValue,
      }),
    })
    setSearchParams((prev) => {
      prev.set('byPriceRange', `${minPriceValue}|${maxPriceValue}`)
      return prev
    })
  }

  return (
    <div className="relative">
      <div id="input-range">
        <input
          type="range"
          aria-label="input minimum price range slider"
          aria-labelledby="input-range-minimum-price"
          name="byPriceRange"
          min={globalMinPrice}
          max={globalMaxPrice}
          value={minPriceValue}
          onChange={(e) => {
            e.preventDefault()
            if (Number(e.target.value) < maxPriceValue) setMinPriceValue(Number(e.target.value))
          }}
          onMouseUp={handlePriceRangeOnChange}
          style={{backgroundSize: `${minPricePercentage}%`}}
          className="absolute z-50 h-0.5 w-full bg-[#61c200] bg-opacity-0 bg-gradient-to-l from-zinc-300 to-zinc-300 bg-no-repeat"
        />
        <input
          type="range"
          aria-label="not changing input"
          aria-labelledby="input-range-middle"
          className="absolute h-0.5 w-full bg-[#61c200] [&::-moz-range-thumb]:cursor-none [&::-moz-range-thumb]:opacity-0 [&::-webkit-slider-thumb]:cursor-none [&::-webkit-slider-thumb]:opacity-0"
        />
        <input
          type="range"
          name="byPriceRange"
          aria-label="input maximum price range slider"
          aria-labelledby="input-range-maximum-price"
          min={globalMinPrice}
          max={globalMaxPrice}
          value={maxPriceValue}
          onChange={(e) => {
            e.preventDefault()
            if (Number(e.target.value) > minPriceValue) setMaxPriceValue(Number(e.target.value))
          }}
          onMouseUp={handlePriceRangeOnChange}
          style={{backgroundSize: `${maxPricePercentage}%`}}
          className="absolute h-0.5 w-full bg-zinc-300  bg-gradient-to-r from-[#61c200] to-[#61c200] bg-no-repeat"
        />
      </div>
      <div className="mt-3 flex flex-row justify-between px-1">
        <p className="text-[13px] text-[#8e8e8e]">{currencyFormatter.format(minPriceValue)}</p>
        <p className="text-[13px] text-[#8e8e8e]">{currencyFormatter.format(maxPriceValue)}</p>
      </div>
    </div>
  )
}

export default PriceRangeSlider
