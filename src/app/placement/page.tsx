import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlacementContent } from "@/components/PlacementContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements | AGMCET - Top Engineering Placements in Karnataka",
  description: "Explore the placement cell at AGMCET. We offer industry-aligned training programs, top corporate connections, and high salary packages for our engineering graduates.",
  keywords: ["AGMCET Placements", "AGM College Placement Cell", "Top Placements Engineering College", "Highest Package Engineering Belagavi", "AGMCET Recruiters"],
  alternates: {
    canonical: "https://www.agmcet.edu.in/placement",
  },
  openGraph: {
    title: "Placements | AGMCET - Top Engineering Placements",
    description: "Explore the placement cell at AGMCET. We offer industry-aligned training programs and high salary packages.",
    url: "https://www.agmcet.edu.in/placement",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [{ url: "/images/story.png", width: 1200, height: 630, alt: "AGMCET Placements" }],
    locale: "en_IN",
    type: "website",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "AGMCET Placements",
    description: "Explore industry-aligned training and top corporate placements at AGMCET.",
    images: ["/images/story.png"],
  },
};

export default function PlacementPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <PlacementContent />
      </main>
      <Footer />
    </>
  );
}
