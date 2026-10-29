import { GraduationCap, Briefcase, Award, Coffee, BookOpen, FileCheck, Star, Sparkles } from "lucide-react";

/* ── Pixel Trophy SVGs ── */
function GoldTrophy() {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" className="mx-auto">
      <rect x="16" y="8" width="48" height="8" fill="#fbbf24" />
      <rect x="12" y="16" width="56" height="8" fill="#fbbf24" />
      <rect x="12" y="24" width="56" height="8" fill="#f59e0b" />
      <rect x="16" y="32" width="48" height="8" fill="#f59e0b" />
      <rect x="20" y="40" width="40" height="8" fill="#f59e0b" />
      <rect x="28" y="48" width="24" height="4" fill="#d97706" />
      <rect x="4" y="16" width="8" height="4" fill="#fbbf24" />
      <rect x="0" y="20" width="8" height="12" fill="#fbbf24" />
      <rect x="4" y="32" width="8" height="4" fill="#f59e0b" />
      <rect x="68" y="16" width="8" height="4" fill="#fbbf24" />
      <rect x="72" y="20" width="8" height="12" fill="#fbbf24" />
      <rect x="68" y="32" width="8" height="4" fill="#f59e0b" />
      <rect x="34" y="52" width="12" height="12" fill="#d97706" />
      <rect x="24" y="64" width="32" height="4" fill="#f59e0b" />
      <rect x="20" y="68" width="40" height="4" fill="#fbbf24" />
      <rect x="36" y="20" width="8" height="4" fill="#fef3c7" />
      <rect x="32" y="24" width="4" height="4" fill="#fef3c7" />
      <rect x="44" y="24" width="4" height="4" fill="#fef3c7" />
    </svg>
  );
}

function SilverTrophy() {
  return (
    <svg width="68" height="80" viewBox="0 0 80 90" fill="none" className="mx-auto">
      <rect x="16" y="8" width="48" height="8" fill="#cbd5e1" />
      <rect x="12" y="16" width="56" height="8" fill="#cbd5e1" />
      <rect x="12" y="24" width="56" height="8" fill="#94a3b8" />
      <rect x="16" y="32" width="48" height="8" fill="#94a3b8" />
      <rect x="20" y="40" width="40" height="8" fill="#94a3b8" />
      <rect x="28" y="48" width="24" height="4" fill="#64748b" />
      <rect x="4" y="16" width="8" height="4" fill="#cbd5e1" />
      <rect x="0" y="20" width="8" height="12" fill="#cbd5e1" />
      <rect x="4" y="32" width="8" height="4" fill="#94a3b8" />
      <rect x="68" y="16" width="8" height="4" fill="#cbd5e1" />
      <rect x="72" y="20" width="8" height="12" fill="#cbd5e1" />
      <rect x="68" y="32" width="8" height="4" fill="#94a3b8" />
      <rect x="34" y="52" width="12" height="12" fill="#64748b" />
      <rect x="24" y="64" width="32" height="4" fill="#94a3b8" />
      <rect x="20" y="68" width="40" height="4" fill="#cbd5e1" />
    </svg>
  );
}

function BronzeTrophy() {
  return (
    <svg width="68" height="80" viewBox="0 0 80 90" fill="none" className="mx-auto">
      <rect x="16" y="8" width="48" height="8" fill="#d97706" />
      <rect x="12" y="16" width="56" height="8" fill="#d97706" />
      <rect x="12" y="24" width="56" height="8" fill="#b45309" />
      <rect x="16" y="32" width="48" height="8" fill="#b45309" />
      <rect x="20" y="40" width="40" height="8" fill="#b45309" />
      <rect x="28" y="48" width="24" height="4" fill="#92400e" />
      <rect x="4" y="16" width="8" height="4" fill="#d97706" />
      <rect x="0" y="20" width="8" height="12" fill="#d97706" />
      <rect x="4" y="32" width="8" height="4" fill="#b45309" />
      <rect x="68" y="16" width="8" height="4" fill="#d97706" />
      <rect x="72" y="20" width="8" height="12" fill="#d97706" />
      <rect x="68" y="32" width="8" height="4" fill="#b45309" />
      <rect x="34" y="52" width="12" height="12" fill="#92400e" />
      <rect x="24" y="64" width="32" height="4" fill="#b45309" />
      <rect x="20" y="68" width="40" height="4" fill="#d97706" />
    </svg>
  );
}

