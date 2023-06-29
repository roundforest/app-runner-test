export function mapHostHeaderToLocaleParams(hostHeader: string | null | undefined) {
    const defaultResult = {locale: 'en', language: 'en-US', currencyCode: 'USD'}
  
    if (!hostHeader) return defaultResult
  
    let locale = hostHeader.split('.')[0]
  
    if (locale.endsWith('2')) {
      locale = locale.slice(0, -1)
    }
  
    switch (locale) {
      case 'au':
        return {locale, language: 'en-AU', currencyCode: 'AUD'}
      case 'ca':
        return {locale, language: 'en-CA', currencyCode: 'CAD'}
      case 'de':
        return {locale, language: 'de-DE', currencyCode: 'EUR'}
      case 'es':
        return {locale, language: 'es-ES', currencyCode: 'EUR'}
      case 'fr':
        return {locale, language: 'fr-FR', currencyCode: 'EUR'}
      case 'in':
        return {locale, language: 'en-IN', currencyCode: 'INR'}
      case 'it':
        return {locale, language: 'it-IT', currencyCode: 'EUR'}
      case 'nl':
        return {locale, language: 'nl-NL', currencyCode: 'EUR'}
      case 'sg':
        return {locale: 'sg', language: 'en-SG', currencyCode: 'SGD'}
      case 'uk':
        return {locale: 'uk', language: 'en-GB', currencyCode: 'GBP'}
      case 'jp':
        return {locale, language: 'ja-JA', currencyCode: 'JPY'}
      case 'tt':
        return {locale: 'uk', language: 'en-GB', currencyCode: 'GBP'}
      default:
        return defaultResult
    }
  }