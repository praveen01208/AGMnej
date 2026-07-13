import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgrammesContent } from "@/components/ProgrammesContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.E. Programmes | AGMCET - Computer Science, AI, ECE, Civil",
  description: "Explore our B.E. programmes in Computer Science, AI & Machine Learning, Electronics & Communication, and Civil Engineering at AGMCET.",
  keywords: ["AGMCET Courses", "B.E. Computer Science Chikodi", "Artificial Intelligence Engineering", "Civil Engineering College", "ECE degree AGMCET"],
  alternates: {
    canonical: "https://www.agmcet.edu.in/programmes",
  },
  openGraph: {
    title: "B.E. Programmes | AGMCET",
    description: "Explore our B.E. programmes in Computer Science, AI & Machine Learning, Electronics & Communication, and Civil Engineering.",
    url: "https://www.agmcet.edu.in/programmes",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [{ url: "/images/story.png", width: 1200, height: 630, alt: "AGMCET Programmes" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Courses at AGMCET",
    description: "Explore B.E. programmes in CSE, AI/ML, ECE, and Civil Engineering.",
    images: ["/images/story.png"],
  },
};

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Course",
                    "name": "B.E. in Computer Science and Engineering",
                    "provider": { "@type": "EducationalOrganization", "name": "AGMCET" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Course",
                    "name": "B.E. in Artificial Intelligence and Machine Learning",
                    "provider": { "@type": "EducationalOrganization", "name": "AGMCET" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Course",
                    "name": "B.E. in Electronics and Communication Engineering",
                    "provider": { "@type": "EducationalOrganization", "name": "AGMCET" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Course",
                    "name": "B.E. in Civil Engineering",
                    "provider": { "@type": "EducationalOrganization", "name": "AGMCET" }
                  }
                }
              ]
            })
          }}
        />
        <ProgrammesContent />
      </main>
      <Footer />
    </>
  );
}
