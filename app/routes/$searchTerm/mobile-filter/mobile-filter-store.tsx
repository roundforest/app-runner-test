import {useLoaderData, useSearchParams} from '@remix-run/react'
import React from 'react'
import type {LoaderDataProps} from '~/types'
import {getStoreFilterValues} from '~/utils/products/products-utils'
import FilterRow from '../desktop-filter/filter-row'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import {useReportWidgetClickCallback} from '~/hooks/analytics-hooks'
import {textToSlug} from '@roundforest/text-transforms-commons'

const MobileFilterStore = () => {
  const {
    data: {products},
  } = useLoaderData<LoaderDataProps>()

  const storeNames = getStoreFilterValues(products)
  const [searchParams, setSearchParams] = useSearchParams()
  const sendWidgetClickEvent = useReportWidgetClickCallback()

  return (
    <div className="flex flex-col gap-6">
      {storeNames.map((storeName, i) => {
        const store = textToSlug(storeName)
        return (
          <React.Fragment key={`${store}-${i}`}>
            <FilterRow
              title={storeName}
              value={store}
              isChecked={extractFromUrlSearchParams(searchParams, 'byStore').includes(store)}
              filterBy="byStore"
              onSubmit={() => {
                sendWidgetClickEvent({
                  name: 'filter-mobile',
                  placement: 'top',
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
  )
}

export default MobileFilterStore
