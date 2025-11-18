import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

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
    default: "as_studio - Studios de création à Bruxelles | Podcast, Vidéo, Photo",
    template: "%s | as_studio",
  },
  description: "Studios de podcast, vidéo et photo à Bruxelles. Équipements premium, accompagnement professionnel et espaces modulables pour créateurs, marques et agences.",
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
  authors: [{ name: "as_studio" }],
  creator: "as_studio",
  publisher: "as_studio",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://as-studio.be",
    title: "as_studio - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    siteName: "as_studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "as_studio - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    creator: "@as_studio",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
