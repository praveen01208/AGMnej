import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | A.G.M College of Engineering & Technology",
  description: "Terms and conditions for using the A.G.M College of Engineering & Technology website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-serif font-extrabold text-[#0a192f] mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12 space-y-6">
          <p className="text-slate-500 text-sm italic mb-6">Last Updated: July 2026</p>
          
          <h2 className="text-xl font-bold text-[#0a192f]">1. Acceptance of Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing and using the website of A.G.M College of Engineering & Technology (agmcet.edu.in), you accept and agree to be bound by the terms and provision of this agreement. The information provided on this website is for general informational and educational purposes only.
          </p>
          
          <h2 className="text-xl font-bold text-[#0a192f]">2. Intellectual Property & Use License</h2>
          <p className="text-slate-600 leading-relaxed">
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of A.G.M College of Engineering & Technology or its content suppliers and is protected by Indian and international copyright laws. You may temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-xl font-bold text-[#0a192f]">3. Academic Information Disclaimer</h2>
          <p className="text-slate-600 leading-relaxed">
            While we strive to keep the information on course curriculums, intake numbers, and admission eligibility up to date and correct, the regulations set by VTU, AICTE, and the Government of Karnataka are subject to change. The college reserves the right to modify admission procedures or program structures without prior notice.
          </p>

          <h2 className="text-xl font-bold text-[#0a192f]">4. Form Submissions</h2>
          <p className="text-slate-600 leading-relaxed">
            By submitting an inquiry through our Admissions Enquiry or Contact forms, you consent to being contacted by our representatives via email or phone regarding your query. You agree to provide accurate and current information.
          </p>
        </div>
      </div>
    </div>
  );
}
