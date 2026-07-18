import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "AGMCET - AGM College of Engineering and Technology, Chikodi",
  description: "Welcome to AGMCET - AGM College of Engineering and Technology in Chikodi. Explore top B.E. courses, admissions 2026, modern infrastructure, and excellent placements.",
  keywords: ["AGMCET", "AGM", "Chikodi engineering college", "AGM College of Engineering and Technology", "Best engineering college in Chikodi", "AGMCET Belagavi", "VTU affiliated college Chikodi"],
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
  alternates: {
    canonical: "https://www.agmcet.edu.in", 
  },
  openGraph: {
    title: "AGMCET - AGM College of Engineering and Technology, Chikodi",
    description: "Welcome to AGMCET - AGM College of Engineering and Technology in Chikodi. Explore top B.E. courses, admissions 2026, modern infrastructure, and excellent placements.",
    url: "https://www.agmcet.edu.in",
    siteName: "AGMCET - A.G.M College of Engineering and Technology",
    images: [
      {
        url: "/images/banner.jpeg", 
        width: 1200,
        height: 630,
        alt: "AGMCET Campus - AGM College of Engineering and Technology Chikodi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGMCET - AGM College of Engineering and Technology, Chikodi",
    description: "Welcome to AGMCET - AGM College of Engineering and Technology in Chikodi. Explore top B.E. courses, admissions 2026, modern infrastructure, and excellent placements.",
    images: ["/images/banner.jpeg"],
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "AGMCET - A.G.M College of Engineering and Technology",
              "alternateName": ["AGM", "Chikodi engineering college", "AGM College"],
              "url": "https://www.agmcet.edu.in",
              "logo": "https://www.agmcet.edu.in/logo.png",
              "image": "https://www.agmcet.edu.in/images/story.png",
              "description": "AGMCET is a premier engineering college in Chikodi, Karnataka, affiliated with VTU Belagavi and approved by AICTE.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nej-Shamanewadi",
                "addressLocality": "Chikodi",
                "addressRegion": "Karnataka",
                "postalCode": "591239",
                "addressCountry": "IN"
              },
              "telephone": "+91-76193-55570",
              "email": "principalagmcet@gmail.com",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 16.4331,
                "longitude": 74.5892
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-76193-55570",
                  "contactType": "Admissions",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Kannada", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-91087-90808",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Kannada", "Hindi"]
                }
              ],
              "sameAs": [
                "https://www.instagram.com/agmcet_shamanewadi",
                "https://www.linkedin.com/in/agmcet-engineering-college-b99520423"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AGMCET - A.G.M College of Engineering and Technology",
              "alternateName": "AGMCET",
              "url": "https://www.agmcet.edu.in",
              "inLanguage": "en-IN",
              "publisher": {
                "@type": "EducationalOrganization",
                "name": "AGMCET - A.G.M College of Engineering and Technology",
                "url": "https://www.agmcet.edu.in"
              }
            })
          }}
        />
        {/* Google Analytics - Controlled via Env Variable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
