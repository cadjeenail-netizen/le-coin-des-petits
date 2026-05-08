import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-black text-gray-800">Nos produits à la une</h2>
            <div className="w-10 h-1 bg-[#F9C40F] rounded-full mt-1" />
          </div>
          <a href="#" className="text-sm text-[#F9C40F] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Voir tout <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
