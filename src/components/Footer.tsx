"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Phone, Smartphone, Mail, MapPin } from "lucide-react";

/* Brand icons are not shipped by lucide-react v1, so they live here as inline paths. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/agmcet_shamanewadi",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/agmcet-engineering-college-b99520423",
    Icon: LinkedInIcon,
  },
];

const NAV_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Programs & Faculties", href: "/programmes" },
      { label: "Admissions", href: "/admissions" },
      { label: "Scholarships", href: "#" },
      { label: "Campus Life", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Placements & Career", href: "/placement" },
      { label: "Library", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Sitemap", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    /* Outer wrapper — gives the floating card effect with gaps on all sides */
    <div className="bg-slate-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <footer className="bg-[#0a192f] text-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,25,47,0.25)]">

        {/* ── CTA strip ── */}
        <div className="border-b border-white/10 px-6 py-6 sm:px-10 lg:px-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 max-w-6xl mx-auto">
            <div>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-white leading-snug max-w-xl">
                Join A.G.M College — Begin Your Journey Toward Knowledge &amp; Growth
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-lg">
                Join a global community of learners and innovators at A.G.M College.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/admissions?tab=enquiry"
                className="bg-[#d4af37] text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-[#b5952f] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 group"
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main content grid ── */}
        <div className="px-6 pt-8 pb-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Brand + Contact */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="A.G.M College Home">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow ring-2 ring-[#d4af37]/40 overflow-hidden">
                <Image src="/logo.png" alt="A.G.M College Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-none text-white font-serif mb-1">A.G.M College</span>
                <span className="text-[9px] uppercase text-[#d4af37] font-bold tracking-widest">of Engineering &amp; Technology</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed mb-5 max-w-xs">
              Shaping bright minds with innovation, diversity, and excellence. Affiliated to VTU, Belagavi. Approved by AICTE, New Delhi.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
                <span>Nej-Shamanewadi, Tq: Chikkodi, Dist: Belagavi, Karnataka — 591239</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="tel:+917619235570" className="hover:text-[#d4af37] transition-colors">+91 76193 55570</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="tel:+919108790808" className="hover:text-[#d4af37] transition-colors">+91 91087 90808</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href="mailto:principalagmcet@gmail.com" className="hover:text-[#d4af37] transition-colors">principalagmcet@gmail.com</a>
              </div>
            </div>

            {/* Social profiles — these corroborate the sameAs entries in schema */}
            <div className="flex items-center gap-3 mt-5">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={`AGMCET on ${label}`}
                  title={`AGMCET on ${label}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-slate-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav link groups */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:pl-10">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col">
                <h3 className="text-white font-bold mb-4 text-[10px] tracking-widest uppercase opacity-70">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.href === "#") e.preventDefault();
                        }}
                        className={`group flex items-center gap-1 transition-colors duration-300 w-max text-xs ${link.href === "#" ? "text-slate-500 cursor-default" : "text-slate-400 hover:text-[#d4af37]"
                          }`}
                      >
                        <span>{link.label}</span>
                        {link.href !== "#" && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="px-6 pb-5 sm:px-10 lg:px-14 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-[10px]">
            © {new Date().getFullYear()} A.G.M College of Engineering &amp; Technology. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px]">
            Affiliated to VTU · Approved by AICTE
          </p>
        </div>

      </footer>
    </div>
  );
}
