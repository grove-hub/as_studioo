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
      image: '/photo/microphone-shure.webp',
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
      image: '/photo/studio-videoo.png',
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
      badge: 'Clé en main',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Mobile optimized */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-purple-50/50 via-white to-rose-50/30 overflow-hidden pt-20 sm:pt-24">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Studios <span className="gradient-text">Podcast Bruxelles</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Location de studio d&apos;enregistrement podcast, video et photo a Auderghem. Equipement professionnel Shure SM7B, cameras 4K et isolation acoustique pour des productions de qualite.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300"
            >
              Reserver votre session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Studios Detail Sections - Mobile optimized */}
      {studios.map((studio, index) => (
        <section
          key={studio.id}
          className={`py-12 sm:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
                  <Image
                    src={studio.image}
                    alt={studio.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {studio.title}
                </h2>
                <p className="text-lg sm:text-xl gradient-text font-semibold mb-4 sm:mb-6">
                  {studio.tagline}
                </p>
                <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  {studio.description}
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Equipements inclus :
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {studio.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#976EFD] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Ideal pour :</p>
                  <div className="flex flex-wrap gap-2">
                    {studio.ideal.map((target) => (
                      <span
                        key={target}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-gray-900 text-xs sm:text-sm font-medium shadow-sm"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
                  >
                    Parler de votre projet
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Offerings Section - Mobile optimized */}
      <section id="formules" className="py-12 sm:py-24 bg-white scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Formules location studio podcast
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Du studio vide a l&apos;enregistrement avec montage inclus : choisissez la formule adaptee a votre projet podcast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`px-3 sm:px-4 py-1 rounded-full text-white text-xs sm:text-sm font-semibold shadow-lg ${offering.popular ? 'gradient-primary' : 'bg-gray-900'}`}>
                    {offering.badge}
                  </span>
                </div>
                <div className={`bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-md sm:shadow-lg active:shadow-xl sm:hover:shadow-2xl transition-all duration-300 h-full ${offering.popular ? 'ring-2 ring-[#976EFD]/20' : ''}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 mt-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {offering.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {offering.includes.map((item) => (
                      <li key={item} className="flex items-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#976EFD] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 sm:pt-6 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-rose-50 text-gray-900 font-semibold">
                        Sur reservation uniquement
                      </span>
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full px-4 sm:px-6 py-3 min-h-[48px] rounded-full gradient-border bg-white text-gray-900 font-semibold text-center hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
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

      {/* CTA Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-gradient-to-br from-[#976EFD] to-[#FFDEFC] relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Reservez votre studio podcast a Bruxelles
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-10 px-2">
              Contactez-nous pour reserver votre session d&apos;enregistrement et recevoir un devis personnalise gratuit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 min-h-[52px] rounded-full bg-white text-[#976EFD] font-bold text-base sm:text-lg shadow-xl sm:shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
