import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "AS Studio - Studios de création à Bruxelles | Podcast, Vidéo, Photo",
    template: "%s | AS Studio",
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
  authors: [{ name: "AS Studio" }],
  creator: "AS Studio",
  publisher: "AS Studio",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://as-studio.be",
    title: "AS Studio - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    siteName: "AS Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AS Studio - Studios de création à Bruxelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Studio - Studios de création à Bruxelles",
    description: "Studios de podcast, vidéo et photo pensés pour les créateurs modernes",
    creator: "@AS Studio",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
