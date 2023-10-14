import type us from './us.js'

const it: typeof us = {
  Page: {
    title: (categoryName: string, discount: number) =>
      `${categoryName} fino al ${discount}% di sconto | Le Migliori Offerte, Sconti e Saldi di Oggi`,
    description: (categoryName: string) =>
      `Prezzi ${categoryName} vantaggiosi. ➤ Abbiamo raccolto i migliori sconti e prezzi dai principali siti Web. ➤ Confronta subito i prezzi.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `offerte per l'Italia`,
  pageTitleDeals: (categoryName: string) => `${categoryName}`,
  pageTitleLocale: `offerte per l'Italia`,
  pageSubtitlePrefix: 'Le migliori ',
  pageSubtitleText: 'offerte, sconti e saldi di oggi',
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
  AppFooter: {
    Navigation: [
      {
        title: 'Generale',
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
            title: 'Termini & Condizioni',
            href: '/terms',
          },
          {title: 'Contattaci', href: '/contact-us'},
        ],
      },
      {
        title: 'Ricerche popolari',
        menuItems: [
          {
            title: 'Oculus Quest 2',
            href: '/oculus-quest-2',
          },
          {
            title: 'Airpod Pro',
            href: '/airpod-pro',
          },
          {
            title: 'Ember Wave',
            href: '/ember-wave',
          },
          {
            title: 'Dyson Airwrap Complete',
            href: '/dyson-airwrap-complete',
          },
          {
            title: 'Uniden R7',
            href: '/uniden-r-7',
          },
          {
            title: 'Nintendo Switch',
            href: '/nintendo-switch',
          },
          {
            title: 'Laptop',
            href: '/laptop',
          },
        ],
      },
      {
        title: 'Categorie',
        menuItems: [
          {
            title: 'Elettronica',
            href: '/electronics',
          },
          {
            title: 'Elettrodomestici',
            href: '/appliances',
          },
          {
            title: 'Automobili',
            href: '/automotive',
          },
          {
            title: 'Software',
            href: '/software',
          },
          {
            title: 'Casa & Cucina',
            href: '/home-kitchen',
          },
        ],
      },
      {
        title: 'Siti internazionali',
        menuItems: [
          {
            title: 'Francia',
            href: '//fr.bestdeals.today',
          },
          {
            title: 'Australia',
            href: '//au.bestdeals.today',
          },
          {
            title: 'Spagna',
            href: '//es.bestdeals.today',
          },
          {
            title: 'Giappone',
            href: '//jp.bestdeals.today',
          },
          {
            title: 'Italia',
            href: '//it.bestdeals.today',
          },
          {
            title: 'Germania',
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
            title: 'Regno Unito',
            href: '//uk.bestdeals.today',
          },
          {
            title: 'Messico',
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
    title: 'Utilizziamo i cookie',
    consentText: `Utilizziamo i cookie per migliorare la sicurezza, le prestazioni, le funzionalità e per attività analitiche e promozionali. Utilizziamo i cookie per personalizzare gli annunci per te. Continuando a navigare su questo sito, accetti la nostra <a href="/privacy">Politica sulla privacy</a>`,
    acceptButtonText: 'Ho capito!',
  },
  AppBarSearch: {
    ctaText: 'Ricerca',
    inputPlaceholder: 'Cerca offerte',
    cancel: 'Annulla',
  },
  AppBarMenuMobile: {
    title: 'Principali categorie',
    menuItems: [
      {
        title: 'Elettronica',
        href: '/products/electronics',
      },
      {
        title: 'Elettrodomestici',
        href: '/products/appliances',
      },
      {
        title: 'Automobili',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Casa & Cucina',
        href: '/products/home-kitchen',
      },
      {
        title: 'Vedi tutti',
        href: '/categories',
      },
    ],
  },
  AppBarMenuDesktop: {
    menuItems: [
      {
        title: 'Elettronica',
        href: '/products/electronics',
      },
      {
        title: 'Elettrodomestici',
        href: '/products/appliances',
      },
      {
        title: 'Automobili',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Casa & Cucina',
        href: '/products/home-kitchen',
      },
      {
        title: 'Vedi tutti',
        href: '/categories',
      },
    ],
    moreItem: 'Altro',
  },
  PopularCategories: {
    title: 'Categorie popolari',
  },
  Categories: {
    deals: 'Offerte',
    seeAll: 'Vedi tutti',
  },
  MarketingAssets: {
    PrimedayStickyFooter: {
      title: 'Non perderti il Prime Day',
      subtitle: 'Fino al 70% di sconto per il Prime Day',
      ctaText: 'Vedi tutte le offerte',
    },
    PrimedayPopup: {
      title: 'Non perderti il Prime Day',
      subtitle: 'Fino al 70% di sconto per il Prime Day',
      ctaText: 'Vedi tutte le offerte',
    },
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
      title: (isPositive: boolean) => (isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback'),
      placeholder: (isPositive: boolean) =>
        isPositive ? 'Let us know what worked for you — or share a suggestion.' : 'What could we do better?',
    },
    ThankDialog: {
      title: 'We appreciate it',
      subtitle: 'Thank you for sharing your thoughts',
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

export default it
