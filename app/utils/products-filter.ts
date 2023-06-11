import type {Product} from '@roundforest/bdt-client'

type Filters =
  | 'byBrand'
  | 'byFixedPrice'
  | 'byDiscounted'
  | 'byStore'
  | 'byCondition'
  | 'byShipping'

type FilterFunc = (products: Product[], filterValues: string[]) => Product[]
type FiltersType = Record<Filters, string[]>
type FiltersMapType = Record<Filters, FilterFunc>

const filtersMapType = {
  byBrand: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => filterValues.includes(p.brandName || ''))
      : products,

  byFixedPrice: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => !p.auction && filterValues.includes('fixed'))
      : products,
  byDiscounted: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => p.discount && filterValues.includes('discounted'))
      : products,

  byStore: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(p.shop)) : products,
  byCondition: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(p.condition)) : products,
  byShipping: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => filterValues.includes('shipping') && p.freeShipping)
      : products,
} as FiltersMapType

export const getProductsByFilters = (products: Product[], filters: FiltersType): Product[] => {
  if (!products.length) return []
  if (!filters) return products

  const filtersKeys = Object.keys(filters)
  const iter = (filteredProducts: Product[], filterBy: string[]): Product[] => {
    if (filterBy.length === 0) return filteredProducts
    const [currentFilterKey, ...restFilterKeys] = filterBy
    const updatedList = filtersMapType[currentFilterKey as keyof FiltersMapType](
      filteredProducts,
      filters[currentFilterKey as keyof FiltersType]
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
