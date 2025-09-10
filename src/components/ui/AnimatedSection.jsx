import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : { 
        opacity: 0, 
        ...directions[direction] 
      }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75] 
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;