import { useState } from "react";
import { ChevronLeft, ChevronRight, GitPullRequest, Cpu, Layers, Globe, GraduationCap } from "lucide-react";

const TRACKS = [
  {
    id: "foss",
    name: "PRODUCTION-READY FOSS",
    icon: "⚡",
    badge: "Core Flagship",
    lucide: GitPullRequest,
    description:
      "Move beyond standard hackathon prototypes and pitch decks. Build inspectable codebases, atomic commit histories, and verified PRs with OSI-approved licenses (MIT, Apache 2.0) that product firms and recruiters can verify on your public GitHub/GitLab profile.",
    outcomes: [
      "Atomic commit histories & semantic PR etiquette",
      "Standard OSI licensing & CONTRIBUTING.md governance",
      "Public audit trail for Tier-1 placement conversions",
    ],
  },
  {
    id: "ai",
    name: "AI & APPLIED INTELLIGENCE",
    icon: "🤖",
    badge: "High Growth",
    lucide: Cpu,
    description:
      "Architect practical, verifiable open-source AI systems, intelligent agentic workflows, and automated machine learning pipelines with verifiable benchmarks and reproducible evaluation harnesses.",
    outcomes: [
      "End-to-end reproducible machine learning pipelines",
      "Open-source LLM & agentic workflow integrations",
      "Automated evaluation metrics and inference tests",
    ],
  },
  {
    id: "arch",
    name: "SYSTEMS & INFRASTRUCTURE",
    icon: "🧱",
    badge: "Engineering Rigor",
    lucide: Layers,
    description:
      "Deep dive into system architecture: navigating large codebases, decoupling tight dependencies, applying clean modular design patterns, and building continuous automated CI/CD testing harnesses.",
    outcomes: [
      "Modular system architecture & dependency decoupling",
      "Automated CI/CD test suites & GitHub Actions pipelines",
      "Git internals mastery: interactive rebasing & conflict resolution",
    ],
  },
  {
    id: "gsoc",
    name: "GLOBAL PIPELINE (GSoC / LFX)",
    icon: "🌍",
    badge: "Feeder Track",
    lucide: Globe,
    description:
      "Instill upstream contribution discipline to serve as a direct springboard for competitive international developer programs such as Google Summer of Code (GSoC), Linux Foundation Mentorships (LFX), and global foundation grants.",
    outcomes: [
      "Upstream issue triaging & contribution discipline",
      "Preparation for GSoC & LFX international applications",
      "Mentorship from established open-source maintainers",
    ],
  },
  {
    id: "campus",
    name: "CAMPUS & STUDENT UTILITIES",
    icon: "🎓",
    badge: "Impact",
    lucide: GraduationCap,
    description:
      "Develop high-impact, production-grade solutions solving real academic, administrative, and student life challenges across Lovely Professional University with systems-level engineering quality.",
    outcomes: [
      "High-utility campus software for 30,000+ students",
      "Integration with existing university student workflows",
      "Direct showcase to university placement & tech departments",
    ],
  },
];

export default function Tracks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TRACKS[activeIndex];

  const prev = () =>
    setActiveIndex((i) => (i - 1 + TRACKS.length) % TRACKS.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % TRACKS.length);

  return (
    <section id="tracks" className="relative max-w-7xl mx-auto px-4 sm:px-6">
      {/* CLI Header */}
      <div className="mb-12 text-center">
        <span className="cli-prompt">ls -a TRACKS</span>
        <h2 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl text-white mt-4 glow-pink">
          HACKATHON ENGINEERING TRACKS
        </h2>
        <p className="font-[family-name:var(--font-terminal)] text-lg text-neon-cyan mt-1">
          Systems-Level Rigor • Automated Testing • Verified FOSS Solutions
        </p>
      </div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Panel: Active Track Detail (7 cols) */}
        <div className="lg:col-span-7 bg-panel-dark pixel-border border-neon-cyan p-6 sm:p-8 flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{active.icon}</span>
              <span className="px-3 py-1 bg-neon-pink/20 border border-neon-pink text-neon-pink font-[family-name:var(--font-code)] text-xs font-bold uppercase rounded-sm">
                {active.badge}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl text-white mb-4 glow-pink leading-snug">
              {active.name}
            </h3>

            <p className="font-[family-name:var(--font-code)] text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {active.description}
            </p>

            <div className="border-t border-slate-800 pt-5">
              <h4 className="font-[family-name:var(--font-pixel)] text-xs text-cyber-gold uppercase tracking-wider mb-3">
                Key Engineering Focus Areas:
              </h4>
              <ul className="space-y-2">
                {active.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-[family-name:var(--font-code)] text-gray-300">
                    <span className="text-neon-cyan font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Arrows */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80 lg:hidden">
            <button
              onClick={prev}
              className="px-4 py-2 bg-slate-900 border border-neon-cyan text-neon-cyan text-xs font-[family-name:var(--font-code)]"
            >
              ← Previous Track
            </button>
            <span className="text-xs font-[family-name:var(--font-code)] text-gray-400">
              {activeIndex + 1} / {TRACKS.length}
            </span>
            <button
              onClick={next}
              className="px-4 py-2 bg-slate-900 border border-neon-cyan text-neon-cyan text-xs font-[family-name:var(--font-code)]"
            >
              Next Track →
            </button>
          </div>
        </div>

        {/* Right Panel: Track Selector Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {TRACKS.map((track, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={track.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 text-left pixel-border-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "bg-slate-900/90 border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)] translate-x-1"
                    : "bg-panel-dark/60 border-slate-700/60 hover:border-slate-500 hover:bg-slate-900/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-2xl">{track.icon}</span>
                  <div>
                    <h4
                      className={`font-[family-name:var(--font-code)] text-sm font-bold ${
                        isSelected ? "text-neon-cyan" : "text-gray-300"
                      }`}
                    >
                      {track.name}
                    </h4>
                    <span className="text-[11px] font-[family-name:var(--font-code)] text-gray-400">
                      {track.badge}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs font-[family-name:var(--font-code)] ${
                    isSelected ? "text-neon-pink font-bold" : "text-gray-500"
                  }`}
                >
                  {isSelected ? "● ACTIVE" : "SELECT"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
