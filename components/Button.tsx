'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

/**
 * Button Component
 * Reusable button with gradient styling and magnetic hover effect
 */

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center';

  const variantStyles = {
    primary: 'gradient-primary text-white shadow-lg hover:shadow-xl',
    outline: 'gradient-border bg-white text-gray-900 hover:shadow-lg',
    ghost: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
