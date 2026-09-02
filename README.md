# Portfolio — Zafimandimby Albert · Développeur Full-Stack

Portfolio professionnel à page unique, construit avec **React** (Vite) et **TailwindCSS**.
Objectif : présenter mon profil de développeur full-stack et mes réalisations dans le cadre
d'une recherche de nouvelles opportunités **100 % en télétravail**.

## Stack

- React 18 + Vite
- TailwindCSS 3
- Aucune dépendance UI externe (icônes SVG inline, animation au scroll via IntersectionObserver)

## Démarrer

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css              # directives Tailwind + composants utilitaires
├── hooks/
│   └── useReveal.js        # animation d'apparition au scroll
├── data/                   # contenu éditable (profil, expériences, projets, compétences)
│   ├── profile.js
│   ├── experiences.js
│   ├── projects.js
│   └── skills.js
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

## Personnalisation

Tout le contenu textuel est centralisé dans `src/data/`. Modifier ces fichiers suffit
pour mettre à jour le profil, les expériences, les projets et les compétences,
sans toucher aux composants.

Les liens GitHub / LinkedIn sont des espaces réservés dans `src/data/profile.js` — à compléter.

## Déploiement

Le build est entièrement statique (`dist/`). Il peut être hébergé sur Netlify, Vercel,
GitHub Pages ou tout hébergeur de fichiers statiques. `base: './'` est déjà configuré
dans `vite.config.js` pour un déploiement en sous-répertoire.
