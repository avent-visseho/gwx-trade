import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        {/* Spinner avec les couleurs du logo */}
        <motion.div className="flex space-x-1">
          <motion.div
            className={`${dotSizes[size]} bg-primary-500 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className={`${dotSizes[size]} bg-primary-400 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.2
            }}
          />
          <motion.div
            className={`${dotSizes[size]} bg-secondary-500 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: 0.4
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;