'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HandshakeIcon, TrendingIcon, LightbulbIcon, GlobeIcon, SparklesIcon, AdjustmentsIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';

/**
 * About Page (À propos)
 * Story of AS Studio, philosophy, and timeline
 */

export default function AboutPage() {
  const [flippedCard, setFlippedCard] = React.useState<number | null>(null);

  // Helper function to render icons
  const renderIcon = (iconName: string, className: string = "w-12 h-12") => {
    const icons: Record<string, React.ReactElement> = {
      handshake: <HandshakeIcon className={className} />,
      trending: <TrendingIcon className={className} />,
      lightbulb: <LightbulbIcon className={className} />,
      globe: <GlobeIcon className={className} />,
      sparkles: <SparklesIcon className={className} />,
      adjustments: <AdjustmentsIcon className={className} />,
    };
    return icons[iconName] || null;
  };

  const philosophy = [
    {
      title: 'Simplicité',
      description: 'Des espaces intuitifs et un accompagnement clair pour que vous puissiez vous concentrer sur votre créativité.',
      icon: 'sparkles',
    },
    {
      title: 'Modularité',
      description: 'Des studios flexibles qui s\'adaptent à tous vos projets, du podcast intimiste à la production vidéo complète.',
      icon: 'adjustments',
    },
    {
      title: 'Qualité',
      description: 'Du matériel professionnel haut de gamme pour des productions qui se démarquent.',
      icon: 'sparkles',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'L\'idée',
      description: 'En attente d\'infos',
    },
    {
      year: '2024',
      title: 'La création',
      description: 'En attente d\'infos',
    },
    {
      year: '2025',
      title: 'L\'expansion',
      description: 'En attente d\'infos',
    },
    {
      year: 'Aujourd\'hui',
      title: 'L\'avenir',
      description: 'En attente d\'infos',
    },
  ];

  const values = [
    {
      icon: 'handshake',
      title: 'Accessibilité',
      text: 'Nous croyons que la création de contenu de qualité devrait être accessible à tous.',
    },
    {
      icon: 'trending',
      title: 'Innovation',
      text: 'Nous restons à la pointe des technologies et tendances de production.',
    },
    {
      icon: 'lightbulb',
      title: 'Accompagnement',
      text: 'Votre succès est notre priorité. Nous vous guidons à chaque étape.',
    },
    {
      icon: 'globe',
      title: 'Communauté',
      text: 'Créer un espace où créateurs et marques se rencontrent et collaborent.',
    },
  ];

  const teamMembers = [
    {
      name: 'SMAIN',
      role: 'Founder',
      specialty: 'Creative',
      image: '/images/team/smain.jpg',
    },
    {
      name: 'Amandine',
      role: 'Founder',
      specialty: 'Project Manager',
      image: '/images/team/amandine.jpg',
    },
    {
      name: 'Thomas',
      role: 'Producer',
      specialty: 'Cameraman • Editor',
      image: '/images/team/thomas.jpg',
    },
    {
      name: 'Maxime',
      role: 'Cameraman',
      specialty: 'Editor',
      image: '/images/team/maxime.jpg',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50/50 via-white to-rose-50/30 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Un studio pensé pour les{' '}
              <span className="gradient-text">créateurs de demain</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chez AS Studio, nous croyons que chaque créateur mérite un espace professionnel pour donner vie à ses idées. Voici notre histoire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              L'équipe AS Studio
            </h2>
            <p className="text-xl text-gray-600">
              Passionnés de création et de technologie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-80 cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <motion.div
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="relative w-full h-full preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-xl shadow-lg p-6 bg-gradient-to-br from-white via-purple-50/30 to-rose-50/20 border border-gray-100 flex flex-col justify-center items-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {member.role} • {member.specialty}
                      </p>
                      <h3 className="text-4xl font-bold gradient-text mb-4">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Cliquez pour voir la photo
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-xl shadow-lg overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} ${member.specialty} AS Studio`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role} • {member.specialty}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80"
                  alt="Intérieur studio AS Studio Bruxelles - Espace créatif professionnel pour podcast vidéo photo à Auderghem"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  AS Studio est né d'un constat simple : à Bruxelles, trop de créateurs talentueux manquaient d'espaces adaptés pour concrétiser leurs projets.
                </p>
                <p>
                  Nous avons imaginé un lieu où la technologie rencontre la créativité, où chaque détail est pensé pour faciliter votre processus créatif. Un studio qui ne se contente pas de louer des équipements, mais qui vous accompagne dans la réalisation de vos ambitions.
                </p>
                <p>
                  Aujourd'hui, AS Studio est devenu un hub créatif où podcasteurs, vidéastes, photographes et marques viennent créer du contenu qui résonne.
                </p>
                <p className="font-semibold gradient-text text-xl">
                  Parce que votre créativité mérite le meilleur cadre pour s'exprimer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Notre philosophie
            </h2>
            <p className="text-xl text-gray-600">
              Trois piliers qui guident notre approche
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-gradient-start mb-6">
                  {renderIcon(item.icon, "w-16 h-16")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Notre parcours
            </h2>
            <p className="text-xl text-gray-600">
              De l'idée à la réalité
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#976EFD] to-[#FFDEFC]" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-2 w-7 h-7 rounded-full gradient-primary shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-6 rounded-xl">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-2xl font-bold gradient-text">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous anime au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-gradient-start mb-4">
                  {renderIcon(value.icon, "w-20 h-20")}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.text}
                </p>
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Rejoignez l'aventure AS Studio
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Faites partie de notre communauté de créateurs et donnez vie à vos projets dans nos studios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-full bg-white text-[#976EFD] font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Réserver une session
              </Link>
              <Link
                href="/studios"
                className="inline-block px-10 py-5 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[#976EFD] transition-all duration-300"
              >
                Découvrir les studios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
