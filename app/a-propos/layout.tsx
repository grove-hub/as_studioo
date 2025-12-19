import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Notre Histoire & Équipe",
  description: "Découvrez l'histoire d'AS Studios, studio podcast professionnel à Bruxelles. Notre équipe passionnée vous accompagne dans vos projets créatifs à Auderghem.",
  keywords: [
    "as studios équipe",
    "studio podcast bruxelles histoire",
    "studio enregistrement auderghem",
    "équipe production podcast",
    "studio créatif bruxelles",
  ],
  alternates: {
    canonical: "https://www.as-studios.be/a-propos",
  },
  openGraph: {
    title: "À Propos | AS Studios Bruxelles",
    description: "Découvrez l'histoire d'AS Studios et notre équipe passionnée. Studio podcast professionnel à Bruxelles.",
    url: "https://www.as-studios.be/a-propos",
    images: [
      {
        url: "/photo/AS-STUDIOS-6.webp",
        width: 1400,
        height: 800,
        alt: "Équipe AS Studios - Studio podcast professionnel Bruxelles",
      },
    ],
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
