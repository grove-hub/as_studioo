'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Legal Mentions Page
 * Required legal information for Belgian business
 */

export default function MentionsLegalesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50/50 via-white to-rose-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mentions légales
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2>Éditeur du site</h2>
            <p>
              <strong>as_studio</strong><br />
              Chaussée de Wavre 1259<br />
              1160 Auderghem, Belgique<br />
              Téléphone : <a href="tel:+32486167825">0486 16 78 25</a>
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive d'as_studio, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Les informations collectées via les formulaires de contact sont utilisées uniquement pour traiter votre demande et ne sont jamais transmises à des tiers.
            </p>
            <p>
              Pour exercer vos droits, contactez-nous à l'adresse indiquée ci-dessus.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi publicitaire n'est utilisé.
            </p>

            <h2>Responsabilité</h2>
            <p>
              as_studio s'efforce d'assurer l'exactitude des informations présentes sur ce site mais ne peut garantir l'absence d'erreurs. Les prix et disponibilités sont donnés à titre indicatif et peuvent être modifiés sans préavis.
            </p>

            <div className="mt-12 p-6 bg-gradient-to-br from-purple-50 to-rose-50 rounded-xl">
              <p className="text-center mb-4">
                <strong>Des questions sur nos mentions légales ?</strong>
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
