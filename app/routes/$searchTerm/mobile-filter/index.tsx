import React, {useState} from 'react'
import {BdtIconArrowRight} from '~/icons/bdt-arrow-right'
import {BdtIconMobileFilter} from '~/icons/bdt-icon-mobile-filter'
import MobileFilterMenu from './mobile-filter-menu'
import MobileFilterPriceRange from './mobile-filter-price-range'
import MobileFilterStore from './mobile-filter-store'
import MobileFilterCondition from './mobile-filter-condition'
import MobileFilterBrand from './mobile-filter-brand'
import {useLoaderData, useSearchParams} from '@remix-run/react'
import type {LoaderDataProps} from '~/types'
import {useTranslation} from '~/localization/translation'

export type MobileFilterType = 'priceRange' | 'store' | 'condition' | 'brand'

const mobileFilters = {
  priceRange: () => <MobileFilterPriceRange />,
  store: () => <MobileFilterStore />,
  condition: () => <MobileFilterCondition />,
  brand: () => <MobileFilterBrand />,
} as Record<MobileFilterType, () => JSX.Element>

const MobileFilterMain = () => {
  const {filters} = useLoaderData<LoaderDataProps>()
  const [isMobileFilterMenuOpen, setIsMobileFilterMenuOpen] = useState(false)
  const [isMobileFilterSubMenuOpen, setIsMobileFilterSubMenuOpen] = useState(false)
  const [filterType, setFilterType] = useState<MobileFilterType>('priceRange')
  const [, setSearchParams] = useSearchParams()
  const translations = useTranslation()
  const handleCloseMobileFilterMenu = () => {
    if (isMobileFilterSubMenuOpen) {
      setIsMobileFilterSubMenuOpen(false)
    } else {
      setIsMobileFilterMenuOpen(false)
    }
  }

  const handleClearAllFilters = () => {
    setSearchParams((prev) => {
      Object.keys(filters).forEach((q) => {
        prev.delete(q)
      })
      return prev
    })
  }

  return (
    <div className="self-end items-center justify-center w-10 h-10 flex-shrink-0 ml-auto hidden tablet:flex bg-red-500 rounded-full">
      <button type="button" onClick={() => setIsMobileFilterMenuOpen(!isMobileFilterMenuOpen)}>
        <BdtIconMobileFilter width={18} height={18} fill="#ffff" />
      </button>
      <div
        id="sidebar-mobile-menu"
        className={
          isMobileFilterMenuOpen
            ? 'tablet:translate-x-0 fixed left-0 top-0 z-50 h-screen w-full -translate-x-[-100%] flex-col bg-white p-8 transition-transform flex'
            : 'fixed left-0 top-0 z-50 h-screen w-full -translate-x-[-100%] flex-col bg-white p-8 transition-transform'
        }
        aria-label="Sidebar"
      >
        <header className="flex flex-row justify-between">
          <button
            type="button"
            onClick={handleCloseMobileFilterMenu}
            className="text-black bg-transparent font-normal text-sm rounded-lg px-5 py-2.5 text-center inline-flex items-center "
          >
            <BdtIconArrowRight className="rotate-180 w-4 h-4" />
            {translations.FiltersMenuMobile.back}
          </button>
          <p className="text-md uppercase font-medium">{translations.FiltersMenuMobile.filters}</p>
          <button
            type="button"
            aria-label="close menu"
            onClick={handleClearAllFilters}
            className="underline text-sm font-normal"
          >
            {translations.FiltersMenuMobile.clearAll}
          </button>
        </header>
        <MobileFilterMenu setIsMobileFilterSubMenuOpen={setIsMobileFilterSubMenuOpen} setFilterType={setFilterType}>
          <div
            className={
              isMobileFilterSubMenuOpen
                ? 'tablet:translate-x-0 z-50 absolute w-full h-full px-6 mr-20 -translate-x-[-100%] flex-col bg-white p-6 transition-transform flex justify-between'
                : 'z-50 absolute w-full h-full -translate-x-[-120%] flex-col bg-white p-6 transition-transform'
            }
          >
            {mobileFilters[filterType]()}
          </div>
        </MobileFilterMenu>

        <button
          className="mt-auto text-sm w-full bg-[#61c200] p-0 px-4 py-2 font-normal uppercase text-white hover:bg-[#52a102]"
          onClick={() => {
            setIsMobileFilterMenuOpen(false)
            setIsMobileFilterSubMenuOpen(false)
          }}
        >
          {translations.FiltersMenuMobile.ctaText}
        </button>
      </div>
    </div>
  )
}

export default MobileFilterMain
