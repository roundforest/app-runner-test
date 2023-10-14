import {useLoaderData, useSearchParams} from '@remix-run/react'
import React from 'react'
import FilterRow from './filter-row'
import PriceRangeSlider from './price-range-slider'
import type {LoaderDataProps} from '~/models'
import {getBrandFilterValues, getConditionFilterValues, getStoreFilterValues} from '~/utils/products/products-utils'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import {useTranslation} from '~/localization/translation'
import {useReportWidgetClickCallback, useReportWidgetSeen} from '~/hooks/analytics-hooks'

const DesktopFilter = () => {
  const {
    data: {products},
    filters,
  } = useLoaderData<LoaderDataProps>()
  const [searchParams, setSearchParams] = useSearchParams()
  const translations = useTranslation()
  const brandNames = getBrandFilterValues(products)
  const storeNames = getStoreFilterValues(products)
  const conditions = getConditionFilterValues(products)

  const sendWidgetClickEvent = useReportWidgetClickCallback()

  const [desktopFilterRef] = useReportWidgetSeen({
    name: 'filter-desktop',
    placement: 'left',
  })

  const handleClearAllFilters = () => {
    sendWidgetClickEvent({
      name: 'filter-desktop',
      placement: 'left',
      triggerType: 'clear-all',
    })
    setSearchParams((prev) => {
      Object.keys(filters).forEach((q) => {
        prev.delete(q)
      })
      return prev
    })
  }

  return (
    <div
      ref={desktopFilterRef}
      className="sticky h-[100] min-w-[245px] bg-white px-5 py-8 drop-shadow-lg tablet:hidden"
    >
      <div className="mt-2 flex flex-col gap-12" id="filter-sort">
        <div className="flex flex-row justify-between">
          <h1 className="text-[15px]">{translations.FiltersMenuDesktop.filterBy}</h1>
          <button
            className="text-[15px] font-light text-neutral-500 underline"
            aria-label="clear all filters"
            onClick={handleClearAllFilters}
          >
            {translations.FiltersMenuDesktop.clearAll}
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.pricingRange}</h1>
          <PriceRangeSlider />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.pricing}</h1>
          <FilterRow
            title={translations.FiltersMenuDesktop.Filters.fixedPrice}
            value="fixed"
            isChecked={extractFromUrlSearchParams(searchParams, 'byPricing').includes('fixed')}
            filterBy="byPricing"
            onSubmit={() => {
              sendWidgetClickEvent({
                name: 'filter-desktop',
                placement: 'left',
                triggerType: 'pricing',
                variation: JSON.stringify({
                  fixedPrice: !extractFromUrlSearchParams(searchParams, 'byPricing').includes('fixed'),
                }),
              })
              setSearchParams((prev) => {
                toggleUrlSearchParams(prev, 'byPricing', 'fixed')
                return prev
              })
            }}
          />
          <FilterRow
            title={translations.FiltersMenuDesktop.Filters.withDiscount}
            value="discounted"
            isChecked={extractFromUrlSearchParams(searchParams, 'byPricing').includes('discounted')}
            filterBy="byPricing"
            onSubmit={() => {
              sendWidgetClickEvent({
                name: 'filter-desktop',
                placement: 'left',
                triggerType: 'pricing',
                variation: JSON.stringify({
                  withDiscount: !extractFromUrlSearchParams(searchParams, 'byPricing').includes('discounted'),
                }),
              })
              setSearchParams((prev) => {
                toggleUrlSearchParams(prev, 'byPricing', 'discounted')
                return prev
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.store}</h1>
          {storeNames.map((store, i) => {
            return (
              <React.Fragment key={`${store}-${i}`}>
                <FilterRow
                  title={store}
                  value={store}
                  isChecked={extractFromUrlSearchParams(searchParams, 'byStore').includes(store)}
                  filterBy="byStore"
                  onSubmit={() => {
                    sendWidgetClickEvent({
                      name: 'filter-desktop',
                      placement: 'left',
                      triggerType: 'stores',
                      variation: JSON.stringify({
                        [store]: !extractFromUrlSearchParams(searchParams, 'byStore').includes(store),
                      }),
                    })
                    setSearchParams((prev) => {
                      toggleUrlSearchParams(prev, 'byStore', store)
                      return prev
                    })
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.condition}</h1>
          {conditions.map((condition, i) => {
            return (
              <React.Fragment key={`${condition}-${i}`}>
                <FilterRow
                  title={condition}
                  value={condition}
                  isChecked={extractFromUrlSearchParams(searchParams, 'byCondition').includes(condition)}
                  filterBy="byCondition"
                  onSubmit={() => {
                    sendWidgetClickEvent({
                      name: 'filter-desktop',
                      placement: 'left',
                      triggerType: 'conditions',
                      variation: JSON.stringify({
                        [condition]: !extractFromUrlSearchParams(searchParams, 'byCondition').includes(condition),
                      }),
                    })
                    setSearchParams((prev) => {
                      toggleUrlSearchParams(prev, 'byCondition', condition)
                      return prev
                    })
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.brand}</h1>
          {brandNames.map((brand, i) => {
            return (
              <React.Fragment key={`${brand}-${i}`}>
                <FilterRow
                  title={brand}
                  value={brand}
                  isChecked={extractFromUrlSearchParams(searchParams, 'byBrand').includes(brand)}
                  filterBy="byBrand"
                  onSubmit={() => {
                    sendWidgetClickEvent({
                      name: 'filter-desktop',
                      placement: 'left',
                      triggerType: 'brands',
                      variation: JSON.stringify({
                        [brand]: !extractFromUrlSearchParams(searchParams, 'byBrand').includes(brand),
                      }),
                    })
                    setSearchParams((prev) => {
                      toggleUrlSearchParams(prev, 'byBrand', brand)
                      return prev
                    })
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[15px] text-neutral-500">{translations.FiltersMenuDesktop.FilterTitles.other}</h1>
          <FilterRow
            title={translations.FiltersMenuDesktop.Filters.freeShipping}
            value="shipping"
            isChecked={extractFromUrlSearchParams(searchParams, 'byShipping').includes('shipping')}
            filterBy="byShipping"
            onSubmit={() => {
              sendWidgetClickEvent({
                name: 'filter-desktop',
                placement: 'left',
                triggerType: 'shipping',
                variation: JSON.stringify({
                  freeShippingOnly: !extractFromUrlSearchParams(searchParams, 'byShipping').includes('shipping'),
                }),
              })
              setSearchParams((prev) => {
                toggleUrlSearchParams(prev, 'byShipping', 'shipping')
                return prev
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopFilter
