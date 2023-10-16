import {textToSlug} from '@roundforest/text-transforms-commons'
import type {DropdownSort, Product, FiltersMapType, FiltersType, PriceRange} from '~/types'

const filtersMapType = {
  byPriceRange: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          const filterNumberValues = filterValues.map((value) => Number(value))
          return p.price > Math.min(...filterNumberValues) && p.price < Math.max(...filterNumberValues)
        })
      : products,
  byPriceRanges: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          const filterNumberValues = filterValues.flatMap((p) => p.split('-')).map((value) => Number(value))

          return p.price > Math.min(...filterNumberValues) && p.price < Math.max(...filterNumberValues)
        })
      : products,
  byBrand: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(textToSlug(p.brandName || ''))) : products,

  byPricing: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          if (filterValues.includes('fixed')) {
            return !p.auction
          }
          if (filterValues.includes('discounted')) {
            return !!p.discount
          }
          return false
        })
      : products,

  byStore: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          return filterValues.includes(textToSlug(p.shop))
        })
      : products,
  byCondition: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(p.condition)) : products,
  byShipping: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes('shipping') && p.freeShipping) : products,
} as FiltersMapType

const sorters: Record<DropdownSort, (products: Product[]) => Product[]> = {
  bestMatch: (products) => products,
  discountDescending: (products) => {
    return [...products].sort((a, b) => {
      const aDiscount = Number(a.discount ?? 0)
      const bDiscount = Number(b.discount ?? 0)

      return bDiscount - aDiscount
    })
  },
  expiringDate: (products) => {
    return [...products].sort((a, b) => {
      if (a.expiring && b.expiring) {
        return new Date(a.expiring).getTime() - new Date(b.expiring).getTime()
      }

      if (a.expiring && !b.expiring) return -1
      if (b.expiring && !a.expiring) return 1

      return 0
    })
  },
  priceAscending: (products) => {
    return [...products].sort((a, b) => a.price - b.price)
  },
  priceDescending: (products) => {
    return [...products].sort((a, b) => b.price - a.price)
  },
}

export const getSortedProducts = (products: Product[], sortingType: DropdownSort) => {
  if (!sortingType || sortingType.length === 0) return products
  const sort = sorters[sortingType] ?? sorters['bestMatch']
  return sort(products)
}

export const getProductsByFilters = (products: Product[], filters: FiltersType): Product[] => {
  if (!products.length) return []
  if (!filters) return products

  const filtersKeys = Object.keys(filters)
  const iter = (filteredProducts: Product[], filterBy: string[]): Product[] => {
    if (filterBy.length === 0) return filteredProducts
    const [currentFilterKey, ...restFilterKeys] = filterBy
    const updatedList = filtersMapType[currentFilterKey as keyof FiltersMapType](
      filteredProducts,
      filters[currentFilterKey as keyof FiltersType],
    )

    return iter(updatedList, restFilterKeys)
  }
  return iter(products, filtersKeys)
}

export const getBrandFilterValues = (products: Product[]) =>
  [...new Set(products.map((p) => p.brandName).filter((p) => p))] as string[]

export const getConditionFilterValues = (products: Product[]) =>
  [...new Set(products.map((p) => p.condition).filter((p) => p))] as string[]

export const getStoreFilterValues = (products: Product[]) =>
  [...new Set(products.map((p) => p.shop).filter((p) => p))] as string[]

export const getFirstSixTopDealIds = (products?: Product[]) => {
  if (!products) return []
  return products
    .filter(({discount}) => discount && discount > 4)
    .map(({publicItemId}) => publicItemId)
    .slice(0, 6)
}

export const getProductsPriceRange = (products: Product[]) => {
  if (!products.length) return {min: 0, max: 0}
  const prices = products.map((p) => p.price)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return {min, max}
}

export const priceRangesFilters: PriceRange[] = [
  {min: 0, max: 25},
  {min: 25, max: 50},
  {min: 50, max: 100},
  {min: 100, max: 150},
  {min: 150, max: 250},
  {min: 250, max: 500},
  {min: 500, max: 1000},
  {min: 1000, max: 2500},
  {min: 2500, max: 5000},
  {min: 5000, max: Infinity},
]

export function getPriceRangesFilters(productsPricesRange: PriceRange, priceRanges = priceRangesFilters) {
  const filteredArray = priceRanges.filter((range) => {
    return productsPricesRange.min < range.max && productsPricesRange.max > range.min
  })

  return filteredArray
}

export function calculateMaxDiscount(products: Product[]) {
  let biggestDiscount = 0
  for (const product of products) {
    biggestDiscount = Math.max(biggestDiscount, product.discount ?? 0)
  }
  return biggestDiscount === 0 ? undefined : biggestDiscount
}
