import type en from './en.js'

const es: typeof en = {
  Page: {
    title: (categoryName: string, date: string) =>
      `${categoryName} hasta un 70 % de descuento | Los precios ${date}`,
    description: (categoryName: string) =>
      `Más ${categoryName} baratos. ➤ Hemos reunido los mejores descuentos y precios de los mejores sitios web. ➤ Compare precios ahora.`,
  },
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
      title: (isPositive: boolean) =>
        isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback',
      placeholder: (isPositive: boolean) =>
        isPositive
          ? 'Let us know what worked for you — or share a suggestion.'
          : 'What could we do better?',
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
}

export default es
