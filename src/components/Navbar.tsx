import { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { categories } from '../data/categories';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-16 pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo */}
        <span className="text-xl font-black tracking-tight text-white flex-shrink-0">
          Le coin des petits
        </span>

        {/* Category links — desktop */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto flex-1 justify-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative flex-shrink-0"
              onMouseEnter={() => setActiveDropdown(cat.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#"
                className={`flex items-center gap-0.5 px-2.5 py-1.5 text-xs font-semibold tracking-wide rounded-lg transition-colors duration-150 ${
                  activeDropdown === cat.id
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
                <ChevronDown size={10} className={`transition-transform duration-150 ${activeDropdown === cat.id ? 'rotate-180' : ''}`} />
              </a>

              {activeDropdown === cat.id && (
                <div className="absolute top-full left-0 mt-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl py-2 z-50 min-w-[190px] shadow-2xl">
                  {cat.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="flex items-center gap-2 px-4 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="w-1 h-1 bg-white/40 rounded-full flex-shrink-0" />
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button className="flex-shrink-0 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
          <ShoppingBag size={14} />
          <span className="hidden sm:inline">Panier</span>
        </button>
      </div>
    </div>
  );
}
