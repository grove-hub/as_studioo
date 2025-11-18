'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getAllBlogPosts } from '@/lib/data/blogPosts';

/**
 * Blog Listing Page
 * Displays all blog articles with filtering by category
 */

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', ...Array.from(new Set(allPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'Tous'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Le <span className="gradient-text">Blog</span> as_studio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conseils, tendances et actualités de la création de contenu. Découvrez nos articles pour améliorer vos productions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full gradient-primary text-white text-sm font-semibold shadow-lg">
                            {post.category}
                          </span>
                        </div>

                        {/* Read Time */}
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium">
                            {post.readTime} de lecture
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-[#976EFD] font-semibold group-hover:gap-2 transition-all">
                          <span>Lire la suite</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Aucun article dans cette catégorie
                </h3>
                <p className="text-gray-600">
                  Essayez une autre catégorie ou revenez bientôt !
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-3xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Besoin d'aide pour vos contenus ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe vous accompagne dans la création de podcasts, vidéos et photos professionnelles.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Parler de votre projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
