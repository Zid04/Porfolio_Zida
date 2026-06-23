# Porfolio Zida

Projet de portfolio personnel créé avec React, Vite et Tailwind CSS.

## Présentation

Ce projet est une application de présentation de compétences, projets et contact, construite avec :

- React 19
- Vite pour le développement rapide et la compilation
- Tailwind CSS pour le style
- Framer Motion pour les animations
- EmailJS pour l'envoi de messages depuis le formulaire de contact
- React Router et Wouter pour la navigation

## Scripts disponibles

Utilisez les commandes suivantes dans la racine du projet :

- `npm install` : installe les dépendances
- `npm run dev` : lance le serveur de développement
- `npm run build` : génère la version de production
- `npm run preview` : prévisualise le build de production
- `npm run lint` : analyse le code avec ESLint

## Structure du projet

- `src/` : code source de l'application
- `src/pages/` : pages principales (Accueil, À propos, Contact, Projets, etc.)
- `src/layout/` : composants de mise en page et sections globales
- `src/components/` : composants réutilisables UI
- `src/hooks/` : hooks personnalisés
- `src/lib/` : utilitaires
- `public/` : fichiers statiques

## Fonctionnalités principales

- navigation fluide entre les sections
- interface responsive mobile et desktop
- formulaire de contact fonctionnel via EmailJS
- sections projets, compétences, et présentation personnelle
- animations et transitions modernes

## Personnalisation

Pour adapter le contenu, modifiez :

- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Project.jsx`
- `src/layout/Hero.jsx`
- `src/layout/Skills.jsx`
- `src/layout/Footer.jsx`

## Dépendances clés

- `react`
- `react-dom`
- `@vitejs/plugin-react`
- `vite`
- `tailwindcss`
- `postcss`
- `@emailjs/browser`
- `framer-motion`
- `lucide-react`
- `react-icons`
- `react-router-dom`
- `router`

## Conseils

- Vérifiez la configuration d'EmailJS pour que le formulaire de contact fonctionne.
- Personnalisez `tailwind.config.js` si vous souhaitez modifier le thème.
- Testez le résultat de production avec `npm run preview`.
