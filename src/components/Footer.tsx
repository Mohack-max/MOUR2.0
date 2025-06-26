import { Heart, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo hm Final1.jpeg.jpg"
                alt="HealthMOUR Logo"
                className="h-12 w-auto"
              />
              <span className="font-montserrat font-bold text-xl">
                HealthMOUR
              </span>
            </div>
            <p className="font-open-sans text-gray-300 mb-4 max-w-md">
              Surveillance sanitaire, Organisation, Compréhension et Résolution des problèmes de santé dans nos communautés.
            </p>
            <div className="flex items-center space-x-2 text-secondary">
              <Heart className="h-4 w-4" />
              <span className="font-open-sans text-sm">
                Ensemble pour une meilleure santé communautaire
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                  contact@healthmour.org
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                  +223 76489119
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                  Mali, Bamako
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Liens Rapides</h3>
            <div className="space-y-2">
              <a href="/our-work" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                Notre Travail
              </a>
              <a href="/founders" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                Équipe
              </a>
              <a href="#" className="block font-open-sans text-sm text-secondary hover:text-primary transition-colors">
                Devenir Bénévole
              </a>
              <a href="#" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                Faire un Don
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-open-sans text-sm text-gray-300">
            © 2024 HealthMOUR.org. Tous droits réservés. | Créé avec ❤️ pour un monde en meilleure santé.
          </p>
        </div>
      </div>
    </footer>
  );
};
