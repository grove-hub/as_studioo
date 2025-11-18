'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * PageTransition Component
 * Smooth page transitions with fade, slide, and scale effects
 */

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
}
