import { MapPin, ShieldCheck, RotateCcw, Truck } from 'lucide-react';

const stores = ['Saint Denis', 'Saint Paul', 'Saint Pierre', 'Tampon'];

const onlineFeatures = [
  { icon: ShieldCheck, label: 'Paiement sécurisé' },
  { icon: RotateCcw, label: 'Retrait en magasin' },
  { icon: Truck, label: "Livraison sur toute l'île de La Réunion" },
];

export default function StoreInfo() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-base md:text-lg font-semibold text-gray-800 max-w-3xl mx-auto mb-10 leading-relaxed">
          Le Coin des Petits propose les plus grandes marques de puériculture aux meilleurs prix{' '}
          <span className="text-[#F9C40F]">sur l'île de la Réunion !</span>
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Physical stores */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-5 relative">
              {/* Stylised Réunion island outline */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="55" rx="28" ry="38" fill="#F9C40F" opacity="0.9" transform="rotate(-15 50 55)" />
                <circle cx="35" cy="30" r="5" fill="#2a8a7e" />
                <circle cx="60" cy="35" r="5" fill="#2a8a7e" />
                <circle cx="40" cy="70" r="5" fill="#2a8a7e" />
                <circle cx="65" cy="65" r="5" fill="#2a8a7e" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-gray-800 mb-3">Nos magasins à La Réunion :</h3>
            <ul className="space-y-1.5">
              {stores.map((store) => (
                <li key={store} className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <MapPin size={14} className="text-[#F9C40F]" />
                  {store}
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-gray-400 mt-4">Nos 4 magasins à La Réunion</p>
          </div>

          {/* Online store */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-5 flex items-center justify-center">
              {/* Stork icon approximation */}
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="20" r="10" fill="#F9C40F" />
                <rect x="52" y="29" width="4" height="30" rx="2" fill="#94a3b8" transform="rotate(10 52 29)" />
                <path d="M48 55 Q30 70 25 85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M58 55 Q65 70 62 85" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M55 30 Q75 35 80 28" stroke="#F9C40F" strokeWidth="3" strokeLinecap="round" fill="none" />
                <rect x="78" y="25" width="8" height="5" rx="1" fill="#F06C1C" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-gray-800 mb-3">Achat en ligne :</h3>
            <ul className="space-y-2">
              {onlineFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <Icon size={14} className="text-[#2a8a7e]" />
                  {label}
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-gray-400 mt-4">Livraison à domicile à La Réunion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
