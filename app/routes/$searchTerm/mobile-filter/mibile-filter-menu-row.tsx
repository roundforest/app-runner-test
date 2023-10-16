import React from 'react'
import {BdtIconChevronUp} from '~/icons/bdt-icon-chevron-up'
import type {MobileFilterType} from '.'

interface MobileFilterMenuRowProps {
  switchFilterType: (type: MobileFilterType) => void
  label: string
  type: MobileFilterType
}
const MobileFilterMenuRow = ({switchFilterType, label, type}: MobileFilterMenuRowProps) => {
  return (
    <button
      type="button"
      onClick={() => switchFilterType(type)}
      className="text-[#7b7b7b] bg-transparent font-normal text-sm rounded-lg ps-5 py-2.5 pr-4 text-center flex flex-row w-full items-center justify-between"
    >
      {label}
      <BdtIconChevronUp fill="#7b7b7b" className="rotate-90 w-4 h-4" />
    </button>
  )
}

export default MobileFilterMenuRow
