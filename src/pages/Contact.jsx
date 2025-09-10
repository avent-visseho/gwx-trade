import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Building,
  Globe
} from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { COMPANY_INFO } from '../utils/constants';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous ajouteriez la logique d'envoi du formulaire
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`,
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone}`,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: `${COMPANY_INFO.address}, ${COMPANY_INFO.location}`,
      link: '#',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun - Ven: 9h00 - 18h00 (GMT+8)',
      link: '#',
      color: 'from-green-500 to-green-600'
    }
  ];

  const businessHours = [
    { day: 'Lundi - Vendredi', hours: '9:00 - 18:00' },
    { day: 'Samedi', hours: '9:00 - 14:00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-white">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MessageCircle size={16} />
              <span>Contactez-Nous</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-accent-900 mb-6"
            >
              Discutons de Votre
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Projet International
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed"
            >
              Notre équipe d'experts est prête à vous accompagner dans votre développement 
              international. Contactez-nous pour une consultation personnalisée et gratuite.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <AnimatedSection direction="left">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent-900 mb-6">
                  Informations de Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-accent-900">{info.title}</div>
                        <div className="text-accent-600 text-sm">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Horaires d'ouverture */}
              <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="text-primary-600" size={24} />
                    <span>Horaires d'Ouverture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-accent-700">{schedule.day}</span>
                        <span className="font-semibold text-accent-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Logo et description courte */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-accent-900">GWX INTER TRADE</h4>
                    <p className="text-sm text-accent-600">CO., LIMITED</p>
                  </div>
                </div>
                <p className="text-accent-600 text-sm leading-relaxed">
                  Votre partenaire de confiance pour le commerce international depuis Hong Kong.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Formulaire de contact */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent-900">
                    Envoyez-nous un Message
                  </CardTitle>
                  <p className="text-accent-600">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-accent-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom complet"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-accent-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="votre.email@exemple.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-accent-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Nom de votre entreprise"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium text-accent-700 mb-2">
                          Sujet *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-accent-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="commercial">Demande commerciale</option>
                          <option value="logistique">Services logistiques</option>
                          <option value="consulting">Conseil et accompagnement</option>
                          <option value="documentation">Gestion documentaire</option>
                          <option value="autre">Autre</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-accent-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-accent-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Décrivez votre projet ou vos besoins en détail..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex justify-between items-center"
                    >
                      <p className="text-sm text-accent-600">
                        * Champs obligatoires
                      </p>
                      <Button type="submit" size="lg" className="group">
                        <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                        Envoyer le Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Section carte / localisation */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20">
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
                  <h3 className="text-2xl font-bold text-accent-900 mb-4 flex items-center">
                    <Building className="mr-3 text-primary-600" size={28} />
                    Notre Bureau à Hong Kong
                  </h3>
                  <p className="text-accent-600 leading-relaxed mb-6">
                    Situés au cœur de Wan Chai, nous bénéficions d'une position stratégique 
                    à Hong Kong pour faciliter vos échanges commerciaux avec l'Asie et le monde entier.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-accent-900">{COMPANY_INFO.address}</div>
                        <div className="text-accent-600">{COMPANY_INFO.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="text-secondary-600 flex-shrink-0" size={20} />
                      <div className="text-accent-700">
                        Accès facile par MTR (Station Wan Chai) et transport public
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2" size={18} />
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>

                {/* Placeholder pour la carte */}
                <div className="bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 text-accent-500" size={48} />
                    <p className="text-accent-700 font-medium">Carte Interactive</p>
                    <p className="text-accent-600 text-sm mt-2">
                      Localisation précise de nos bureaux
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ContactSection;