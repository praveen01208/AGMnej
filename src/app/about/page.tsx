import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AGMCET - AGM College of Engineering & Technology",
  description: "Learn about AGMCET's vision, mission, core values and messages from our Founder, President and Principal. Empowering rural Karnataka through quality engineering education.",
  keywords: ["About AGMCET", "AGM College History", "Engineering College Chikodi", "Vision and Mission AGMCET"],
  alternates: {
    canonical: "https://www.agmcet.edu.in/about",
  },
  openGraph: {
    title: "About Us | AGMCET - AGM College of Engineering & Technology",
    description: "Learn about AGMCET's vision, mission, and core values. Empowering rural Karnataka through quality engineering education.",
    url: "https://www.agmcet.edu.in/about",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [{ url: "/images/story.png", width: 1200, height: 630, alt: "About AGMCET" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AGMCET",
    description: "Learn about AGMCET's vision, mission, and core values.",
    images: ["/images/story.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.agmcet.edu.in/about"
              },
              "name": "About AGMCET",
              "description": "Learn about AGMCET's vision, mission, core values and messages from our Founder."
            })
          }}
        />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
