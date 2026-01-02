'use client';

import { AdjustmentsIcon, BriefcaseIcon, LocationIcon, MicrophoneIcon, MusicIcon, SparklesIcon, TargetIcon, UsersIcon, VideoIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Home Page
 * Premium landing page with hero, studio offerings, features, and blog teasers
 */

export default function Home() {
  // Helper function to render icons
  const renderIcon = (iconName: string, className: string = "w-12 h-12") => {
    const icons: Record<string, React.ReactElement> = {
      microphone: <MicrophoneIcon className={className} />,
      users: <UsersIcon className={className} />,
      adjustments: <AdjustmentsIcon className={className} />,
      location: <LocationIcon className={className} />,
      sparkles: <SparklesIcon className={className} />,
      video: <VideoIcon className={className} />,
      briefcase: <BriefcaseIcon className={className} />,
      target: <TargetIcon className={className} />,
      music: <MusicIcon className={className} />,
    };
    return icons[iconName] || null;
  };

  const studioOfferings = [
    {
      title: 'STUDIO VIDE',
      description: 'Accédez à notre studio sans présence d\'équipe',
      features: [
        'Installez votre matériel et travaillez en toute autonomie',
        'Idéal pour les créateurs équipés et indépendants',
        'Créez votre contenu en toute liberté, dans un espace pro'
      ],
      image: '/photo/studio-vide.webp',
      alt: 'Location studio vide Bruxelles - Espace pour créateurs avec leur propre matériel',
    },
    {
      title: 'REC SOLO',
      description: 'Un membre de notre équipe filme votre session',
      features: [
        'Livraison des rushs vidéo + son brut sous 48h',
        'Vous gardez la main sur le montage et la diffusion',
        'Parfait pour ceux qui veulent un tournage pro sans post-prod'
      ],
      image: '/photo/rec-rush.webp',
      alt: 'Enregistrement studio Bruxelles - Captation professionnelle avec rushs bruts',
    },
    {
      title: 'REC + MONTAGE',
      description: 'Tournage + montage complet pris en charge par notre équipe',
      features: [
        '2 formats courts (shorts) inclus pour les réseaux sociaux',
        '1 modification incluse pour ajuster le rendu final',
        'Idéal pour un podcast clé en main, sans effort'
      ],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      alt: 'Studio enregistrement et montage Bruxelles - Production complète clé en main',
    },
    {
      title: 'SESSION VIP',
      description: 'Un accompagnement personnalisé pour un contenu percutant et professionnel',
      features: [
        'Appel découverte pour définir vos objectifs et sujets',
        'Préparation complète du podcast (thèmes + questions)',
        'Tournage de 1h30 dans notre studio premium',
        'Accompagnement assuré par un professionnel pour guider et dynamiser l\'échange',
        'Montage simple inclus + 3 shorts offerts pour réseaux sociaux'
      ],
      image: '/photo/AS-STUDIOS-20.webp',
      alt: 'Session VIP podcast Bruxelles - Accompagnement complet avec interviewer professionnel',
    },
  ];

  const reasons = [
    {
      title: 'Formules Flexibles',
      description: 'Du studio vide à l\'accompagnement VIP, choisissez selon vos besoins.',
      icon: 'adjustments',
    },
    {
      title: 'Espaces Modulables',
      description: 'Studios adaptables à tous vos besoins : podcast, vidéo, photo.',
      icon: 'microphone',
    },
    {
      title: 'Équipe Créative',
      description: 'Cadreurs, monteurs et interviewers qualifiés pour vos projets.',
      icon: 'users',
    },
    {
      title: 'Localisation Idéale',
      description: 'Au cœur de Bruxelles, facilement accessible en transports.',
      icon: 'location',
    },
    {
      title: 'Tarifs Transparents',
      description: 'Devis personnalisés, sans frais cachés, adaptés à votre projet.',
      icon: 'sparkles',
    },
  ];

  const equipment = [
    {
      name: 'Microphones Shure SM7B',
      image: '/photo/microphone-shure.webp',
      alt: 'Microphone Shure SM7B professionnel pour enregistrement podcast et voix-off au studio AS Studio Bruxelles'
    },
    {
      name: 'Éclairages LED professionnels',
      image: '/photo/eclairage-led.webp',
      alt: 'Éclairage LED professionnel studio vidéo photo cinématographique à Bruxelles Auderghem'
    },
    {
      name: 'Caméras 4K',
      image: '/photo/sony.webp',
      alt: 'Caméras 4K professionnelles pour production vidéo haute qualité studio Bruxelles'
    },
    {
      name: 'Table de mixage',
      image: '/photo/rec-rush.webp',
      alt: 'Table de mixage audio professionnelle pour enregistrement podcast et musique Bruxelles'
    },
  ];

  const targets = [
    { title: 'Créateurs de contenu', icon: 'video', desc: 'YouTubeurs, podcasteurs, influenceurs' },
    { title: 'Marques & Entreprises', icon: 'briefcase', desc: 'Contenus corporate, formations, webinaires' },
    { title: 'Agences créatives', icon: 'target', desc: 'Productions client, campagnes marketing' },
    { title: 'Artistes & Musiciens', icon: 'music', desc: 'Sessions live, interviews, clips' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Mobile optimized */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white pt-16 sm:pt-20">
        {/* Animated background shapes - Simplified for mobile performance */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 sm:top-20 right-0 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 sm:bottom-20 left-0 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-tr from-rose-pastel to-violet-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Studio Podcast a{' '}
              <span className="gradient-text">Bruxelles</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-2 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Location de studio d&apos;enregistrement podcast, video et photo a Bruxelles. Equipement professionnel et accompagnement sur mesure.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 min-h-[52px] rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
              >
                Reserver une session
              </Link>
              <Link
                href="/studios"
                className="w-full sm:w-auto px-8 py-4 min-h-[52px] rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
              >
                Decouvrir les studios
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 sm:mt-20 relative px-2 sm:px-0"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl max-w-5xl mx-auto">
              <Image
                src="/photo/AS-STUDIOS-6.webp"
                alt="Studio professionnel AS Studio a Bruxelles - Equipements podcast, video et photo premium a Auderghem"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio Offerings - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Location Studio Podcast Bruxelles
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              4 formules d&apos;enregistrement podcast adaptees a vos besoins : du studio vide a l&apos;accompagnement complet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {studioOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Gradient border effect - hidden on mobile for performance */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#976EFD] via-[#FFDEFC] to-[#976EFD] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm hidden sm:block"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-md sm:shadow-lg active:shadow-xl sm:group-hover:shadow-2xl transition-all duration-300 h-full ring-1 ring-gray-100">
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                      priority={index < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white">
                      {offering.title}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{offering.description}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#976EFD] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block w-full px-4 sm:px-6 py-3 min-h-[48px] rounded-full gradient-border bg-white text-gray-900 font-semibold text-center hover:shadow-lg active:scale-[0.98] transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                    >
                      Parler de votre projet
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Reasons Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 leading-tight">
              Pourquoi choisir notre studio podcast a Bruxelles ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg active:shadow-xl sm:hover:shadow-xl transition-all duration-300"
              >
                <div className="text-gradient-start mb-3 sm:mb-4">
                  {renderIcon(reason.icon, "w-10 h-10 sm:w-16 sm:h-16")}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Equipement podcast professionnel
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 px-4">
              Microphones Shure SM7B, table de mixage RODECaster, cameras 4K et eclairages LED inclus dans votre location
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative h-32 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-4 shadow-md sm:shadow-lg sm:group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <p className="text-center text-sm sm:text-base font-semibold text-gray-900 px-1">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Studio podcast pour tous les createurs
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 px-4">
              Notre studio d&apos;enregistrement a Bruxelles accueille podcasteurs, YouTubeurs, entreprises et agences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {targets.map((target, index) => (
              <motion.div
                key={target.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg text-center active:shadow-xl transition-all"
              >
                <div className="text-gradient-start mb-2 sm:mb-4 flex justify-center">
                  {renderIcon(target.icon, "w-12 h-12 sm:w-20 sm:h-20")}
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{target.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-sm sm:text-xl text-gray-600 px-4">
              Ils nous ont fait confiance pour leurs projets podcast
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                quote: "On a plus qu'a poser ses pieds en dessous du micro et tout est nickel. Que ce soit en preparation en amont de notre podcast ou en aval. On recoit les fichiers, il n'y a plus qu'a publier. Une simplicite dingue !",
                author: 'Laureline',
                company: 'We Invest',
                role: 'Responsable Communication',
              },
              {
                quote: "Un studio pro avec une equipe qui comprend vraiment nos besoins. Le montage etait impeccable et livre dans les temps. Je recommande a 100% pour tout projet podcast ou video.",
                author: 'Marc',
                company: 'TechStartup Brussels',
                role: 'CEO',
              },
              {
                quote: "Parfait pour notre serie d'interviews. L'equipe nous a guides du debut a la fin. Resultat : un contenu de qualite qui a booste notre visibilite sur les reseaux.",
                author: 'Sophie',
                company: 'Agence Creative',
                role: 'Directrice Artistique',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-rose-50 p-5 sm:p-8 rounded-xl sm:rounded-2xl relative"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#976EFD] mb-3 sm:mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-[#976EFD] font-medium">{testimonial.company}</p>
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
          className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/20 rounded-full blur-3xl"
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
              Enregistrez votre podcast dans notre studio professionnel a Auderghem. Devis gratuit et personnalise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 min-h-[52px] rounded-full bg-white text-[#976EFD] font-bold text-base sm:text-lg shadow-xl sm:shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-all duration-300"
            >
              Parler de votre projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
