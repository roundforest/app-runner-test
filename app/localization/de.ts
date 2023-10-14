import type us from './us.js'

const de: typeof us = {
  Page: {
    title: (categoryName: string, discount: number) =>
      `${categoryName} bis zu ${discount}% Rabatt | Die besten Angebote, Rabatte und Deals von heute`,
    description: (categoryName: string) =>
      `Günstige Preise für ${categoryName} . ➤ Wir haben die günstigsten Preise und Rabatte für ${categoryName} von Top-Websites zusammengestellt. ➤ Jetzt Preise vergleichen.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `Angebote in Deutschland`,
  pageTitleDeals: (categoryName: string) => `${categoryName}`,
  pageTitleLocale: `Angebote in Deutschland`,
  pageSubtitlePrefix: 'Die besten ',
  pageSubtitleText: 'Angebote, Rabatte und Deals von heute',
  PageHeader: {
    dealsFound: 'Angebote gefunden',
    sortBy: 'Sortieren nach',
    scanning: 'Scannen',
    lastUpdated: (min: number) => `Zuletzt aktualisiert vor ${min}m`,
  },
  AppFooter: {
    Navigation: [
      {
        title: 'Allgemein',
        menuItems: [
          {
            title: 'Startseite',
            href: '/',
          },
          {
            title: 'Datenschutz',
            href: '/privacy',
          },
          {
            title: 'Geschäftsbedingungen',
            href: '/terms',
          },
          {title: 'Kontakt', href: '/contact-us'},
        ],
      },
      {
        title: 'Beliebte Suchen',
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
        title: 'Kategorien',
        menuItems: [
          {
            title: 'Elektronik',
            href: '/electronics',
          },
          {
            title: 'Geräte',
            href: '/appliances',
          },
          {
            title: 'Automobil',
            href: '/automotive',
          },
          {
            title: 'Software',
            href: '/software',
          },
          {
            title: 'Zuhause & Küche',
            href: '/home-kitchen',
          },
          {
            title: 'Alle ansehen',
            href: '/categories',
          },
        ],
      },
      {
        title: 'Internationalen Seiten',
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
      title: 'Startseite',
      path: '/',
    },
  },
  CookieConsent: {
    title: 'Wir verwenden Cookies',
    consentText: `Wir verwenden Cookies, um die Sicherheit, Leistung und Funktionalität zu verbessern sowie für analytische und werbliche Zwecke. Wir verwenden Cookies, um Anzeigen für Sie zu personalisieren. Wenn Sie auf dieser Seite bleiben, stimmen Sie der Verwendung unseren Datenschutzbestimmungen zu <a href="/privacy">Privacy Policy</a>`,
    acceptButtonText: 'Verstanden!',
  },
  AppBarSearch: {
    ctaText: 'Suche',
    inputPlaceholder: 'Was möchten Sie kaufen?',
    cancel: 'Stornieren',
  },
  AppBarMenuMobile: {
    title: 'Kategorien',
    menuItems: [
      {
        title: 'Elektronik',
        href: '/products/electronics',
      },
      {
        title: 'Geräte',
        href: '/products/appliances',
      },
      {
        title: 'Automobil',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Zuhause & Küche',
        href: '/products/home-kitchen',
      },
      {
        title: 'Alle ansehen',
        href: '/categories',
      },
    ],
  },
  AppBarMenuDesktop: {
    menuItems: [
      {
        title: 'Elektronik',
        href: '/products/electronics',
      },
      {
        title: 'Geräte',
        href: '/products/appliances',
      },
      {
        title: 'Automobil',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Zuhause & Küche',
        href: '/products/home-kitchen',
      },
      {
        title: 'Alle ansehen',
        href: '/categories',
      },
    ],
    moreItem: 'More',
  },
  PopularCategories: {
    title: '"Beliebte Kategorien',
  },
  Categories: {
    deals: 'Angebote',
    seeAll: 'Alles sehen',
  },
  MarketingAssets: {
    PrimedayStickyFooter: {
      title: 'Nicht verpassen: Prime Day!',
      subtitle: 'Bis zu 70%! Exklusive Angebote! Nur für kurze Zeit!',
      ctaText: 'Alle Angebote anzeigen',
    },
    PrimedayPopup: {
      title: 'Nicht verpassen: Prime Day!',
      subtitle: 'Bis zu 70%! Exklusive Angebote! Nur für kurze Zeit!',
      ctaText: 'Alle Angebote anzeigen',
    },
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
    ThankDialog: {
      title: 'We appreciate it',
      subtitle: 'Thank you for sharing your thoughts',
    },
    Review: {
      title: (isPositive: boolean) => (isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback'),
      placeholder: (isPositive: boolean) =>
        isPositive ? 'Let us know what worked for you — or share a suggestion.' : 'What could we do better?',
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
      highRating: 'Teilen Sie uns mit, was für Sie funktioniert hat - oder geben Sie einen Vorschlag ab',
    },
    submitButton: 'Senden',
    cancelButton: 'Abbrechen',
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

export default de
