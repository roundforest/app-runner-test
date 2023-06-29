import type en from './en.js'

const it: typeof en = {
  Page: {
    title: (categoryName: string, date: string) =>
      `${categoryName} fino al 70% di sconto | Le migliori ${date}`,
    description: (categoryName: string) =>
      `Prezzi ${categoryName} vantaggiosi. ➤ Abbiamo raccolto i migliori sconti e prezzi dai principali siti Web. ➤ Confronta subito i prezzi.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `offerte per l'Italia`,
  PageHeader: {
    dealsFound: 'offerte trovate',
    sortBy: 'Ordina per',
    scanning: 'Scansione',
    lastUpdated: (min: number) => `Ultimo aggiornamento ${min}m fa`,
  },
  CategoryPage: {
    shopByCategory: 'Acquista per categoria',
    topProducts: 'Prodotti principali',
    popularCategories: 'Categorie più popolari',
  },
  MobileMenu: {
    title: 'Categorie principali',
  },
  SortByDropDown: {
    Options: {
      bestMatch: 'Migliore Partita',
      discountDescending: 'Sconto',
      expiringDate: 'Data di scadenza',
      priceAscending: 'Prezzo crescente',
      priceDescending: 'Prezzo decrescente',
    },
  },
  FiltersMenuMobile: {
    title: 'Filtro',
    back: 'Indietro',
    filters: 'Filtri',
    clearAll: 'Cancella tutto',
    ctaText: 'Mostra i prodotti',
    FilterTitles: {
      priceRange: 'Fascia di prezzo',
      store: 'Negozio',
      condition: 'Condizione',
      brand: 'Marchio',
    },
    Filters: {
      fixedPrice: 'Prezzo fisso',
      freeShipping: 'Solo spedizione gratuita',
      withDiscount: 'Prodotti scontati',
    },
  },
  FiltersMenuDesktop: {
    filterBy: 'Filtra per',
    clearAll: 'Cancella tutto',
    FilterTitles: {
      pricingRange: 'Fascia di prezzo',
      pricing: 'Prezzi',
      store: 'Negozio',
      condition: 'Condizione',
      brand: 'Marchio',
      other: 'Altro',
    },
    Filters: {
      fixedPrice: 'Fisso',
      freeShipping: 'Solo spedizione gratuita',
      withDiscount: 'Prodotti scontati',
    },
  },
  ProductCard: {
    off: 'OFF',
    freeShipping: 'Spedizione gratuita',
    ctaText: () => 'Visualizza offerta',
    newCondition: 'Nuovo',
    usedCondition: 'Usato',
    refurbished: 'Ristrutturato',
    onFire: 'A fuoco',
  },
  ProductList: {
    EmptyState: {
      title: 'Siamo spiacenti, disponibilità esaurita',
      subtitle: 'Modifica i filtri',
    },
  },
  Feedback: {
    questionTitle: 'Quanto utili sono questi risultati?',
    Tooltip: {
      lowRating: 'Non utile affatto',
      highRating: 'Molto utile',
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
      contentTitle: 'Grazie! Possiamo chattare di più in una chiamata Zoom?',
      contentSubtitleFirst:
        'Un membro del nostro team sarebbe lieto di connettersi e scoprire dove possiamo migliorare. Per ringraziarti per il tuo tempo, riceverai una',
      contentSubtitleSecond: 'carta regalo Amazon.',
      actionButton: 'Pianifica una chiamata Zoom',
      giftValue: (num: number) => `$${num}`,
    },
    Placeholder: {
      lowRating: 'Cosa potremmo fare meglio?',
      highRating: 'Facci sapere cosa ti è piaciuto - o condividi un suggerimento',
    },
    submitButton: 'Invia',
    cancelButton: 'Annulla',
  },
}

export default it
