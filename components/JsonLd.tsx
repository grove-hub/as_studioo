/**
 * JSON-LD Structured Data Component
 * SEO optimization for search engines - Studio Podcast Bruxelles
 */

export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.as-studio.be/#localbusiness',
    name: 'AS Studios - Studio Podcast Bruxelles',
    alternateName: 'AS Studios',
    description: 'Studio podcast professionnel à Bruxelles. Location studio d\'enregistrement podcast, vidéo et photo à Auderghem. Équipement Shure SM7B, caméras 4K, isolation acoustique. Formules flexibles du studio vide à l\'accompagnement complet.',
    image: [
      'https://www.as-studio.be/photo/AS-STUDIOS-6.webp',
      'https://www.as-studio.be/photo/microphone-shure.webp',
      'https://www.as-studio.be/photo/studio-videoo.png',
    ],
    url: 'https://www.as-studio.be',
    telephone: '+32470078377',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chaussée de Wavre 1259',
      addressLocality: 'Auderghem',
      addressRegion: 'Bruxelles-Capitale',
      postalCode: '1160',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8205618,
      longitude: 4.4339048,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Bruxelles',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Belgique',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://instagram.com/asstudios.be',
      'https://tiktok.com/@asstudios.be',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de studio podcast Bruxelles',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Location Studio Vide',
            description: 'Location studio podcast Bruxelles sans équipe. Espace professionnel avec isolation acoustique pour enregistrement podcast autonome.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rec Solo - Enregistrement Podcast',
            description: 'Enregistrement podcast professionnel à Bruxelles avec cadreur. Livraison rushs vidéo et audio sous 48h.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rec + Montage Podcast',
            description: 'Production podcast clé en main à Bruxelles : enregistrement, montage et 2 shorts pour réseaux sociaux inclus.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Session VIP Podcast',
            description: 'Accompagnement podcast complet à Bruxelles : préparation, interviewer professionnel, tournage, montage et 5 shorts.',
          },
        },
      ],
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Microphones Shure SM7B', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Table de mixage RØDECaster', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Caméras 4K', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Éclairage LED professionnel', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Isolation acoustique', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi haut débit', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Climatisation', value: true },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.as-studio.be/#organization',
    name: 'AS Studios',
    url: 'https://www.as-studio.be',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.as-studio.be/logo.webp',
      width: 200,
      height: 200,
    },
    description: 'Studio podcast professionnel à Bruxelles. Location studio enregistrement podcast, vidéo et photo avec équipement premium.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chaussée de Wavre 1259',
      addressLocality: 'Auderghem',
      addressRegion: 'Bruxelles-Capitale',
      postalCode: '1160',
      addressCountry: 'BE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+32470078377',
      contactType: 'customer service',
      areaServed: 'BE',
      availableLanguage: ['French', 'English', 'Dutch'],
    },
    sameAs: [
      'https://instagram.com/asstudios.be',
      'https://tiktok.com/@asstudios.be',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.as-studio.be/#website',
    name: 'AS Studios - Studio Podcast Bruxelles',
    url: 'https://www.as-studio.be',
    description: 'Studio podcast professionnel à Bruxelles. Location studio d\'enregistrement podcast, vidéo et photo.',
    publisher: {
      '@id': 'https://www.as-studio.be/#organization',
    },
    inLanguage: 'fr-BE',
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.as-studio.be/#service',
    name: 'Location Studio Podcast Bruxelles',
    description: 'Location de studio d\'enregistrement podcast professionnel à Bruxelles. Équipement premium Shure SM7B, caméras 4K, isolation acoustique. Idéal pour podcasts, interviews, vidéos YouTube.',
    provider: {
      '@id': 'https://www.as-studio.be/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bruxelles',
      containedInPlace: {
        '@type': 'Country',
        name: 'Belgique',
      },
    },
    serviceType: [
      'Location studio podcast',
      'Enregistrement podcast',
      'Production vidéo',
      'Studio photo',
      'Montage podcast',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Formules location studio',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Studio Vide',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Rec Solo',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Rec + Montage',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Session VIP',
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Où se trouve le studio podcast AS Studios à Bruxelles ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AS Studios est situé Chaussée de Wavre 1259 à Auderghem (1160), facilement accessible depuis le centre de Bruxelles. Notre studio podcast professionnel dispose d\'un parking gratuit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel équipement est inclus dans la location du studio podcast ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notre studio podcast à Bruxelles inclut : microphones Shure SM7B professionnels, table de mixage RØDECaster, caméras 4K, éclairages LED, isolation acoustique premium et WiFi haut débit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles formules de location proposez-vous pour l\'enregistrement podcast ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous proposons 4 formules : Studio Vide (location espace seul), Rec Solo (avec cadreur), Rec + Montage (production complète avec shorts), et Session VIP (accompagnement complet avec interviewer professionnel).',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on enregistrer un podcast vidéo dans votre studio ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, notre studio podcast à Bruxelles est équipé pour l\'enregistrement vidéo avec caméras 4K professionnelles, éclairages LED et possibilité de multi-caméras pour vos vidéos podcast, interviews et contenus YouTube.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
