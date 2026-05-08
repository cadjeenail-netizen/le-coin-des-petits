import { useState } from 'react';
import { ChevronDown, Home } from 'lucide-react';
import { categories } from '../data/categories';

export default function CategoryNav() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center overflow-x-auto scrollbar-hide">
          <li className="flex-shrink-0 border-r border-gray-200">
            <a href="#" className="flex items-center justify-center px-4 py-3 text-gray-500 hover:text-[#F9C40F] hover:bg-gray-50 transition-colors h-full">
              <Home size={16} />
            </a>
          </li>

          {categories.map((cat) => (
            <li
              key={cat.id}
              className="relative flex-shrink-0"
              onMouseEnter={() => setActive(cat.id)}
              onMouseLeave={() => setActive(null)}
            >
              <a
                href="#"
                className={`flex items-center gap-1 px-3 py-3 text-xs font-bold tracking-wide transition-colors whitespace-nowrap ${
                  active === cat.id
                    ? 'text-[#F9C40F] bg-gray-50'
                    : 'text-gray-700 hover:text-[#F9C40F] hover:bg-gray-50'
                }`}
              >
                {cat.label}
                <ChevronDown size={11} className={`transition-transform ${active === cat.id ? 'rotate-180' : ''}`} />
              </a>

              {active === cat.id && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 py-2 z-50 min-w-[200px] rounded-b-lg">
                  {cat.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-[#F9C40F]/10 hover:text-gray-900 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F9C40F] rounded-full mr-2 flex-shrink-0" />
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
