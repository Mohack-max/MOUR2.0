import { ArrowRight, Heart, Users, Target, Eye, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { PaymentModal } from "@/components/PaymentModal";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { t } = useTranslation();

  const interventionAreas = [
    {
      title: t('home.areas.health'),
      description: t('home.areas.healthDesc'),
      image: '/images/hospital.png', // Example image
      color: "text-red-500"
    },
    {
      title: t('home.areas.nutrition'),
      description: t('home.areas.nutritionDesc'),
      image: '/images/nutrition.png', // Example image
      color: "text-secondary"
    },
    {
      title: t('home.areas.education'),
      description: t('home.areas.educationDesc'),
      image: '/images/education.jpeg', // Example image
      color: "text-yellow-500"
    },
    {
      title: t('home.areas.wash'),
      description: t('home.areas.washDesc'),
      image: '/images/wash.png', // Example image
      color: "text-primary"
    }
  ];

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      alert(`Merci ${user?.firstName} ! Vous êtes maintenant inscrit comme bénévole. Nous vous contacterons bientôt.`);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              healthMOUR
            </h1>
            <p className="font-open-sans text-lg sm:text-xl lg:text-2xl mb-2 md:mb-4 text-blue-100">
              {t('home.hero.subtitle')}
            </p>
            <p className="font-open-sans text-base sm:text-lg lg:text-xl mb-4 md:mb-8 text-blue-100 max-w-2xl md:max-w-3xl mx-auto">
              {t('home.hero.equation')}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleVolunteerClick}
                className="bg-secondary hover:bg-secondary/90 text-white font-montserrat text-base sm:text-lg px-4 sm:px-8"
              >
                {t('home.hero.becomeVolunteer')}
              </Button>
              <Button
                size="lg"
                onClick={() => setIsPaymentModalOpen(true)}
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary font-montserrat text-base sm:text-lg px-4 sm:px-8"
              >
                {t('home.hero.donate')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Content - Only visible to authenticated users */}
      {isAuthenticated && (
        <section className="py-8 sm:py-12 bg-secondary/10">
          <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-2 md:mb-4">
                {t('home.welcome', { name: user?.firstName })}
              </h2>
              <p className="font-open-sans text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
                {t('home.welcomeResources')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base md:text-lg mb-1 md:mb-2">{t('home.resources.manualTitle')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('home.resources.manualDesc')}</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base md:text-lg mb-1 md:mb-2">{t('home.resources.trainingTitle')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('home.resources.trainingDesc')}</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="font-montserrat font-semibold text-base md:text-lg mb-1 md:mb-2">{t('home.resources.communityTitle')}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{t('home.resources.communityDesc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mission, Vision, Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 md:mb-4">
              {t('home.commitment.title')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              {t('home.commitment.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Mission */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-lg md:text-xl mb-2 md:mb-4 text-primary">
                  {t('home.commitment.mission')}
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed text-sm md:text-base">
                  {t('home.commitment.missionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Eye className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
                </div>
                <h3 className="font-montserrat font-bold text-lg md:text-xl mb-2 md:mb-4 text-secondary">
                  {t('home.commitment.vision')}
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed text-sm md:text-base">
                  {t('home.commitment.visionDesc')}
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-lg md:text-xl mb-2 md:mb-4 text-accent">
                  {t('home.commitment.values')}
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed text-sm md:text-base">
                  {t('home.commitment.valuesDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 md:mb-4">
              {t('home.areas.title')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              {t('home.areas.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {interventionAreas.map((area, index) => (
              <Card
                key={area.title}
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <img src={area.image} alt={area.title} className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg md:text-xl mb-1 md:mb-3 text-gray-900">
                    {area.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-xs md:text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 md:mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="font-open-sans text-base sm:text-lg lg:text-xl mb-4 md:mb-8 max-w-2xl md:max-w-3xl mx-auto">
            {t('home.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleVolunteerClick}
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary font-montserrat text-base sm:text-lg px-4 sm:px-8"
            >
              {t('home.cta.becomeVolunteer')}
            </Button>
            <Button
              size="lg"
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 font-montserrat text-base sm:text-lg px-4 sm:px-8"
            >
              {t('home.cta.donate')}
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
