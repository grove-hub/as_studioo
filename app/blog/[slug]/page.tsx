'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '@/lib/data/blogPosts';

/**
 * Blog Article Page
 * Dynamic page for individual blog posts
 */

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Format content with proper line breaks and styling
  const formattedContent = post.content.split('\n\n').map((paragraph, index) => {
    // Handle headings
    if (paragraph.startsWith('## ')) {
      return (
        <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
          {paragraph.replace('## ', '')}
        </h2>
      );
    }
    if (paragraph.startsWith('### ')) {
      return (
        <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {paragraph.replace('### ', '')}
        </h3>
      );
    }

    // Handle lists
    if (paragraph.includes('\n- ')) {
      const items = paragraph.split('\n- ').filter(item => item.trim());
      return (
        <ul key={index} className="space-y-3 my-6 ml-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-[#976EFD] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{item.replace(/^\*\*(.+?)\*\*:?/, '<strong>$1</strong>:').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Handle horizontal rule
    if (paragraph.trim() === '---') {
      return <hr key={index} className="my-12 border-gray-200" />;
    }

    // Handle bold text and links in paragraphs
    const formattedParagraph = paragraph
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#976EFD] hover:underline">$1</a>');

    return (
      <p
        key={index}
        className="text-gray-700 text-lg leading-relaxed my-6"
        dangerouslySetInnerHTML={{ __html: formattedParagraph }}
      />
    );
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#976EFD] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#976EFD] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full gradient-primary text-white text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-600">{post.date}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{post.readTime} de lecture</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl">
                as
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Experts en création de contenu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {formattedContent}
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-12 shadow-xl text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Envie d'enregistrer votre prochain contenu chez nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Réservez une session dans nos studios professionnels à Bruxelles et donnez vie à vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Réserver une session
              </Link>
              <Link
                href="/studios"
                className="inline-block px-8 py-4 rounded-full gradient-border bg-white text-gray-900 font-semibold hover:shadow-lg transition-all duration-300"
              >
                Découvrir les studios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Articles similaires
              </h2>
              <p className="text-xl text-gray-600">
                Continuez votre lecture avec ces articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full gradient-primary text-white text-sm font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:gradient-text transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <span className="text-[#976EFD] font-semibold text-sm group-hover:underline">
                          Lire la suite →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
