import { v4 as uuidv4 } from "uuid";

export const menuItems = [
  // Entrées
  {
    id: uuidv4(),
    category: "entrees",
    nom: "Salade de Chèvre Chaud",
    image:
      "https://images.unsplash.com/photo-1725030660031-585ea459d55f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prix: 12.5,
    description: "Salade composée avec chèvre chaud sur toast, noix et miel",
  },
  {
    id: uuidv4(),
    category: "entrees",
    nom: "Soupe à l'Oignon",
    image:
      "https://plus.unsplash.com/premium_photo-1664391935474-f1e502d3ad61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2lnbm9uJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D",
    prix: 9.5,
    description: "Soupe traditionnelle gratinée au fromage",
  },
  {
    id: uuidv4(),
    category: "entrees",
    nom: "Terrine de Foie Gras",
    image:
      "https://plus.unsplash.com/premium_photo-1695045520829-8a346894c67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9pZSUyMEdyYXN8ZW58MHx8MHx8fDA%3D",
    prix: 18.5,
    description: "Terrine maison avec confiture d'oignons",
  },
  {
    id: uuidv4(),
    category: "entrees",
    nom: "Salade de Quinoa",
    image:
      "https://images.unsplash.com/photo-1615865417491-9941019fbc00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVpbm9hfGVufDB8fDB8fHww",
    prix: 11.5,
    description: "Quinoa aux légumes de saison et vinaigrette citronnée",
  },
  {
    id: uuidv4(),
    category: "entrees",
    nom: "Carpaccio de Bœuf",
    image:
      "https://images.unsplash.com/photo-1651745006249-0ee8686914eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prix: 14.5,
    description: "Fine tranches de bœuf avec copeaux de parmesan",
  },

  // Plats
  {
    id: uuidv4(),
    category: "plats",
    nom: "Filet de Bar",
    image:
      "https://plus.unsplash.com/premium_photo-1701015785265-e399e4babe02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsZXQlMjBkZSUyMHBvaXNzb258ZW58MHx8MHx8fDA%3D",
    prix: 24.5,
    description: "Filet de bar à la provençale avec légumes de saison",
  },
  {
    id: uuidv4(),
    category: "plats",
    nom: "Magret de Canard",
    image:
      "https://plus.unsplash.com/premium_photo-1664391805862-53daf88e83cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhdCUyMGNhbmFyZHxlbnwwfHwwfHx8MA%3D%3D",
    prix: 26.5,
    description: "Magret de canard aux fruits rouges et pommes de terre",
  },
  {
    id: uuidv4(),
    category: "plats",
    nom: "Risotto aux Champignons",
    image:
      "https://plus.unsplash.com/premium_photo-1671377669877-353d90b53c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhdCUyMGNoYW1waWdub258ZW58MHx8MHx8fDA%3D",
    prix: 22.5,
    description: "Risotto crémeux aux champignons de saison",
  },
  {
    id: uuidv4(),
    category: "plats",
    nom: "Côte de Bœuf",
    image:
      "https://plus.unsplash.com/premium_photo-1669261882830-1e504a9abf1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhdCUyMGJvZXVmfGVufDB8fDB8fHww",
    prix: 32.5,
    description: "Côte de bœuf grillée avec sauce au poivre",
  },
  {
    id: uuidv4(),
    category: "plats",
    nom: "Ravioles de Homard",
    image:
      "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF2aW9sZXN8ZW58MHx8MHx8fDA%3D",
    prix: 28.5,
    description: "Ravioles fraîches au homard, sauce bisque",
  },

  // Desserts
  {
    id: uuidv4(),
    category: "desserts",
    nom: "Crème Brûlée",
    image:
      "https://images.unsplash.com/photo-1615234435691-3b7bae98085e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlbWUlMjBicnVsZXxlbnwwfHwwfHx8MA%3D%3D",
    prix: 8.5,
    description: "Crème brûlée à la vanille de Madagascar",
  },
  {
    id: uuidv4(),
    category: "desserts",
    nom: "Tarte Tatin",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFydGUlMjB0YXRpbnxlbnwwfHwwfHx8MA%3D%3D",
    prix: 9.5,
    description: "Tarte tatin traditionnelle, crème fraîche",
  },
  {
    id: uuidv4(),
    category: "desserts",
    nom: "Mousse au Chocolat",
    image:
      "https://images.unsplash.com/photo-1609915436944-3c8780d7dc78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c3NlJTIwY2hvY29sYXR8ZW58MHx8MHx8fDA%3D",
    prix: 8.5,
    description: "Mousse au chocolat noir, chantilly",
  },
  {
    id: uuidv4(),
    category: "desserts",
    nom: "Île Flottante",
    image:
      "https://assets.afcdn.com/recipe/20181017/82823_w1024h1024c1cx1869cy2492cxt0cyt0cxb3738cyb4984.jpg",
    prix: 9.5,
    description: "Île flottante à la vanille, caramel",
  },
  {
    id: uuidv4(),
    category: "desserts",
    nom: "Profiteroles",
    image:
      "https://mapatisserie.fr/wp-content/uploads/2021/02/recette-profiteroles-20210215_125634_mod-012-scaled.jpeg",
    prix: 10.5,
    description: "Profiteroles au chocolat chaud",
  },

  // Softs
  {
    id: uuidv4(),
    category: "softs",
    nom: "Virgin Mojito",
    image:
      "https://images-1.schellywood.be/thumbnail/njam-tile-big/56749/dsc1534.jpg",
    prix: 6.5,
    description: "Menthe fraîche, citron vert et sucre de canne",
  },
  {
    id: uuidv4(),
    category: "softs",
    nom: "Limonade Maison",
    image:
      "https://assets.afcdn.com/recipe/20160315/39982_w1024h1024c1cx2592cy1728.jpg",
    prix: 5.5,
    description: "Limonade fraîche avec menthe et fruits rouges",
  },
  {
    id: uuidv4(),
    category: "softs",
    nom: "Smoothie Tropical",
    image:
      "https://bakerbynature.com/wp-content/uploads/2020/06/Tropical-Smoothie-223.jpg",
    prix: 7.5,
    description: "Mélange de fruits exotiques et yaourt",
  },
  {
    id: uuidv4(),
    category: "softs",
    nom: "Thé Glacé Signature",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GrSy2UgIjIP4pQauJ_1vj11gXHZbe-jb4Q&s",
    prix: 6.5,
    description: "Thé noir glacé aux fruits rouges",
  },
  {
    id: uuidv4(),
    category: "softs",
    nom: "Eau Pétillante Aromatisée",
    image:
      "https://www.carola.fr/dynamic/images/gammes/cac_/carola_aromatisee_eau_de_source_3!_500x334!_3!_0x0!_0!_FFFFFF.jpg",
    prix: 4.5,
    description: "Eau pétillante aux agrumes et menthe",
  },

  // Bières
  {
    id: uuidv4(),
    category: "bieres",
    nom: "Blonde Artisanale",
    image:
      "https://www.lagorgefraiche.fr/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-03-at-15.02.21-1.jpeg",
    prix: 6.5,
    description: "Bière blonde locale, notes de miel",
  },
  {
    id: uuidv4(),
    category: "bieres",
    nom: "Ambrée de Saison",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2mHmFzY_tTUPYVYwWuJXRLQGhUpz3vyHgA&s",
    prix: 7.5,
    description: "Bière ambrée aux notes de caramel",
  },
  {
    id: uuidv4(),
    category: "bieres",
    nom: "Blanche aux Épices",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITYxgeTcGJMR6d1tXBJQiOUcalWWDuOp5VQ&s",
    prix: 6.5,
    description: "Bière blanche épicée, notes d'agrumes",
  },
  {
    id: uuidv4(),
    category: "bieres",
    nom: "IPA Locale",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl8RzbZhnvW1IWQ5S-2jGX6H5fEgLq6GooQ&s",
    prix: 8.5,
    description: "India Pale Ale locale, houblon intense",
  },
  {
    id: uuidv4(),
    category: "bieres",
    nom: "Stout au Café",
    image:
      "https://www.vivirtequila.com/cdn/shop/articles/CafeStout.jpg?v=1729785872&width=2048",
    prix: 7.5,
    description: "Stout infusé au café local",
  },

  // Cocktails
  {
    id: uuidv4(),
    category: "cocktails",
    nom: "Mojito Signature",
    image:
      "https://thumbs.dreamstime.com/b/mojito-ou-vierge-long-boisson-au-rhum-avec-du-sucre-de-canne-jus-citron-vert-%C3%A0-la-menthe-fra%C3%AEche-et-soda-209810057.jpg",
    prix: 12.5,
    description: "Rhum, menthe fraîche, citron vert et sucre de canne",
  },
  {
    id: uuidv4(),
    category: "cocktails",
    nom: "Old Fashioned",
    image:
      "https://assets.epicurious.com/photos/5e41a6d175661800087cc87c/1:1/w_2940,h_2940,c_limit/OldFashioned_HERO_020520_619.jpg",
    prix: 14.5,
    description: "Whisky, sucre, angostura et orange",
  },
  {
    id: uuidv4(),
    category: "cocktails",
    nom: "Margarita",
    image:
      "https://tequilaoclock.com/wp-content/uploads/2022/08/Classic-margarita_post_01.jpg",
    prix: 13.5,
    description: "Tequila, triple sec et citron vert",
  },
  {
    id: uuidv4(),
    category: "cocktails",
    nom: "Espresso Martini",
    image:
      "https://twicpics.krups.nl/https://sebplatform.api.groupe-seb.com/statics/fda34805-dd28-446a-bc24-3a982fc66091.jpg?w=1920&fit=scale",
    prix: 14.5,
    description: "Vodka, café et liqueur de café",
  },
  {
    id: uuidv4(),
    category: "cocktails",
    nom: "Gin Tonic Signature",
    image:
      "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wpxolufy/202b1799-5baa-4979-8aa5-7ebddee53717.jpeg",
    prix: 13.5,
    description: "Gin premium, tonic artisanal et fruits rouges",
  },
];
