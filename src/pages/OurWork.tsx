
import { Heart, Users, GraduationCap, Droplets, Target, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

const OurWork = () => {
  const { t } = useTranslation();
  const strategicAreas = [
    {
      title: t('ourWork.areas.communityHealth'),
      image: '/images/hospital.png',
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: t('ourWork.areas.communityHealthDesc'),
      objectives: [
        t('ourWork.areas.communityHealthObj1'),
        t('ourWork.areas.communityHealthObj2'),
        t('ourWork.areas.communityHealthObj3'),
        t('ourWork.areas.communityHealthObj4'),
      ]
    },
    {
      title: t('ourWork.areas.nutrition'),
      image: '/images/nutrition.png',
      color: "text-secondary",
      bgColor: "bg-green-50",
      description: t('ourWork.areas.nutritionDesc'),
      objectives: [
        t('ourWork.areas.nutritionObj1'),
        t('ourWork.areas.nutritionObj2'),
        t('ourWork.areas.nutritionObj3'),
        t('ourWork.areas.nutritionObj4'),
      ]
    },
    {
      title: t('ourWork.areas.education'),
      image: '/images/education.jpeg',
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: t('ourWork.areas.educationDesc'),
      objectives: [
        t('ourWork.areas.educationObj1'),
        t('ourWork.areas.educationObj2'),
        t('ourWork.areas.educationObj3'),
        t('ourWork.areas.educationObj4'),
      ]
    },
    {
      title: t('ourWork.areas.wash'),
      image: '/images/wash.png',
      color: "text-primary",
      bgColor: "bg-blue-50",
      description: t('ourWork.areas.washDesc'),
      objectives: [
        t('ourWork.areas.washObj1'),
        t('ourWork.areas.washObj2'),
        t('ourWork.areas.washObj3'),
        t('ourWork.areas.washObj4'),
      ]
    }
  ];

  const keyMetrics = [
    { value: "2024-2026", label: t('ourWork.metrics.strategicPlan'), icon: Target },
    { value: "4", label: t('ourWork.metrics.priorityAreas'), icon: Globe },
    { value: "100%", label: t('ourWork.metrics.communityApproach'), icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-10 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-2xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
              {t('ourWork.hero.title')}
            </h1>
            <p className="font-open-sans text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-4 sm:mb-8">
              {t('ourWork.hero.desc')}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12">
              {keyMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <metric.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <div className="font-montserrat font-bold text-xl sm:text-2xl text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="font-open-sans text-gray-600 text-xs sm:text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Plan Overview */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center mb-8 sm:mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-2 sm:mb-4 text-primary border-primary">
              {t('ourWork.planBadge')}
            </Badge>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-6">
              {t('ourWork.planTitle')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-4xl mx-auto">
              {t('ourWork.planDesc')}
            </p>
          </div>

          {/* Strategic Areas */}
          <div className="space-y-8 sm:space-y-12">
            {strategicAreas.map((area, index) => (
              <Card
                key={area.title}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className={`w-full md:w-1/3 ${area.bgColor} flex items-center justify-center p-4 sm:p-8`}>
                    <div className="text-center">
                      <div className={`w-14 h-14 sm:w-20 sm:h-20 ${area.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 border-2 border-white shadow-lg`}>
                        <img src={area.image} alt={area.title} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
                      </div>
                      <h3 className="font-montserrat font-bold text-base sm:text-xl text-gray-900">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 p-4 sm:p-8">
                    <p className="font-open-sans text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                      {area.description}
                    </p>

                    <h4 className="font-montserrat font-semibold text-base sm:text-lg text-gray-900 mb-2 sm:mb-4">
                      {t('ourWork.objectivesTitle')}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {area.objectives.map((objective, objIndex) => (
                        <div
                          key={objIndex}
                          className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className={`w-2 h-2 ${area.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="font-open-sans text-gray-700 text-xs sm:text-sm">
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
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32">
          <div className="text-center animate-fade-in">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-2 sm:mb-6">
              {t('ourWork.impactTitle')}
            </h2>
            <p className="font-open-sans text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-4xl mx-auto mb-4 sm:mb-12">
              {t('ourWork.impactDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-12">
              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base sm:text-lg mb-1 sm:mb-3">
                    {t('ourWork.impactDurability')}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-xs sm:text-sm">
                    {t('ourWork.impactDurabilityDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base sm:text-lg mb-1 sm:mb-3">
                    {t('ourWork.impactEmpowerment')}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-xs sm:text-sm">
                    {t('ourWork.impactEmpowermentDesc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base sm:text-lg mb-1 sm:mb-3">
                    {t('ourWork.impactInnovation')}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-xs sm:text-sm">
                    {t('ourWork.impactInnovationDesc')}
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
