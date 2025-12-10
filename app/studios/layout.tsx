import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studios Podcast, Vidéo & Photo à Bruxelles | Location Équipement Pro",
  description: "Découvrez nos studios d'enregistrement podcast à Bruxelles : microphones Shure SM7B, caméras 4K, éclairages LED. Location studio vide ou avec équipe. Auderghem.",
  keywords: [
    "studio podcast bruxelles",
    "location studio enregistrement bruxelles",
    "studio vidéo bruxelles",
    "studio photo bruxelles",
    "studio youtube bruxelles",
    "enregistrement podcast belgique",
    "studio shure sm7b",
    "studio rodecaster bruxelles",
    "location studio auderghem",
    "studio 4k bruxelles",
    "studio streaming bruxelles",
    "studio cyclorama bruxelles",
  ],
  alternates: {
    canonical: "https://www.as-studio.be/studios",
  },
  openGraph: {
    title: "Studios Podcast, Vidéo & Photo | AS Studios Bruxelles",
    description: "Location studio podcast professionnel à Bruxelles. Équipement Shure SM7B, caméras 4K, isolation acoustique. Formules flexibles.",
    url: "https://www.as-studio.be/studios",
    images: [
      {
        url: "/photo/microphone-shure.webp",
        width: 800,
        height: 600,
        alt: "Studio podcast professionnel Bruxelles - Microphones Shure SM7B",
      },
    ],
  },
};

export default function StudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
