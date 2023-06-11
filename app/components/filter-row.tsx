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
    <fieldset className="flex flex-row justify-between items-center">
      <label className="text-sm font-normal capitalize text-[#7b7b7b] w-full">{title}</label>
      <input
        name={filterBy}
        id={value}
        className="text-white rounded-sm cursor-pointer ml-auto w-3 h-3 focus:ring-1 focus:ring-blue-300"
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
