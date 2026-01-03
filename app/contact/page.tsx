'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      message: formData.message,
      want_callback: formData.wantCallback ? 'Oui' : 'Non',
    };

    try {
      await emailjs.send(
        'service_msuvleg',
        'template_x5ien4p',
        templateParams,
        'RAz5Juh81LwiymlfC'
      );

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
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
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
          +32 470 07 83 77
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
      {/* Hero Section - Mobile optimized */}
      <section className="relative py-10 sm:py-20 bg-gradient-to-br from-purple-50/50 via-white to-rose-50/30 overflow-hidden pt-20 sm:pt-24">
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
          className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-gradient-to-br from-violet-pastel to-rose-pastel blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Parlons de votre <span className="gradient-text">projet</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Contactez-nous pour reserver votre session studio ou obtenir plus d'informations. Nous vous recontactons rapidement avec une proposition sur mesure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Mobile optimized */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-rose-50 p-5 sm:p-8 rounded-xl sm:rounded-2xl text-center active:scale-[0.98] transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-primary text-white mb-3 sm:mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{info.title}</h3>
                <div className="text-sm sm:text-base text-gray-600">{info.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Formulaire de contact
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Remplissez le formulaire ci-dessous et nous vous recontactons dans les 24h.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Prenom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                        className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all text-base"
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
                        autoComplete="family-name"
                        className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all text-base"
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
                      autoComplete="email"
                      inputMode="email"
                      className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all text-base"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telephone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all text-base"
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
                      className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all text-base appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23976EFD%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10"
                    >
                      <option value="">Selectionnez un type</option>
                      <option value="podcast">Podcast</option>
                      <option value="video">Video</option>
                      <option value="photo">Photo</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Decrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#976EFD] focus:border-transparent transition-all resize-none text-base"
                      placeholder="Parlez-nous de votre projet, de vos besoins et de vos objectifs..."
                    />
                  </div>

                  {/* Callback Checkbox - Touch-friendly */}
                  <div className="flex items-start py-2">
                    <input
                      type="checkbox"
                      id="wantCallback"
                      name="wantCallback"
                      checked={formData.wantCallback}
                      onChange={handleChange}
                      className="w-6 h-6 rounded border-gray-300 text-[#976EFD] focus:ring-[#976EFD] mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="wantCallback" className="ml-3 text-sm sm:text-base text-gray-700 cursor-pointer select-none">
                      Je souhaite etre rappele(e)
                    </label>
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-4 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-700">
                      <strong>Note :</strong> Nous vous recontactons avec une proposition sur mesure adaptee a votre projet et votre budget. Aucun prix affiche, tout est personnalise.
                    </p>
                  </div>

                  {/* Submit Button - Touch-friendly */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-4 min-h-[52px] rounded-full gradient-primary text-white font-semibold shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 flex items-center justify-center text-base ${
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
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold text-sm sm:text-base">Message envoye avec succes !</p>
                          <p className="text-xs sm:text-sm mt-1">Nous vous recontactons dans les 24h.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800"
                    >
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-semibold text-sm sm:text-base">Erreur lors de l'envoi</p>
                          <p className="text-xs sm:text-sm mt-1">Veuillez reessayer ou nous contacter par telephone.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-8 h-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Nous trouver
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  On est a Auderghem, facile d'acces en bus ou en voiture.
                </p>

                {/* Google Maps Embed - Responsive height */}
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg h-64 sm:h-96 mb-4 sm:mb-6">
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
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">En transports</p>
                      <p className="text-xs sm:text-sm text-gray-600">A 1 min du metro Hankar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">En voiture</p>
                      <p className="text-xs sm:text-sm text-gray-600">Places de parking gratuites devant le studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional CTA - Mobile optimized */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Des questions avant de reserver ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              N'hesitez pas a nous appeler directement pour toute question. Notre equipe se fera un plaisir de vous renseigner.
            </p>
            <a
              href="tel:+32470078377"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 min-h-[52px] rounded-full gradient-primary text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300"
            >
              Appelez-nous : +32 470 07 83 77
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
