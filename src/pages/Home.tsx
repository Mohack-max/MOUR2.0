
import { ArrowRight, Heart, Users, Target, Eye, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const interventionAreas = [
    {
      title: "Santé",
      description: "Surveillance et amélioration de la santé communautaire",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Nutrition",
      description: "Programmes de nutrition et sécurité alimentaire",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Éducation",
      description: "Formation et sensibilisation sanitaire",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      title: "WASH",
      description: "Eau, Assainissement et Hygiène",
      icon: Target,
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <img 
              src="/logo hm Final1.jpeg" 
              alt="HealthMOUR Logo" 
              className="h-24 w-auto mx-auto mb-6 animate-scale-in"
            />
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6">
              HealthMOUR
            </h1>
            <p className="font-open-sans text-xl lg:text-2xl mb-4 text-blue-100">
              Health Monitoring, Organization, Understanding, Resolution
            </p>
            <p className="font-open-sans text-lg lg:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Surveillance sanitaire, Organisation, Compréhension et Résolution des problèmes de santé dans nos communautés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-montserrat text-lg px-8"
              >
                Devenir Bénévole
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-montserrat text-lg px-8"
              >
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Notre Engagement
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre mission, notre vision et nos valeurs qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-primary">
                  Notre Mission
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Améliorer la santé et le bien-être des communautés en surveillant, organisant, comprenant et résolvant les défis sanitaires par des approches innovantes et collaboratives.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-secondary">
                  Notre Vision
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Un monde où chaque communauté a accès à des soins de santé de qualité, à une nutrition adéquate, à l'éducation sanitaire et à des conditions d'hygiène optimales.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-accent">
                  Nos Valeurs
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Intégrité, compassion, innovation, transparence et collaboration. Nous croyons en l'importance de l'engagement communautaire et du respect de la dignité humaine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Nos Domaines d'Intervention
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Quatre piliers essentiels pour transformer la santé communautaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventionAreas.map((area, index) => (
              <Card 
                key={area.title} 
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className={`h-8 w-8 ${area.color}`} />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">
                    {area.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">
            Rejoignez Notre Mission
          </h2>
          <p className="font-open-sans text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            Ensemble, nous pouvons créer un impact positif durable sur la santé de nos communautés. 
            Votre engagement fait la différence.
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
              Découvrir Notre Travail
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
