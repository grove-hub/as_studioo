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
      title: 'Studio vide',
      description: 'Accès complet au studio avec équipements premium pour vos sessions créatives en toute autonomie.',
      features: ['Équipements professionnels', 'Flexibilité totale', 'Accompagnement technique'],
      image: '/photo/studio-vide.JPG',
      alt: 'Location studio vide Bruxelles - Espace équipé podcast vidéo photo à Auderghem',
    },
    {
      title: 'Rec + rushs bruts',
      description: 'Enregistrement professionnel avec livraison des rushs bruts pour votre propre post-production.',
      features: ['Captation professionnelle', 'Rushs HD/4K', 'Fichiers bruts livrés'],
      image: '/photo/rec-rush.JPG',
      alt: 'Enregistrement studio Bruxelles - Captation professionnelle podcast vidéo avec rushs bruts 4K',
      popular: true,
    },
    {
      title: 'Rec + montage',
      description: 'Solution clé en main : enregistrement, montage professionnel et formats courts prêts à publier.',
      features: ['Tournage complet', 'Montage expert', 'Formats courts inclus'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      alt: 'Studio enregistrement et montage Bruxelles - Production complète vidéo podcast clé en main',
    },
  ];

  const reasons = [
    {
      title: 'Équipements Premium',
      description: 'Micros Shure, éclairages professionnels, caméras 4K et table de mixage.',
      icon: 'microphone',
    },
    {
      title: 'Accompagnement Expert',
      description: 'Support technique et créatif pour optimiser vos productions.',
      icon: 'users',
    },
    {
      title: 'Espaces Modulables',
      description: 'Studios adaptables à tous vos besoins : podcast, vidéo, photo.',
      icon: 'adjustments',
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
      image: '/photo/microphone-shure.JPG',
      alt: 'Microphone Shure SM7B professionnel pour enregistrement podcast et voix-off au studio AS Studio Bruxelles'
    },
    {
      name: 'Éclairages LED professionnels',
      image: '/photo/eclairage-led.JPG',
      alt: 'Éclairage LED professionnel studio vidéo photo cinématographique à Bruxelles Auderghem'
    },
    {
      name: 'Caméras 4K',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80',
      alt: 'Caméras 4K professionnelles pour production vidéo haute qualité studio Bruxelles'
    },
    {
      name: 'Table de mixage',
      image: '/photo/rec-rush.JPG',
      alt: 'Table de mixage audio professionnelle pour enregistrement podcast et musique Bruxelles'
    },
  ];

  const targets = [
    { title: 'Créateurs de contenu', icon: 'video', desc: 'YouTubeurs, podcasteurs, influenceurs' },
    { title: 'Marques & Entreprises', icon: 'briefcase', desc: 'Contenus corporate, formations, webinaires' },
    { title: 'Agences créatives', icon: 'target', desc: 'Productions client, campagnes marketing' },
    { title: 'Artistes & Musiciens', icon: 'music', desc: 'Sessions live, interviews, clips' },
  ];

  const blogPosts = [
    {
      title: '5 conseils pour réussir votre premier podcast',
      category: 'Podcast',
      date: '15 Nov 2025',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80',
      slug: 'conseils-premier-podcast',
    },
    {
      title: 'Vidéo marketing : tendances 2025',
      category: 'Vidéo',
      date: '12 Nov 2025',
      image: '/photo/AS STUDIOS-20.JPG',
      slug: 'video-marketing-tendances-2025',
    },
    {
      title: 'Studio photo : quel équipement choisir ?',
      category: 'Photo',
      date: '8 Nov 2025',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
      slug: 'equipement-studio-photo',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
        {/* Animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-pastel to-violet-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Votre studio,{' '}
              <span className="gradient-text">votre créativité.</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Studios de podcast, vidéo et photo à Bruxelles, pensés pour les créateurs modernes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Réserver une session
              </Link>
              <Link href="/studios" className="px-8 py-4 rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg transition-all duration-300">
                Découvrir les studios
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <Image
                src="/photo/AS-STUDIOS-6.JPG"
                alt="Studio professionnel AS Studio à Bruxelles - Équipements podcast, vidéo et photo premium à Auderghem"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio Offerings */}
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
              3 expériences studio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {offering.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full gradient-primary text-white text-sm font-semibold shadow-lg">
                      Populaire
                    </span>
                  </div>
                )}
                <div className={`bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full ${offering.popular ? 'ring-2 ring-[#976EFD]/20' : ''}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                      {offering.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{offering.description}</p>
                    <ul className="space-y-3 mb-6">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="w-5 h-5 text-[#976EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block w-full px-6 py-3 rounded-full gradient-border bg-white text-gray-900 font-semibold text-center hover:shadow-lg transition-all duration-300"
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

      {/* 5 Reasons Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              5 raisons de choisir AS Studios
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-gradient-start mb-4">
                  {renderIcon(reason.icon, "w-16 h-16")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              Équipements premium inclus
            </h2>
            <p className="text-xl text-gray-600">
              Du matériel professionnel pour des productions de qualité
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <p className="text-center font-semibold text-gray-900">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Pour qui ?
            </h2>
            <p className="text-xl text-gray-600">
              Des studios adaptés à tous les créateurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targets.map((target, index) => (
              <motion.div
                key={target.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-gradient-start mb-4">
                  {renderIcon(target.icon, "w-20 h-20")}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{target.title}</h3>
                <p className="text-sm text-gray-600">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
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
              Derniers articles
            </h2>
            <p className="text-xl text-gray-600">
              Conseils, tendances et actualités de la création
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full gradient-primary text-white text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-[#976EFD] font-semibold group-hover:underline">
                        Lire la suite →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-block px-8 py-4 rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg transition-all duration-300"
            >
              Voir tous les articles
            </Link>
          </motion.div>
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
          className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prêt à créer votre prochain contenu ?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Réservez dès maintenant votre session studio et donnez vie à vos idées.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-white text-[#976EFD] font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Parler de votre projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
