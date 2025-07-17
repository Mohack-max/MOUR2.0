import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/logo hm Final1.jpeg.jpg"
                alt="HealthMOUR Logo"
                className="h-12 w-auto"
              />
              <span className="font-montserrat font-bold text-xl">
                healthMOUR
              </span>
            </div>
            <p className="font-open-sans text-gray-300 mb-4 max-w-md">
              {t('footer.mission')}
            </p>
            <div className="flex items-center space-x-2 text-secondary">
              <Heart className="h-4 w-4" />
              <span className="font-open-sans text-sm">
                {t('footer.together')}
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
                 healthmour@healthmour.org 
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                  +223 73 06 66 06
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="font-open-sans text-sm text-gray-300">
                Adresse : Cité Me Filifin DEMBLE
                Diatoula Extension - Bamako, Mali

                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Liens Rapides</h3>
            <div className="space-y-2">
              <a href="/our-work" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                {t('footer.quickLinks.ourWork')}
              </a>
              <a href="/founders" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                {t('footer.quickLinks.team')}
              </a>
              <a href="#" className="block font-open-sans text-sm text-secondary hover:text-primary transition-colors">
                {t('footer.quickLinks.volunteer')}
              </a>
              <a href="#" className="block font-open-sans text-sm text-gray-300 hover:text-secondary transition-colors">
                {t('footer.quickLinks.donate')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-open-sans text-sm text-gray-300">
            © 2024 healthMOUR.org. Tous droits réservés. | Créé avec ❤️ pour un monde en meilleure santé.
          </p>
        </div>
      </div>
    </footer>
  );
};
