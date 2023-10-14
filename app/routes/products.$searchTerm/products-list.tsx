import {useLoaderData, useNavigation} from '@remix-run/react'
import React, {Fragment} from 'react'
import {useInView} from 'react-intersection-observer'
import Loader from '~/components/loader'

import {useTranslation} from '~/localization/translation'
import type {LoaderDataProps} from '~/models'
import {getProductsByFilters, getSortedProducts} from '~/utils/products/products-utils'
import {useLoadMore} from '~/utils/use-load-more'
import ProductCard from './product-card'

const ProductsList = () => {
  const {
    data: {products},
    filters,
    sorters,
    itemsPerPage,
  } = useLoaderData<LoaderDataProps>()

  const {state} = useNavigation()
  const translations = useTranslation()
  const {data, loadMore, hasNext} = useLoadMore({
    items: products,
    itemsPerPage: itemsPerPage ?? 25,
  })

  const [loadMoreTriggerRef] = useInView({
    skip: !hasNext(),
    onChange: (inView) => {
      if (inView) {
        loadMore()
      }
    },
  })

  const filteredProducts = getProductsByFilters(data, filters)
  const sortedProducts = getSortedProducts(filteredProducts, sorters)

  return state === 'loading' ? (
    <div className="w-full flex justify-center my-28">
      <Loader />
    </div>
  ) : !sortedProducts.length ? (
    <div className="w-full flex flex-col justify-center my-28 text-center gap-4">
      <span className="text-3xl font-semibold">{translations.ProductList.EmptyState.title}</span>
      <span className="text-xl">{translations.ProductList.EmptyState.subtitle}</span>
    </div>
  ) : (
    <div className="mt-9 grid gap-5 xxl-desktop:grid-cols-5 xl-desktop:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-3 mobile:grid-cols-2">
      <div className="absolute mt-[480px] mobile:mt-[400px]" data-testid="feedback-trigger" />
      {sortedProducts.map((p, i) => (
        <Fragment key={`${p.title}-${i}`}>
          <ProductCard index={i} product={p} />
        </Fragment>
      ))}
      <div ref={loadMoreTriggerRef} />
    </div>
  )
}

export default ProductsList
