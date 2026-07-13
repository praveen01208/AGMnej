"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldAlert, Loader2 } from "lucide-react";

export default function HRMSLogin() {
  const [role, setRole] = useState("Faculty");
  const [department, setDepartment] = useState("");
  const [deptRole, setDeptRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Fake API Call Delay
    setTimeout(() => {
      setIsLoading(false);
      setError("Invalid credentials. Please contact HR or System Administrator.");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0a192f]">
      {/* Background Image with Smoke Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/desk.png" 
          alt="HRMS Background" 
          fill 
          className="object-cover object-center opacity-30 grayscale mix-blend-luminosity" 
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 via-[#0a192f]/90 to-[#0a192f] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 mt-12">
        <div className="flex justify-center mb-6">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(212,175,55,0.3)] overflow-hidden ring-4 ring-[#d4af37]/20">
            <Image src="/logo.png" alt="A.G.M College Logo" fill className="object-contain p-2" sizes="80px" />
          </div>
        </div>
        <h2 className="mt-2 text-center text-3xl font-black tracking-tight text-white font-serif">
          HRMS Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Human Resource Management System
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 mb-12">
        <div className="bg-white/5 backdrop-blur-xl py-8 px-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] sm:rounded-3xl sm:px-10 border border-white/10">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl text-sm flex items-start gap-2">
                <ShieldAlert className="w-5 h-5 mt-0.5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300">
                System Role
              </label>
              <div className="mt-1">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full rounded-xl border border-white/10 bg-[#0a192f]/80 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-sm transition-colors"
                >
                  <option value="Faculty">Faculty / Staff</option>
                  <option value="Principal">Principal</option>
                </select>
              </div>
            </div>

            {role === "Faculty" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-300">
                    Department
                  </label>
                  <div className="mt-1">
                    <select
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="block w-full rounded-xl border border-white/10 bg-[#0a192f]/80 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-sm transition-colors"
                    >
                      <option value="" disabled>Select Department</option>
                      <option value="CSE">Computer Science & Engineering</option>
                      <option value="AIML">Artificial Intelligence & ML</option>
                      <option value="ECE">Electronics & Communication</option>
                      <option value="CIVIL">Civil Engineering</option>
                      <option value="BS">Basic Sciences</option>
                      <option value="ADMIN">Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300">
                    Department Role
                  </label>
                  <div className="mt-1">
                    <select
                      required
                      value={deptRole}
                      onChange={(e) => setDeptRole(e.target.value)}
                      className="block w-full rounded-xl border border-white/10 bg-[#0a192f]/80 px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] sm:text-sm transition-colors"
                    >
                      <option value="" disabled>Select Role</option>
                      <option value="HOD">Head of Department (HOD)</option>
                      <option value="PROFESSOR">Professor</option>
                      <option value="ASSISTANT_PROFESSOR">Assistant Professor</option>
                      <option value="LAB_ASSISTANT">Lab Assistant</option>
                      <option value="SUPPORT_STAFF">Support Staff</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors sm:text-sm"
                  placeholder="employee@agmcet.edu.in"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-colors sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f5d061] px-4 py-3.5 text-sm font-bold text-[#0a192f] hover:from-[#c5a028] hover:to-[#e4bf50] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a192f] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Secure Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
