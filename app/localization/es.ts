import type us from './us.js'

const es: typeof us = {
  Page: {
    title: (categoryName: string, discount: number) =>
      `${categoryName} hasta un ${discount}% de descuento | Las Mejores Ofertas, Descuentos y Rebajas de Hoy`,
    description: (categoryName: string) =>
      `Más ${categoryName} baratos. ➤ Hemos reunido los mejores descuentos y precios de los mejores sitios web. ➤ Compare precios ahora.`,
  },
  pageTitleDeals: (categoryName: string) => `${categoryName}`,
  pageTitleLocale: `ofertas de España`,
  pageSubtitlePrefix: 'Las mejores ',
  pageSubtitleText: 'ofertas, descuentos y rebajas de hoy',
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `ofertas de España`,
  PageHeader: {
    dealsFound: 'ofertas encontradas',
    sortBy: 'Ordenar por',
    scanning: 'Exploración',
    lastUpdated: (min: number) => `Última actualización hace ${min}m`,
  },
  CategoryPage: {
    shopByCategory: 'Comprar por categoría',
    topProducts: 'Productos destacados',
    popularCategories: 'Categorías populares',
  },
  AppFooter: {
    Navigation: [
      {
        title: 'General',
        menuItems: [
          {
            title: 'Inicio',
            href: '/',
          },
          {
            title: 'Privacidad',
            href: '/privacy',
          },
          {
            title: 'Términos y condiciones',
            href: '/terms',
          },
          {title: 'Contáctenos', href: '/contact-us'},
        ],
      },
      {
        title: 'Búsquedas Populares',
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
        title: 'Categorías',
        menuItems: [
          {
            title: 'Electrónica',
            href: '/electronics',
          },
          {
            title: 'Electrodomésticos',
            href: '/appliances',
          },
          {
            title: 'Automotriz',
            href: '/automotive',
          },
          {
            title: 'Software',
            href: '/software',
          },
          {
            title: 'Hogar y Cocina',
            href: '/home-kitchen',
          },
        ],
      },
      {
        title: 'Sitios Internacionales',
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
            title: 'España',
            href: '//es.bestdeals.today',
          },
          {
            title: 'Japón',
            href: '//jp.bestdeals.today',
          },
          {
            title: 'Italia',
            href: '//it.bestdeals.today',
          },
          {
            title: 'Alemania',
            href: '//de.bestdeals.today',
          },
          {
            title: 'Canadá',
            href: '//ca.bestdeals.today',
          },
          {
            title: 'Singapur',
            href: '//sg.bestdeals.today',
          },
          {
            title: 'Reino Unido',
            href: '//uk.bestdeals.today',
          },
          {
            title: 'México',
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
      title: 'Inicio',
      path: '/',
    },
  },
  CookieConsent: {
    title: 'Utilizamos cookies',
    consentText: `Utilizamos cookies para mejorar la seguridad, el rendimiento, la funcionalidad y para actividades analíticas y promocionales. Usamos cookies para personalizar anuncios para usted. Al continuar navegando por este sitio, está aceptando nuestra <a href="/privacy">Politique de confidentialité</a>`,
    acceptButtonText: '¡Entendido!',
  },
  AppBarSearch: {
    ctaText: 'Buscar',
    inputPlaceholder: 'Buscar ofertas',
    cancel: 'Cancelar',
  },
  AppBarMenuMobile: {
    title: 'Categorías principales',
    menuItems: [
      {
        title: 'Electrónica',
        href: '/products/electronics',
      },
      {
        title: 'Electrodomésticos',
        href: '/products/appliances',
      },
      {
        title: 'Automotriz',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Hogar y Cocina',
        href: '/products/home-kitchen',
      },
      {
        title: 'Ver todo',
        href: '/categories',
      },
    ],
  },
  AppBarMenuDesktop: {
    menuItems: [
      {
        title: 'Electrónica',
        href: '/products/electronics',
      },
      {
        title: 'Electrodomésticos',
        href: '/products/appliances',
      },
      {
        title: 'Automotriz',
        href: '/products/automotive',
      },
      {
        title: 'Software',
        href: '/products/software',
      },
      {
        title: 'Hogar y Cocina',
        href: '/products/home-kitchen',
      },
      {
        title: 'Ver todo',
        href: '/categories',
      },
    ],
    moreItem: 'Más',
  },
  PopularCategories: {
    title: 'Categorías Populares',
  },
  Categories: {
    deals: 'Ofertas',
    seeAll: 'Ver todo',
  },
  MarketingAssets: {
    PrimedayStickyFooter: {
      title: 'No te pierdas el Prime Day',
      subtitle: '¡Hasta 70% de descuento! Ofertas exclusivas, tiempo limitado',
      ctaText: 'Ver todas las ofertas',
    },
    PrimedayPopup: {
      title: 'No te pierdas el Prime Day',
      subtitle: '¡Hasta 70% de descuento! Ofertas exclusivas, tiempo limitado',
      ctaText: 'Ver todas las ofertas',
    },
  },
  MobileMenu: {
    title: 'Categorías destacados',
  },
  SortByDropDown: {
    Options: {
      bestMatch: 'Mejor coincidencia',
      discountDescending: 'Descuento',
      expiringDate: 'Fecha de vencimiento',
      priceAscending: 'Precio ascendente',
      priceDescending: 'Precio descendente',
    },
  },
  FiltersMenuMobile: {
    title: 'Filtrar',
    back: 'Atrás',
    filters: 'Filtros',
    clearAll: 'Borrar todo',
    ctaText: 'Mostrar productos',
    FilterTitles: {
      priceRange: 'Rango de precios',
      store: 'Tienda',
      condition: 'Condición',
      brand: 'Marca',
    },
    Filters: {
      fixedPrice: 'Precio fijo',
      freeShipping: 'Solo envío gratuito',
      withDiscount: 'Productos con descuento',
    },
  },
  FiltersMenuDesktop: {
    filterBy: 'Filtrar por',
    clearAll: 'Borrar todo',
    FilterTitles: {
      pricingRange: 'Rango de precios',
      pricing: 'Precios',
      store: 'Tienda',
      condition: 'Condición',
      brand: 'Marca',
      other: 'Otro',
    },
    Filters: {
      fixedPrice: 'Fijo',
      freeShipping: 'Solo envío gratuito',
      withDiscount: 'Productos con descuento',
    },
  },
  ProductCard: {
    off: 'OFF',
    freeShipping: 'Envío gratuito',
    ctaText: () => 'Ver oferta',
    newCondition: 'Nuevo',
    usedCondition: 'Usado',
    refurbished: 'Renovar',
    onFire: 'En llamas',
  },
  ProductList: {
    EmptyState: {
      title: 'Lo siento, no queda nada',
      subtitle: 'Cambie los filtros',
    },
  },
  Feedback: {
    questionTitle: '¿Qué tan útiles son estos resultados?',
    Tooltip: {
      lowRating: 'Nada útiles',
      highRating: 'Muy útiles',
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
      contentTitle: '¡Gracias! ¿Podemos chatear más por una llamada de Zoom?',
      contentSubtitleFirst:
        'Un miembro de nuestro equipo estaría encantado de conectarse y descubrir dónde podemos mejorar. Para agradecerte por tu tiempo, recibirás una',
      contentSubtitleSecond: 'tarjeta de regalo de Amazon.',
      actionButton: 'Programar una llamada de Zoom',
      giftValue: (num: number) => `$${num}`,
    },
    Placeholder: {
      lowRating: '¿Qué podríamos hacer mejor?',
      highRating: 'Háganos saber qué funcionó para usted o comparta una sugerencia',
    },
    submitButton: 'Enviar',
    cancelButton: 'Cancelar',
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

export default es
