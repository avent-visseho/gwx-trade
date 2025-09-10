import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const LogoAnimation = () => (
  <motion.div 
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="relative">
      <motion.div 
        className="flex space-x-1"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="w-3 h-3 bg-primary-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#f97316", "#ea580c", "#f97316"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0 
          }}
        />
        <motion.div 
          className="w-3 h-3 bg-primary-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#fb923c", "#f97316", "#fb923c"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.3 
          }}
        />
        <motion.div 
          className="w-3 h-3 bg-secondary-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#3b82f6", "#2563eb", "#3b82f6"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.6 
          }}
        />
      </motion.div>
      <motion.div 
        className="flex space-x-1 mt-1"
        animate={{ 
          x: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="w-3 h-3 bg-secondary-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#60a5fa", "#3b82f6", "#60a5fa"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.2 
          }}
        />
        <motion.div 
          className="w-3 h-3 bg-secondary-600 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#2563eb", "#1d4ed8", "#2563eb"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5 
          }}
        />
        <motion.div 
          className="w-3 h-3 bg-primary-600 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            backgroundColor: ["#ea580c", "#c2410c", "#ea580c"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.8 
          }}
        />
      </motion.div>
    </div>
    <div className="ml-3">
      <h2 className="text-xl font-bold text-accent-900">GWX</h2>
      <p className="text-xs text-accent-600 leading-tight">INTER TRADE</p>
    </div>
  </motion.div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/">
            <LogoAnimation />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-accent-700 hover:text-primary-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-accent-200 py-4 bg-white/95 backdrop-blur-md"
            >
              <nav className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : 'text-accent-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="primary" size="sm" className="mt-4 self-start">
                  Devis Gratuit
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Header;