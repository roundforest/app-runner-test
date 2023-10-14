import {useLoaderData, useSearchParams} from '@remix-run/react'
import React from 'react'
import type {LoaderDataProps} from '~/models'
import {getConditionFilterValues} from '~/utils/products/products-utils'
import FilterRow from '../desktop-filter/filter-row'
import {extractFromUrlSearchParams, toggleUrlSearchParams} from '~/utils/commons'
import {useReportWidgetClickCallback} from '~/hooks/analytics-hooks'

const MobileFilterCondition = () => {
  const {
    data: {products},
  } = useLoaderData<LoaderDataProps>()
  const conditions = getConditionFilterValues(products)
  const [searchParams, setSearchParams] = useSearchParams()
  const sendWidgetClickEvent = useReportWidgetClickCallback()

  return (
    <div className="flex flex-col gap-6">
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
                  name: 'filter-mobile',
                  placement: 'top',
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
  )
}

export default MobileFilterCondition
