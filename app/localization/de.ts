import type en from './en.js'

const de: typeof en = {
  Page: {
    title: (categoryName: string, date: string) =>
      `${categoryName} bis zu 70% Rabatt | Bester Zeitraum ${date}`,
    description: (categoryName: string) =>
      `Günstige Preise für ${categoryName} . ➤ Wir haben die günstigsten Preise und Rabatte für ${categoryName} von Top-Websites zusammengestellt. ➤ Jetzt Preise vergleichen.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `Angebote in Deutschland`,
  PageHeader: {
    dealsFound: 'Angebote gefunden',
    sortBy: 'Sortieren nach',
    scanning: 'Scannen',
    lastUpdated: (min: number) => `Zuletzt aktualisiert vor ${min}m`,
  },
  CategoryPage: {
    shopByCategory: 'Kategorien durchstöbern',
    topProducts: 'Top Produkte',
    popularCategories: 'Beliebte Kategorien',
  },
  MobileMenu: {
    title: 'Top Kategorien',
  },
  SortByDropDown: {
    Options: {
      bestMatch: 'Bester Treffer',
      discountDescending: 'Rabatt',
      expiringDate: 'Ablaufdatum',
      priceAscending: 'Preis aufsteigend',
      priceDescending: 'Preis absteigend',
    },
  },
  FiltersMenuMobile: {
    title: 'Filter',
    back: 'Zurück',
    filters: 'Filter',
    clearAll: 'Löschen',
    ctaText: 'Produkte anzeigen',
    FilterTitles: {
      priceRange: 'Preisspanne',
      store: 'Geschäft',
      condition: 'Zustand',
      brand: 'Marque',
    },
    Filters: {
      fixedPrice: 'Feste Preisgestaltung',
      freeShipping: 'Kostenloser Versand',
      withDiscount: 'Discounted Produkte',
    },
  },
  FiltersMenuDesktop: {
    filterBy: 'Filter',
    clearAll: 'Löschen',
    FilterTitles: {
      pricingRange: 'Preisspanne',
      pricing: 'Preisgestaltung',
      store: 'Geschäft',
      condition: 'Zustand',
      brand: 'Marque',
      other: 'Andere',
    },
    Filters: {
      fixedPrice: 'Feste Preisgestaltung',
      freeShipping: 'Kostenloser Versand',
      withDiscount: 'Discounted Produkte',
    },
  },
  ProductCard: {
    off: 'OFF',
    freeShipping: 'Gratis Versand',
    ctaText: () => 'Zum Angebot',
    newCondition: 'Neu',
    usedCondition: 'Gebraucht',
    refurbished: 'Renoviert',
    onFire: 'Auf feuer',
  },
  ProductList: {
    EmptyState: {
      title: 'Sorry, nichts mehr da!',
      subtitle: 'Bitte ändern Sie Ihre Filtereinstellungen',
    },
  },
  Feedback: {
    questionTitle: 'Wie hilfreich sind diese Ergebnisse?',
    Tooltip: {
      lowRating: 'Gar nicht hilfreich',
      highRating: 'Sehr hilfreich',
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
      contentTitle: 'Vielen Dank! Können wir uns über einen Zoom-Anruf unterhalten?',
      contentSubtitleFirst:
        'Ein Mitglied unseres Teams würde gerne Verbindung aufnehmen und herausfinden, wo wir Verbesserungen vornehmen können. Um Ihnen für Ihre Zeit zu danken, erhalten Sie eine',
      contentSubtitleSecond: 'Amazon-Geschenkkarte.',
      actionButton: 'Vereinbaren Sie einen Zoom-Anruf',
      giftValue: (num: number) => `$${num}`,
    },
    Placeholder: {
      lowRating: 'Was könnten wir besser machen?',
      highRating:
        'Teilen Sie uns mit, was für Sie funktioniert hat - oder geben Sie einen Vorschlag ab',
    },
    submitButton: 'Senden',
    cancelButton: 'Abbrechen',
  },
}

export default de
