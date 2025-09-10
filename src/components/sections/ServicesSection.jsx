import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  Users, 
  FileText, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Container from '../ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: 'Commerce International',
      subtitle: 'Solutions complètes pour vos échanges mondiaux',
      description: 'Nous facilitons vos transactions commerciales internationales avec une expertise approfondie des réglementations douanières et des pratiques commerciales mondiales.',
      features: [
        'Négociation et conclusion de contrats internationaux',
        'Gestion des formalités douanières et documentaires',
        'Optimisation des coûts et délais de transport',
        'Conseil en réglementation commerciale internationale'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Truck,
      title: 'Logistique & Transport',
      subtitle: 'Chaîne d\'approvisionnement optimisée',
      description: 'Notre réseau logistique mondial assure le transport sécurisé de vos marchandises avec un suivi en temps réel et une livraison dans les délais.',
      features: [
        'Transport maritime, aérien et terrestre',
        'Entreposage et distribution',
        'Traçabilité complète des expéditions',
        'Assurance cargo et gestion des risques'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: Users,
      title: 'Conseil & Accompagnement',
      subtitle: 'Expertise personnalisée pour votre développement',
      description: 'Nos consultants experts vous accompagnent dans votre stratégie d\'expansion internationale avec des conseils personnalisés et des solutions sur mesure.',
      features: [
        'Analyse de marché et opportunités',
        'Stratégie d\'expansion internationale',
        'Formation aux pratiques commerciales locales',
        'Support juridique et réglementaire'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50'
    },
    {
      icon: FileText,
      title: 'Gestion Documentaire',
      subtitle: 'Conformité et sécurité documentaire',
      description: 'Nous prenons en charge l\'ensemble de vos formalités administratives et documentaires pour garantir la conformité de vos opérations.',
      features: [
        'Préparation des documents commerciaux',
        'Certification et légalisation',
        'Gestion des licences d\'import/export',
        'Conformité réglementaire internationale'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Transactions sécurisées et conformité totale aux réglementations internationales.'
    },
    {
      icon: Clock,
      title: 'Délais Respectés',
      description: 'Livraisons dans les temps grâce à notre réseau logistique optimisé.'
    },
    {
      icon: Users,
      title: 'Support 24/7',
      description: 'Équipe multilingue disponible pour vous accompagner à tout moment.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Globe size={16} />
              <span>Nos Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-accent-900 mb-6"
            >
              Solutions Complètes Pour
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Votre Réussite Internationale
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez notre gamme complète de services conçus pour faciliter et optimiser 
              vos échanges commerciaux internationaux.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Services principaux avec onglets interactifs */}
        <div className="mb-20">
          {/* Onglets de navigation */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === index
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
                  }`}
                >
                  <service.icon size={20} className="inline mr-2" />
                  {service.title}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Contenu du service actif */}
          <AnimatedSection delay={0.4}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Contenu textuel */}
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${services[activeService].color}`}>
                    <services[activeService].icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-accent-900 mb-4">
                    {services[activeService].title}
                  </h3>
                  
                  <p className="text-lg text-primary-600 font-medium mb-6">
                    {services[activeService].subtitle}
                  </p>
                  
                  <p className="text-accent-600 leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>
                  
                  <Button className="group">
                    En Savoir Plus
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>

                {/* Liste des fonctionnalités */}
                <div className={`${services[activeService].bgColor} rounded-2xl p-8`}>
                  <h4 className="text-xl font-bold text-accent-900 mb-6">
                    Nos Prestations
                  </h4>
                  <ul className="space-y-4">
                    {services[activeService].features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-accent-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
        </div>

        {/* Avantages */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-accent-900 mb-4">
              Pourquoi Nous Choisir ?
            </h3>
            <p className="text-accent-600 max-w-2xl mx-auto">
              Nos avantages concurrentiels qui font la différence dans votre réussite commerciale internationale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center p-8 h-full hover:shadow-2xl border-0 bg-gradient-to-br from-white to-accent-50">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                        index === 0 
                          ? 'bg-gradient-to-br from-green-500 to-green-600' 
                          : index === 1
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                          :