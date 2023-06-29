export default {
  Page: {
    title: (categoryName: string, date: string) =>
      `${categoryName} up to 70% Off | Best in ${date}`,
    description: (categoryName: string) =>
      `Cheap ${categoryName} prices. ➤ We've gathered the best ${categoryName} discounts & prices from top websites. ➤ Compare prices now.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `deals in the United States`,
  PageHeader: {
    dealsFound: 'deals found',
    sortBy: 'Sort by',
    scanning: 'Scanning',
    lastUpdated: (min: number) => `Last updated ${min}m ago`,
  },
  CategoryPage: {
    shopByCategory: 'Shop By Category',
    topProducts: 'Top Products',
    popularCategories: 'Popular Categories',
  },
  MobileMenu: {
    title: 'Top categories',
  },
  SortByDropDown: {
    Options: {
      bestMatch: 'Best match',
      discountDescending: 'Discount',
      expiringDate: 'Expiring date',
      priceAscending: 'Price ascending',
      priceDescending: 'Price descending',
    },
  },
  FiltersMenuMobile: {
    title: 'Filter',
    back: 'Back',
    filters: 'Filters',
    clearAll: 'Clear all',
    ctaText: 'Show products',
    FilterTitles: {
      priceRange: 'Price range',
      store: 'Store',
      condition: 'Condition',
      brand: 'Brand',
    },
    Filters: {
      fixedPrice: 'Fixed price',
      freeShipping: 'Free shipping only',
      withDiscount: 'Discounted products',
    },
  },
  FiltersMenuDesktop: {
    filterBy: 'Filter by',
    clearAll: 'Clear all',
    FilterTitles: {
      pricingRange: 'Pricing range',
      pricing: 'Pricing',
      store: 'Store',
      condition: 'Condition',
      brand: 'Filter by brand',
      other: 'Other',
    },
    Filters: {
      fixedPrice: 'Fixed',
      freeShipping: 'Free shipping only',
      withDiscount: 'Discounted products',
    },
  },
  ProductCard: {
    off: 'OFF',
    freeShipping: 'Free Shipping',
    ctaText: (variation?: string): string => {
      switch (variation) {
        case 'buyNow':
          return 'Buy Now'
        case 'getNow':
          return 'Get Now'
        case 'getDealNow':
          return 'Get Deal Now'
        case 'shopNow':
          return 'Shop Now'
        default:
          return 'View Deal'
      }
    },
    newCondition: 'New',
    usedCondition: 'Used',
    refurbished: 'Refurbished',
    onFire: 'On fire',
  },
  ProductList: {
    EmptyState: {
      title: 'Sorry, nothing left',
      subtitle: 'Please change your filtering',
    },
  },
  Feedback: {
    questionTitle: 'How helpful are these results?',
    Tooltip: {
      lowRating: 'Not helpful at all',
      highRating: 'Very helpful',
    },
    Review: {
      title: (isPositive: boolean) =>
        isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback',
      placeholder: (isPositive: boolean) =>
        isPositive
          ? 'Let us know what worked for you — or share a suggestion.'
          : 'What could we do better?',
    },
    BookMeeting: {
      contentTitle: 'Thanks! Can we chat more over a Zoom call?',
      contentSubtitleFirst:
        'A member of our team would love to connect and learn where we can make improvements. To thank you for your time, you’ll get a ',
      giftValue: (num: number) => `$${num}`,
      contentSubtitleSecond: ' Amazon gift card.',
      actionButton: 'Schedule a Zoom call',
    },
    Placeholder: {
      lowRating: 'What could we do better?',
      highRating: 'Let us know what worked for you—or share a suggestion',
    },
    submitButton: 'Submit',
    cancelButton: 'Cancel',
  },
}
