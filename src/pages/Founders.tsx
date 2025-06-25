
import { Mail, Linkedin, Twitter, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Founders = () => {
  // Placeholder data - replace with actual founder information
  const founder = {
    name: "Dr. Marie Dubois",
    title: "Fondatrice & Directrice Générale",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Médecin de santé publique avec plus de 15 ans d'expérience dans le développement de programmes de santé communautaire en Afrique et en Europe. Passionnée par l'approche holistique de la santé, elle a créé HealthMOUR pour répondre aux défis sanitaires contemporains par des solutions innovantes et durables.",
    education: "Doctorat en Santé Publique, Université de la Sorbonne",
    experience: "15+ années en santé communautaire",
    email: "marie.dubois@healthmour.org",
    linkedin: "#",
    twitter: "#"
  };

  const collaborators = [
    {
      name: "Dr. Jean-Pierre Martin",
      role: "Directeur Médical",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Épidémiologie",
      location: "Paris, France"
    },
    {
      name: "Sarah Johnson",
      role: "Coordinatrice Programmes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Gestion de projet",
      location: "Lyon, France"
    },
    {
      name: "Dr. Amadou Diallo",
      role: "Expert Nutrition",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Nutrition communautaire",
      location: "Dakar, Sénégal"
    },
    {
      name: "Emma Rodriguez",
      role: "Responsable WASH",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Ingénierie sanitaire",
      location: "Barcelone, Espagne"
    },
    {
      name: "Dr. Michael Chen",
      role: "Conseiller Stratégique",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Santé digitale",
      location: "Londres, UK"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Responsable Formation",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      speciality: "Éducation sanitaire",
      location: "Rabat, Maroc"
    }
  ];

  const stats = [
    { value: "15+", label: "Années d'Expérience", icon: Award },
    { value: "6", label: "Experts Internationaux", icon: Users },
    { value: "5", label: "Pays Représentés", icon: Globe }
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
              La Fondatrice
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez la vision et l'engagement qui ont donné naissance à HealthMOUR
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl animate-scale-in">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="font-open-sans text-lg text-primary mb-4">
                    {founder.title}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-open-sans">
                      {founder.education}
                    </span>
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-open-sans">
                      {founder.experience}
                    </span>
                  </div>
                </div>
                
                <p className="font-open-sans text-gray-600 leading-relaxed mb-6">
                  {founder.bio}
                </p>
                
                <div className="flex space-x-4">
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
          </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborators.map((collaborator, index) => (
              <Card 
                key={collaborator.name} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={collaborator.image} 
                    alt={collaborator.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-open-sans">
                        Spécialité: {collaborator.speciality}
                      </p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">
                    {collaborator.name}
                  </h3>
                  <p className="font-open-sans text-primary mb-3">
                    {collaborator.role}
                  </p>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Globe className="h-4 w-4" />
                    <span className="font-open-sans text-sm">
                      {collaborator.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
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
              className="border-white text-white hover:bg-white hover:text-primary font-montserrat text-lg px-8"
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
