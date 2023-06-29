import en from './en.js'

export default {
  ...en,
  PageTitleDeals: (categoryName: string) => `${categoryName} deals`,
  PageTitleLocale: `in the UK`,
} as typeof en
