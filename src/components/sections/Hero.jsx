import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Truck, BarChart3 } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ 
        x: [0, 100, 0],
        y: [0, -50, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute top-20 left-10 w-4 h-4 bg-primary-500 rounded-full opacity-30"
    />
    <motion.div
      animate={{ 
        x: [0, -80, 0],
        y: [0, 100, 0],
        rotate: [0, -180, -360]
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "linear",
        delay: 5
      }}
      className="absolute top-40 right-20 w-6 h-6 bg-secondary-500 rounded-full opacity-20"
    />
    <motion.div
      animate={{ 
        x: [0, 50, 0],
        y: [0, -80, 0],
        rotate: [0, 90, 180]
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "linear",
        delay: 10
      }}
      className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary-400 rounded-full opacity-40"
    />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-50 via-white to-primary-50 overflow-hidden">
      <FloatingElements />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Globe size={16} />
              <span>Commerce International</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-accent-900 leading-tight mb-6"
            >
              Votre Pont Vers Le
              <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Commerce Mondial
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-accent-600 mb-8 leading-relaxed"
            >
              GWX Inter Trade facilite vos échanges commerciaux internationaux 
              avec expertise et professionnalisme depuis Hong Kong vers le monde entier.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Démarrer Maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Nos Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-900">500+</div>
                <div className="text-sm text-accent-600">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-900">50+</div>
                <div className="text-sm text-accent-600">Pays Couverts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-900">10+</div>
                <div className="text-sm text-accent-600">Années d'Expérience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Élément visuel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Animation des cercles représentant le logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-lg"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-lg"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 120, 240, 360]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full shadow-lg"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, -120, -240, -360]
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Icônes de services flottantes */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-white rounded-xl p-4 shadow-xl"
              >
                <Globe className="text-primary-600" size={32} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white rounded-xl p-4 shadow-xl"
              >
                <Truck className="text-secondary-600" size={32} />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  x: [-5, 5, -5]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-12 bg-white rounded-xl p-4 shadow-xl"
              >
                <BarChart3 className="text-accent-600" size={32} />
              </motion.div>

              {/* Cercle de fond avec dégradé */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-12 bg-gradient-to-b from-primary-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;