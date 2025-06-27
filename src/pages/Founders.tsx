import { Mail, Linkedin, Twitter, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Founders = () => {
  // Placeholder data - replace with actual founder information
  const founder = {
    name: "Dr. Youssouf Keita",
    title: "Cofondateur & President du conseil d'administration",
    image: "/youssouf.jpeg",
    bio: "Médecin de santé publique avec plus de 15 ans d'expérience dans le développement de programmes de santé communautaire en Afrique et en Europe. Passionnée par l'approche holistique de la santé, elle a créé HealthMOUR pour répondre aux défis sanitaires contemporains par des solutions innovantes et durables.",
    education: "Doctorat en Santé Publique, Université de POINT G Bamako",
    experience: "15+ années en santé Publique",
    email: "youssnigga@gmail.com",
    linkedin: "#",
    twitter: "#"
  };

  const collaborators = [
    {
      name: "Dr.Habibatou dite Mah TRAORE",
      role: "Professionnelle de la communication stratégique organisations,projets, pour le développement et le changement",
      image: "/habibatou.jpeg",
      speciality: "Épidémiologie",
      location: "Mali, Bamako"
    },
    {
      name: "M.Ibrahim TERERA",
      role: "Coordinateur Programmes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Gestion de projet",
      location: "Mali, Bamako"
    },
    {
      name: "Dr Souleymane SAWADOGO",
      role: "Expert Nutrition",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Nutrition communautaire",
      location: "Mali, Bamako"
    },
    {
      name: "Dr Fadjiné DIARRA",
      role: "Responsable Technique",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Ingénierie sanitaire",
      location: "Mali, Bamako"
    },
    {
      name: "M. Modibo KEITA",
      role: "Conseiller Stratégique",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Santé digitale",
      location: "Mali, Bamako"
    },
    {
      name: "Mme Fatoumata Dembélé",
      role: "Responsable Formation",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Éducation sanitaire",
      location: "Mali, Bamako"
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
              Fondateurs & Collaborateurs
            </h1>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Rencontrez l'équipe passionnée qui donne vie à la mission HealthMOUR,
              composée d'experts internationaux unis par une vision commune.
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
              Derrière l'Organisation : le Fondateur & son Équipe
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez la vision et l'engagement qui ont donné naissance à HealthMOUR
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
              Notre Équipe d'Experts
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe multiculturelle et multidisciplinaire qui apporte expertise
              et passion à chaque projet HealthMOUR
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
                  {/* Hidden by default, shown on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-hover:overflow-auto group-hover:mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-gray-700 text-xs mb-2">
                      {/* Placeholder biography */}
                      Biographie à venir...
                    </p>
                    <button className="text-primary underline text-xs">Lire plus</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Rejoignez Notre Équipe
          </h2>
          <p className="font-open-sans text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Vous partagez notre passion pour la santé communautaire ?
            Nous sommes toujours à la recherche de talents engagés pour renforcer notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary font-montserrat text-lg px-8"
            >
              Devenir Bénévole
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-montserrat text-lg px-8"
            >
              Candidature Spontanée
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;
