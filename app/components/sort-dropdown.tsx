import {useLoaderData} from '@remix-run/react'
import React, {Fragment, useState} from 'react'
import type {DropdownSortBy} from '~/utils/products-sort'
import {BdtIconBestMatch} from '~/icons/bdt-icon-best-match'
import {BdtIconCalendar} from '~/icons/bdt-icon-calendar'
import {BdtIconChevronDown} from '~/icons/bdt-icon-chevron-down'
import {BdtIconChevronUp} from '~/icons/bdt-icon-chevron-up'
import {BdtIconDiscount} from '~/icons/bdt-icon-discount'
import {BdtIconSortAsc} from '~/icons/bdt-icon-sort-asc'
import {BdtIconSortDesc} from '~/icons/bdt-icon-sort-desc'
import {useTranslation} from '~/localization/translation'
import type {LoaderDataProps} from '~/routes/products.$searchTerm'

export interface DropdownOption {
  value: DropdownSortBy
  label: string
  icon: (fill: string) => React.ReactNode
}

const SortDropdown = () => {
  const translation = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const {sortBy} = useLoaderData<LoaderDataProps>()
  const options = [
    {
      label: translation.SortByDropDown.Options.bestMatch,
      value: 'bestMatch',
      icon: (fill: string) => <BdtIconBestMatch width={24} height={24} fill={fill} />,
    },
    {
      label: translation.SortByDropDown.Options.discountDescending,
      value: 'discountDescending',
      icon: (fill: string) => <BdtIconDiscount width={24} height={24} fill={fill} />,
    },
    {
      label: translation.SortByDropDown.Options.expiringDate,
      value: 'expiringDate',
      icon: (fill: string) => <BdtIconCalendar width={24} height={24} fill={fill} />,
    },
    {
      label: translation.SortByDropDown.Options.priceAscending,
      value: 'priceAscending',
      icon: (fill: string) => <BdtIconSortAsc width={24} height={24} fill={fill} />,
    },
    {
      label: translation.SortByDropDown.Options.priceDescending,
      value: 'priceDescending',
      icon: (fill: string) => <BdtIconSortDesc width={24} height={24} fill={fill} />,
    },
  ] as DropdownOption[]

  const defaultSortValue =
    !sortBy || !sortBy.length || !options.map(({value}) => value).includes(sortBy)
      ? 'bestMatch'
      : sortBy

  const [currentSortValue, setCurrentSortValue] = useState<DropdownSortBy>(defaultSortValue)

  const dropdownClassName = isOpen
    ? 'border-[#d8d8d8 absolute right-0 z-10 w-[210px] origin-top-right border-[0.5px] border-solid bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
    : 'hidden border-[#d8d8d8 absolute right-0 z-10 w-[210px] origin-top-right border-[0.5px] border-solid bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'

  const [currentOption] = options.filter((o) => o.value === currentSortValue)

  return (
    <div className="ml-auto flex flex-row items-center gap-2">
      <p className="text-xs font-light text-[#8e8e8e] desktop:hidden">
        {translation.PageHeader.sortBy}:
      </p>
      <div className="relative inline-block text-left">
        <div className="w-[210px]">
          <button
            type="button"
            className="inline-flex h-[40px] w-full items-center justify-between gap-x-1.5 bg-white px-3 py-2 text-sm text-[#6b6b6b] ring-1 ring-inset ring-[#d8d8d8] [&>*:nth-child(2)]:ml-auto "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            aria-label="open-sorting-menu"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <>
              {currentOption?.icon('#6b6b6b')}
              {currentOption?.label}
            </>
            {isOpen ? <BdtIconChevronUp fill="#6b6b6b" /> : <BdtIconChevronDown fill="#6b6b6b" />}
          </button>
        </div>

        <input type="hidden" name="sortBy" value={currentSortValue} />
        <div
          className={`${dropdownClassName}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {options.map((option, i) => (
            <Fragment key={`${option.value}-${i}`}>
              <button
                className={
                  currentOption.value === option.value
                    ? 'flex w-full cursor-pointer justify-start bg-[#f2f2f2] px-2.5 py-2 text-sm text-gray-700 hover:bg-[#f2f2f2] [&>*:nth-child(2)]:ml-1.5'
                    : 'flex w-full cursor-pointer justify-start px-2.5 py-2 text-sm text-gray-700 hover:bg-[#f2f2f2] [&>*:nth-child(2)]:ml-1.5'
                }
                role="menuitem"
                onClick={(e) => {
                  setCurrentSortValue(option.value)
                  setIsOpen(false)
                }}
                tabIndex={-1}
              >
                {option.icon('#6b6b6b')}
                <p>{option.label}</p>
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SortDropdown
