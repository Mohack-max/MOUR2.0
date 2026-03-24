import { ArrowRight, Heart, Users, Target, Eye, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthModal } from "@/components/AuthModal";
import { PaymentModal } from "@/components/PaymentModal";
import { useTranslation } from 'react-i18next';

/* ─── Ken Burns animation injected once ─────────────────────────────────────
   Only these styles are added — nothing else in the original file changes.
   The animation is pure CSS: slow zoom-in + gentle pan so the image feels
   alive without any layout changes.
─────────────────────────────────────────────────────────────────────────── */
const HERO_BG_STYLES = `
  @keyframes ken-burns-hm {
    0%   { transform: scale(1.00) translateY(0%);    }
    40%  { transform: scale(1.06) translateY(-3%);   }
    70%  { transform: scale(1.08) translateY(-5%);   }
    100% { transform: scale(1.00) translateY(0%);    }
  }

  .hero-bg-animated {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    animation: ken-burns-hm 22s ease-in-out infinite;
    will-change: transform;
    transform-origin: center center;
    pointer-events: none;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scale-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.8s ease-out forwards;
  }

  .animate-scale-in {
    animation: scale-in 0.6s ease-out forwards;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`;

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const interventionAreas = [
    {
      title: t('home.areas.health'),
      description: t('home.areas.healthDesc'),
      image: '/images/hospital.png',
      color: "text-red-500"
    },
    {
      title: t('home.areas.nutrition'),
      description: t('home.areas.nutritionDesc'),
      image: '/images/nutrition.png',
      color: "text-secondary"
    },
    {
      title: t('home.areas.education'),
      description: t('home.areas.educationDesc'),
      image: '/images/education.jpeg',
      color: "text-yellow-500"
    },
    {
      title: t('home.areas.wash'),
      description: t('home.areas.washDesc'),
      image: '/images/wash1.jpeg',
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Inject Ken Burns keyframes and animations */}
      <style>{HERO_BG_STYLES}</style>

      {/* Hero Section — identical structure to original, only bg image + class changed */}
      <section className="relative text-white min-h-[80vh] sm:min-h-[90vh] md:min-h-screen lg:min-h-[120vh] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* ★ Background: healthm.png with Ken Burns animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/healthm.png"
            alt="HealthMOUR field workers serving African children"
            className="hero-bg-animated"
          />
          {/* Subtle dark scrim so text stays readable — same opacity as original */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full animate-fade-in">
            {/* Content can be added here if needed */}
          </div>
        </div>

        {/* Floating CTA — exactly as original */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 z-20 w-full px-4 sm:px-0">
          <div className="flex justify-center">
            <Button
              onClick={() => navigate('/private-documents')}
              className="bg-white/95 text-primary font-montserrat font-semibold px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-md rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform whitespace-nowrap"
            >
              {t('navbar.privateDocuments')}
            </Button>
          </div>
        </div>
      </section>

      {/* Protected Content - Only visible to authenticated users */}
      {isAuthenticated && (
        <section className="py-8 sm:py-10 md:py-12 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-3 sm:mb-4 px-4">
                {t('home.welcome', { name: user?.firstName })}
              </h2>
              <p className="font-open-sans text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                {t('home.welcomeResources')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base sm:text-lg md:text-xl mb-2 truncate">{t('home.resources.manualTitle')}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm truncate">{t('home.resources.manualDesc')}</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base sm:text-lg md:text-xl mb-2 truncate">{t('home.resources.trainingTitle')}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm truncate">{t('home.resources.trainingDesc')}</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow w-full sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base sm:text-lg md:text-xl mb-2 truncate">{t('home.resources.communityTitle')}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm truncate">{t('home.resources.communityDesc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission, Vision, Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4 px-4">
              {t('home.commitment.title')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('home.commitment.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {/* Mission */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-left w-full">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-primary">
                  {t('home.commitment.mission')}
                </h3>
                <p className="font-open-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t('home.commitment.missionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in w-full">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-secondary" />
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-secondary">
                  {t('home.commitment.vision')}
                </h3>
                <p className="font-open-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t('home.commitment.visionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-right w-full md:col-span-2 lg:col-span-1">
              <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-accent">
                  {t('home.commitment.values')}
                </h3>
                <p className="font-open-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t('home.commitment.valuesDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4 px-4">
              {t('home.areas.title')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t('home.areas.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
            {interventionAreas.map((area, index) => (
              <Card
                key={area.title}
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 sm:p-6 md:p-7 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="max-w-full h-auto w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain" 
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-base sm:text-lg md:text-xl mb-2 text-gray-900">
                    {area.title}
                  </h3>
                  <p className="font-open-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 px-4">
            {t('home.cta.title')}
          </h2>
          <p className="font-open-sans text-base sm:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto px-4">
            {t('home.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full shadow-lg transition-all hover:scale-105 w-full sm:w-auto"
            >
              {t('home.cta.donate')}
            </Button>
            <Button 
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full transition-all hover:scale-105 w-full sm:w-auto"
            >
              {t('home.cta.volunteer')}
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
};

export default Home;