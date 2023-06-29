import React from 'react'

interface FilterRowProps {
  title: string
  filterBy: string
  isChecked: boolean
  value: string
  onSubmit: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const FilterRow = ({title, filterBy, isChecked, value, onSubmit}: FilterRowProps) => {
  return (
    <fieldset className="flex flex-row items-center justify-between">
      <label className="w-full text-sm font-normal capitalize text-[#7b7b7b]">{title}</label>
      <input
        name={filterBy}
        id={value}
        className="ml-auto h-3 w-3 cursor-pointer rounded-sm text-white focus:ring-1 focus:ring-blue-300"
        value={value}
        type="checkbox"
        checked={isChecked}
        onChange={onSubmit}
        aria-label={`${title}-${value}`}
      />
    </fieldset>
  )
}

export default FilterRow
