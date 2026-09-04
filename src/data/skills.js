// Les titres de groupe et les libellés descriptifs sont au format { fr, en }.
// Les noms de technologies restent en chaine simple. tr() gère les deux.
export const skillGroups = [
  {
    title: { fr: 'Front-End', en: 'Front-End' },
    items: ['React.js', 'Vue.js', 'JavaScript (ES6+)', 'HTML / CSS', 'TailwindCSS', 'Bootstrap 5'],
  },
  {
    title: { fr: 'Back-End', en: 'Back-End' },
    items: ['Java (Spring Boot)', 'Laravel (v8–11)', 'Node.js', 'PHP', 'API REST'],
  },
  {
    title: { fr: 'Bases de données', en: 'Databases' },
    items: [
      'MySQL',
      'PostgreSQL',
      'Supabase',
      { fr: 'SQL (requêtes complexes)', en: 'SQL (complex queries)' },
      { fr: 'Modélisation UML / Merise', en: 'UML / Merise modelling' },
    ],
  },
  {
    title: { fr: 'CMS', en: 'CMS' },
    items: [
      { fr: 'WordPress (thèmes, plugins, WooCommerce)', en: 'WordPress (themes, plugins, WooCommerce)' },
      'Shopify (Liquid, apps)',
      'Elementor',
      'Magento 2',
    ],
  },
  {
    title: { fr: 'Hébergement & Déploiement', en: 'Hosting & Deployment' },
    items: ['OVH', 'Hostinger', 'Vercel', 'Render'],
  },
  {
    title: { fr: 'Automatisation & Intégration', en: 'Automation & Integration' },
    items: ['Make (Integromat)', 'Zapier', 'n8n', 'Webhooks', 'OAuth2', 'JSON'],
  },
  {
    title: { fr: 'CRM & Leads', en: 'CRM & Leads' },
    items: [
      'Zoho CRM',
      'Chatbots',
      { fr: 'Formulaires connectés', en: 'Connected forms' },
      { fr: 'Publication réseaux sociaux', en: 'Social-media publishing' },
    ],
  },
  {
    title: { fr: 'SEO & Analytics', en: 'SEO & Analytics' },
    items: ['Google Search Console', 'Google Analytics', 'Google Ads', 'DataForSEO'],
  },
  {
    title: { fr: 'Mobile & Outils', en: 'Mobile & Tools' },
    items: ['React Native', 'Flutter', 'Git', 'Claude Code', 'Power BI', 'Linux / Windows'],
  },
]
