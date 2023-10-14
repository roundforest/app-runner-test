import us from './us.js'

export default {
  ...us,
  PageTitleDeals: (categoryName: string) => `${categoryName} deals`,
  PageTitleLocale: `in Japan`,
} as typeof us
