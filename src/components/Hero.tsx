"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Building2, Briefcase, Award, Users, Library, TrendingUp, Shield, Map, Star, Laptop, Trophy, ChevronLeft, ChevronRight, Calendar, Sparkles, Heart, Eye, X, Pause, Play } from "lucide-react";

const PROGRAMMES = [
  { 
    name: "Computer Science And\nEngineering", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    intake: 90,
    href: "/programmes?branch=cse"
  },
  { 
    name: "Artificial Intelligence\n& Machine Learning", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    intake: 120,
    href: "/programmes?branch=aiml"
  },
  { 
    name: "Electronics &\nCommunication\nEngineering", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    intake: 60,
    href: "/programmes?branch=ece"
  },
  { 
    name: "Civil\nEngineering", 
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    intake: 30,
    href: "/programmes?branch=civil"
  },
];

const FACULTIES = [
  { name: "Vaishnav Vasant Shegale", role: "Assistant Professor, CSE", image: "/images/faculty/vaishnav.png" },
  { name: "Dr. Sanjay Ankali", role: "Professor, CSE", image: "/images/faculty/sanjay.jpg" },
  { name: "K.R. Patil", role: "Assistant Professor, Physics", image: "/images/faculty/krpatil.png" },
  { name: "Ravi Walke", role: "Physical Director, Sports", image: "/images/faculty/ravi.jpeg" },
  { name: "Ashwini Pharalad", role: "Assistant Professor, CSE", image: "/images/faculty/ashwini.jpg" },
  { name: "Rani Siddappa Suture", role: "CSE Department", image: "/images/faculty/rani.jpg" },
  { name: "Dr. Sachin Mekkalike", role: "Associate Professor, Mathematics", image: "/images/faculty/sachin.png" },
  { name: "Dr. Shashikant Walki", role: "Associate Professor, Engg. Chemistry", image: "/images/faculty/shashikant.png" },
  { name: "Ullas Jayakumar Maisale", role: "Assistant Professor, ECE", image: "/images/faculty/jayakumar.png" },
  { name: "Sagar Sudhakar Birade", role: "Assistant Professor, ECE", image: "/images/faculty/sudhakar.png" },
  { name: "Ashwini M. Kempayyanavar", role: "Department of Mathematics", image: "/images/faculty/ashwinik.png" },
  { name: "Prashant S Shedbalkar", role: "Department of Mechanical", image: "/images/faculty/prashants.png" }
];

const BENTO_FEATURES = [
  {
    title: "Modern Infrastructure",
    description: "Safe & student-friendly campus with state-of-the-art facilities.",
    className: "md:col-span-2 md:row-span-2 bg-[#0a192f] text-white shadow-lg",
    icon: Building2,
  },
  {
    title: "Industry Projects",
    description: "Integrated projects with leading tech companies.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Briefcase,
  },
  {
    title: "Affordable Fees",
    description: "Scholarships available for deserving students.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Award,
  },
  {
    title: "Expert Faculty",
    description: "Dedicated & well-experienced professors.",
    className: "md:col-span-2 bg-[#d4af37] text-white shadow-lg",
    icon: Users,
  },
  {
    title: "Modern Library",
    description: "Well-stocked with the latest journals and books.",
    className: "md:row-span-2 bg-slate-50 text-[#0a192f] border border-slate-200 shadow-sm",
    icon: Library,
  },
  {
    title: "Top Placements",
    description: "Higher salary packages in reputed MNCs.",
    className: "md:col-span-2 bg-[#0a192f] text-white shadow-lg",
    icon: TrendingUp,
  },
  {
    title: "Holistic Growth",
    description: "Focus on personality development and soft skills.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Shield,
  },
  {
    title: "Industrial Visits",
    description: "Regular tours to leading manufacturing and IT hubs.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Map,
  },
  {
    title: "Value Additions",
    description: "Specialized certification programmes.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Star,
  },
  {
    title: "Internships",
    description: "Hands-on experience before graduation.",
    className: "md:col-span-2 bg-slate-100 text-slate-900 border border-slate-200 shadow-sm",
    icon: Laptop,
  },
  {
    title: "Sports & Culture",
    description: "Vibrant campus life with diverse activities.",
    className: "bg-white text-slate-900 border border-slate-100 shadow-sm",
    icon: Trophy,
  },
];

const TRANSPORT_ROUTES = ["Chikkodi", "Hukkeri", "Nippani", "Ichalkaranji", "Raibag", "Kagawad"];

const INNOVATION_LOGOS_TOP = [
  "/logos/1.jpg", "/logos/10.jpeg", "/logos/11.jpeg", "/logos/12.jpeg", "/logos/13.jpeg",
  "/logos/2.webp", "/logos/3.jpg"
];

const INNOVATION_LOGOS_BOTTOM = [
  "/logos/4.jpg", "/logos/5.png", "/logos/6.png", 
  "/logos/7.jpg", "/logos/8.jpeg", "/logos/9.jpeg"
];

