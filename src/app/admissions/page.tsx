import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdmissionsContent } from "@/components/AdmissionsContent";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026-27 | AGMCET - Apply for B.E. Programmes",
  description: "Explore admission procedures, seat intake, eligibility criteria, and apply for B.E. programmes at AGMCET. Start your engineering journey with us.",
  keywords: ["AGMCET Admissions 2026", "Engineering Admission Karnataka", "BE Admission Chikodi", "AGM College Intake", "CET COMEDK Admissions"],
  alternates: {
    canonical: "https://www.agmcet.edu.in/admissions",
  },
  openGraph: {
    title: "Admissions 2026-27 | AGMCET - Apply for B.E. Programmes",
    description: "Explore admission procedures, seat intake, and apply for B.E. programmes at AGMCET.",
    url: "https://www.agmcet.edu.in/admissions",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [{ url: "/images/banner.jpeg", width: 1200, height: 630, alt: "AGMCET Admissions" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2026 | AGMCET",
    description: "Start your engineering journey with AGMCET. Check eligibility and apply now.",
    images: ["/images/banner.jpeg"],
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.agmcet.edu.in/admissions"
              },
              "name": "AGMCET Admissions",
              "description": "Admission procedures, seat intake, and eligibility criteria for B.E. programmes at AGMCET.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "AGMCET"
              }
            })
          }}
        />
        <AdmissionsContent />
      </main>
      <Footer />
    </>
  );
}
