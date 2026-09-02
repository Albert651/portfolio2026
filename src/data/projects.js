// Champs traduisibles au format { fr, en } ; utiliser tr() côté composant.
export const projects = [
  {
    title: {
      fr: 'Plateforme CRM — Espace administrateur',
      en: 'CRM Platform — Admin area',
    },
    category: { fr: 'Application métier', en: 'Business app' },
    description: {
      fr: 'Développement de la partie administrateur d’un CRM : interface complète de gestion des clients, tâches, prospections commerciales, devis, documents et interactions. Un module de rapports analyse les statistiques des tâches et des campagnes de prospection.',
      en: 'Development of the admin side of a CRM: a full interface to manage clients, tasks, sales prospecting, quotes, documents and interactions. A reporting module analyses task and prospecting-campaign statistics.',
    },
    role: {
      fr: 'Développement de la partie back-office administrateur',
      en: 'Development of the admin back-office',
    },
    tech: ['React.js', 'Bootstrap 5', 'Laravel', 'MySQL'],
    link: 'https://relation-client.onrender.com/Accueil',
    featured: true,
  },
  {
    title: {
      fr: 'Sécurlite — Éclairage intelligent & durable',
      en: 'Sécurlite — Smart, sustainable lighting',
    },
    category: { fr: 'E-commerce Magento', en: 'Magento e-commerce' },
    description: {
      fr: 'Développement de modules Magento sur mesure (produits, devis, promotions, workflows personnalisés), personnalisation complète du thème selon l’identité visuelle, optimisation des performances (vitesse, compatibilité navigateurs) et maintenance continue.',
      en: 'Development of custom Magento modules (products, quotes, promotions, custom workflows), full theme customisation to match the brand identity, performance optimisation (speed, browser compatibility) and ongoing maintenance.',
    },
    role: {
      fr: 'Développement de modules Magento & personnalisation de thème',
      en: 'Magento module development & theme customisation',
    },
    tech: ['Magento 2', 'Angular', 'Bootstrap', 'MySQL'],
    link: 'https://securlite.awebi-lab.com/',
    featured: true,
  },
  {
    title: {
      fr: 'Boutique de matériel informatique',
      en: 'Computer hardware store',
    },
    category: { fr: 'E-commerce', en: 'E-commerce' },
    description: {
      fr: 'Boutique en ligne dédiée à la vente de matériel informatique (ordinateurs, composants, périphériques, accessoires). Navigation fluide, gestion optimisée des catalogues produits et parcours d’achat sécurisé de la découverte à la commande.',
      en: 'Online store dedicated to computer hardware (computers, components, peripherals, accessories). Smooth navigation, optimised product-catalog management and a secure buying journey from discovery to checkout.',
    },
    role: {
      fr: 'Développement full-stack de la boutique',
      en: 'Full-stack development of the store',
    },
    tech: ['Laravel 11', 'TailwindCSS', 'JavaScript', 'MySQL'],
    link: 'https://labservice.awebi-lab.com/',
    featured: true,
  },
  {
    title: {
      fr: 'Rent Sound System — Location de sonorisation',
      en: 'Rent Sound System — PA equipment rental',
    },
    category: { fr: 'Site & fonctionnalités', en: 'Website & features' },
    description: {
      fr: 'Site de location de matériel de sonorisation à Paris. Intégration de la maquette graphique et développement des fonctionnalités du site, avec un back-end Symfony et une interface responsive, moderne et facile à utiliser.',
      en: 'Sound-equipment rental website in Paris. Design integration and feature development, with a Symfony back-end and a responsive, modern, easy-to-use interface.',
    },
    role: {
      fr: 'Intégration de la maquette & développement des fonctionnalités',
      en: 'Design integration & feature development',
    },
    tech: ['Symfony 3.1', 'Bootstrap', 'MySQL'],
    link: 'https://rentsoundsystem.com/',
    featured: false,
  },
  {
    title: {
      fr: 'Plusdimmo — Immobilier Côte d’Azur & Corse',
      en: 'Plusdimmo — Real estate, French Riviera & Corsica',
    },
    category: { fr: 'Site immobilier', en: 'Real-estate website' },
    description: {
      fr: 'Site de vente et location d’appartements et de maisons. Intégration de la maquette avec Elementor, personnalisation des sections et implémentation de fonctionnalités dynamiques (formulaires, calendrier, animations, cartes interactives), avec une base React.js pour enrichir l’expérience et une optimisation SEO poussée.',
      en: 'Website for selling and renting apartments and houses. Design integration with Elementor, section customisation and dynamic features (forms, calendar, animations, interactive maps), with a React.js base to enrich the experience and thorough SEO optimisation.',
    },
    role: {
      fr: 'Intégration, fonctionnalités dynamiques & optimisation SEO',
      en: 'Integration, dynamic features & SEO optimisation',
    },
    tech: ['WordPress', 'PHP 8.3', 'React.js', 'GSAP', 'Google Maps', 'RankMath SEO'],
    link: 'https://plusdimmo.com/',
    featured: false,
  },
  {
    title: {
      fr: 'Madaimmo — Immobilier à Madagascar',
      en: 'Madaimmo — Real estate in Madagascar',
    },
    category: { fr: 'Site immobilier', en: 'Real-estate website' },
    description: {
      fr: 'Site de vente et location d’appartements et de maisons à Madagascar. Intégration de la maquette avec Elementor, personnalisation des sections et fonctionnalités dynamiques (formulaires, calendrier, animations, cartes interactives), avec Angular et des librairies JavaScript pour l’expérience utilisateur, le tout optimisé pour le référencement.',
      en: 'Website for selling and renting apartments and houses in Madagascar. Design integration with Elementor, section customisation and dynamic features (forms, calendar, animations, interactive maps), with Angular and JavaScript libraries for the user experience, all optimised for search engines.',
    },
    role: {
      fr: 'Intégration, fonctionnalités dynamiques & optimisation SEO',
      en: 'Integration, dynamic features & SEO optimisation',
    },
    tech: ['WordPress', 'PHP 8.3', 'Angular', 'GSAP', 'Google Maps', 'RankMath SEO'],
    link: 'https://madaimmo.com/',
    featured: false,
  },
  {
    title: {
      fr: 'Équipement Polar — Outillage professionnel',
      en: 'Équipement Polar — Professional tools',
    },
    category: { fr: 'E-commerce Shopify', en: 'Shopify e-commerce' },
    description: {
      fr: 'Boutique Shopify d’un distributeur d’outillage professionnel (plus de 8 000 références : outils électroportatifs, pneumatiques, de mesure et de sécurité, marques DeWalt, Makita, Milwaukee…) : structuration du catalogue par catégories et marques, intégration des contenus et optimisation SEO on-page.',
      en: 'Shopify store for a professional-tools distributor (8,000+ SKUs: power tools, pneumatic, measuring and safety gear, brands DeWalt, Makita, Milwaukee…): catalog structuring by category and brand, content integration and on-page SEO optimisation.',
    },
    role: {
      fr: 'Développement de la boutique & SEO on-page',
      en: 'Store development & on-page SEO',
    },
    tech: ['Shopify', 'Liquid', 'SEO'],
    link: 'https://www.equipementpolar.com/',
    featured: false,
  },
  {
    title: {
      fr: 'Maple MC2 — Boisson sportive à l’érable',
      en: 'Maple MC2 — Maple sports drink',
    },
    category: { fr: 'E-commerce Shopify', en: 'Shopify e-commerce' },
    description: {
      fr: 'Boutique Shopify d’une marque québécoise de boisson énergisante naturelle à base de sirop d’érable (plusieurs saveurs, positionnement santé et performance sportive) : intégration des contenus, mise en place du thème et suivi des performances.',
      en: 'Shopify store for a Québec brand of natural maple-syrup energy drink (several flavours, health and sports-performance positioning): content integration, theme setup and performance monitoring.',
    },
    role: {
      fr: 'Développement de la boutique & suivi des performances',
      en: 'Store development & performance monitoring',
    },
    tech: ['Shopify', 'Liquid', 'Analytics'],
    link: 'https://maplemc2.com/',
    featured: false,
  },
  {
    title: {
      fr: 'Truffole — Musée numérique de la pomme de terre',
      en: 'Truffole — Digital potato museum',
    },
    category: { fr: 'Site vitrine / Patrimoine', en: 'Showcase / Heritage site' },
    description: {
      fr: 'Site vitrine et centre de documentation historique dédié à la « truffole » (pomme de terre) en Ardèche : collection numérisée (cartes postales, gravures, timbres), contenu multilingue et dictionnaire spécialisé. Développement du site avec Elementor, structuration des contenus et gestion de la base de données.',
      en: 'Showcase site and historical documentation centre about the "truffole" (potato) in Ardèche: digitised collection (postcards, engravings, stamps), multilingual content and a specialised dictionary. Site development with Elementor, content structuring and database management.',
    },
    role: {
      fr: 'Développement du site & intégration Elementor',
      en: 'Site development & Elementor integration',
    },
    tech: ['WordPress', 'Elementor', 'MySQL'],
    link: 'https://truffole.com/',
    featured: false,
  },
]
