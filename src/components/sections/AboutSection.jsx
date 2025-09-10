import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import Container from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Une réputation solide basée sur la confiance et la transparence dans tous nos échanges commerciaux.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Un standard de qualité élevé dans chaque service, garantissant votre satisfaction et votre succès.'
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Une approche collaborative où votre réussite devient notre priorité absolue.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Des solutions modernes et adaptées aux défis du commerce international contemporain.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Satisfaits', color: 'text-primary-600' },
    { number: '50+', label: 'Pays Desservis', color: 'text-secondary-600' },
    { number: '10+', label: 'Années d\'Expérience', color: 'text-accent-600' },
    { number: '99%', label: 'Taux de Satisfaction', color: 'text-primary-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-accent-50">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Users size={16} />
              <span>À Propos de Nous</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-accent-900 mb-6"
            >
              Votre Partenaire de
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Confiance
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed"
            >
              Depuis Hong Kong, GWX Inter Trade Co., Limited facilite les échanges commerciaux 
              internationaux avec une expertise reconnue et un engagement sans faille envers 
              l'excellence de service.
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
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-accent-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Notre histoire et mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-accent-900 mb-4">
                  Notre Mission
                </h3>
                <p className="text-accent-600 leading-relaxed mb-6">
                  Nous nous engageons à simplifier et sécuriser vos transactions commerciales 
                  internationales. Basés à Hong Kong, nous tirons parti de notre position 
                  stratégique pour connecter les entreprises du monde entier.
                </p>
                <p className="text-accent-600 leading-relaxed">
                  Notre équipe d'experts multilingues vous accompagne à chaque étape, 
                  de la négociation initiale à la livraison finale, garantissant une 
                  expérience fluide et professionnelle.
                </p>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-accent-900 mb-4">
                  Notre Vision
                </h3>
                <p className="text-accent-600 leading-relaxed mb-6">
                  Devenir le pont incontournable entre les entreprises et les marchés 
                  internationaux, en offrant des solutions innovantes et personnalisées 
                  qui transcendent les frontières géographiques.
                </p>
                <p className="text-accent-600 leading-relaxed">
                  Nous aspirons à créer un écosystème commercial mondial où chaque 
                  entreprise, quelle que soit sa taille, peut accéder aux opportunités 
                  internationales avec confiance et simplicité.
                </p>
              </motion.div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>

        {/* Nos valeurs */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-accent-900 mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et définissent notre approche unique du commerce international.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default AboutSection;