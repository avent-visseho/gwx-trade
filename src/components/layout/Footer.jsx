import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse delay-200"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GWX INTER TRADE</h3>
                  <p className="text-accent-300">CO., LIMITED</p>
                </div>
              </div>
              
              <p className="text-accent-300 mb-6 leading-relaxed">
                Votre partenaire de confiance pour le commerce international. 
                Nous facilitons vos échanges commerciaux avec expertise et professionnalisme 
                depuis Hong Kong vers le monde entier.
              </p>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-secondary-600 rounded-lg flex items-center justify-center hover:bg-secondary-500 transition-colors"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                >
                  <Globe size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-accent-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={18} />
                  <div className="text-accent-300 text-sm leading-relaxed">
                    <div>{COMPANY_INFO.address}</div>
                    <div>{COMPANY_INFO.location}</div>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-primary-500 flex-shrink-0" size={18} />
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-accent-300 hover:text-primary-400 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-primary-500 flex-shrink-0" size={18} />
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-accent-300 hover:text-primary-400 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Barre de copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-accent-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-400 hover:text-primary-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-accent-400 hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-accent-400 hover:text-primary-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;