export default function Prizes() {
  return (
    <section id="prizes" className="relative max-w-7xl mx-auto px-4 sm:px-6">
      {/* CLI Header */}
      <div className="mb-12 text-center">
        <span className="cli-prompt">cat PERKS_AND_EXEMPTIONS.yml</span>
        <h2 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl text-white mt-4 glow-pink">
          AWARDS &amp; ACADEMIC EXEMPTIONS
        </h2>
        <p className="font-[family-name:var(--font-terminal)] text-lg text-neon-cyan mt-1">
          Direct Placements • Education-Rev Course Exemptions • LORs by Sami Anand Sir
        </p>
      </div>

      {/* ─── Main Podium (Top 3 Teams) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end mb-16">
        {/* 2nd Place: First Runner Up */}
        <div className="order-2 md:order-1 bg-panel-dark pixel-border border-slate-400 p-6 flex flex-col items-center text-center">
          <SilverTrophy />
          <span className="font-[family-name:var(--font-pixel)] text-xs text-slate-300 mt-4 tracking-wider uppercase">
            First Runner Up
          </span>
          <h3 className="font-[family-name:var(--font-terminal)] text-2xl text-neon-cyan font-bold mt-1">
            Top 3 Perks + LOR
          </h3>
          <ul className="mt-4 text-xs font-[family-name:var(--font-code)] text-gray-300 space-y-2 text-left w-full border-t border-slate-700/60 pt-4">
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Education-Rev Exemption:</strong> CBT/CA Course Exemption</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Official LOR</strong> signed by Sami Anand Sir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Mentorship Hours</strong> with Industry Speakers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span>Free VIP Access to upcoming flagship tech summits</span>
            </li>
          </ul>
        </div>

        {/* 1st Place: Winner (Grand Champion - Elevated) */}
        <div className="order-1 md:order-2 bg-panel-dark pixel-border border-cyber-gold p-8 flex flex-col items-center text-center scale-100 md:scale-105 shadow-[0_0_35px_rgba(251,191,36,0.3)]">
          <div className="inline-block px-3 py-1 bg-cyber-gold/20 border border-cyber-gold text-cyber-gold font-[family-name:var(--font-pixel)] text-[10px] uppercase tracking-widest mb-3">
            🏆 Grand Winner
          </div>
          <div className="animate-float">
            <GoldTrophy />
          </div>
          <span className="font-[family-name:var(--font-pixel)] text-sm text-cyber-gold mt-4 tracking-wider uppercase glow-gold">
            WINNER (RANK 1)
          </span>
          <div className="mt-2 py-1.5 px-3 bg-neon-pink/20 border border-neon-pink text-neon-pink font-[family-name:var(--font-code)] text-xs font-bold uppercase rounded-sm">
            ⭐ Direct Placement Referral / Internship
          </div>
          <p className="text-xs text-gray-300 mt-2 font-[family-name:var(--font-code)]">
            Direct referral into Tier-1 product firms via TPC
          </p>

          <ul className="mt-5 text-xs font-[family-name:var(--font-code)] text-gray-200 space-y-2.5 text-left w-full border-t border-cyber-gold/40 pt-4">
            <li className="flex items-start gap-2">
              <span className="text-cyber-gold font-bold">★</span>
              <span><strong>Direct Referral/Internship:</strong> In top IT firms via TPC (subject to availability)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-gold font-bold">★</span>
              <span><strong>Placement Incubation:</strong> Placement dept support in scaling ideas/solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-gold font-bold">★</span>
              <span><strong>Education-Rev Exemption:</strong> Full CBT/CA Course Exemption</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-gold font-bold">★</span>
              <span><strong>Official LOR:</strong> By Sami Anand Sir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-gold font-bold">★</span>
              <span><strong>Priority Mentorship:</strong> 1-on-1 hours with Industry Guest Leaders</span>
            </li>
          </ul>
        </div>

        {/* 3rd Place: Second Runner Up */}
        <div className="order-3 bg-panel-dark pixel-border border-amber-600 p-6 flex flex-col items-center text-center">
          <BronzeTrophy />
          <span className="font-[family-name:var(--font-pixel)] text-xs text-amber-500 mt-4 tracking-wider uppercase">
            Second Runner Up
          </span>
          <h3 className="font-[family-name:var(--font-terminal)] text-2xl text-neon-cyan font-bold mt-1">
            Top 3 Perks + LOR
          </h3>
          <ul className="mt-4 text-xs font-[family-name:var(--font-code)] text-gray-300 space-y-2 text-left w-full border-t border-amber-800/60 pt-4">
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Education-Rev Exemption:</strong> CBT/CA Course Exemption</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Official LOR</strong> signed by Sami Anand Sir</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span><strong>Mentorship Hours</strong> with Industry Speakers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">✔</span>
              <span>Free VIP Access to upcoming flagship tech summits</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ─── Education-Rev Academic Exemptions Breakdown ─── */}
      <div className="mb-16 bg-panel-dark pixel-border border-neon-cyan p-6 sm:p-8 rounded-sm">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-neon-cyan" size={32} />
          <div>
            <span className="text-xs font-[family-name:var(--font-code)] text-cyber-gold uppercase tracking-wider">
              OFFICIAL ACADEMIC POLICY INCENTIVE
            </span>
            <h3 className="font-[family-name:var(--font-pixel)] text-lg sm:text-xl text-white">
              EDUCATION-REV COURSE EXEMPTIONS (TOP 3 TEAMS)
            </h3>
          </div>
        </div>

        <p className="font-[family-name:var(--font-code)] text-sm text-gray-300 mb-6 leading-relaxed">
          As approved by the Department, participants finishing in the <strong className="text-neon-pink">Top 3 Teams</strong> in the Hackathon earn verified academic course exemptions for their continuous assessments:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 bg-slate-900/80 border border-neon-pink/40 rounded-sm">
            <span className="font-[family-name:var(--font-pixel)] text-xs text-neon-pink">1ST YEAR STUDENTS</span>
            <h4 className="font-[family-name:var(--font-code)] text-base font-bold text-white mt-1">
              One CBT Exemption: INT108
            </h4>
            <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-2">
              Exempted from one Computer-Based Test for Python Programming (INT108).
            </p>
          </div>

          <div className="p-4 bg-slate-900/80 border border-neon-cyan/40 rounded-sm">
            <span className="font-[family-name:var(--font-pixel)] text-xs text-neon-cyan">2ND YEAR STUDENTS</span>
            <h4 className="font-[family-name:var(--font-code)] text-base font-bold text-white mt-1">
              One CBT Exemption: CSE205 / CSE202
            </h4>
            <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-2">
              Exempted from one CBT for Data Structures (CSE205) or OOP (CSE202).
            </p>
          </div>

          <div className="p-4 bg-slate-900/80 border border-cyber-gold/40 rounded-sm">
            <span className="font-[family-name:var(--font-pixel)] text-xs text-cyber-gold">3RD YEAR STUDENTS</span>
            <h4 className="font-[family-name:var(--font-code)] text-base font-bold text-white mt-1">
              Minor / Major CA Exemption
            </h4>
            <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-2">
              Direct exemption from one Continuous Assessment (Minor or Major CA).
            </p>
          </div>
        </div>
      </div>

      {/* ─── Benefits for ALL 1000+ Participants ─── */}
      <div className="mb-12">
        <h3 className="font-[family-name:var(--font-pixel)] text-sm sm:text-base text-neon-pink text-center uppercase tracking-wider mb-8">
          ✨ What Every Participant Receives (1000+ Engineers)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <Coffee className="text-amber-400 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                Free Dinner, Tea &amp; High Snacks
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Full night catering during the 24-hr sprint to keep your engineering energy peaked.
              </p>
            </div>
          </div>

          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <Sparkles className="text-neon-cyan shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                Technical Quizzes &amp; Goodies
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Fun mid-night debugging quizzes with exclusive developer swag and sweet boxes.
              </p>
            </div>
          </div>

          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <Briefcase className="text-neon-blue shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                LinkedIn Optimization Class
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Exclusive masterclass on turning your GitHub PRs &amp; FOSS contributions into recruiter magnets.
              </p>
            </div>
          </div>

          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <FileCheck className="text-terminal-green shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                Verified Hackathon Certificate
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Official online verified credential recognizing your 24-hour open-source engineering work.
              </p>
            </div>
          </div>

          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <BookOpen className="text-purple-400 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                Section-wise Academic Duty Leave
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Approved duty leaves for all participating students for both 3rd and 4th November.
              </p>
            </div>
          </div>

          <div className="p-4 bg-panel-dark pixel-border-sm border-panel-border flex items-start gap-3">
            <Award className="text-cyber-gold shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-[family-name:var(--font-code)] text-sm font-bold text-white">
                Full-Night Hostel Permissions
              </h4>
              <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] mt-1">
                Approved overnight hostel duty leave on Nov 3rd, with dedicated rest rooms in Block 32/33/34.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
