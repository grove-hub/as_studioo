'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Contact Page
 * Contact form with Google Maps integration
 * Includes studio address and contact information
 */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    wantCallback: false,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        wantCallback: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adresse',
      content: (
        <>
          Chau. de Wavre 1259<br />
          1160 Auderghem
        </>
      ),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      content: (
        <a href="tel:+32470078377" className="hover:text-[#976EFD] transition-colors">
          0470 07 83 77
        </a>
      ),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horaires',
      content: (
        <>
          Lun - Ven : 9h - 19h<br />
          Sam : 10h - 18h<br />
          Sur réservation uniquement
        </>
      ),
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
              Parlons de votre <span className="gradient-text">projet</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contactez-nous pour réserver votre session studio ou obtenir plus d'informations. Nous vous recontactons rapidement avec une proposition sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-purple-50 to-rose-50 p-8 rounded-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="text-gray-600">{info.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Formulaire de contact
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous recontactons dans les 24h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all"
                      placeholder="+32 xxx xx xx xx"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="podcast">Podcast</option>
                      <option value="video">Vidéo</option>
                      <option value="photo">Photo</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all resize-none"
                      placeholder="Parlez-nous de votre projet, de vos besoins et de vos objectifs..."
                    />
                  </div>

                  {/* Callback Checkbox */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="wantCallback"
                      name="wantCallback"
                      checked={formData.wantCallback}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#976EFD] focus:ring-[#976EFD] mt-0.5"
                    />
                    <label htmlFor="wantCallback" className="ml-3 text-sm text-gray-700">
                      Je souhaite être rappelé(e)
                    </label>
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note :</strong> Nous vous recontactons avec une proposition sur mesure adaptée à votre projet et votre budget. Aucun prix affiché, tout est personnalisé.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                      formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </motion.button>

                  {/* Success Message */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800"
                    >
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold">Message envoyé avec succès !</p>
                          <p className="text-sm mt-1">Nous vous recontactons dans les 24h.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Nous trouver
                </h2>
                <p className="text-gray-600 mb-6">
                  On est à Auderghem, facile d'accès en bus ou en voiture.
                </p>

                {/* Google Maps Embed */}
                <div className="relative rounded-xl overflow-hidden shadow-lg h-96 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8642076840743!2d4.431691876775842!3d50.82056187163203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dbb1e8b3e30b%3A0x9b8f9b8f9b8f9b8f!2sChau.%20de%20Wavre%201259%2C%201160%20Auderghem!5e0!3m2!1sen!2sbe!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location de AS Studios"
                  />
                </div>

                {/* Transport Info */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">En transports</p>
                      <p className="text-sm text-gray-600">À 1 min du métro Hankar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">En voiture</p>
                      <p className="text-sm text-gray-600">Places de parking gratuites devant le studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Des questions avant de réserver ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              N'hésitez pas à nous appeler directement pour toute question. Notre équipe se fera un plaisir de vous renseigner.
            </p>
            <a
              href="tel:+32470078377"
              className="inline-block px-10 py-5 rounded-full gradient-primary text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 Appelez-nous : 0470 07 83 77
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
