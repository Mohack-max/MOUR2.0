import { Mail, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

const Founders = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      alert(t('navbar.volunteerSuccess', { name: user?.firstName }));
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const founder = {
    name: "Dr. Youssouf Keita",
    title: t('founders.founderTitle'),
    image: "/images/youssouf.jpeg",
    bio: t('founders.founderBio'),
    education: t('founders.founderEducation'),
    experience: t('founders.founderExperience'),
    email: "youssnigga@gmail.com",
    linkedin: "#",
    twitter: "#"
  };

  const collaborators = [
    {
      name: "Dr.Habibatou dite Mah TRAORE",
      role: t('founders.collaborators.habibatou.role'),
      image: "/images/habibatou.jpeg",
      speciality: t('founders.collaborators.habibatou.speciality'),
      location: t('founders.collaborators.habibatou.location')
    },
    {
      name: "M.Ibrahim TERERA",
      role: t('founders.collaborators.ibrahim.role'),
      image: "",
      speciality: t('founders.collaborators.ibrahim.speciality'),
      location: t('founders.collaborators.ibrahim.location')
    },
    {
      name: "Dr Souleymane SAWADOGO",
      role: t('founders.collaborators.souleymane.role'),
      image: "",
      speciality: t('founders.collaborators.souleymane.speciality'),
      location: t('founders.collaborators.souleymane.location')
    },
    {
      name: "Dr Fadjiné DIARRA",
      role: t('founders.collaborators.fadjine.role'),
      image: "/images/fadjine.jpeg",
      speciality: t('founders.collaborators.fadjine.speciality'),
      location: t('founders.collaborators.fadjine.location')
    },
    {
      name: "M. Modibo KEITA",
      role: t('founders.collaborators.modibo.role'),
      image: "",
      speciality: t('founders.collaborators.modibo.speciality'),
      location: t('founders.collaborators.modibo.location')
    },
    {
      name: "Unknown",
      role: t('founders.collaborators.fatoumata.role'),
      image: "",
      speciality: t('founders.collaborators.fatoumata.speciality'),
      location: t('founders.collaborators.fatoumata.location')
    },
    {
      name: "Masseni TRAORE",
      role: t('founders.collaborators.awa.role'),
      image: "",
      speciality: t('founders.collaborators.awa.speciality'),
      location: t('founders.collaborators.awa.location')
    },
    {
      name: "Mr.Sekouli TRAORE",
      role: t('founders.collaborators.mamadou.role'),
      image: "",
      speciality: t('founders.collaborators.mamadou.speciality'),
      location: t('founders.collaborators.mamadou.location')
    },
    {
      name: "DR Diallo Kadiatou NDIAYE",
      role: t('founders.collaborators.aminata.role'),
      image: "",
      speciality: t('founders.collaborators.aminata.speciality'),
      location: t('founders.collaborators.aminata.location')
    },
    {
      name: "Dr. Kancou CISSOKO",
      role: t('founders.collaborators.moussa.role'),
      image: "",
      speciality: t('founders.collaborators.moussa.speciality'),
      location: t('founders.collaborators.moussa.location')
    },
    {
      name: "Dr Hamed DIALLO",
      role: t('founders.collaborators.mariam.role'),
      image: "",
      speciality: t('founders.collaborators.mariam.speciality'),
      location: t('founders.collaborators.mariam.location')
    },
    {
      name: "Mr. Adama TRAORE",
      role: t('founders.collaborators.adama.role'),
      image: "",
      speciality: t('founders.collaborators.adama.speciality'),
      location: t('founders.collaborators.adama.location')
    },
    {
      name: "Dr. Nene KONIPO",
      role: t('founders.collaborators.salif.role'),
      image: "",
      speciality: t('founders.collaborators.salif.speciality'),
      location: t('founders.collaborators.salif.location')
    },
    {
      name: "Mr. Ibrahim MANE",
      role: t('founders.collaborators.fanta.role'),
      image: "",
      speciality: t('founders.collaborators.fanta.speciality'),
      location: t('founders.collaborators.fanta.location')
    },
    {
      name: "M. Barke CISSE",
      role: t('founders.collaborators.oumar.role'),
      image: "",
      speciality: t('founders.collaborators.oumar.speciality'),
      location: t('founders.collaborators.oumar.location')
    },
    {
      name: "Mr. Teilo DIAL",
      role: t('founders.collaborators.kadidia.role'),
      image: "",
      speciality: t('founders.collaborators.kadidia.speciality'),
      location: t('founders.collaborators.kadidia.location')
    }
  ];

  return (
    <div className="min-h-screen">
      {isAuthModalOpen && (
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 py-10 sm:py-14 md:py-16">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5">
              {t('founders.heroTitle')}
            </h1>
            <p className="font-open-sans text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-8">
              {t('founders.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center mb-6 sm:mb-8 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-3">
              {t('founders.behindTitle')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              {t('founders.behindDesc')}
            </p>
          </div>
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-primary shadow-lg mb-2 sm:mb-4"
            />
            <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-gray-900 mb-1 sm:mb-2 text-center">
              {founder.name}
            </h3>
            <p className="font-open-sans text-base sm:text-lg text-primary mb-1 sm:mb-2 text-center">
              {founder.title}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4 justify-center">
              <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-open-sans">
                {founder.education}
              </span>
              <span className="bg-secondary/10 text-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-open-sans">
                {founder.experience}
              </span>
            </div>
            <div className="relative group mb-2 sm:mb-4">
              <p className="font-open-sans text-xs text-gray-600 leading-relaxed text-center max-w-xs sm:max-w-xl line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {founder.bio}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            <div className="flex space-x-2 sm:space-x-4 justify-center">
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{t('navbar.contact')}</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <span>{t('navbar.linkedin')}</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <span>{t('navbar.twitter')}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-4">
              {t('founders.teamTitle')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              {t('founders.teamDesc')}
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-4 sm:gap-6 justify-center pb-4 overflow-x-auto">
            {collaborators.map((collaborator, index) => (
              <div
                key={collaborator.name}
                className="group relative flex-shrink-0 w-48 h-64 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

                {/* Profile Image */}
                <div className="relative z-10 flex flex-col items-center pt-6">
                  {collaborator.image ? (
                    <img
                      src={collaborator.image}
                      alt={collaborator.name}
                      className="w-20 h-20 object-cover rounded-full border-3 border-primary shadow-md mb-3"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full border-3 border-primary bg-gray-200 flex items-center justify-center shadow-md mb-3">
                      <span className="font-montserrat font-bold text-gray-600 text-lg">
                        {collaborator.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Always Visible Info */}
                  <h4 className="font-montserrat font-bold text-sm mb-1 text-gray-900 text-center px-3">
                    {collaborator.name}
                  </h4>
                  <p className="font-open-sans text-xs text-primary mb-2 text-center px-3">
                    {collaborator.role}
                  </p>
                  <p className="font-open-sans text-xs text-gray-500 text-center px-3">
                    {collaborator.location}
                  </p>
                </div>

                {/* Hover Overlay with Additional Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-open-sans text-xs text-gray-200 mb-2 leading-relaxed">
                      {collaborator.speciality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Join Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-6">
            {t('founders.joinTitle')}
          </h2>
          <p className="font-open-sans text-base sm:text-lg lg:text-xl mb-4 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto">
            {t('founders.joinDesc')}
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="font-montserrat bg-green-600 hover:bg-green-700 text-white border-none text-base sm:text-lg px-6 py-6"
              onClick={handleVolunteerClick}
            >
              {t('navbar.becomeMemberVolunteer')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;
