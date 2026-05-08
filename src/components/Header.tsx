import { Search } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
        <a href="/" className="flex-shrink-0">
          <Logo />
        </a>

        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full border border-gray-300 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-[#F9C40F] focus:ring-2 focus:ring-[#F9C40F]/30 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#F9C40F] hover:bg-yellow-500 rounded-full p-1.5 transition-colors">
              <Search size={14} className="text-gray-700" />
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-5 text-sm flex-shrink-0">
          <a href="#" className="text-[#F9C40F] font-semibold italic text-base hover:text-yellow-600 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
            Liste de naissance
          </a>
          <a href="#" className="text-gray-700 hover:text-[#F9C40F] font-medium transition-colors">Blog</a>
          <a href="#" className="text-gray-700 hover:text-[#F9C40F] font-medium transition-colors">Nos magasins</a>
          <a href="#" className="text-gray-700 hover:text-[#F9C40F] font-medium transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
