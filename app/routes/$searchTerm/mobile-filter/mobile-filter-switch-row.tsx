import React from 'react'
import type {Filters} from '~/types'

interface MobileFilterSwitchRowProps {
  label: string
  name: Filters
  onChange: (e: any) => void
  value: string
  checked: boolean
}
const MobileFilterSwitchRow = ({label, name, onChange, value, checked}: MobileFilterSwitchRowProps) => {
  return (
    <fieldset className="text-[#7b7b7b] bg-transparent font-normal text-sm rounded-lg ps-5 py-2.5 text-center flex flex-row w-full items-center justify-between">
      {label}
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input
          type="checkbox"
          name={name}
          onChange={onChange}
          value={value}
          id={value}
          className="sr-only peer"
          checked={checked}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 peer-focus:ring-red-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#61c200]"></div>
      </label>
    </fieldset>
  )
}

export default MobileFilterSwitchRow
