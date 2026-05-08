import { ShoppingBag, Heart, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#F9C40F] py-2 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        <p className="text-gray-800 text-center flex-1">
          Livraison à La Réunion ou retrait dans nos{' '}
          <a href="#" className="font-bold underline hover:text-gray-600">4 Magasins</a>
          {' '}| Enseigne Péi | Service client{' '}
          <span className="font-bold">02 62 35 00 00</span>
        </p>
        <div className="hidden md:flex items-center gap-5 text-gray-800 flex-shrink-0">
          <button className="flex items-center gap-1 hover:text-gray-600 font-semibold transition-colors">
            <User size={15} /> MON COMPTE
          </button>
          <button className="flex items-center gap-1 hover:text-gray-600 font-semibold transition-colors">
            <Heart size={15} /> MA LISTE
          </button>
          <button className="flex items-center gap-1 hover:text-gray-600 font-semibold transition-colors">
            <ShoppingBag size={15} /> PANIER
            <span className="ml-0.5 bg-white text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
          </button>
        </div>
      </div>
    </div>
  );
}
