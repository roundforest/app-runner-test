export default {
  Page: {
    title: (categoryName: string, discount: number) =>
      `${categoryName} up to ${discount}% Off | Today's Best Deals, Discounts, and Offers`,
    description: (categoryName: string) =>
      `Cheap ${categoryName} prices. ➤ We've gathered the best ${categoryName} discounts & prices from top websites. ➤ Compare prices now.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `deals in the United States`,
  pageTitleDeals: (categoryName: string) => `${categoryName}`,
  pageTitleLocale: `deals in the United States`,
  pageSubtitlePrefix: "Today's best ",
  pageSubtitleText: 'deals, discounts, and offers',
  PageHeader: {
    dealsFound: 'deals found',
    sortBy: 'Sort by',
    scanning: 'Scanning',
    lastUpdated: (min: number) => `Last updated ${min}m ago`,
  },
  AppFooter: {
    Navigation: [
      {
        title: 'General',
        menuItems: [
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'Privacy',
            href: '/privacy',
          },
          {
            title: 'Terms & Conditions',
            href: '/terms',
          },
          {title: 'Contact Us', href: '/contact-us'},
        ],
      },
      {
        title: 'Popular searches',
        menuItems: [
          {
            title: 'Oculus Quest 2',
            href: '/products/oculus-quest-2',
          },
          {
            title: 'Airpod Pro',
            href: '/products/airpod-pro',
          },
          {
            title: 'Ember Wave',
            href: '/products/ember-wave',
          },
          {
            title: 'Dyson Airwrap Complete',
            href: '/products/dyson-airwrap-complete',
          },
          {
            title: 'Uniden R7',
            href: '/products/uniden-r-7',
          },
          {
            title: 'Nintendo Switch',
            href: '/products/nintendo-switch',
          },
          {
            title: 'Laptop',
            href: '/products/laptop',
          },
        ],
      },
      {
        title: 'Categories',
        menuItems: [
          {
            title: 'Electronics',
            href: 'products/electronics',
          },
          {
            title: 'Appliances',
            href: 'products/appliances',
          },
          {
            title: 'Automotive',
            href: 'products/automotive',
          },
          {
            title: 'Software',
            href: 'products/software',
          },
          {
            title: 'Home & Kitchen',
            href: 'products/home-kitchen',
          },
        ],
      },
      {
        title: 'International sites',
        menuItems: [
          {
            title: 'France',
            href: '//fr.bestdeals.today',
          },
          {
            title: 'Australia',
            href: '//au.bestdeals.today',
          },
          {
            title: 'Spain',
            href: '//es.bestdeals.today',
          },
          {
            title: 'Japan',
            href: '//jp.bestdeals.today',
          },
          {
            title: 'Italy',
            href: '//it.bestdeals.today',
          },
          {
            title: 'Germany',
            href: '//de.bestdeals.today',
          },
          {
            title: 'Canada',
            href: '//ca.bestdeals.today',
          },
          {
            title: 'Singapore',
            href: '//sg.bestdeals.today',
          },
          {
            title: 'United Kingdom',
            href: '//uk.bestdeals.today',
          },
          {
            title: 'Mexico',
            href: '//mx.bestdeals.today',
          },
          {
            title: 'India',
            href: '//in.bestdeals.today',
          },
        ],
      },
    ],
  },
  Breadcrumbs: {
    home: {
      title: 'Home',
      path: '/',
    },
  },
  CookieConsent: {
    title: 'We Use Cookies',
    consentText: `We use cookies to enhance the security, performance, functionality and for analytical and promotional activities. We use cookies to personalize ads for you. By continuing to browse this site you're agreeing to our <a href="/privacy">Privacy Policy</a>`,
    acceptButtonText: 'Got it!',
  },
  AppBarSearch: {
    ctaText: 'Search',
    inputPlaceholder: 'Search deals',
    cancel: 'Cancel',
  },
  AppBarMenuMobile: {
    title: 'Top Categories',
    menuItems: [
      {
        title: 'Electronics',
        href: '/products/electronics',
      },
      {
        title: 'Appliances',
        href: '/products/appliances',
      },
      {
        title: 'Automotive',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Home & Kitchen',
        href: '/products/home-kitchen',
      },
      {
        title: 'See All',
        href: '/categories',
      },
    ],
  },
  AppBarMenuDesktop: {
    menuItems: [
      {
        title: 'Electronics',
        href: '/products/electronics',
      },
      {
        title: 'Appliances',
        href: '/products/appliances',
      },
      {
        title: 'Automotive',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Home & Kitchen',
        href: '/products/home-kitchen',
      },
      {
        title: 'See All',
        href: '/categories',
      },
    ],
    moreItem: 'More',
  },
  PopularCategories: {
    title: 'Popular Categories',
  },
  Categories: {
    deals: 'Deals',
    seeAll: 'See All',
  },
  MarketingAssets: {
    PrimedayStickyFooter: {
      title: 'Don’t Let Prime Day Slip Away',
      subtitle: 'Up to 90% Off! Exclusive Offers for a Limited Time',
      ctaText: 'See all deals',
    },
    PrimedayPopup: {
      title: 'Don’t Let Prime Day Slip Away',
      subtitle: 'Up to 90% Off! Exclusive Offers for a Limited Time',
      ctaText: 'See all deals',
    },
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
      title: (isPositive: boolean) => (isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback'),
      placeholder: (isPositive: boolean) =>
        isPositive ? 'Let us know what worked for you — or share a suggestion.' : 'What could we do better?',
    },
    BookMeeting: {
      contentTitle: 'Thanks! Can we chat more over a Zoom call?',
      contentSubtitleFirst:
        'A member of our team would love to connect and learn where we can make improvements. To thank you for your time, you’ll get a ',
      giftValue: (num: number) => `$${num}`,
      contentSubtitleSecond: ' Amazon gift card.',
      actionButton: 'Schedule a Zoom call',
    },
    ThankDialog: {
      title: 'We appreciate it',
      subtitle: 'Thank you for sharing your thoughts.',
    },
    Placeholder: {
      lowRating: 'What could we do better?',
      highRating: 'Let us know what worked for you—or share a suggestion',
    },
    submitButton: 'Submit',
    cancelButton: 'Cancel',
  },
  Promotions: {
    Banner: {
      titleLabel: 'New',
      title: (v1: boolean) => (v1 ? 'Opt for excellence' : 'A good deal. But at what cost?'),
      subtitle: (v1: boolean) =>
        `Get the Best Reviews Guide extension for${v1 ? ' ' : '\n'}definitive rankings${
          v1 ? '\n' : ' '
        }right where you shop!`,
      buttonText: 'Add To Chrome - It’s Free',
    },
    Popup: {
      title: (v1: boolean) =>
        v1 ? 'Before you go, take product rankings with you' : 'Never settle for second best products',
      subtitle: ['Get the', 'to view product rankings wherever you shop!'],
      highlightedText: 'Best Reviews Guide extension',
      buttonText: 'Add To Chrome - It’s Free',
    },
  },
}
