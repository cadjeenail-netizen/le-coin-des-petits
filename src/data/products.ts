export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: 'Nouveau' | 'Promo' | 'Exclusif';
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Lit à barreaux Bari coulissant 60x120',
    brand: 'Sauthon',
    price: 189.90,
    category: 'chambre',
    image: 'https://placehold.co/400x400/fff9e6/c9941a?text=Lit+Bébé&font=playfair-display',
  },
  {
    id: 2,
    name: 'Commode Basic 3 tiroirs plan à langer',
    brand: 'Sauthon',
    price: 216.00,
    category: 'chambre',
    image: 'https://placehold.co/400x400/fff9e6/c9941a?text=Commode&font=playfair-display',
    badge: 'Nouveau',
  },
  {
    id: 3,
    name: 'Poussette Duo Muze + siège auto',
    brand: 'Joie',
    price: 199.90,
    category: 'poussette',
    image: 'https://placehold.co/400x400/e8f4fd/1a6fa3?text=Poussette&font=playfair-display',
  },
  {
    id: 4,
    name: 'Siège auto i-Spin 360 i-Size',
    brand: 'Cybex',
    price: 299.00,
    originalPrice: 349.00,
    category: 'siege-auto',
    image: 'https://placehold.co/400x400/fce4ec/b71c1c?text=Siège+Auto&font=playfair-display',
    badge: 'Promo',
  },
  {
    id: 5,
    name: 'Baignoire Vasco + pied bois',
    brand: 'Stokke',
    price: 79.90,
    category: 'toilette',
    image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Baignoire&font=playfair-display',
  },
  {
    id: 6,
    name: 'Matelas Croissance 60x120 cm',
    brand: 'Tineo',
    price: 59.90,
    category: 'chambre',
    image: 'https://placehold.co/400x400/fff9e6/c9941a?text=Matelas&font=playfair-display',
  },
  {
    id: 7,
    name: 'Chaise haute Tripp Trapp',
    brand: 'Stokke',
    price: 249.00,
    category: 'repas',
    image: 'https://placehold.co/400x400/f3e5f5/6a1b9a?text=Chaise+Haute&font=playfair-display',
    badge: 'Exclusif',
  },
  {
    id: 8,
    name: "Tapis d'éveil Deluxe Gymini",
    brand: 'Tiny Love',
    price: 69.90,
    category: 'eveil',
    image: 'https://placehold.co/400x400/e0f7fa/006064?text=Tapis+Éveil&font=playfair-display',
  },
  {
    id: 9,
    name: 'Écharpe de portage Softness',
    brand: 'Nuna',
    price: 49.90,
    originalPrice: 65.00,
    category: 'sortie',
    image: 'https://placehold.co/400x400/fef9c3/854d0e?text=Porte-bébé&font=playfair-display',
    badge: 'Promo',
  },
  {
    id: 10,
    name: 'Tire-lait électrique double',
    brand: 'Medela',
    price: 159.00,
    category: 'maternite',
    image: 'https://placehold.co/400x400/fdf2f8/831843?text=Tire-lait&font=playfair-display',
    badge: 'Nouveau',
  },
  {
    id: 11,
    name: 'Babyphone vidéo HD Motorola',
    brand: 'Motorola',
    price: 89.90,
    category: 'securite',
    image: 'https://placehold.co/400x400/ecfdf5/065f46?text=Babyphone&font=playfair-display',
  },
  {
    id: 12,
    name: 'Transat ergonomique Air',
    brand: 'Babybjörn',
    price: 129.00,
    category: 'eveil',
    image: 'https://placehold.co/400x400/eff6ff/1e40af?text=Transat&font=playfair-display',
  },
];
