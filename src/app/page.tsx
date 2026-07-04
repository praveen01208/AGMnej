import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.agmcet.edu.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Programmes",
                  "item": "https://www.agmcet.edu.in/programmes"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Admissions",
                  "item": "https://www.agmcet.edu.in/admissions"
                }
              ]
            })
          }}
        />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
