import en from './en.js'

export default {
  ...en,
  PageTitleDeals: (categoryName: string) => `${categoryName} deals`,
  PageTitleLocale: `in Singapore`,
} as typeof en
