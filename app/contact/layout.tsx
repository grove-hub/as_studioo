import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Réserver Votre Session Studio",
  description: "Contactez AS Studios pour réserver votre session podcast à Bruxelles. Devis gratuit sous 24h. Studio situé à Auderghem, parking gratuit.",
  keywords: [
    "contact as studios",
    "réserver studio podcast bruxelles",
    "devis studio enregistrement",
    "studio podcast auderghem contact",
    "location studio bruxelles tarif",
  ],
  alternates: {
    canonical: "https://www.as-studios.be/contact",
  },
  openGraph: {
    title: "Contact | AS Studios Bruxelles",
    description: "Contactez-nous pour réserver votre session studio podcast à Bruxelles. Devis gratuit et personnalisé.",
    url: "https://www.as-studios.be/contact",
    images: [
      {
        url: "/photo/AS-STUDIOS-6.webp",
        width: 1400,
        height: 800,
        alt: "Contactez AS Studios - Studio podcast Bruxelles",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
