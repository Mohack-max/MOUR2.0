import { Mail, Linkedin, Twitter, Users, Award, Globe, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Founders = () => {
  const { t } = useTranslation();
  // Placeholder data - replace with actual founder information
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
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: t('founders.collaborators.modibo.speciality'),
      location: t('founders.collaborators.modibo.location')
    },
    {
      name: "Mme Fatoumata Dembélé",
      role: t('founders.collaborators.fatoumata.role'),
      image: "/images/master2.jpeg",
      speciality: t('founders.collaborators.fatoumata.speciality'),
      location: t('founders.collaborators.fatoumata.location')
    },
    // New collaborators
    {
      name: "Dr. Awa Coulibaly",
      role: t('founders.collaborators.awa.role'),
      image: "/images/collab1.jpeg",
      speciality: t('founders.collaborators.awa.speciality'),
      location: t('founders.collaborators.awa.location')
    },
    {
      name: "M. Mamadou Sidibé",
      role: t('founders.collaborators.mamadou.role'),
      image: "/images/download1.jpg",
      speciality: t('founders.collaborators.mamadou.speciality'),
      location: t('founders.collaborators.mamadou.location')
    },
    {
      name: "Mme Aminata Traoré",
      role: t('founders.collaborators.aminata.role'),
      image: "/images/collab3.jpeg",
      speciality: t('founders.collaborators.aminata.speciality'),
      location: t('founders.collaborators.aminata.location')
    },
    {
      name: "Dr. Moussa Konaté",
      role: t('founders.collaborators.moussa.role'),
      image: "/images/collab4.jpeg",
      speciality: t('founders.collaborators.moussa.speciality'),
      location: t('founders.collaborators.moussa.location')
    },
    {
      name: "Mme Mariam Doumbia",
      role: t('founders.collaborators.mariam.role'),
      image: "/images/collab5.jpeg",
      speciality: t('founders.collaborators.mariam.speciality'),
      location: t('founders.collaborators.mariam.location')
    },
    {
      name: "M. Adama Diarra",
      role: t('founders.collaborators.adama.role'),
      image: "/images/collab6.jpeg",
      speciality: t('founders.collaborators.adama.speciality'),
      location: t('founders.collaborators.adama.location')
    },
    {
      name: "Dr. Salif Camara",
      role: t('founders.collaborators.salif.role'),
      image: "/images/collab7.jpeg",
      speciality: t('founders.collaborators.salif.speciality'),
      location: t('founders.collaborators.salif.location')
    },
    {
      name: "Mme Fanta Sissoko",
      role: t('founders.collaborators.fanta.role'),
      image: "/images/collab8.jpeg",
      speciality: t('founders.collaborators.fanta.speciality'),
      location: t('founders.collaborators.fanta.location')
    },
    {
      name: "M. Oumar Sangaré",
      role: t('founders.collaborators.oumar.role'),
      image: "/images/collab9.jpeg",
      speciality: t('founders.collaborators.oumar.speciality'),
      location: t('founders.collaborators.oumar.location')
    },
    {
      name: "Mme Kadidia Cissé",
      role: t('founders.collaborators.kadidia.role'),
      image: "/images/collab10.jpeg",
      speciality: t('founders.collaborators.kadidia.speciality'),
      location: t('founders.collaborators.kadidia.location')
    }
  ];

  const stats = [
    { value: "15+", label: "Années d'Expérience", icon: Award },
    { value: "DES", label: "Experts Internationaux", icon: Users },
    { value: "2", label: "Pays Représentés", icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              {t('founders.heroTitle')}
            </h1>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t('founders.heroDesc')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-6 shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-montserrat font-bold text-2xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-open-sans text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {t('founders.behindTitle')}
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              {t('founders.behindDesc')}
            </p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-primary shadow-lg mb-4"
            />
            <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-2 text-center">
              {founder.name}
            </h3>
            <p className="font-open-sans text-lg text-primary mb-2 text-center">
              {founder.title}
            </p>
            <div className="flex flex-wrap gap-4 mb-4 justify-center">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-open-sans">
                {founder.education}
              </span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-open-sans">
                {founder.experience}
              </span>
            </div>
            <p className="font-open-sans text-gray-600 leading-relaxed mb-4 text-center max-w-xl">
              {founder.bio}
            </p>
            <div className="flex space-x-4 justify-center">
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              {t('founders.teamTitle')}
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              {t('founders.teamDesc')}
            </p>
          </div>

          <div className="flex flex-row gap-6 overflow-x-auto pb-4">
            {collaborators.map((collaborator, index) => (
              <div
                key={collaborator.name}
                className="group relative flex-shrink-0 w-56 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={collaborator.image}
                  alt={collaborator.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mt-6 border-4 border-primary group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="text-center mt-4 mb-6 px-4">
                  <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-1">
                    {collaborator.name}
                  </h3>
                  <p className="font-open-sans text-primary text-sm mb-1">
                    {collaborator.role}
                  </p>
                  <p className="font-open-sans text-gray-600 text-xs mb-1">
                    {collaborator.speciality}
                  </p>
                  <p className="font-open-sans text-gray-500 text-xs mb-2">
                    {collaborator.location}
                  </p>
                  <div className="flex justify-center space-x-2 mb-2">
                    {/* Social icons here */}
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-hover:overflow-auto group-hover:mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-gray-700 text-xs mb-2">{collaborator.speciality || "Biographie à venir..."}</p>
                    <button className="text-primary underline text-xs">Lire plus</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      w
      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            {t('founders.joinTitle')}
          </h2>
          <p className="font-open-sans text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            {t('founders.joinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary font-montserrat text-lg px-8"
            >
              {t('founders.joinVolunteer')}
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-montserrat text-lg px-8"
            >
              {t('founders.joinApply')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;
