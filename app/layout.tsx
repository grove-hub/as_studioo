import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.as-studios.be"),
  title: {
    default: "Studio Podcast Bruxelles | Location Studio Enregistrement | AS Studios",
    template: "%s | AS Studios Bruxelles",
  },
  description: "Studio podcast professionnel à Bruxelles. Location studio d'enregistrement podcast, vidéo et photo. Microphones Shure SM7B, équipement 4K, accompagnement clé en main. Réservez votre session à Auderghem.",
  keywords: [
    // Mots-clés principaux podcast
    "studio podcast bruxelles",
    "location studio podcast bruxelles",
    "studio enregistrement podcast bruxelles",
    "enregistrer podcast bruxelles",
    "studio podcast belgique",
    "louer studio podcast",
    "studio podcast professionnel bruxelles",
    "enregistrement podcast professionnel",
    // Mots-clés vidéo
    "studio vidéo bruxelles",
    "studio youtube bruxelles",
    "tournage vidéo bruxelles",
    "studio streaming bruxelles",
    // Mots-clés photo
    "studio photo bruxelles",
    "studio photo professionnel bruxelles",
    // Localisation
    "studio auderghem",
    "studio création bruxelles",
    "location studio bruxelles",
    // Services
    "enregistrement audio bruxelles",
    "production podcast belgique",
    "montage podcast bruxelles",
    "podcast clé en main bruxelles",
    // Équipements
    "studio shure sm7b bruxelles",
    "studio rodecaster bruxelles",
    "studio 4k bruxelles",
  ],
  authors: [{ name: "AS Studios" }],
  creator: "AS Studios",
  publisher: "AS Studios",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://www.as-studios.be",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://www.as-studios.be",
    title: "Studio Podcast Bruxelles | Location & Enregistrement | AS Studios",
    description: "Studio podcast professionnel à Bruxelles. Location studio d'enregistrement avec équipement premium Shure SM7B, caméras 4K. Formules flexibles : studio vide, tournage, montage inclus.",
    siteName: "AS Studios",
    images: [
      {
        url: "/photo/AS-STUDIOS-6.webp",
        width: 1400,
        height: 800,
        alt: "Studio podcast professionnel AS Studios à Bruxelles - Équipement premium pour enregistrement audio et vidéo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Podcast Bruxelles | AS Studios",
    description: "Studio podcast professionnel à Bruxelles. Location studio d'enregistrement, tournage vidéo, accompagnement clé en main.",
    images: ["/photo/AS-STUDIOS-6.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <JsonLd />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG3XTB2G');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NG3XTB2G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
