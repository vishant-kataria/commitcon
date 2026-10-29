import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const events = [
  {
    date: "Oct 29",
    time: "8:00 AM",
    event: "Promotion & Prep Sprint",
    sub: "Duty leaves active for volunteers",
    icon: "📢",
  },
  {
    date: "Nov 02",
    time: "12:00 PM (Noon)",
    event: "Registration Strictly Closes",
    sub: "Final team roster freeze",
    icon: "🚨",
  },
  {
    date: "Nov 03",
    time: "8:00 AM",
    event: "Check-in & Desk Open",
    sub: "LPU Block 32 Event Arena",
    icon: "🎟️",
  },
  {
    date: "Nov 03",
    time: "9:00 AM",
    event: "Grand Opening Ceremony",
    sub: "Open Source / AI Summit Keynotes",
    icon: "🎙️",
  },
  {
    date: "Nov 03",
    time: "11:00 AM",
    event: "24-Hr Coding Sprint Begins!",
    sub: "Production FOSS architecture commences",
    icon: "💻",
  },
  {
    date: "Nov 03",
    time: "8:30 PM",
    event: "Dinner & Midnight Tech Quiz",
    sub: "Hot catering & developer swag giveaways",
    icon: "🍕",
  },
  {
    date: "Nov 04",
    time: "8:00 AM",
    event: "Breakfast & LinkedIn Class",
    sub: "High-impact portfolio optimization",
    icon: "☕",
  },
  {
    date: "Nov 04",
    time: "11:00 AM",
    event: "24-Hr Sprint Code Freeze",
    sub: "Automated CI/CD test harness audit",
    icon: "🔒",
  },
  {
    date: "Nov 04",
    time: "2:00 PM",
    event: "Evaluations & Code Review",
    sub: "Public repo inspectability review",
    icon: "🔍",
  },
  {
    date: "Nov 04",
    time: "5:00 PM",
    event: "Valedictory & Awards",
    sub: "Education-Rev exemptions & LORs",
    icon: "🏆",
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    function update() {
      setCount(window.innerWidth < 768 ? 1 : 3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export default function Schedule() {
  const [startIndex, setStartIndex] = useState(1); // default to Nov 2 registration close
  const visibleCount = useVisibleCount();

  const maxStart = Math.max(0, events.length - visibleCount);

  const prev = useCallback(() => {
    setStartIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setStartIndex((i) => Math.min(maxStart, i + 1));
  }, [maxStart]);

  const visibleEvents = events.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="schedule" className="relative max-w-7xl mx-auto px-4 sm:px-6">
      {/* CLI Header */}
      <div className="mb-12 text-center">
        <span className="cli-prompt">cat SCHEDULE.txt</span>
        <h2 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl text-white mt-4 glow-cyan">
          EVENT TIMELINE &amp; DEADLINES
        </h2>
        <p className="font-[family-name:var(--font-terminal)] text-lg text-neon-cyan mt-1">
          Registration Closes Nov 2, 12 PM Noon • 24-Hour Sprint: 3–4 November 2026
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="p-2 sm:p-3 bg-panel-dark pixel-border-sm border-panel-border text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed hover:border-neon-cyan hover:bg-slate-800 transition-colors"
          aria-label="Previous events"
        >
          <ChevronLeft size={24} />
        </button>

        <span className="font-[family-name:var(--font-code)] text-xs text-gray-400">
          Showing {startIndex + 1}–{Math.min(startIndex + visibleCount, events.length)} of {events.length} milestones
        </span>

        <button
          onClick={next}
          disabled={startIndex >= maxStart}
          className="p-2 sm:p-3 bg-panel-dark pixel-border-sm border-panel-border text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed hover:border-neon-cyan hover:bg-slate-800 transition-colors"
          aria-label="Next events"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Timeline Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleEvents.map((item, idx) => (
          <div
            key={item.event}
            className={`bg-panel-dark pixel-border p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
              item.date === "Nov 02"
                ? "border-cyber-gold shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                : item.date === "Nov 03" && item.time === "11:00 AM"
                ? "border-neon-pink shadow-[0_0_15px_rgba(255,42,133,0.3)]"
                : "border-panel-border"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="inline-flex items-center gap-1 text-xs font-[family-name:var(--font-code)] text-neon-cyan bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700">
                  <Clock size={12} />
                  {item.time}
                </span>
              </div>

              <div className="font-[family-name:var(--font-pixel)] text-xs text-neon-pink uppercase tracking-wider mb-2">
                {item.date}, 2026
              </div>

              <h3 className="font-[family-name:var(--font-code)] text-lg font-bold text-white mb-2 leading-snug">
                {item.event}
              </h3>
            </div>

            <p className="text-xs text-gray-400 font-[family-name:var(--font-code)] border-t border-slate-800 pt-3 mt-4">
              {item.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Important Note */}
      <div className="mt-8 p-4 bg-slate-900/70 border border-cyber-gold/40 text-center font-[family-name:var(--font-code)] text-xs text-gray-300">
        ⚠️ <strong className="text-cyber-gold">Reminder:</strong> Registrations will strictly close on <strong className="text-white">Monday, 2 November 2026 at 12:00 PM (Noon)</strong> to finalize section-wise duty leave batches.
      </div>
    </section>
  );
}
