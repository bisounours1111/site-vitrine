# La Table de Chantal 🍽️

Une application web moderne pour un restaurant gastronomique, développée avec React et Material-UI.

## 🌟 Fonctionnalités

- **Page d'accueil** avec carousel d'images automatique
- **Carte du restaurant** présentant :
  - Entrées
  - Plats
  - Desserts
- **Carte des boissons** incluant :
  - Softs
  - Bières
  - Cocktails
- **Page de contact** avec formulaire et informations
- **Mode sombre/clair** avec thème personnalisé
- **Design responsive** adapté à tous les appareils

## 🛠️ Technologies utilisées

- React 19
- Material-UI 7
- React Router DOM 7
- UUID
- Vite

## 🚀 Installation

1. Clonez le repository :

```bash
git clone [URL_DU_REPO]
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez le serveur de développement :

```bash
npm run dev
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── shared/
│       ├── MenuCard.jsx
│       └── MenuCategory.jsx
├── pages/
│   ├── Home.jsx
│   ├── Carte.jsx
│   ├── Boissons.jsx
│   └── Contact.jsx
├── data/
│   └── menuData.js
├── theme.js
└── App.jsx
```

## 🎨 Thème

L'application utilise deux thèmes personnalisés :

### Thème clair

- Couleurs principales : Rose vif (#FF69B4)
- Arrière-plan : Rose très clair (#FFF0F5)
- Typographie : Playfair Display pour les titres, Poppins pour le texte

### Thème sombre

- Couleurs principales : Violet clair (#E6B3FF)
- Arrière-plan : Noir profond (#1A1A2E)
- Typographie : Même famille de polices que le thème clair

## 📱 Responsive Design

L'application est entièrement responsive avec :

- Adaptation des tailles de police
- Mise en page flexible
- Carousel d'images optimisé
- Cartes de menu adaptatives

## 🍽️ Menu

Le menu est organisé en plusieurs catégories :

### Entrées

- Salade de Chèvre Chaud
- Soupe à l'Oignon
- Terrine de Foie Gras
- Salade de Quinoa
- Carpaccio de Bœuf

### Plats

- Filet de Bar
- Magret de Canard
- Risotto aux Champignons
- Côte de Bœuf
- Ravioles de Homard

### Desserts

- Crème Brûlée
- Tarte Tatin
- Mousse au Chocolat
- Île Flottante
- Profiteroles

### Boissons

- Softs (Virgin Mojito, Limonade Maison, etc.)
- Bières (Blonde, Ambrée, Blanche, etc.)
- Cocktails (Mojito, Old Fashioned, Margarita, etc.)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT.

## 👥 Auteurs

- [Votre nom]

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter via le formulaire de contact sur le site.
