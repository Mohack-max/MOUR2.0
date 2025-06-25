
import { Heart, Users, GraduationCap, Droplets, Target, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OurWork = () => {
  const strategicAreas = [
    {
      title: "Santé Communautaire",
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: "Surveillance épidémiologique et amélioration des systèmes de santé locaux",
      objectives: [
        "Renforcement des capacités de surveillance sanitaire",
        "Formation des agents de santé communautaire",
        "Mise en place de systèmes d'alerte précoce",
        "Amélioration de l'accès aux soins de base"
      ]
    },
    {
      title: "Nutrition & Sécurité Alimentaire",
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-green-50",
      description: "Programmes de nutrition et lutte contre la malnutrition",
      objectives: [
        "Évaluation nutritionnelle des communautés",
        "Distribution de suppléments nutritionnels",
        "Formation sur les bonnes pratiques alimentaires",
        "Développement de jardins communautaires"
      ]
    },
    {
      title: "Éducation Sanitaire",
      icon: GraduationCap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: "Sensibilisation et formation pour la promotion de la santé",
      objectives: [
        "Campagnes de sensibilisation ciblées",
        "Formation des leaders communautaires",
        "Développement de matériel éducatif adapté",
        "Programmes d'éducation par les pairs"
      ]
    },
    {
      title: "WASH (Eau, Assainissement, Hygiène)",
      icon: Droplets,
      color: "text-primary",
      bgColor: "bg-blue-50",
      description: "Amélioration de l'accès à l'eau potable et aux installations sanitaires",
      objectives: [
        "Construction de points d'eau potable",
        "Formation sur l'hygiène et l'assainissement",
        "Mise en place de systèmes de traitement des eaux",
        "Sensibilisation aux bonnes pratiques d'hygiène"
      ]
    }
  ];

  const keyMetrics = [
    { value: "2024-2026", label: "Plan Stratégique", icon: Target },
    { value: "4", label: "Domaines Prioritaires", icon: Globe },
    { value: "100%", label: "Approche Communautaire", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
              Notre Travail
            </h1>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez notre plan stratégique 2024-2026 et nos domaines d'intervention prioritaires 
              pour transformer la santé communautaire.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {keyMetrics.map((metric, index) => (
                <div 
                  key={metric.label} 
                  className="bg-white rounded-lg p-6 shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <metric.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-montserrat font-bold text-2xl text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="font-open-sans text-gray-600 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Plan Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Plan Stratégique 2024-2026
            </Badge>
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Une Approche Intégrée pour la Santé Communautaire
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-4xl mx-auto">
              Notre plan stratégique s'articule autour de quatre domaines prioritaires, 
              avec une approche holistique qui reconnaît l'interconnexion entre la santé, 
              la nutrition, l'éducation et l'environnement.
            </p>
          </div>

          {/* Strategic Areas */}
          <div className="space-y-12">
            {strategicAreas.map((area, index) => (
              <Card 
                key={area.title} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 ${area.bgColor} flex items-center justify-center p-8`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 ${area.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-lg`}>
                        <area.icon className={`h-10 w-10 ${area.color}`} />
                      </div>
                      <h3 className="font-montserrat font-bold text-xl text-gray-900">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <p className="font-open-sans text-gray-600 mb-6 text-lg">
                      {area.description}
                    </p>
                    
                    <h4 className="font-montserrat font-semibold text-lg text-gray-900 mb-4">
                      Objectifs Principaux :
                    </h4>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {area.objectives.map((objective, objIndex) => (
                        <div 
                          key={objIndex} 
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className={`w-2 h-2 ${area.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="font-open-sans text-gray-700 text-sm">
                            {objective}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Future */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Impact et Perspectives d'Avenir
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              Notre engagement s'inscrit dans une vision à long terme de transformation 
              durable des systèmes de santé communautaire, avec un focus sur la durabilité 
              et l'autonomisation des communautés locales.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-3">
                    Durabilité
                  </h3>
                  <p className="font-open-sans text-gray-600 text-sm">
                    Solutions pérennes adaptées aux contextes locaux
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-3">
                    Autonomisation
                  </h3>
                  <p className="font-open-sans text-gray-600 text-sm">
                    Renforcement des capacités communautaires
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-3">
                    Innovation
                  </h3>
                  <p className="font-open-sans text-gray-600 text-sm">
                    Approches créatives et technologiques
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
