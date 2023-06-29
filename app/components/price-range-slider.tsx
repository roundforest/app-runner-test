import {useLoaderData} from '@remix-run/react'
import React, {useState} from 'react'
import type {LoaderDataProps} from '~/routes/products.$searchTerm'
import currencyFormatter from '~/utils/currency-formatter'

interface DefaultPriceRangeProp {
  min: number
  max: number
}

interface PriceRangeProps {
  onSubmit: React.MouseEventHandler<HTMLInputElement> | undefined
  defaultPriceRange: DefaultPriceRangeProp
}

const PriceRangeSlider = ({onSubmit, defaultPriceRange}: PriceRangeProps) => {
  const {filterBy} = useLoaderData<LoaderDataProps>()
  const [searchParamsMin, searchParamsMax] = filterBy?.priceRange
  const [minPriceValue, setMinPriceValue] = useState(
    searchParamsMin ? Number(searchParamsMin) : defaultPriceRange.min
  )
  const [maxPriceValue, setMaxPriceValue] = useState(
    searchParamsMax ? Number(searchParamsMax) : defaultPriceRange.max
  )

  const minPricePercentage = (minPriceValue * 100) / defaultPriceRange.max
  const maxPricePercentage = (maxPriceValue * 100) / defaultPriceRange.max

  return (
    <div className="relative">
      <div>
        <input
          type="range"
          aria-label="input-price-range-min"
          name="byPriceRange"
          min={defaultPriceRange.min}
          max={defaultPriceRange.max}
          value={minPriceValue}
          onChange={(e) => {
            e.preventDefault()
            if (Number(e.target.value) < maxPriceValue) setMinPriceValue(Number(e.target.value))
          }}
          onMouseUp={onSubmit}
          style={{backgroundSize: `${minPricePercentage}%`}}
          className="absolute z-50 h-0.5 w-full bg-[#61c200] bg-opacity-0 bg-gradient-to-l from-zinc-300 to-zinc-300 bg-no-repeat"
        />
        <input
          type="range"
          className="absolute h-0.5 w-full bg-[#61c200] [&::-moz-range-thumb]:cursor-none [&::-moz-range-thumb]:opacity-0 [&::-webkit-slider-thumb]:cursor-none [&::-webkit-slider-thumb]:opacity-0"
        />
        <input
          type="range"
          name="byPriceRange"
          aria-label="input-price-range-max"
          min={defaultPriceRange.min}
          max={defaultPriceRange.max}
          value={maxPriceValue}
          onChange={(e) => {
            e.preventDefault()
            if (Number(e.target.value) > minPriceValue) setMaxPriceValue(Number(e.target.value))
          }}
          onMouseUp={onSubmit}
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
