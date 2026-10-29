import { useState } from "react";

const FAQS = [
  {
    q: "How much is the registration fee?",
    a: "The registration fee is ₹199 per participant for CommitCon. This gives you full access to the 24-hour hackathon, Open Source / AI Summit keynotes, hot dinner, tea/snacks, technical quizzes with goodies, rest rooms, and the LinkedIn masterclass.",
  },
  {
    q: "When does registration close?",
    a: "Registrations strictly close on Monday, 2 November 2026 at 12:00 PM (Noon). Late applications cannot be processed as student section-wise duty leave batches must be finalized and submitted to university administration.",
  },
  {
    q: "What are the Education-Rev Academic Course Exemptions?",
    a: "As officially approved by the Department for the Top 3 Teams: 1st Year students receive one CBT exemption in INT108; 2nd Year students receive one CBT exemption in CSE205 / CSE202; 3rd Year students receive one Minor or Major CA exemption.",
  },
  {
    q: "Will Duty Leave (DL) be provided for attendance?",
    a: "Yes! Official section-wise Duty Leaves will be issued to all 1000+ participants and 30 event coordinators for both days (3 November and 4 November 2026).",
  },
  {
    q: "What are the hostel and late-night gate permissions?",
    a: "Full-night hostel duty leaves are officially approved for all hackathon participants on the night of 3rd November. Additionally, late-night entry/exit permissions are granted, and resting facilities with mattresses and bedding are arranged in Block 32/33/34.",
  },
  {
    q: "What placement & internship opportunities are offered?",
    a: "The Grand Winner receives direct placement referrals / internships in top IT firms through TPC (subject to availability). Top 3 teams receive official Letters of Recommendation (LOR) from Sami Anand Sir and placement department backing to scale their projects.",
  },
  {
    q: "What kind of projects are expected in CommitCon?",
    a: "CommitCon is dedicated to production-ready Free and Open Source Software (FOSS). Rather than unverified pitch decks, projects are judged on inspectable codebases, atomic Git commit histories, automated CI/CD testing harnesses, and standard OSI licensing (MIT, Apache 2.0).",
  },
  {
    q: "Where is the event venue at LPU?",
    a: "The hackathon and summit will be held offline at Lovely Professional University in Block 32 (Event Arena), with specialized sessions in Block 19 and Block 33/34.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative max-w-4xl mx-auto px-4 sm:px-6">
      {/* CLI Header */}
      <div className="mb-10 text-center">
        <span className="cli-prompt">./FAQ</span>
        <h2 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl text-white mt-4 glow-pink">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="font-[family-name:var(--font-terminal)] text-lg text-neon-cyan mt-1">
          Everything you need to know about duty leaves, course exemptions, and hackathon logistics
        </p>
      </div>

      {/* Accordion list */}
      <div className="bg-panel-dark pixel-border border-panel-border p-4 sm:p-6 rounded-sm">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border-b border-gray-800 last:border-b-0 transition-colors duration-150"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 text-left flex items-start gap-3 cursor-pointer hover:bg-white/5 px-2 rounded-sm transition-colors duration-150"
                aria-expanded={isOpen}
              >
                <span className="font-[family-name:var(--font-code)] text-terminal-green font-bold text-sm shrink-0 mt-0.5 select-none">
                  {isOpen ? "[-]" : "[+]"}
                </span>
                <span className="font-[family-name:var(--font-code)] text-white text-sm sm:text-base font-semibold leading-relaxed">
                  {item.q}
                </span>
              </button>

              {isOpen && (
                <div className="pl-8 pr-4 pb-4 pt-1">
                  <p className="font-[family-name:var(--font-code)] text-xs sm:text-sm text-gray-300 leading-relaxed border-l-2 border-neon-cyan/40 pl-3">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
