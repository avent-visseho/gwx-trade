import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield,
  Heart,
  Zap,
  CheckCircle
} from 'lucide-react';
import Container from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const About = () => {
  const stats = [
    { number: '500+', label: 'Clients Satisfaits', icon: Users, color: 'text-primary-600' },
    { number: '50+', label: 'Pays Desservis', icon: Globe, color: 'text-secondary-600' },
    { number: '10+', label: 'Années d\'Expérience', icon: Award, color: 'text-accent-600' },
    { number: '99%', label: 'Taux de Satisfaction', icon: TrendingUp, color: 'text-primary-600' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Nous maintenons les plus hauts standards d\'éthique et de transparence dans toutes nos interactions.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Votre succès est notre priorité. Nous nous engageons pleinement dans chaque projet.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies et méthodes pour optimiser vos échanges commerciaux.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la force du partenariat et travaillons main dans la main avec nos clients.'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Création de l\'entreprise',
      description: 'Fondation de GWX Inter Trade à Hong Kong avec une vision claire : faciliter le commerce international.'
    },
    {
      year: '2017',
      title: 'Expansion régionale',
      description: 'Développement de notre réseau en Asie du Sud-Est et établissement de partenariats stratégiques.'
    },
    {
      year: '2020',
      title: 'Digitalisation des services',
      description: 'Lancement de notre plateforme digitale pour un suivi en temps réel des expéditions.'
    },
    {
      year: '2024',
      title: 'Excellence reconnue',
      description: 'Plus de 500 clients font confiance à notre expertise pour leurs échanges internationaux.'
    }
  ];

  const team = [
    {
      name: 'Direction Générale',
      role: 'Leadership & Stratégie',
      description: 'Vision stratégique et développement international'
    },
    {
      name: 'Équipe Commerciale',
      role: 'Relations Clients',
      description: 'Accompagnement personnalisé et conseil expert'
    },
    {
      name: 'Équipe Logistique',
      role: 'Opérations',
      description: 'Gestion optimisée des flux et de la chaîne d\'approvisionnement'
    },
    {
      name: 'Équipe Juridique',
      role: 'Conformité',
      description: 'Expertise réglementaire et conformité internationale'
    }
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
                <Users size={16} />
                <span>À Propos de Nous</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-accent-900 mb-6"
              >
                L'Excellence au Service de
                <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                  Votre Croissance Internationale
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-accent-600 max-w-4xl mx-auto leading-relaxed"
              >
                Depuis plus d'une décennie, GWX Inter Trade Co., Limited accompagne les entreprises 
                dans leur développement international avec expertise, passion et un engagement sans faille 
                envers l'excellence de service.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Statistiques */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 mb-4`}>
                    <stat.icon className={stat.color} size={24} />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-accent-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-6">
                  Notre Histoire
                </h2>
                <p className="text-lg text-accent-600 leading-relaxed mb-8">
                  Fondée en 2014 à Hong Kong, GWX Inter Trade est née de la vision de créer un pont 
                  commercial entre l'Orient et l'Occident. Nos fondateurs, forts de leur expérience 
                  dans le commerce international, ont identifié le besoin d'un partenaire fiable 
                  capable de naviguer dans la complexité des échanges commerciaux mondiaux.
                </p>
                <p className="text-accent-600 leading-relaxed mb-8">
                  Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 500 entreprises dans 
                  leur développement international, en facilitant leurs échanges avec plus de 50 pays 
                  à travers le monde.
                </p>
                <Button className="group">
                  Découvrir Nos Services
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <h4 className="font-bold text-accent-900 mb-1">{item.title}</h4>
                          <p className="text-accent-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-white">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
                Nos Valeurs Fondamentales
              </h2>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
                Ces principes guident chacune de nos actions et définissent notre engagement 
                envers l'excellence et l'éthique commerciale.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center p-6 hover:shadow-2xl border-0 bg-gradient-to-br from-white to-accent-50">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                          : 'bg-gradient-to-br from-secondary-500 to-secondary-600'
                      }`}
                    >
                      <value.icon className="text-white" size={32} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-accent-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-accent-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-4">
                Une Équipe d'Experts
              </h2>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
                Notre force réside dans la diversité et l'expertise de nos équipes, 
                unies par une vision commune : votre réussite.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-accent-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-accent-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div>
                <Target className="text-primary-200 mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
                <p className="text-primary-100 leading-relaxed text-lg mb-8">
                  Faciliter et sécuriser les échanges commerciaux internationaux en offrant 
                  des solutions complètes, personnalisées et innovantes qui permettent à nos 
                  clients de se concentrer sur leur cœur de métier.
                </p>
                <div className="space-y-3">
                  {[
                    'Simplifier les processus complexes',
                    'Garantir la conformité réglementaire',
                    'Optimiser les coûts et délais',
                    'Assurer un service d\'excellence'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-200 flex-shrink-0" size={20} />
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div>
                <Globe className="text-secondary-200 mb-6" size={48} />
                <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
                <p className="text-secondary-100 leading-relaxed text-lg mb-8">
                  Devenir le partenaire de référence pour les entreprises souhaitant développer 
                  leurs activités à l'international, en créant un écosystème commercial mondial 
                  basé sur la confiance, l'innovation et l'excellence.
                </p>
                <div className="space-y-3">
                  {[
                    'Leader du commerce international',
                    'Réseau mondial de partenaires',
                    'Innovation technologique continue',
                    'Impact positif sur l\'économie globale'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-secondary-200 flex-shrink-0" size={20} />
                      <span className="text-secondary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent-50">
        <Container>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-900 mb-6">
                Prêt à Nous Rejoindre ?
              </h2>
              <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Découvrez comment GWX Inter Trade peut transformer votre approche 
                du commerce international et accélérer votre croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Demander une Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Voir Nos Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
};

export default About;