// ── Rotating Messages data ──────────────────────────────────────────────────
const MESSAGES = [
  {
    role: "Founder's Message",
    name: "Acharya Shri 108 Gundhar Nandi Ji Maharaj",
    image: "/images/about/swami.png",
    paragraphs: [
      "It is a matter of great privilege and immense pleasure for me to be associated with A.G.M College of Engineering & Technology, Nej-Shamanewadi, Tq: Chikkodi, Dist: Belagavi, Karnataka - 591239. The Students of our college will learn professional and quality skills besides technical expertise. Our holistic approach stimulates innovation among students by inspiring new ideas with creative thinking.",
      "I extend my best wishes to all the students in reaching their objectives and goals that lead to true success in their career path. I feel proud when our students reach new heights by achieving excellence in academics and lead society and nation in the fore front.",
    ],
    quote: "Motivating students with a sense of purpose is the only way to deliver innovative products and ensure quality to society.",
  },
  {
    role: "President's Message",
    name: "Swasti Shri 105 Bhatarak Pattachrya Swamiji",
    image: "/images/about/president.png",
    paragraphs: [
      "Welcome to A.G.M College of Engineering & Technology, Nej-Shamanewadi, a proud institution under the aegis of the prestigious SDM Jain Mutt Group of Institutions. It is our mission to nurture talent, promote innovation, and instill values that shape the engineers of tomorrow.",
      "We are committed to empowering our students with the skills and knowledge required to excel in their professional journeys and contribute meaningfully to society. Together, let us strive for greatness and build a brighter future.",
    ],
    quote: "Together, let us strive for greatness and build a brighter future for every student who walks through our doors.",
  },
  {
    role: "Principal's Message",
    name: "Dr. Ravindra Patil",
    image: "/images/principal.jpeg",
    paragraphs: [
      "A.G.M College of Engineering & Technology is a known Institute since a decade for its qualitative teaching. I have seen students, even with low grades, reaching their highest possibility in terms of academic results. The environment enhances students to aim at their best as they are free from urban hazards.",
      "I extend my best wishes to all students in reaching their objectives and goals that lead to true success in their career path. I feel proud when our students reach new heights by achieving excellence in academics and lead society and nation in the fore front.",
    ],
    quote: "Motivating students with a sense of purpose is the only way to deliver innovative products and ensure quality to society.",
  },
];

function RotatingMessagesSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % MESSAGES.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const msg = MESSAGES[active];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-[#d4af37] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0a192f]">
            Messages from <span className="text-[#d4af37]">Leadership</span>
          </h2>
        </div>

        {/* Tab indicators */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {MESSAGES.map((m, i) => (
            <button
              key={i}
              onClick={() => { setFade(false); setTimeout(() => { setActive(i); setFade(true); }, 200); }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                active === i
                  ? "bg-[#0a192f] text-[#d4af37] border-[#0a192f]"
                  : "bg-white text-slate-400 border-slate-200 hover:border-[#0a192f] hover:text-[#0a192f]"
              }`}
            >
              {m.role}
            </button>
          ))}
        </div>

        {/* Fixed-size card */}
        <div
          className={`transition-opacity duration-400 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">

              {/* Image side */}
              <div className="lg:col-span-4 relative min-h-[280px] lg:min-h-0 bg-[#0a192f]">
                <Image
                  src={msg.image}
                  alt={msg.name}
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/20 to-transparent" />
                {/* name plate pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-1">{msg.role}</p>
                  <p className="text-white font-bold text-base font-serif leading-snug">{msg.name}</p>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                {/* Gold top bar */}
                <div className="hidden lg:block absolute top-0 right-0 w-8/12 h-1 bg-gradient-to-r from-transparent to-[#d4af37]" />

                <div className="space-y-4 flex-1">
                  {msg.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[#0a192f] font-serif italic text-base sm:text-lg leading-relaxed">
                    &quot;{msg.quote}&quot;
                  </p>
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-6">
                  {MESSAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setFade(false); setTimeout(() => { setActive(i); setFade(true); }, 200); }}
                      className={`rounded-full transition-all duration-500 ${
                        active === i ? "w-8 h-2 bg-[#d4af37]" : "w-2 h-2 bg-slate-200 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to message ${i + 1}`}
                    />
                  ))}
                  <Link href="/about" className="ml-auto text-[10px] font-bold uppercase tracking-widest text-[#d4af37] hover:text-[#0a192f] transition-colors">
                    Read Full Message →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Admissions Quick-Links section ─────────────────────────────────────────
const ADMISSION_ITEMS = [
  {
    number: "01",
    title: "Admission Procedure",
    desc: "CET / ComedK / AIEEE — as per Karnataka State Govt. regulations.",
    href: "/admissions",
    icon: "ðŸ“‹",
  },
  {
    number: "02",
    title: "Intake",
    desc: "300+ seats across 4 B.E. programmes — CSE, AI&ML, ECE, Civil.",
    href: "/admissions",
    icon: "ðŸŽ“",
  },
  {
    number: "03",
    title: "Eligibility Criteria",
    desc: "10+2 PCM with CET/ComedK for 1st year; Diploma with DCET for lateral.",
    href: "/admissions",
    icon: "✅",
  },
  {
    number: "04",
    title: "Admission Enquiry",
    desc: "Fill our quick enquiry form and our counsellors will reach out within 24 hrs.",
    href: "/admissions",
    icon: "ðŸ’¬",
  },
];

function AdmissionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const { top } = el.getBoundingClientRect();
      // Once the section top has scrolled past the top of the viewport → apply the effect
      setScrolled(top < 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0a192f] text-white relative overflow-hidden"
      style={{
        borderBottomLeftRadius:  scrolled ? "6rem" : "0",
        borderBottomRightRadius: scrolled ? "6rem" : "0",
        transition: "border-radius 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* bg glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Admissions 2026â€“27</h2>
          <p className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Your Journey Starts Here
          </p>
        </div>

        {/* Same list style as Salient Features */}
        <div className="grid grid-cols-2 gap-x-4 lg:gap-x-12 border-t border-white/10 mt-8">
          {ADMISSION_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative py-5 lg:py-7 border-b border-white/10 hover:border-white/30 transition-colors duration-500 cursor-pointer overflow-hidden block"
            >
              {/* hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 lg:gap-4">
                {/* Number + title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                  <span className="text-xs lg:text-sm font-bold text-[#d4af37] opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                    {item.number}.
                  </span>
                  <h3 className="text-sm lg:text-2xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-all duration-300 sm:group-hover:translate-x-2 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Desc + arrow icon */}
                <div className="flex items-center gap-4 shrink-0 sm:w-[280px] mt-1 sm:mt-0">
                  <p className="text-[10px] lg:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-1 leading-snug hidden sm:block">
                    {item.desc}
                  </p>
                  <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37] transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#0a192f] transition-all duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/admissions"
            className="group flex items-center gap-2 bg-[#d4af37] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg hover:bg-[#b5952f] transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore All Admissions Info
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Hero() {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden bg-slate-50">
      
      {/* Top Text Section (Matches Spice Garden Layout Reference) */}
      <section className="pt-6 lg:pt-10 pb-4 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-[#d4af37] font-bold tracking-widest uppercase mb-4 text-sm">S.D.M. Jainmatt Trust®</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-[#0a192f] mb-4 leading-none uppercase">
            A.G.M College of <br className="hidden md:block"/> Engineering & Technology
            <span className="sr-only">, Chikodi</span>
          </h1>
          <h2 className="text-xl md:text-4xl font-serif italic text-slate-700 mb-4">
            Admissions Open for B.E. Course 2026-27
          </h2>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fdfaf3] to-[#f9f2d4] border border-[#d4af37]/40 text-[#0a192f] font-bold text-sm sm:text-base uppercase tracking-[0.2em] shadow-sm">
              CET-CODE: E327
            </div>
          </div>
          <p className="text-slate-600 max-w-3xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
            Join the radiant beacon of hope for technical excellence. Affiliated to Visvesvaraya Technological University, Belagavi. Approved by AICTE, New Delhi. Recognised by Government of Karnataka.
          </p>
          

        </div>
      </section>

      {/* 4 Stats Blocks Row */}
      <section className="pb-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left border-t border-slate-200 pt-8 pb-4">
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest mb-2 uppercase">Location</p>
              <p className="text-sm font-bold text-[#0a192f] uppercase mb-1">Nej-Shamanewadi</p>
              <p className="text-[11px] text-slate-500 leading-tight">Tq: Chikkodi, Dist: Belagavi<br/>Karnataka - 591239</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest mb-2 uppercase">Affiliation</p>
              <p className="text-sm font-bold text-[#0a192f] uppercase mb-1">VTU, Belagavi</p>
              <p className="text-[11px] text-slate-500 leading-tight">Visvesvaraya Technological<br/>University</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest mb-2 uppercase">Approval</p>
              <p className="text-sm font-bold text-[#0a192f] uppercase mb-1">AICTE, New Delhi</p>
              <p className="text-[11px] text-slate-500 leading-tight">All India Council for<br/>Technical Education</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest mb-2 uppercase">Programmes</p>
              <p className="text-sm font-bold text-[#0a192f] uppercase mb-1">4 B.E. Courses</p>
              <p className="text-[11px] text-slate-500 leading-tight">CSE, AI & ML, ECE, Civil<br/>Total Intake: 300+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Events & Highlights Section */}
      <EventsHighlightsSection />

      {/* Inspirational Message Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-[#d4af37] mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-xl xl:text-2xl text-[#0a192f] leading-relaxed font-serif italic text-balance">
            &quot;Under the divine grace and sacred inspiration of His Holiness Rashtrasanta Acharya Shri 108 Gunadharanandi Maharaj, a blessed new chapter dawns. For the first time in Karnataka, the sanctified &apos;Gunadhar Teerth&apos; rises at Dharmanagari Shamanewadi, a radiant beacon of hope devoted to the upliftment of the poor and needy.&quot;
          </p>
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#d4af37] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0a192f] tracking-tight">
              Our <span className="text-[#d4af37]">Story</span>
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Campus Image */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-slate-200 flex items-center justify-center">
                <Image
                  src="/images/story.png"
                  alt="AGMCET Campus - AGM College of Engineering and Technology Chikodi"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 md:hidden"
                />
                <Image
                  src="/images/desk.png"
                  alt="AGMCET Campus - AGM College of Engineering and Technology Chikodi"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 hidden md:block"
                />
                {/* Gold accent bar on bottom-left */}
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#d4af37]" />
              </div>
              {/* floating stat chip */}
              <div className="absolute -bottom-5 -right-4 hidden sm:flex items-center gap-3 bg-[#0a192f] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#d4af37]/30">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#d4af37] leading-none">300+</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">Annual Intake</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-xl font-bold text-[#d4af37] leading-none">4</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">B.E. Programmes</p>
                </div>
              </div>
            </div>

            {/* Right — Text content */}
            <div className="flex flex-col lg:pt-4">
              {/* overline */}
              <p className="text-[#d4af37] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                Empowering rural Karnataka through quality education
              </p>

              {/* Body text — split into two readable paragraphs */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                Our institution is committed to delivering quality technical education that empowers young minds and contributes to the growth of society, particularly in rural communities. We strive to nurture future technocrats through innovative teaching methodologies, practical learning experiences, and a strong foundation of professionalism, ethics, and social responsibility.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                By fostering critical thinking, problem-solving abilities, and technical excellence, we prepare students to address real-world challenges. Through student-centric learning, modern technological tools, and collaborative teamwork, we inspire innovation, academic excellence, and meaningful contributions to both the engineering profession and society at large.
              </p>

              {/* CTA link — styled like the reference image */}
              <div className="flex items-center gap-8">
                <a
                  href="/about"
                  className="group flex items-center gap-2 font-bold text-sm text-[#0a192f] hover:text-[#d4af37] transition-colors duration-300 uppercase tracking-widest"
                >
                  Discover More
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-current group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-300">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 10 L10 2 M5 2 H10 V7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why AGM Section ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Section heading */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-[#d4af37] rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0a192f] tracking-tight">
              Why <span className="text-[#d4af37]">AGM ?</span>
            </h2>
          </div>

          {/* SVG Container — premium card with hover effects */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Decorative top gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/60 to-[#0a192f] z-10" />

            {/* Subtle corner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#d4af37]/10 transition-all duration-700" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0a192f]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0a192f]/10 transition-all duration-700" />

            {/* SVG Image */}
            <div className="relative p-4 sm:p-6 lg:p-8">
              <Image
                src="/images/whyagm.svg"
                alt="Why choose A.G.M College of Engineering and Technology — key advantages and unique features"
                width={6912}
                height={3456}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                className="w-full h-auto object-contain rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
                priority={false}
              />
            </div>

            {/* Decorative bottom gold accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a192f] via-[#d4af37]/60 to-[#d4af37] z-10" />
          </div>
        </div>
      </section>

      {/* ── Rotating Messages Section ── */}
      <RotatingMessagesSection />

      {/* Academic Programmes Section (Smoky Carousel) */}
      <section id="programmes" className="py-24 bg-slate-50 overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Academic Programs</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-[#0a192f] leading-tight">
              Where engineers are made,<br />not just taught.
            </p>
          </div>

          {/* Horizontally Scrollable Smoky Cards Container (Mobile/Tablet) | Grid (Desktop) */}
          <div 
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto lg:overflow-x-visible pb-8 pt-4 px-2 -mx-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROGRAMMES.map((prog, index) => (
              <Link
                href={prog.href}
                key={index} 
                className="group flex flex-col min-w-[320px] w-[85vw] sm:min-w-[400px] sm:w-[450px] lg:min-w-0 lg:w-full h-[450px] lg:h-[550px] shrink-0 snap-start rounded-[1.5rem] overflow-hidden shadow-lg border border-slate-100 cursor-pointer bg-white"
              >
                {/* Image Section (70% height) */}
                <div className="relative h-[70%] w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.name.replace('\n', ' ')}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 450px, 25vw"
                  />
                </div>
                
                {/* Text Section (30% height) */}
                <div className="h-[30%] w-full flex flex-col justify-center p-6 bg-white group-hover:bg-[#0a192f] transition-colors duration-500 border-t border-slate-100">
                  <h3 className="text-xl sm:text-2xl xl:text-[26px] font-black italic uppercase leading-none tracking-tighter text-[#0a192f] group-hover:text-white mb-auto whitespace-pre-line transition-colors duration-500">
                    {prog.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-[#d4af37] text-[11px] xl:text-[12px] font-extrabold tracking-widest uppercase">
                      Explore Programme
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#d4af37] transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Carousel Nav Buttons placed below the cards to the left side ("other side"). Hidden on desktop as it's a grid. */}
          <div className="flex lg:hidden items-center gap-4 mt-6 px-2">
            <button 
              onClick={scrollLeft} 
              className="w-14 h-14 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-[#0a192f] hover:bg-slate-100 text-[#0a192f] transition-all shadow-sm" 
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-14 h-14 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-[#0a192f] hover:bg-slate-100 text-[#0a192f] transition-all shadow-sm" 
              aria-label="Scroll right"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </section>

      {/* Faculty Corner Section */}
      <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Our Core Team</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-[#0a192f] leading-tight">
              Faculty Corner
            </p>
          </div>
          <div className="flex relative mt-8 md:mt-12 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[40px] md:before:w-[60px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[40px] md:after:w-[60px] after:bg-gradient-to-l after:from-white after:to-transparent py-4">
            <div className="flex animate-scroll-left items-center w-max hover:[animation-play-state:paused]">
              <div className="flex items-center gap-8 pr-8">
                {FACULTIES.map((faculty, idx) => (
                  <div key={`f1-${idx}`} className="w-[280px] flex-shrink-0 group flex flex-col items-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#d4af37] transition-colors duration-300">
                      <Image 
                        src={faculty.image} 
                        alt={faculty.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a192f] text-center mb-1">{faculty.name}</h3>
                    <p className="text-sm text-slate-500 text-center">{faculty.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 pr-8">
                {FACULTIES.map((faculty, idx) => (
                  <div key={`f2-${idx}`} className="w-[280px] flex-shrink-0 group flex flex-col items-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[#d4af37] transition-colors duration-300">
                      <Image 
                        src={faculty.image} 
                        alt={faculty.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a192f] text-center mb-1">{faculty.name}</h3>
                    <p className="text-sm text-slate-500 text-center">{faculty.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salient Features Section (Awwwards Style) */}
      <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Campus Highlights</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Salient Features
            </p>
          </div>

          {/* Interactive Modern Grid List (Side-by-side on Mobile) */}
          <div className="grid grid-cols-2 gap-x-4 lg:gap-x-12 border-t border-white/10 mt-8">
            {BENTO_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative py-4 lg:py-6 border-b border-white/10 hover:border-white/30 transition-colors duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Subtle Gradient Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 lg:gap-4">
                    
                    {/* Number and Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                      <span className="text-xs lg:text-sm font-bold text-[#d4af37] opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-sm lg:text-2xl font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-all duration-300 sm:group-hover:translate-x-2 leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description & Icon */}
                    <div className="flex items-center gap-4 shrink-0 sm:w-[250px] mt-1 sm:mt-0">
                      <p className="text-[10px] lg:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-1 leading-snug hidden sm:block">
                        {feature.description}
                      </p>
                      <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#d4af37] transition-all duration-300 shrink-0">
                        <Icon className="w-4 h-4 text-white/40 group-hover:text-[#0a192f] transition-all duration-500 -rotate-45 group-hover:rotate-0" />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Admissions Quick-Links Section ── */}
      <AdmissionsSection />

      {/* Transport Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Connectivity</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-[#0a192f] leading-tight">
              College Bus Transportation
            </p>
          </div>
          
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-16 shadow-sm relative mt-8">
            <p className="text-slate-500 mb-8 font-medium text-lg text-center mx-auto max-w-2xl">
              All routes seamlessly connect and converge at our state-of-the-art campus, ensuring reliable daily commutes for students.
            </p>
            
            <div className="relative pt-8 md:pt-12 pb-4">
              
              {/* SVG Connecting Dashed Lines Background */}
              {/* Desktop Hub & Spoke */}
              <div className="absolute inset-0 z-0 hidden md:block">
                <svg className="w-full h-full text-[#0a192f]" preserveAspectRatio="none">
                  <defs>
                    <mask id="desktop-line-mask">
                      <motion.rect 
                        x="0" 
                        y="0" 
                        width="100%" 
                        height="100%" 
                        fill="white" 
                        initial={{ y: "100%" }} 
                        whileInView={{ y: "0%" }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1.5, ease: "easeOut" }} 
                      />
                    </mask>
                  </defs>
                  <g mask="url(#desktop-line-mask)">
                    <line x1="50%" y1="12%" x2="8.33%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="12%" x2="25%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="12%" x2="41.66%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="12%" x2="58.33%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="12%" x2="75%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="12%" x2="91.66%" y2="82%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                  </g>
                </svg>
              </div>

              {/* Mobile Hub & Spoke (2 Columns) */}
              <div className="absolute inset-0 z-0 block md:hidden">
                <svg className="w-full h-full text-[#0a192f]" preserveAspectRatio="none">
                  <defs>
                    <mask id="mobile-line-mask">
                      <motion.rect 
                        x="0" 
                        y="0" 
                        width="100%" 
                        height="100%" 
                        fill="white" 
                        initial={{ y: "100%" }} 
                        whileInView={{ y: "0%" }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1.5, ease: "easeOut" }} 
                      />
                    </mask>
                  </defs>
                  <g mask="url(#mobile-line-mask)">
                    <line x1="50%" y1="5%" x2="25%" y2="30%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="5%" x2="75%" y2="30%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="5%" x2="25%" y2="60%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="5%" x2="75%" y2="60%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="5%" x2="25%" y2="90%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                    <line x1="50%" y1="5%" x2="75%" y2="90%" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="opacity-40" />
                  </g>
                </svg>
              </div>

              {/* Top Level: The College */}
              <div className="flex justify-center relative z-10 mb-16 md:mb-24">
                <div className="flex flex-col items-center gap-4 group cursor-default relative z-20">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0a192f] border-4 border-[#d4af37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500 relative z-20">
                    <Building2 className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <div className="bg-[#0a192f] text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-xl border border-white/10 group-hover:-translate-y-1 transition-transform duration-500 text-center">
                    A.G.M College
                  </div>
                </div>
              </div>

              {/* Bottom Level: The Routes */}
              <div className="grid grid-cols-2 md:grid-cols-6 relative z-10 gap-x-4 gap-y-12 md:gap-y-0">
                {TRANSPORT_ROUTES.map((route, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4 group cursor-default relative z-20">
                    {/* Route Node */}
                    <div className="w-8 h-8 rounded-full bg-[#0a192f] border-2 border-[#d4af37] flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-500 relative z-20">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    </div>
                    {/* Route Label */}
                    <div className="bg-[#0a192f] text-white px-3 py-2 w-full max-w-[130px] rounded-xl text-sm font-bold shadow-lg border border-white/10 group-hover:-translate-y-2 group-hover:border-[#d4af37]/50 transition-all duration-500 text-center">
                      {route}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Centers Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Research & Development</h2>
            <p className="text-3xl md:text-5xl font-serif font-bold text-[#0a192f] leading-tight">
              Innovation & Learning Centres
            </p>
          </div>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-4xl">
            Virtual Labs, Autodesk, Oracle Academy, Intel, NVIDIA GPU Education Center, Texas Instruments, e-Yantra, NPTEL, Bentley, Tata Ready Engineer, VLSI, Foss Lab, WSN Lab, Tech Mahindra, Center of Excellence for Data Science & SAP ABAP.
          </p>

          {/* Animated Marquees (Responsive) */}
          <div className="flex relative mt-8 md:mt-12 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[40px] md:before:w-[60px] before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[40px] md:after:w-[60px] after:bg-gradient-to-l after:from-slate-50 after:to-transparent flex-col gap-4 md:gap-6 py-4">
            
            {/* Custom Marquee Animation Style */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-left {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              @keyframes scroll-right {
                from { transform: translateX(-50%); }
                to { transform: translateX(0); }
              }
              .animate-scroll-left {
                animation: scroll-left 35s linear infinite;
              }
              .animate-scroll-right {
                animation: scroll-right 30s linear infinite;
              }
              .animate-scroll-left:hover, .animate-scroll-right:hover {
                animation-play-state: paused;
              }
            `}} />

            {/* Top Row: Scrolls Left */}
            <div className="flex animate-scroll-left items-center w-max">
              <div className="flex items-center gap-8 pr-8">
                {INNOVATION_LOGOS_TOP.map((logo, i) => (
                  <div key={`t1-${i}`} className="flex-shrink-0 w-32 h-20 sm:w-56 sm:h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4 sm:p-6 group hover:shadow-md transition-all hover:scale-105 duration-300 cursor-pointer">
                    <Image 
                      src={logo} 
                      alt="Innovation Logo" 
                      width={180} 
                      height={100} 
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 pr-8">
                {INNOVATION_LOGOS_TOP.map((logo, i) => (
                  <div key={`t2-${i}`} className="flex-shrink-0 w-32 h-20 sm:w-56 sm:h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4 sm:p-6 group hover:shadow-md transition-all hover:scale-105 duration-300 cursor-pointer">
                    <Image 
                      src={logo} 
                      alt="Innovation Logo" 
                      width={180} 
                      height={100} 
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Scrolls Right */}
            <div className="flex animate-scroll-right items-center w-max">
              <div className="flex items-center gap-8 pr-8">
                {INNOVATION_LOGOS_BOTTOM.map((logo, i) => (
                  <div key={`b1-${i}`} className="flex-shrink-0 w-32 h-20 sm:w-56 sm:h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4 sm:p-6 group hover:shadow-md transition-all hover:scale-105 duration-300 cursor-pointer">
                    <Image 
                      src={logo} 
                      alt="Innovation Logo" 
                      width={180} 
                      height={100} 
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 pr-8">
                {INNOVATION_LOGOS_BOTTOM.map((logo, i) => (
                  <div key={`b2-${i}`} className="flex-shrink-0 w-32 h-20 sm:w-56 sm:h-32 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4 sm:p-6 group hover:shadow-md transition-all hover:scale-105 duration-300 cursor-pointer">
                    <Image 
                      src={logo} 
                      alt="Innovation Logo" 
                      width={180} 
                      height={100} 
                      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Campus Events & Highlights Component ─────────────────────────────────────
const EVENT_HIGHLIGHTS = [
  { id: 1, src: "/events/event-1.jpeg", title: "Inaugural Ceremony", tag: "Induction Program", desc: "Ceremonial opening and lamp lighting for the new academic batch" },
  { id: 2, src: "/events/event-2.jpeg", title: "Dignitaries & Mentors", tag: "Induction Program", desc: "Esteemed guests, management and faculty guiding student futures" },
  { id: 3, src: "/events/event-3.jpeg", title: "Orientation Address", tag: "Induction Program", desc: "Inspiring address on engineering excellence, discipline and innovation" },
  { id: 4, src: "/events/event-4.jpeg", title: "Student Gathering", tag: "Campus Life", desc: "Enthusiastic freshers joining together as the new engineering fraternity" },
  { id: 5, src: "/events/event-5.jpeg", title: "Mega Blood Donation Camp", tag: "Blood Donation", desc: "Annual voluntary blood donation drive organized on campus" },
  { id: 6, src: "/events/event-6.jpeg", title: "Medical Staff & Coordination", tag: "Blood Donation", desc: "Certified healthcare professionals and student volunteers ensuring safe donation" },
  { id: 7, src: "/events/event-7.jpeg", title: "Youth For A Cause", tag: "Social Impact", desc: "Students proudly stepping forward to save lives through voluntary donation" },
  { id: 8, src: "/events/event-8.jpeg", title: "Faculty & Staff Donors", tag: "Community Service", desc: "Faculty members actively contributing to the life-saving initiative" },
  { id: 9, src: "/events/event-9.jpeg", title: "Donor Appreciation", tag: "Recognition", desc: "Awarding certificates of honor and appreciation to selfless donors" },
  { id: 10, src: "/events/event-10.jpeg", title: "Humanitarian Outreach", tag: "Social Impact", desc: "Fostering empathy, civic responsibility, and community health" },
  { id: 11, src: "/events/event-11.jpeg", title: "Memorable Campus Moments", tag: "Campus Life", desc: "Cherished moments marking the energetic beginning of college life" },
  { id: 12, src: "/events/event-12.jpeg", title: "Event Commemoration", tag: "Highlights", desc: "Celebrating successful completion of induction and healthcare drive" },
];

function EventsHighlightsSection() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("right");
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Close lightbox on Escape key, navigate with Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") {
        setActiveModalIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) => 
          prev !== null ? (prev === 0 ? EVENT_HIGHLIGHTS.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) => 
          prev !== null ? (prev === EVENT_HIGHLIGHTS.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex]);

  // Touch swipe support for mobile lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || activeModalIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // Swiped left -> Next
      setActiveModalIndex((prev) => 
        prev !== null ? (prev === EVENT_HIGHLIGHTS.length - 1 ? 0 : prev + 1) : null
      );
    } else if (diff < -50) {
      // Swiped right -> Prev
      setActiveModalIndex((prev) => 
        prev !== null ? (prev === 0 ? EVENT_HIGHLIGHTS.length - 1 : prev - 1) : null
      );
    }
    setTouchStartX(null);
  };

  return (
    <section id="events" className="px-3 sm:px-6 lg:px-8 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 border-b border-slate-200">
          <div>
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#0a192f] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2.5 sm:mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Campus Highlights
            </div>

            {/* Main Header: Events */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0a192f] tracking-tight">
              Events
            </h2>

            {/* Sub-header: Induction Program & Blood Donation */}
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#0a192f] via-[#d4af37] to-[#dc2626] bg-clip-text text-transparent mt-1.5 leading-snug">
              Induction Program &amp; Blood Donation
            </h3>

            {/* Highlights Narrative */}
            <p className="text-slate-600 text-xs sm:text-base max-w-2xl mt-2.5 sm:mt-3 leading-relaxed">
              Explore key moments and vibrant campus life at AGMCET. Our latest highlights showcase the welcoming of new engineering students during the Induction Program alongside our humanitarian Blood Donation Camp organized by students and faculty.
            </p>
          </div>

          {/* Quick Badges & Controls */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5 sm:gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[11px] sm:text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                Blood Donation Drive
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                Induction 2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              {/* Direction Toggle */}
              <button
                type="button"
                onClick={() => setScrollDirection(scrollDirection === "left" ? "right" : "left")}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-all shadow-xs cursor-pointer active:scale-95"
                title={`Switch scroll direction (Current: ${scrollDirection === "right" ? "Left to Right" : "Right to Left"})`}
              >
                {scrollDirection === "right" ? (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Scroll Right ➔</span>
                  </>
                ) : (
                  <>
                    <ChevronLeft className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Scroll Left ⬅</span>
                  </>
                )}
              </button>

              {/* Pause/Play Toggle */}
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-all shadow-xs cursor-pointer active:scale-95"
                title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                    <span>Play</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-slate-600" />
                    <span>Pause</span>
                  </>
                )}
              </button>
              <span className="hidden lg:inline text-[11px] text-slate-400">
                Hover to inspect
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles for Continuous Scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes event-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes event-scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-event-right {
          animation: event-scroll-right 45s linear infinite;
        }
        .animate-event-left {
          animation: event-scroll-left 45s linear infinite;
        }
        .animate-event-right.is-paused,
        .animate-event-left.is-paused,
        .animate-event-right:hover,
        .animate-event-left:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Scrolling Strip Container with Mobile Touch Support */}
      <div 
        className="relative w-full overflow-hidden py-3 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-50/70 to-slate-100/40 p-2 sm:p-4 border border-slate-200/60 shadow-inner"
        onTouchStart={() => setIsPaused(true)}
      >
        {/* Soft edge fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Marquee Strip: 2 duplicate sets side-by-side */}
        <div 
          className={`flex items-center w-max ${
            scrollDirection === "right" ? "animate-event-right" : "animate-event-left"
          } ${isPaused ? "is-paused" : ""}`}
        >
          {/* First Set of all 12 Images */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {EVENT_HIGHLIGHTS.map((item, index) => (
              <div
                key={`set1-${item.id}`}
                onClick={() => setActiveModalIndex(index)}
                className="group relative flex-shrink-0 w-[260px] sm:w-[360px] md:w-[400px] h-[195px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border-2 border-white bg-slate-200 cursor-pointer active:scale-[0.98]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Badges */}
                <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#0a192f]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/20 shadow-xs">
                    Highlight #{String(item.id).padStart(2, "0")}
                  </span>
                  <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold shadow-xs backdrop-blur-md ${
                    item.tag === "Blood Donation" 
                      ? "bg-red-600/90 text-white" 
                      : item.tag === "Induction Program"
                      ? "bg-[#d4af37]/90 text-[#0a192f]"
                      : "bg-[#0a192f]/80 text-[#d4af37]"
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/55 to-transparent text-white flex items-end justify-between gap-2 sm:gap-3 z-10">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-1 drop-shadow-sm">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-[#0a192f] transition-all flex-shrink-0 shadow-sm">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Duplicate Set for Continuous Seamless Loop */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {EVENT_HIGHLIGHTS.map((item, index) => (
              <div
                key={`set2-${item.id}`}
                onClick={() => setActiveModalIndex(index)}
                className="group relative flex-shrink-0 w-[260px] sm:w-[360px] md:w-[400px] h-[195px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border-2 border-white bg-slate-200 cursor-pointer active:scale-[0.98]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Badges */}
                <div className="absolute top-2.5 inset-x-2.5 sm:top-3 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#0a192f]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/20 shadow-xs">
                    Highlight #{String(item.id).padStart(2, "0")}
                  </span>
                  <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold shadow-xs backdrop-blur-md ${
                    item.tag === "Blood Donation" 
                      ? "bg-red-600/90 text-white" 
                      : item.tag === "Induction Program"
                      ? "bg-[#d4af37]/90 text-[#0a192f]"
                      : "bg-[#0a192f]/80 text-[#d4af37]"
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/55 to-transparent text-white flex items-end justify-between gap-2 sm:gap-3 z-10">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-1 drop-shadow-sm">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-[#0a192f] transition-all flex-shrink-0 shadow-sm">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal for Inspecting Event Highlights (Fully Responsive with Touch Swipe) */}
      {activeModalIndex !== null && (
        <div 
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveModalIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] bg-[#0a192f] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-800 bg-[#0a192f]/95">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#d4af37] text-[#0a192f] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  Highlight {String(EVENT_HIGHLIGHTS[activeModalIndex].id).padStart(2, "0")} / {EVENT_HIGHLIGHTS.length}
                </span>
                <span className="text-slate-300 text-[11px] sm:text-sm font-medium">
                  {EVENT_HIGHLIGHTS[activeModalIndex].tag}
                </span>
              </div>

              {/* Close Button */}
              <button 
                type="button"
                onClick={() => setActiveModalIndex(null)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[65vh] bg-black flex items-center justify-center">
              <Image 
                src={EVENT_HIGHLIGHTS[activeModalIndex].src} 
                alt={EVENT_HIGHLIGHTS[activeModalIndex].title}
                fill
                unoptimized
                priority
                className="object-contain"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex(
                    activeModalIndex === 0 ? EVENT_HIGHLIGHTS.length - 1 : activeModalIndex - 1
                  );
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-[#0a192f] backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                title="Previous Highlight (←)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex(
                    activeModalIndex === EVENT_HIGHLIGHTS.length - 1 ? 0 : activeModalIndex + 1
                  );
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#d4af37] text-white hover:text-[#0a192f] backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
                title="Next Highlight (→)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#071322] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-white">
                  {EVENT_HIGHLIGHTS[activeModalIndex].title}
                </h3>
                <p className="text-slate-400 text-[11px] sm:text-sm mt-0.5">
                  {EVENT_HIGHLIGHTS[activeModalIndex].desc}
                </p>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 whitespace-nowrap">
                <span className="sm:hidden">Swipe or tap arrows ‹ › to browse</span>
                <span className="hidden sm:inline">Use arrow keys ← → to browse • Esc to close</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

