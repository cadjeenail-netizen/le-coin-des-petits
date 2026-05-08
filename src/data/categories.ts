export interface Category {
  id: string;
  label: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 'chambre',
    label: 'CHAMBRE',
    subcategories: ['Les meubles', 'Matelas', 'Cododos', "Fauteuils d'allaitement", 'Côté déco', 'Linge de lit', 'Moustiquaires', 'Mobiles musicaux', 'Veilleuses', 'Humidificateurs', 'Plans inclinés et Cale-bébés', 'Ecoute-bébé'],
  },
  {
    id: 'poussette',
    label: 'POUSSETTE',
    subcategories: ['Poussettes combinées', 'Poussettes légères', 'Poussettes 3 roues', 'Nacelles', 'Accessoires poussette', 'Housses et couvre-pieds'],
  },
  {
    id: 'siege-auto',
    label: 'SIEGE AUTO',
    subcategories: ['Groupe 0+', 'Groupe 0/1', 'Groupe 1/2/3', 'Coques bébé', 'Réhausseurs', 'Accessoires siège auto'],
  },
  {
    id: 'sortie',
    label: 'SORTIE',
    subcategories: ['Porte-bébés', 'Sacs à langer', 'Landaus', 'Protections soleil & pluie', 'Moustiquaires poussette'],
  },
  {
    id: 'toilette',
    label: 'TOILETTE',
    subcategories: ['Baignoires', 'Tables à langer', 'Thermomètres', 'Soins bébé', 'Couches & changes', 'Bains'],
  },
  {
    id: 'repas',
    label: 'REPAS',
    subcategories: ['Chaises hautes', 'Tire-laits', 'Biberons', 'Vaisselle bébé', 'Stérilisateurs', 'Diversification alimentaire'],
  },
  {
    id: 'eveil',
    label: 'EVEIL',
    subcategories: ["Tapis d'éveil", 'Mobiles', 'Jouets premier âge', 'Livres bébé', 'Portiques', 'Balancelles & bouncers'],
  },
  {
    id: 'securite',
    label: 'SECURITE',
    subcategories: ['Barrières', 'Protège-coins', 'Moniteurs bébé', 'Détecteurs de mouvement', 'Verrous & sécurités', 'Protège-prises'],
  },
  {
    id: 'maternite',
    label: 'MATERNITE',
    subcategories: ["Coussins d'allaitement", 'Ceintures de grossesse', 'Soins maman', 'Tire-laits', 'Soutiens-gorge allaitement'],
  },
  {
    id: 'jouets',
    label: 'JOUETS',
    subcategories: ['Peluches', 'Jeux de bain', "Jeux d'éveil", 'Livres', 'Puzzles bébé', 'Vélos & trotteurs'],
  },
];
