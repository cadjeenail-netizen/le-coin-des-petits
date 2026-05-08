import Logo from './Logo';

const footerLinks = [
  {
    title: 'Le Coin des Petits',
    links: ['À propos', 'Nos magasins', 'Blog', 'Contact', 'Recrutement'],
  },
  {
    title: 'Service client',
    links: ['FAQ', 'Retours & échanges', 'Livraison', 'Suivi commande', 'Garanties'],
  },
  {
    title: 'Mon compte',
    links: ['Mon compte', 'Mes commandes', 'Ma liste de naissance', 'Mes favoris'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-sm mt-4 text-gray-400 leading-relaxed">
              La puériculture aux meilleurs prix à La Réunion. 4 magasins & boutique en ligne.
            </p>
            <p className="text-sm font-semibold text-[#F9C40F] mt-3">02 62 35 00 00</p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-[#F9C40F] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Le Coin des Petits — Tous droits réservés</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors">CGV</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
