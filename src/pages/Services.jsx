import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Truck,
  Users,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";
import Container from "../components/ui/Container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/ui/AnimatedSection";

const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const services = [
    {
      icon: Globe,
      title: "Commerce International",
      subtitle: "Votre passeport pour les marchés mondiaux",
      description:
        "Des solutions complètes pour développer vos activités commerciales à l'international avec expertise et sécurité.",
      features: [
        "Négociation et conclusion de contrats internationaux",
        "Analyse de marché et identification d'opportunités",
        "Gestion des formalités douanières et réglementaires",
        "Optimisation fiscale des opérations internationales",
        "Support juridique et compliance internationale",
        "Formation aux pratiques commerciales locales",
      ],
      benefits: [
        "Accès facilité aux marchés internationaux",
        "Réduction des risques commerciaux",
        "Optimisation des coûts de transaction",
        "Accompagnement personnalisé",
      ],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50",
    },
    {
      icon: Truck,
      title: "Logistique & Transport",
      subtitle: "Votre chaîne d'approvisionnement optimisée",
      description:
        "Solutions logistiques intégrées pour un transport sécurisé et efficace de vos marchandises vers toutes les destinations.",
      features: [
        "Transport multimodal (maritime, aérien, terrestre)",
        "Entreposage et gestion des stocks",
        "Emballage et conditionnement spécialisés",
        "Traçabilité en temps réel des expéditions",
        "Assurance cargo et gestion des sinistres",
        "Services de distribution last-mile",
      ],
      benefits: [
        "Délais de livraison optimisés",
        "Coûts de transport réduits",
        "Sécurité maximale des marchandises",
        "Visibilité complète des opérations",
      ],
      color: "from-secondary-500 to-secondary-600",
      bgColor: "bg-secondary-50",
    },
    {
      icon: Users,
      title: "Conseil & Accompagnement",
      subtitle: "Votre partenaire stratégique pour l'international",
      description:
        "Expertise conseil pour développer votre stratégie internationale et maximiser vos opportunités de croissance.",
      features: [
        "Audit et diagnostic de votre potentiel export",
        "Élaboration de stratégies d'internationalisation",
        "Recherche et sélection de partenaires commerciaux",
        "Due diligence et évaluation des risques",
        "Formation des équipes aux enjeux internationaux",
        "Support dans les négociations complexes",
      ],
      benefits: [
        "Stratégie sur mesure adaptée à vos objectifs",
        "Expertise sectorielle approfondie",
        "Réseau international de partenaires",
        "ROI optimisé sur vos investissements",
      ],
      color: "from-accent-500 to-accent-600",
      bgColor: "bg-accent-50",
    },
    {
      icon: FileText,
      title: "Gestion Documentaire",
      subtitle: "Conformité et sécurité garanties",
      description:
        "Gestion complète de vos formalités administratives pour assurer la conformité de toutes vos opérations internationales.",
      features: [
        "Préparation et vérification des documents commerciaux",
        "Gestion des licences d'import/export",
        "Certification et légalisation consulaire",
        "Documentation douanière et fiscale",
        "Archivage sécurisé et traçabilité numérique",
        "Support réglementaire multi-juridictions",
      ],
      benefits: [
        "Conformité réglementaire assurée",
        "Réduction des délais administratifs",
        "Minimisation des risques de blocage",
        "Traçabilité complète des documents",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Diagnostic",
      description:
        "Évaluation approfondie de vos besoins et objectifs internationaux",
      icon: Target,
    },
    {
      step: "02",
      title: "Stratégie Personnalisée",
      description:
        "Élaboration d'une stratégie sur mesure adaptée à votre secteur",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Mise en Œuvre",
      description: "Déploiement des solutions avec accompagnement expert",
      icon: Truck,
    },
    {
      step: "04",
      title: "Suivi & Optimisation",
      description:
        "Monitoring continu et ajustements pour maximiser les résultats",
      icon: Award,
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      company: "TechCorp France",
      text: "GWX Inter Trade a transformé notre approche du marché asiatique. Leur expertise nous a fait économiser des mois de démarches.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Global Manufacturing Ltd",
      text: "Un partenaire fiable qui comprend les enjeux du commerce international. Résultats exceptionnels sur nos exportations.",
      rating: 5,
    },
    {
      name: "Marie Dubois",
      company: "Innovation Systems",
      text: "Service client remarquable et solutions logistiques parfaitement adaptées à nos besoins spécifiques.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Globe size={16} />
                <span>Nos Services</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-accent-900 mb-6"
              >
                Solutions Expertes Pour
                <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                  Votre Expansion Internationale
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-accent-600 max-w-4xl mx-auto leading-relaxed"
              >
                Découvrez notre gamme complète de services conçus pour faciliter
                et optimiser vos échanges commerciaux internationaux avec
                l'expertise d'une équipe dédiée.
              </motion.p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    activeServiceIndex === index
                      ? "ring-2 ring-primary-500 shadow-xl"
                      : "hover:shadow-lg"
                  }`}
                  onClick={() => setActiveServiceIndex(index)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-600 text-sm text-center">
                      {service.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Détail du service actif */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${services[activeServiceIndex].color} mb-6`}
                  >
                    {React.createElement(services[activeServiceIndex].icon, {
                      className: "text-white",
                      size: 40,
                    })}
                  </div>

                  <h3 className="text-3xl font-bold text-accent-900 mb-4">
                    {services[activeServiceIndex].title}
                  </h3>

                  <p className="text-lg text-primary-600 font-medium mb-6">
                    {services[activeServiceIndex].subtitle}
                  </p>

                  <p className="text-accent-600 leading-relaxed mb-8 text-lg">
                    {services[activeServiceIndex].description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-accent-900 mb-4">
                      Avantages clés :
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services[activeServiceIndex].benefits.map(
                        (benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle
                              className="text-green-500 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-accent-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <Button size="lg" className="group">
                    Demander un Devis
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </Button>
                </div>

                {/* Liste des fonctionnalités */}
                <div
                  className={`${services[activeServiceIndex].bgColor} rounded-2xl p-8`}
                >
                  <h4 className="text-xl font-bold text-accent-900 mb-6">
                    Nos Prestations Détaillées
                  </h4>
                  <ul className="space-y-4">
                    {services[activeServiceIndex].features.map(
                      (feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle
                            className="text-green-500 flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-accent-700">{feature}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Processus de travail */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
                Notre Méthode de Travail
              </h2>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
                Une approche structurée et éprouvée pour garantir le succès de
                vos projets internationaux.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-900 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-accent-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-accent-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Témoignages clients */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
                Ce Que Disent Nos Clients
              </h2>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
                La satisfaction de nos clients est notre meilleure
                recommandation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Card className="h-full p-8 text-center">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-accent-600 italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-accent-900">
                        {testimonial.name}
                      </div>
                      <div className="text-primary-600 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action final */}
      <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 text-white">
        <Container>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Développer Votre Business International ?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Nos experts sont à votre disposition pour analyser vos besoins
                et vous proposer des solutions personnalisées. Contactez-nous
                dès aujourd'hui pour une consultation gratuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-primary-50 shadow-xl"
                >
                  <Clock className="mr-2" size={18} />
                  Consultation Gratuite
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <ArrowRight className="mr-2" size={18} />
                  Voir Nos Réalisations
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
};

export default Services;
