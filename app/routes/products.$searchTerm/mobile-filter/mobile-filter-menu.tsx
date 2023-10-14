import React from 'react'
import type {MobileFilterType} from '.'
import {useSearchParams} from '@remix-run/react'
import MobileFilterMenuRow from './mibile-filter-menu-row'
import MobileFilterSwitchRow from './mobile-filter-switch-row'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import type {Filters} from '~/models'
import {useTranslation} from '~/localization/translation'

interface MobileFilterMenuProps {
  children?: JSX.Element
  setIsMobileFilterSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setFilterType: React.Dispatch<React.SetStateAction<MobileFilterType>>
}

const MobileFilterMenu = ({children, setFilterType, setIsMobileFilterSubMenuOpen}: MobileFilterMenuProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const translations = useTranslation()
  const switchFilterType = (type: MobileFilterType) => {
    setFilterType(type)
    setIsMobileFilterSubMenuOpen(true)
  }

  const toggleFilterSearchParams = (filterBy: Filters, value: string) => {
    setSearchParams((prev) => {
      toggleUrlSearchParams(prev, filterBy, value)
      return prev
    })
  }

  return (
    <div className="h-full flex flex-col gap-3 relative mt-10">
      <MobileFilterMenuRow
        switchFilterType={switchFilterType}
        label={translations.FiltersMenuMobile.FilterTitles.priceRange}
        type="priceRange"
      />
      <MobileFilterMenuRow
        switchFilterType={switchFilterType}
        label={translations.FiltersMenuMobile.FilterTitles.store}
        type="store"
      />
      <MobileFilterMenuRow
        switchFilterType={switchFilterType}
        label={translations.FiltersMenuMobile.FilterTitles.condition}
        type="condition"
      />
      <MobileFilterMenuRow
        switchFilterType={switchFilterType}
        label={translations.FiltersMenuMobile.FilterTitles.brand}
        type="brand"
      />

      <div className="border-t-[1px] border-[#b3b2b2] mx-5"></div>
      <MobileFilterSwitchRow
        label={translations.FiltersMenuMobile.Filters.fixedPrice}
        name="byPricing"
        onChange={() => {
          toggleFilterSearchParams('byPricing', 'fixed')
        }}
        value="fixed"
        checked={extractFromUrlSearchParams(searchParams, 'byPricing').includes('fixed')}
      />
      <MobileFilterSwitchRow
        label={translations.FiltersMenuMobile.Filters.freeShipping}
        name="byShipping"
        onChange={() => {
          toggleFilterSearchParams('byShipping', 'shipping')
        }}
        value="shipping"
        checked={extractFromUrlSearchParams(searchParams, 'byShipping').includes('shipping')}
      />
      <MobileFilterSwitchRow
        label={translations.FiltersMenuMobile.Filters.withDiscount}
        name="byPricing"
        onChange={() => {
          toggleFilterSearchParams('byPricing', 'discounted')
        }}
        value="discounted"
        checked={extractFromUrlSearchParams(searchParams, 'byPricing').includes('discounted')}
      />
      {children}
    </div>
  )
}

export default MobileFilterMenu
