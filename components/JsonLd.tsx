/**
 * JSON-LD Structured Data Component
 * SEO optimization for search engines
 */

export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AS Studio',
    description: 'Studios de podcast, vidéo et photo à Bruxelles. Équipements premium et accompagnement professionnel pour créateurs de contenu.',
    image: 'https://as-studio.be/og-image.jpg',
    '@id': 'https://as-studio.be',
    url: 'https://as-studio.be',
    telephone: '+32486167825',
    priceRange: 'Sur devis',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chaussée de Wavre 1259',
      addressLocality: 'Auderghem',
      postalCode: '1160',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8205618,
      longitude: 4.4339048,
    },
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
      'https://instagram.com/AS Studio',
      'https://tiktok.com/@AS Studio',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Studio Podcast',
        description: 'Location de studio podcast avec équipements professionnels',
      },
      {
        '@type': 'Offer',
        name: 'Studio Vidéo',
        description: 'Location de studio vidéo avec caméras 4K et éclairages professionnels',
      },
      {
        '@type': 'Offer',
        name: 'Studio Photo',
        description: 'Location de studio photo avec cyclorama et équipements d\'éclairage',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AS Studio',
    url: 'https://as-studio.be',
    logo: 'https://as-studio.be/logo.png',
    description: 'Studios créatifs à Bruxelles pour podcast, vidéo et photo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chaussée de Wavre 1259',
      addressLocality: 'Auderghem',
      postalCode: '1160',
      addressCountry: 'BE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+32486167825',
      contactType: 'customer service',
      areaServed: 'BE',
      availableLanguage: ['French', 'English'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AS Studio',
    url: 'https://as-studio.be',
    description: 'Studios de podcast, vidéo et photo à Bruxelles',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://as-studio.be/blog?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
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
    </>
  );
}
