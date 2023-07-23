interface LocaleParams {
  locale: string
  language: string
  currencyCode: string
}

const mapHostHeaderByLocale: Record<string, LocaleParams> = {
  en: {locale: 'en', language: 'en-US', currencyCode: 'USD'},
  au: {locale: 'au', language: 'en-AU', currencyCode: 'AUD'},
  ca: {locale: 'ca', language: 'en-CA', currencyCode: 'CAD'},
  de: {locale: 'de', language: 'de-DE', currencyCode: 'EUR'},
  es: {locale: 'es', language: 'es-ES', currencyCode: 'EUR'},
  fr: {locale: 'fr', language: 'fr-FR', currencyCode: 'EUR'},
  in: {locale: 'in', language: 'en-IN', currencyCode: 'INR'},
  it: {locale: 'it', language: 'it-IT', currencyCode: 'EUR'},
  nl: {locale: 'nl', language: 'nl-NL', currencyCode: 'EUR'},
  sg: {locale: 'sg', language: 'en-SG', currencyCode: 'SGD'},
  uk: {locale: 'uk', language: 'en-GB', currencyCode: 'GBP'},
  jp: {locale: 'jp', language: 'ja-JA', currencyCode: 'JPY'},
  tt: {locale: 'uk', language: 'en-GB', currencyCode: 'GBP'},
}
const mapMeasurmentByLocale: Record<string, string> = {
  us: 'G-EKBK3SDDMT',
  sg: 'G-R6FW7EN3RW',
  uk: 'G-SFSD7CM8Z2',
  de: 'G-3NLSFRPQEK',
  au: 'G-38JJLFYTV4',
  ca: 'G-NK7B8QB7FB',
  in: 'G-M4RR3H5DQZ',
  it: 'G-KKMLWMPFJ2',
  es: 'G-JLEJYCDFH7',
  fr: 'G-R96SBY7PLP',
  jp: 'G-E7JHSJV4L3',
  nl: 'G-2RVFBJB61G',
}

export function mapHostHeaderToLocaleParams(hostHeader: string | null | undefined) {
  if (!hostHeader) return mapHostHeaderByLocale.en
  let locale = hostHeader.split('.')[0]
  if (locale.endsWith('2')) {
    locale = locale.slice(0, -1)
  }
  return mapHostHeaderByLocale[locale] ?? mapHostHeaderByLocale.en
}

export function mapLocaleToGoogleAnalyticsMeasurementId(locale: string | undefined): string {
  if (!locale) return mapMeasurmentByLocale.us

  if (locale.endsWith('2')) {
    locale = locale.slice(0, -1)
  }

  return mapMeasurmentByLocale[locale.toLowerCase()]
}
