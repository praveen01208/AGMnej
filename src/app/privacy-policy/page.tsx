import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | A.G.M College of Engineering & Technology",
  description: "Privacy policy and data handling practices for A.G.M College of Engineering & Technology.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-serif font-extrabold text-[#0a192f] mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12 space-y-6">
          <p className="text-slate-500 text-sm italic mb-6">Last Updated: July 2026</p>

          <h2 className="text-xl font-bold text-[#0a192f]">1. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed">
            At A.G.M College of Engineering & Technology, we collect personal information when you voluntarily submit it to us. This primarily occurs when you fill out our Admissions Enquiry form. The data collected includes your Full Name, Mobile Number, Email ID, City, Educational Qualifications, and the Course you are interested in pursuing. We also collect anonymous analytics data (via Google Analytics) to improve our website experience.
          </p>
          
          <h2 className="text-xl font-bold text-[#0a192f]">2. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed">
            The information you provide is strictly used for administrative and academic purposes. Specifically, your contact details are used by our admissions counsellors to reach out to you regarding your admission inquiry, share relevant course brochures, and guide you through the enrollment process. We do not sell, trade, or rent your personal identification information to third parties.
          </p>

          <h2 className="text-xl font-bold text-[#0a192f]">3. Data Security & Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access or disclosure of your personal information stored on our site. Our website may use "cookies" to enhance user experience; you may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
          </p>

          <h2 className="text-xl font-bold text-[#0a192f]">4. Contact Information</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy or the practices of this site, please contact us at: <br/>
            <strong>A.G.M College of Engineering & Technology</strong><br/>
            Nej-Shamanewadi, Tq: Chikkodi, Dist: Belagavi, Karnataka — 591239<br/>
            Email: <a href="mailto:principalagmcet@gmail.com" className="text-[#d4af37] hover:underline">principalagmcet@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
