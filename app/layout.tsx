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
  title: {
    default: "AS Studios - Studios de création à Bruxelles | Podcast, Vidéo, Photo",
    template: "%s | AS Studios",
  },
  description: "Studios de podcast, vidéo et photo à Bruxelles. Formules flexibles du studio vide à l'accompagnement VIP. Espaces modulables pour créateurs, marques et agences.",
  keywords: [
    "studio podcast bruxelles",
    "studio vidéo bruxelles",
    "studio photo bruxelles",
    "location studio bruxelles",
    "studio enregistrement bruxelles",
    "studio création auderghem",
    "podcast bruxelles",
    "production vidéo bruxelles",
    "studio photo professionnel",
  ],
  authors: [{ name: "AS Studios" }],
  creator: "AS Studios",
  publisher: "AS Studios",
  formatDetection: {
    telephone: false,
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
    url: "https://as-studio.be",
    title: "AS Studios - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    siteName: "AS Studios",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AS Studios - Studios de création à Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Studios - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    creator: "@AS Studios",
    images: ["/logo.png"],
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
