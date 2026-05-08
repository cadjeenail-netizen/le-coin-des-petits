import { ShoppingCart, Clock, BookOpen } from 'lucide-react';

export default function BannerGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-[380px]">

        {/* Pack Confort — spans 2 cols */}
        <div className="lg:col-span-2 bg-[#f1f8ee] border border-[#d4e8c4] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9C40F]/10 rounded-full -translate-y-8 translate-x-8" />

          <div>
            <div className="flex items-start justify-between mb-3">
              <div className="bg-[#F9C40F] px-3 py-1 rounded-full" style={{ borderRadius: '60% 40% 55% 45% / 48% 62% 38% 52%' }}>
                <span className="text-[8px] font-semibold text-gray-600 block leading-none">Le coin des</span>
                <span className="text-sm font-black text-gray-800 leading-none">petits</span>
              </div>
              <span className="text-[10px] text-gray-400">www.lecoindespetits.com</span>
            </div>

            <h2 className="text-3xl font-black text-[#F5A623] italic mb-1 tracking-tight">PACK CONFORT</h2>
            <div className="w-16 h-0.5 bg-[#F9C40F] mb-3" />

            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              {['Lit Bari coulissant 60x120', 'Commode Basic', 'Matelas Croissance', 'Poussette Duo Muze', 'Baignoire Vasco + pied'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#F9C40F] font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs font-bold text-gray-600 italic">+ Carte VIP offerte ! (valeur de 30€)</p>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { label: '216€', name: 'Commode', bg: 'bg-white' },
              { label: '199€90', name: 'Poussette', bg: 'bg-white' },
              { label: '79€90', name: 'Baignoire', bg: 'bg-white' },
            ].map((item) => (
              <div key={item.name} className={`${item.bg} rounded-xl p-2 text-center border border-gray-100 shadow-sm`}>
                <div className="text-2xl mb-1">🛏️</div>
                <p className="text-xs font-bold text-gray-800">{item.label}</p>
                <p className="text-[10px] text-gray-500">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured product */}
        <div className="lg:col-span-1 relative rounded-2xl overflow-hidden bg-gray-100 min-h-[300px] lg:min-h-0">
          <img
            src="https://placehold.co/400x500/f0f4f8/94a3b8?text=Lit+Bébé"
            alt="Lit bébé"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-3 left-3 bg-white/90 text-gray-500 text-[10px] px-2 py-0.5 rounded font-medium">
            PHOTO NON CONTRACTUELLE
          </div>
          <div className="absolute bottom-14 right-3 bg-[#2a8a7e] text-white px-3 py-1.5 rounded-full font-black text-sm shadow-lg">
            189€90
          </div>
          <button className="absolute bottom-4 left-3 right-3 bg-[#2a8a7e] hover:bg-[#23766b] text-white py-2 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={14} />
            Cliquez ici pour commander !
          </button>
        </div>

        {/* Right tiles */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {/* Click & Collect */}
          <div className="flex-1 bg-[#F06C1C] text-white rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[160px]">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
              <Clock size={22} className="text-white" />
            </div>
            <p className="text-base font-bold leading-tight">Click &amp; Collect</p>
            <p className="text-3xl font-black leading-none mt-1">2 HEURES</p>
            <p className="text-xs mt-2 text-orange-100">Retrait en magasin</p>
          </div>

          {/* Catalogue */}
          <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[160px] hover:border-[#F9C40F] transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-[#F9C40F]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#F9C40F]/20 transition-colors">
              <BookOpen size={22} className="text-[#F9C40F]" />
            </div>
            <p className="text-sm font-bold text-gray-700 leading-tight">CATALOGUE</p>
            <p className="text-xs font-semibold text-[#F9C40F] mt-0.5">INSPIRATION BÉBÉ</p>
            <p className="text-xs text-gray-400 mt-2 italic">Cliquez ici pour découvrir !</p>
          </div>
        </div>

      </div>
    </section>
  );
}
