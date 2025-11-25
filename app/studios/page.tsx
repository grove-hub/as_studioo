'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Studios Page
 * Detailed overview of studio offerings, equipment, and what's included
 * No pricing displayed - contact for custom quotes
 */

export default function StudiosPage() {
  const studios = [
    {
      id: 'podcast',
      title: 'Studio Podcast',
      tagline: 'Votre voix, amplifiée',
      description: 'Un espace acoustiquement traité pour des enregistrements audio d\'une clarté exceptionnelle. Idéal pour podcasts, interviews, et contenus audio.',
      image: '/photo/microphone-shure.JPG',
      alt: 'Studio podcast professionnel Bruxelles - Microphones Shure SM7B et équipement audio premium à Auderghem',
      features: [
        'Microphones Shure SM7B professionnels',
        'Isolation acoustique premium',
        'Table de mixage RØDECaster',
        'Perches et supports de micro',
        'Enregistrement multi-pistes',
        'Connexion caméra pour vidéo podcast',
      ],
      ideal: ['Podcasteurs', 'Journalistes', 'Auteurs', 'Coachs'],
    },
    {
      id: 'video',
      title: 'Studio Vidéo',
      tagline: 'Créez du contenu qui marque',
      description: 'Studio vidéo complet avec éclairages cinématographiques et caméras 4K. Parfait pour YouTube, formations, interviews vidéo et contenus professionnels.',
      image: '/photo/studio-video2-0.webp',
      alt: 'Studio vidéo professionnel Bruxelles - Caméras 4K, éclairages LED et équipements YouTube à Auderghem',
      features: [
        'Caméras 4K professionnelles',
        'Kit éclairage LED 3 points',
        'Fonds verts & blancs',
        'Prompteur télévisé',
        'Stabilisateurs et trépieds',
        'Enregistrement audio synchronisé',
        'Espace modulable selon vos besoins',
        'Moniteurs de contrôle HD',
      ],
      ideal: ['YouTubeurs', 'Formateurs', 'Entreprises', 'Créateurs'],
    },
    {
      id: 'photo',
      title: 'Studio Photo',
      tagline: 'Captez l\'instant parfait',
      description: 'Studio photo professionnel avec cyclorama et équipements d\'éclairage haute qualité. Idéal pour portraits, photos produits, et sessions créatives.',
      image: '/photo/eclairage-led.webp',
      alt: 'Studio photo professionnel Bruxelles - Cyclorama, éclairages LED et équipements portrait produit à Auderghem',
      features: [
        'Cyclorama blanc professionnel (25m²)',
        'Fonds colorés disponibles',
        'Éclairages continus et flash',
        'Réflecteurs et diffuseurs',
        'Zone de maquillage',
        'Accessoires et props variés',
        'Espace client confortable',
        'WiFi pour tethering',
      ],
      ideal: ['Photographes', 'Marques', 'Influenceurs', 'Artistes'],
    },
  ];

  const offerings = [
    {
      title: 'Studio vide',
      description: "Accédez à notre studio sans présence d'équipe",
      includes: [
        'Installez votre matériel et travaillez en toute autonomie',
        'Idéal pour les créateurs équipés et indépendants',
        'Créez votre contenu en toute liberté, dans un espace pro',
      ],
      badge: 'Autonomie',
    },
    {
      title: 'Rec SOLO',
      description: 'Un membre de notre équipe filme votre session',
      includes: [
        'Livraison des rushs vidéo + son brut sous 48h',
        'Vous gardez la main sur le montage et la diffusion',
        'Parfait pour ceux qui veulent un tournage pro sans post-prod',
      ],
      badge: 'Populaire',
      popular: true,
    },
    {
      title: 'Rec + montage',
      description: 'Tournage + montage complet pris en charge par notre équipe',
      includes: [
        '2 formats courts (shorts) inclus pour les réseaux sociaux',
        '1 modification incluse pour ajuster le rendu final',
        'Idéal pour un podcast clé en main, sans effort',
    
      ],
      badge: 'Complet',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50/50 via-white to-rose-50/30 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="gradient-text">Studios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Des espaces professionnels pensés pour donner vie à vos projets créatifs. Podcast, vidéo, photo : tout est réuni pour des productions de qualité.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Réserver votre session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Studios Detail Sections */}
      {studios.map((studio, index) => (
        <section
          key={studio.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={studio.image}
                    alt={studio.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  {studio.title}
                </h2>
                <p className="text-xl gradient-text font-semibold mb-6">
                  {studio.tagline}
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  {studio.description}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Équipements inclus :
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {studio.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-[#976EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-6 rounded-xl">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Idéal pour :</p>
                  <div className="flex flex-wrap gap-2">
                    {studio.ideal.map((target) => (
                      <span
                        key={target}
                        className="px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-medium shadow-sm"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Parler de votre projet
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Offerings Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois options adaptées à vos besoins et votre niveau d'autonomie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-lg ${offering.popular ? 'gradient-primary' : 'bg-gray-900'}`}>
                    {offering.badge}
                  </span>
                </div>
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${offering.popular ? 'ring-2 ring-[#976EFD]/20' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-2">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {offering.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {offering.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <svg className="w-5 h-5 text-[#976EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-rose-50 text-gray-900 font-semibold">
                        Sur réservation uniquement
                      </span>
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full px-6 py-3 rounded-full gradient-border bg-white text-gray-900 font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#976EFD] to-[#FFDEFC] relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Des questions sur nos studios ?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-white text-[#976EFD] font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
