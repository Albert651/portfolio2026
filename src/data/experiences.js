// Toutes les missions ont été réalisées en télétravail.
// Champs traduisibles au format { fr, en } ; utiliser tr() côté composant.
export const experiences = [
  {
    title: {
      fr: 'Développeur Web Freelance — CMS & Automatisation',
      en: 'Freelance Web Developer — CMS & Automation',
    },
    company: { fr: 'Indépendant', en: 'Self-employed' },
    location: 'Toliara',
    period: { fr: 'Depuis juin 2026', en: 'Since June 2026' },
    type: { fr: 'Freelance', en: 'Freelance' },
    remote: true,
    highlights: [
      {
        fr: 'Conception et développement de sites WordPress et de boutiques Shopify pour des clients directs : thèmes sur mesure, intégration de maquettes, mise en ligne et maintenance.',
        en: 'Design and development of WordPress websites and Shopify stores for direct clients: custom themes, mockup integration, go-live and maintenance.',
      },
      {
        fr: 'Automatisation des processus clients (Make, Zapier, n8n) et connexion aux CRM et outils métier.',
        en: 'Automation of client processes (Make, Zapier, n8n) and integration with CRMs and business tools.',
      },
      {
        fr: 'Suivi SEO et reporting : Google Search Console, Google Analytics, Google Ads, DataForSEO.',
        en: 'SEO tracking and reporting: Google Search Console, Google Analytics, Google Ads, DataForSEO.',
      },
    ],
    stack: ['WordPress', 'Shopify', 'Make', 'n8n', 'DataForSEO'],
  },
  {
    title: {
      fr: 'Développeur CMS — WordPress & Shopify',
      en: 'CMS Developer — WordPress & Shopify',
    },
    company: { fr: 'Agence Elevex', en: 'Elevex Agency' },
    location: { fr: 'Canada', en: 'Canada' },
    period: { fr: 'Juin – Août 2026 · CDD 3 mois', en: 'June – Aug 2026 · 3-month contract' },
    type: { fr: 'CDD', en: 'Fixed-term' },
    remote: true,
    highlights: [
      {
        fr: 'Développement et personnalisation de sites WordPress et de boutiques Shopify : thèmes sur mesure, intégration de maquettes, mise en ligne et maintenance.',
        en: 'Development and customisation of WordPress websites and Shopify stores: custom themes, mockup integration, go-live and maintenance.',
      },
      {
        fr: 'Projet Équipement Polar : développement et suivi du site, structuration du catalogue et optimisation SEO on-page.',
        en: 'Équipement Polar project: site development and monitoring, catalog structuring and on-page SEO optimisation.',
      },
      {
        fr: 'Projet Maple MC2 : développement du site, intégration des contenus et suivi des performances.',
        en: 'Maple MC2 project: site development, content integration and performance monitoring.',
      },
      {
        fr: 'Suivi SEO et acquisition : Search Console, Analytics, Google Ads, DataForSEO (mots-clés, positions, backlinks, reporting client).',
        en: 'SEO and acquisition tracking: Search Console, Analytics, Google Ads, DataForSEO (keywords, rankings, backlinks, client reporting).',
      },
      {
        fr: 'Utilisation de Claude Code au quotidien : développement assisté, débogage, revue de code et automatisation des tâches répétitives.',
        en: 'Daily use of Claude Code: assisted development, debugging, code review and automation of repetitive tasks.',
      },
    ],
    stack: ['WordPress', 'Shopify', 'Liquid', 'SEO', 'Claude Code'],
  },
  {
    title: {
      fr: 'Développeur Web — Automatisation & Intégration',
      en: 'Web Developer — Automation & Integration',
    },
    company: 'UPENCY SARL',
    location: 'Antananarivo',
    period: { fr: 'Novembre 2025 – Mai 2026', en: 'November 2025 – May 2026' },
    type: { fr: 'CDD', en: 'Fixed-term' },
    remote: true,
    highlights: [
      {
        fr: 'Conception et maintenance de workflows automatisés sur Make, Zapier et n8n (scénarios multi-étapes, gestion des erreurs).',
        en: 'Design and maintenance of automated workflows on Make, Zapier and n8n (multi-step scenarios, error handling).',
      },
      {
        fr: 'Automatisation complète d’un site immobilier : publication des annonces, notifications internes et suivi des demandes sans intervention manuelle.',
        en: 'Full automation of a real-estate website: listing publishing, internal notifications and request tracking with no manual work.',
      },
      {
        fr: 'Mise en place d’un chatbot : réponses automatiques, qualification et collecte des leads 24h/24.',
        en: 'Chatbot setup: automatic replies, lead qualification and collection around the clock.',
      },
      {
        fr: 'Diffusion automatique des annonces vers LinkedIn, Facebook, X (Twitter) via API et webhooks.',
        en: 'Automatic distribution of listings to LinkedIn, Facebook, X (Twitter) via APIs and webhooks.',
      },
      {
        fr: 'Intégration et synchronisation avec Zoho CRM : création des contacts, suivi du pipeline, relances programmées.',
        en: 'Integration and sync with Zoho CRM: contact creation, pipeline tracking, scheduled follow-ups.',
      },
      {
        fr: 'Connexion des outils tiers via API REST, OAuth2 et webhooks ; documentation des scénarios.',
        en: 'Connection of third-party tools via REST APIs, OAuth2 and webhooks; scenario documentation.',
      },
    ],
    stack: ['Node.js', 'API REST', 'OAuth2', 'Webhooks', 'Zoho CRM', 'n8n'],
  },
  {
    title: { fr: 'Développeur WordPress', en: 'WordPress Developer' },
    company: 'DesignEProg-IT',
    location: 'Antananarivo',
    period: { fr: 'Août 2023 – Juillet 2025', en: 'August 2023 – July 2025' },
    type: { fr: 'CDD', en: 'Fixed-term' },
    remote: true,
    highlights: [
      {
        fr: 'Création et personnalisation de thèmes WordPress modernes à partir de maquettes Figma.',
        en: 'Creation and customisation of modern WordPress themes from Figma mockups.',
      },
      {
        fr: 'Développement de fonctionnalités spécifiques via plugins personnalisés (PHP, JavaScript, jQuery).',
        en: 'Development of custom features through bespoke plugins (PHP, JavaScript, jQuery).',
      },
      {
        fr: 'Intégration de systèmes dynamiques : formulaires avancés, gestion de contenu, WooCommerce, API REST.',
        en: 'Integration of dynamic systems: advanced forms, content management, WooCommerce, REST APIs.',
      },
      {
        fr: 'Automatisation de tâches récurrentes : envoi de formulaires, notifications e-mail, synchronisation de contenu.',
        en: 'Automation of recurring tasks: form submissions, email notifications, content sync.',
      },
      {
        fr: 'Optimisation des performances (SEO, cache, compression) ; maintenance et sauvegarde des sites clients.',
        en: 'Performance optimisation (SEO, cache, compression); maintenance and backup of client sites.',
      },
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'WooCommerce', 'API REST'],
  },
  {
    title: { fr: 'Développeur Backend', en: 'Backend Developer' },
    company: 'PRINCEPT I-WEB',
    location: 'Antananarivo',
    period: { fr: 'Novembre 2022 – Mars 2023', en: 'November 2022 – March 2023' },
    type: { fr: 'CDD', en: 'Fixed-term' },
    remote: true,
    highlights: [
      {
        fr: 'Développement d’une application web de gestion des inscriptions opérateurs (Laravel, MySQL).',
        en: 'Development of a web app to manage operator registrations (Laravel, MySQL).',
      },
      {
        fr: 'Conception de l’architecture backend, intégration des API et modules d’administration personnalisés.',
        en: 'Backend architecture design, API integration and custom admin modules.',
      },
      {
        fr: 'Collaboration avec l’équipe front-end pour assurer la cohérence interface / logique serveur.',
        en: 'Collaboration with the front-end team to keep interface and server logic consistent.',
      },
    ],
    stack: ['Laravel', 'MySQL', 'API REST', 'PHP'],
  },
  {
    title: { fr: 'Stagiaire Développement Web', en: 'Web Development Intern' },
    company: 'PRINCEPT I-WEB',
    location: 'Antananarivo',
    period: { fr: 'Août 2022 – Novembre 2022', en: 'August 2022 – November 2022' },
    type: { fr: 'Stage', en: 'Internship' },
    remote: true,
    highlights: [
      {
        fr: 'Conception et intégration de sites vitrines avec WordPress et Elementor.',
        en: 'Design and integration of showcase websites with WordPress and Elementor.',
      },
      {
        fr: 'Ajustement de thèmes existants selon les besoins clients (HTML, CSS, PHP).',
        en: 'Adjustment of existing themes to client needs (HTML, CSS, PHP).',
      },
      {
        fr: 'Maintenance et mise à jour de sites existants ; développement collaboratif (Git, documentation).',
        en: 'Maintenance and updates of existing sites; collaborative development (Git, documentation).',
      },
    ],
    stack: ['WordPress', 'Elementor', 'HTML/CSS', 'Git'],
  },
]
