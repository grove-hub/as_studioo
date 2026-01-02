'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Header Component
 * Premium header with gradient CTA button and animated mobile menu
 * Features logo placeholder, navigation links, and responsive burger menu
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/studios', label: 'Studios' },
    { href: '/studios#formules', label: 'Formules & Tarifs' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.webp"
                  alt="AS Studios logo"
                  width={150}
                  height={40}
                  className="h-18 w-auto"
                  priority
                  sizes="150px"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-sm font-semibold transition-colors hover:text-[#7B5CD6] ${
                      isActive(link.href) ? 'text-[#7B5CD6]' : 'text-gray-900'
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden lg:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Réserver
              </Link>
            </motion.div>

            {/* Mobile Menu Button - Touch-friendly 48x48px target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#976EFD] focus:ring-offset-2 rounded-lg active:bg-purple-50 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gradient-to-r from-[#976EFD] to-[#FFDEFC] rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gradient-to-r from-[#976EFD] to-[#FFDEFC] rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gradient-to-r from-[#976EFD] to-[#FFDEFC] rounded-full"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel - Full width on mobile for better UX */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-20 right-0 bottom-0 w-full sm:max-w-sm bg-white shadow-2xl z-40 lg:hidden overflow-y-auto overscroll-contain"
            >
              <div className="p-6 sm:p-8 space-y-2 pb-safe">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-lg sm:text-xl font-medium py-4 px-4 rounded-xl transition-all active:bg-purple-50 ${
                        isActive(link.href)
                          ? 'gradient-text bg-purple-50/50'
                          : 'text-gray-700 hover:text-[#976EFD] hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 px-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 min-h-[52px] rounded-full gradient-primary text-white font-semibold text-center shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center"
                  >
                    Reserver une session
                  </Link>
                </motion.div>

                {/* Contact info in mobile menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 px-4 border-t border-gray-100 mt-6"
                >
                  <a
                    href="tel:+32470078377"
                    className="flex items-center text-gray-600 py-3 hover:text-[#976EFD] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3 text-[#976EFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +32 470 07 83 77
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
