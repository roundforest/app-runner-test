import type en from './en.js'

const fr: typeof en = {
  Page: {
    title: (categoryName: string, date: string) =>
      `${categoryName} jusqu'à 70 % de réduction | Le meilleur ${date}`,
    description: (categoryName: string) =>
      `${categoryName} à bon prix. ➤ Nous avons réuni les meilleurs prix et remises des sites Web les plus populaires. ➤ Comparer les prix maintenant.`,
  },
  PageTitleDeals: (categoryName: string) => `${categoryName}`,
  PageTitleLocale: `offres en France`,
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
    Review: {
      title: (isPositive: boolean) =>
        isPositive ? 'Can you tell us a little more?' : 'We welcome your feedback',
      placeholder: (isPositive: boolean) =>
        isPositive
          ? 'Let us know what worked for you — or share a suggestion.'
          : 'What could we do better?',
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
}

export default fr
