import type us from './us.js'

const fr: typeof us = {
  Page: {
    title: (categoryName: string, discount: number) =>
      `${categoryName} jusqu'à ${discount} % de réduction | Les Meilleures Offres, Réductions et Deals d’Aujourd’hui`,
    description: (categoryName: string) =>
      `${categoryName} à bon prix. ➤ Nous avons réuni les meilleurs prix et remises des sites Web les plus populaires. ➤ Comparer les prix maintenant.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `offres en France`,
  pageTitleDeals: (categoryName: string) => `${categoryName}`,
  pageTitleLocale: `offres en France`,
  pageSubtitlePrefix: 'Les meilleures ',
  pageSubtitleText: 'offres, réductions et deals d’aujourd’hui',
  PageHeader: {
    dealsFound: 'offres trouvées',
    sortBy: 'Trier par',
    scanning: 'Balayage',
    lastUpdated: (min: number) => `Dernière mise à jour il y a ${min}m`,
  },
  CategoryPage: {
    shopByCategory: 'Chercher par catégorie',
    topProducts: 'Meilleurs produits',
    popularCategories: 'Catégories populaires',
  },
  AppFooter: {
    Navigation: [
      {
        title: 'Général',
        menuItems: [
          {
            title: 'Accueil',
            href: '/',
          },
          {
            title: 'Confidentialité',
            href: '/privacy',
          },
          {
            title: "Conditions d'utilisation",
            href: '/terms',
          },
          {title: 'Nous contacter', href: '/contact-us'},
        ],
      },
      {
        title: 'Recherches populaires',
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
        title: 'Catégories',
        menuItems: [
          {
            title: 'Électronique',
            href: '/electronics',
          },
          {
            title: 'Appareils',
            href: '/appliances',
          },
          {
            title: 'Automobile',
            href: '/automotive',
          },
          {
            title: 'Logiciel',
            href: '/software',
          },
          {
            title: 'Maison et cuisine',
            href: '/home-kitchen',
          },
        ],
      },
      {
        title: 'Sites internationaux',
        menuItems: [
          {
            title: 'France',
            href: '//fr.bestdeals.today',
          },
          {
            title: 'Australie',
            href: '//au.bestdeals.today',
          },
          {
            title: 'Espagne',
            href: '//es.bestdeals.today',
          },
          {
            title: 'Japon',
            href: '//jp.bestdeals.today',
          },
          {
            title: 'Italie',
            href: '//it.bestdeals.today',
          },
          {
            title: 'Allemagne',
            href: '//de.bestdeals.today',
          },
          {
            title: 'Canada',
            href: '//ca.bestdeals.today',
          },
          {
            title: 'Singapour',
            href: '//sg.bestdeals.today',
          },
          {
            title: 'Royaume-Uni',
            href: '//uk.bestdeals.today',
          },
          {
            title: 'Mexique',
            href: '//mx.bestdeals.today',
          },
          {
            title: 'Inde',
            href: '//in.bestdeals.today',
          },
        ],
      },
    ],
  },
  Breadcrumbs: {
    home: {
      title: 'Accueil',
      path: '/',
    },
  },
  CookieConsent: {
    title: 'Nous utilisons des cookies',
    consentText: `Nous utilisons des cookies pour améliorer la sécurité, les performances, la fonctionnalité et les activités analytiques et promotionnelles. Nous utilisons des cookies pour personnaliser des annonces pour vous. En continuant à naviguer sur ce site, vous acceptez notre <a href="/privacy">Politique de confidentialité</a>`,
    acceptButtonText: "J'ai compris !",
  },
  AppBarSearch: {
    ctaText: 'Rechercher',
    inputPlaceholder: 'Rechercher des offres',
    cancel: 'Annuler',
  },
  AppBarMenuMobile: {
    title: 'Meilleures catégories',
    menuItems: [
      {
        title: 'Électronique',
        href: '/products/electronics',
      },
      {
        title: 'Appareils',
        href: '/products/appliances',
      },
      {
        title: 'Automobile',
        href: '/products/automotive',
      },
      {
        title: 'Logiciel',
        href: '/products/software',
      },
      {
        title: 'Maison et cuisine',
        href: '/products/home-kitchen',
      },
      {
        title: 'Voir tout',
        href: '/products/categories',
      },
    ],
  },
  AppBarMenuDesktop: {
    menuItems: [
      {
        title: 'Électronique',
        href: '/products/electronics',
      },
      {
        title: 'Appareils',
        href: '/products/appliances',
      },
      {
        title: 'Automobile',
        href: '/products/automotive',
      },
      {
        title: 'Logiciel',
        href: '/products/software',
      },
      {
        title: 'Maison et cuisine',
        href: '/products/home-kitchen',
      },
      {
        title: 'Voir tout',
        href: '/categories',
      },
    ],
    moreItem: 'Plus',
  },
  PopularCategories: {
    title: 'Catégories populaires',
  },
  Categories: {
    deals: 'Offres',
    seeAll: 'Voir tout',
  },
  MarketingAssets: {
    PrimedayStickyFooter: {
      title: 'Ne manquez pas le Prime Day',
      subtitle: "Jusqu'à 70% de réduction ! Offres exclusives, durée limitée",
      ctaText: 'Voir toutes les offres',
    },
    PrimedayPopup: {
      title: 'Ne manquez pas le Prime Day',
      subtitle: "Jusqu'à 70% de réduction ! Offres exclusives, durée limitée",
      ctaText: 'Voir toutes les offres',
    },
  },
  MobileMenu: {
    title: 'Meilleurs catégories',
  },
  SortByDropDown: {
    Options: {
      bestMatch: 'Meilleure correspondance',
      discountDescending: 'Remise',
      expiringDate: "Date d'expiration",
      priceAscending: 'Prix croissant',
      priceDescending: 'Prix décroissant',
    },
  },
  FiltersMenuMobile: {
    title: 'Filtre',
    back: 'Retour',
    filters: 'Filtres',
    clearAll: 'Tout effacer',
    ctaText: 'Afficher les produits',
    FilterTitles: {
      priceRange: 'Gamme de prix',
      store: 'Site',
      condition: 'État',
      brand: 'Marque',
    },
    Filters: {
      fixedPrice: 'Prix fixe',
      freeShipping: 'Livraison gratuite uniquement',
      withDiscount: 'Produits en promotion',
    },
  },
  FiltersMenuDesktop: {
    filterBy: 'Filtrer par',
    clearAll: 'Tout effacer',
    FilterTitles: {
      pricingRange: 'Gamme de prix',
      pricing: 'Prix',
      store: 'Site',
      condition: 'État',
      brand: 'Marque',
      other: 'Autre',
    },
    Filters: {
      fixedPrice: 'Fixe',
      freeShipping: 'Livraison gratuite uniquement',
      withDiscount: 'Produits en promotion',
    },
  },
  ProductCard: {
    off: 'OFF',
    freeShipping: 'Livraison gratuite',
    ctaText: () => "Voir l'offre",
    newCondition: 'Nouveau',
    usedCondition: "D'occasion",
    refurbished: 'Remis à neuf',
    onFire: 'Sur le feu',
  },
  ProductList: {
    EmptyState: {
      title: 'Désolé, il ne reste plus rien',
      subtitle: 'Veuillez modifier vos filtres',
    },
  },
  Feedback: {
    questionTitle: 'À quel point ces résultats vous ont-ils été utiles?',
    Tooltip: {
      lowRating: 'Pas du tout utile',
      highRating: 'Très utile',
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
      contentTitle: 'Merci ! Pouvons-nous discuter plus longuement sur un appel Zoom ?',
      contentSubtitleFirst:
        'Un membre de notre équipe aimerait se connecter et découvrir où nous pouvons améliorer. Pour vous remercier de votre temps, vous recevrez une',
      contentSubtitleSecond: 'carte cadeau Amazon.',
      actionButton: 'Programmer un appel Zoom',
      giftValue: (num: number) => `$${num}`,
    },
    Placeholder: {
      lowRating: 'Que pourrions-nous faire de mieux ?',
      highRating: 'Dites-nous ce qui a fonctionné pour vous - ou partagez une suggestion',
    },
    submitButton: 'Soumettre',
    cancelButton: 'Annuler',
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

export default fr
