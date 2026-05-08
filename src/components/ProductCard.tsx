import { Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '../data/products';

function formatPrice(price: number) {
  const euros = Math.floor(price);
  const cents = Math.round((price - euros) * 100).toString().padStart(2, '0');
  return { euros, cents };
}

const badgeStyles: Record<string, string> = {
  Nouveau: 'bg-[#F9C40F] text-gray-800',
  Promo: 'bg-red-500 text-white',
  Exclusif: 'bg-[#2a8a7e] text-white',
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { euros, cents } = formatPrice(product.price);

  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#F9C40F]/40 transition-all duration-200 group flex flex-col">
      <div className="relative overflow-hidden rounded-t-xl">
        {product.badge && (
          <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}
        <button
          className="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
          aria-label="Ajouter à ma liste"
        >
          <Heart size={13} className="text-gray-300 group-hover:text-red-400 transition-colors" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">{product.brand}</p>
        <h3 className="text-sm text-gray-800 leading-snug line-clamp-2 flex-1 mb-3">{product.name}</h3>

        <div className="flex items-end justify-between gap-2">
          <div>
            {product.originalPrice && (
              <p className="text-xs text-gray-400 line-through leading-none mb-0.5">
                {formatPrice(product.originalPrice).euros}€{formatPrice(product.originalPrice).cents}
              </p>
            )}
            <p className="text-lg font-black text-gray-900 leading-none">
              {euros}<span className="text-sm font-bold">€{cents}</span>
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#F9C40F] hover:bg-yellow-500 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors">
            <ShoppingCart size={11} />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
