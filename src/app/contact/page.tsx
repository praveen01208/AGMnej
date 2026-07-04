import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/ContactContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AGMCET - AGM College of Engineering & Technology",
  description: "Get in touch with AGMCET in Chikodi. Find our phone numbers, email address, campus location map, and contact our admissions team today.",
  keywords: ["AGMCET Contact Number", "AGM College Address", "AGMCET Location Map", "Engineering College in Chikodi Contact", "Admissions Enquiry AGMCET"],
  alternates: {
    canonical: "https://www.agmcet.edu.in/contact",
  },
  openGraph: {
    title: "Contact Us | AGMCET - AGM College of Engineering & Technology",
    description: "Get in touch with AGMCET. Find our campus location, phone numbers, and email.",
    url: "https://www.agmcet.edu.in/contact",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [{ url: "/images/story.png", width: 1200, height: 630, alt: "Contact AGMCET" }],
    locale: "en_IN",
    type: "website",
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AGMCET",
    description: "Find our campus location, phone numbers, and email address.",
    images: ["/images/story.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.agmcet.edu.in/contact"
              },
              "name": "Contact AGMCET",
              "description": "Contact information for AGMCET including address, phone, and email."
            })
          }}
        />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
