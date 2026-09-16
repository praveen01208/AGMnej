import Image from "next/image";
import { Mail, Phone, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty Corner | AGMCET",
  description: "Meet the core faculty and team at A.G.M College of Engineering and Technology.",
};

const FACULTIES = [
  { 
    name: "Vaishnav Vasant Shegale", 
    email: "vaishnavshegale333@gmail.com",
    phone: "7816867818",
    role: "Assistant Professor, Department of CSE", 
    image: "/images/faculty/vaishnav.png" 
  },
  { 
    name: "Dr. Sanjay Ankali", 
    email: "sanjayankali123@gmail.com",
    phone: "8095638746",
    role: "Professor & CSE Department", 
    image: "/images/faculty/sanjay.jpg" 
  },
  { 
    name: "K.R. Patil", 
    email: "kpatil703@gmail.com",
    phone: "9632731642",
    role: "Asst Professor, Department of Physics", 
    image: "/images/faculty/krpatil.png" 
  },
  { 
    name: "Ravi Walke", 
    email: "Ravijethwalke11@gmail.com",
    phone: "8904676994",
    role: "Physical Director, Sports Department", 
    image: "/images/faculty/ravi.jpeg" 
  },
  { 
    name: "Ashwini Pharalad", 
    email: "ashwinipharalad@gmail.com",
    phone: "8050110151",
    role: "Assistant Professor, CSE Dept.", 
    image: "/images/faculty/ashwini.jpg" 
  },
  { 
    name: "Rani Siddappa Suture", 
    email: "ranisuture@gmail.com",
    phone: "7259943286",
    role: "CSE Department", 
    image: "/images/faculty/rani.jpg" 
  },
  { 
    name: "Dr. Sachin Mekkalike", 
    email: "sachin.mekkalike4u@gmail.com",
    phone: "9480738238",
    role: "Associate Professor, Department of Mathematics", 
    image: "/images/faculty/sachin.png" 
  },
  { 
    name: "Dr. Shashikant Walki", 
    email: "walkishashikant@gmail.com",
    phone: "8105787069",
    role: "Associate Professor, Engg. Chemistry", 
    image: "/images/faculty/shashikant.png" 
  },
  { 
    name: "Ullas Jayakumar Maisale", 
    email: "ullas.maisale@gmail.com",
    phone: "9739751254",
    role: "Assistant Professor, Department of ECE", 
    image: "/images/faculty/jayakumar.png" 
  },
  { 
    name: "Sagar Sudhakar Birade", 
    email: "sagarbirade7@gmail.com",
    phone: "9945105480",
    role: "Assistant Professor, Department of ECE", 
    image: "/images/faculty/sudhakar.png" 
  }
];

export default function FacultyCorner() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-[#d4af37] tracking-widest uppercase mb-3">Our Core Team</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a192f] leading-tight mb-6">
            Faculty Corner
          </h1>
          <p className="text-lg text-slate-600">
            Meet the dedicated and highly qualified professionals shaping the future of engineering at AGMCET.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {FACULTIES.map((faculty, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
              {/* Top Banner / Image Area */}
              <div className="relative h-48 bg-[#0a192f] flex justify-center items-end pb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-80" />
                <div className="absolute -bottom-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 bg-white">
                  <Image 
                    src={faculty.image} 
                    alt={faculty.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="pt-20 pb-8 px-6 flex-grow flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-[#0a192f] mb-2">{faculty.name}</h3>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full mb-6">
                  <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-xs font-semibold text-slate-600">{faculty.role}</span>
                </div>

                <div className="w-full space-y-3 mt-auto">
                  {faculty.email && (
                    <a href={`mailto:${faculty.email}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors text-left group/contact">
                      <div className="w-8 h-8 rounded-full bg-[#0a192f]/5 flex items-center justify-center shrink-0 group-hover/contact:bg-[#0a192f]/10 transition-colors">
                        <Mail className="w-4 h-4 text-[#0a192f]" />
                      </div>
                      <div className="truncate text-sm text-slate-600 font-medium">
                        {faculty.email}
                      </div>
                    </a>
                  )}

                  {faculty.phone && (
                    <a href={`tel:${faculty.phone}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors text-left group/contact">
                      <div className="w-8 h-8 rounded-full bg-[#0a192f]/5 flex items-center justify-center shrink-0 group-hover/contact:bg-[#0a192f]/10 transition-colors">
                        <Phone className="w-4 h-4 text-[#0a192f]" />
                      </div>
                      <div className="truncate text-sm text-slate-600 font-medium">
                        +91 {faculty.phone}
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
