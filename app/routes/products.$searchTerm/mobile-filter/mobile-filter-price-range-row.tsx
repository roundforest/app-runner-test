import React from 'react'
import type {Filters} from '~/models'

interface FilterRowProps {
  title: string
  filterBy: Filters
  isChecked: boolean
  value: string
  onSubmit: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const FilterPriceRangeRow = ({title, filterBy, isChecked, value, onSubmit}: FilterRowProps) => {
  return (
    <fieldset className="flex flex-row items-center justify-between">
      <label className="w-full text-sm font-normal capitalize text-neutral-500">{title}</label>
      <input
        name={filterBy}
        id={value}
        className="ml-auto h-3 w-3 cursor-pointer rounded-sm text-white focus:ring-1 focus:ring-blue-300"
        value={value}
        type="checkbox"
        checked={isChecked}
        onChange={onSubmit}
        aria-label={`filter by ${title} ${value}`}
      />
    </fieldset>
  )
}

export default FilterPriceRangeRow
