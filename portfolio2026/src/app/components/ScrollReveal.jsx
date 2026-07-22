'use client';

import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  yOffset = 40, 
  duration = 0.6, 
  delay = 0 
}) {
  return (
    <motion.div
      // Initial state: hidden, shifted down
      initial={{ opacity: 0, y: yOffset }}
      
      // Animate state when scrolled into view
      whileInView={{ opacity: 1, y: 0 }}
      
      // viewport configuration
      viewport={{ 
        once: true, // Only animate once (won't re-trigger every time you scroll up/down)
        margin: "-100px" // Starts the animation slightly before the element hits the view
      }}
      
      // Smooth easing transition
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
    >
      {children}
    </motion.div>
  );
}