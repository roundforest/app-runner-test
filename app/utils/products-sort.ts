import type {DropdownSortBy, Product} from '~/models'

const sorters: Record<DropdownSortBy, (products: Product[]) => Product[]> = {
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

export const getSortedProducts = (products: Product[], sortingType: DropdownSortBy) => {
  if (!sortingType || sortingType.length === 0) return products
  const sort = sorters[sortingType] ?? sorters['bestMatch']
  return sort(products)
}
