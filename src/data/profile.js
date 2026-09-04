// Les champs traduisibles sont au format { fr, en }.
// Utiliser tr(champ) dans les composants (voir i18n/LanguageContext).
export const profile = {
  name: 'Zafimandimby Albert',
  photo: '/Profil2.png',
  cv: '/CV_Zafimandimby_Albert.pdf',
  calendly: 'https://calendly.com/albertzaf12/30min',
  role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
  tagline: {
    fr: 'Développeur Full-Stack spécialisé en architecture back-end (Java Spring Boot, Laravel, Node.js, API REST) et interfaces front-end (React, Vue) — je livre aussi des sites CMS sur mesure (WordPress, Shopify) et des automatisations métier (Make, n8n) de bout en bout.',
    en: 'Full-Stack Developer specialised in back-end architecture (Java Spring Boot, Laravel, Node.js, REST APIs) and front-end interfaces (React, Vue) — I also deliver custom CMS websites (WordPress, Shopify) and end-to-end business automations (Make, n8n).',
  },
  availability: {
    fr: 'Disponible pour de nouvelles opportunités',
    en: 'Available for new opportunities',
  },
  workMode: { fr: '100 % Télétravail', en: '100% Remote' },
  location: { fr: 'Toliara, Madagascar', en: 'Toliara, Madagascar' },
  email: 'albertzaf12@gmail.com',
  phone: '+261 34 33 464 35',
  whatsapp: '+261 32 61 888 43',
  socials: [
    { label: 'Email', href: 'mailto:albertzaf12@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/Albert651' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/albert-zafimandimby-3941162b5/' },
    { label: 'WhatsApp', href: 'https://wa.me/261326188843' },
  ],
  about: [
    {
      fr: 'Développeur Full-Stack avec près de 4 ans d’expérience, toujours en télétravail, sur des projets web pour des clients et agences en France, Canada et à Madagascar.',
      en: 'Full-Stack Developer with nearly 4 years of experience, always remote, on web projects for clients and agencies in France, Canada and Madagascar.',
    },
    {
      fr: 'Je maîtrise l’ensemble de la chaîne : conception d’architecture back-end et d’API REST (Java Spring Boot, Laravel, Node.js, PHP), développement d’interfaces modernes et responsives (React.js, Vue.js, TailwindCSS, Bootstrap), et intégration de bases de données (MySQL, PostgreSQL).',
      en: 'I handle the whole chain: back-end and REST API architecture (Java Spring Boot, Laravel, Node.js, PHP), modern responsive interfaces (React.js, Vue.js, TailwindCSS, Bootstrap), and database integration (MySQL, PostgreSQL).',
    },
    {
      fr: 'Je travaille aussi le CMS (WordPress, Shopify) et l’automatisation des processus métier (Make, Zapier, n8n), avec un suivi de performance via Google Analytics, Search Console et DataForSEO. Réalisation clé : l’automatisation complète d’un site immobilier (chatbot de qualification, publication multi-réseaux, synchronisation Zoho CRM).',
      en: 'I also work with CMS platforms (WordPress, Shopify) and business process automation (Make, Zapier, n8n), with performance tracking through Google Analytics, Search Console and DataForSEO. Key achievement: the full automation of a real-estate website (lead-qualification chatbot, multi-network publishing, Zoho CRM sync).',
    },
  ],
  stats: [
    { number: 4, suffix: { fr: ' ans', en: ' yrs' }, label: { fr: 'd’expérience en télétravail', en: 'of remote experience' } },
    { number: 10, suffix: '+', label: { fr: 'projets livrés', en: 'projects delivered' } },
    { value: 'Full-Stack', label: { fr: 'back-end, front-end & API', en: 'back-end, front-end & API' } },
  ],
  education: [
    {
      degree: { fr: 'Licence en Informatique', en: 'Bachelor’s Degree in Computer Science' },
      school: {
        fr: 'École Nationale d’Informatique, Fianarantsoa',
        en: 'National School of Computer Science, Fianarantsoa',
      },
      period: '2019 – 2023',
    },
    {
      degree: { fr: 'Baccalauréat Scientifique', en: 'Scientific High-School Diploma' },
      school: { fr: 'Lycée privé CPE, Toliara', en: 'CPE Private High School, Toliara' },
      period: '2019',
    },
  ],
  languages: [
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
    { name: { fr: 'Malagasy', en: 'Malagasy' }, level: { fr: 'Langue maternelle', en: 'Native' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Technique', en: 'Professional working' } },
  ],
}
