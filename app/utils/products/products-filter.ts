import type {FiltersMapType, FiltersType, Product} from '~/models'

const filtersMapType = {
  priceRange: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          const [min, max] = filterValues
          return p.price > Number(min) && p.price < Number(max)
        })
      : products,
  brand: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => filterValues.includes(p.brandName || ''))
      : products,

  pricing: (products, filterValues) =>
    filterValues.length
      ? products.filter((p) => {
          if (filterValues.includes('fixed')) {
            return !p.auction
          }
          if (filterValues.includes('discounted')) {
            return !!p.discount
          }
        })
      : products,

  store: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(p.shop)) : products,
  condition: (products, filterValues) =>
    filterValues.length ? products.filter((p) => filterValues.includes(p.condition)) : products,
  shipping: (products, filterValues) =>
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
