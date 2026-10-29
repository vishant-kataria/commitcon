import { useState, useEffect } from "react";
import { ChevronDown, Calendar, MapPin, Users, Ticket, Sparkles } from "lucide-react";

// Registration deadline: 2 Nov 2026 at 12:00 PM (Noon)
const TARGET_DATE = new Date("2026-11-02T12:00:00");

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function calcTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

/* ── Pixel Mascot SVG ── */
function PixelMascot() {
  const P = 5;
  const rows = [
    [[5, "H"], [6, "H"], [7, "H"], [8, "H"], [9, "H"], [10, "H"]],
    [[4, "H"], [5, "H"], [6, "H"], [7, "H"], [8, "H"], [9, "H"], [10, "H"], [11, "H"]],
    [[3, "H"], [4, "H"], [5, "H"], [6, "H"], [7, "H"], [8, "H"], [9, "H"], [10, "H"], [11, "H"], [12, "H"]],
    [[2, "H"], [3, "H"], [4, "H"], [5, "H"], [6, "H"], [7, "H"], [8, "H"], [9, "H"], [10, "H"], [11, "H"], [12, "H"], [13, "H"]],
    [[2, "H"], [3, "H"], [4, "H"], [5, "D"], [6, "D"], [7, "D"], [8, "D"], [9, "D"], [10, "D"], [11, "H"], [12, "H"], [13, "H"]],
    [[2, "H"], [3, "H"], [4, "D"], [5, "D"], [6, "C"], [7, "C"], [8, "D"], [9, "C"], [10, "C"], [11, "D"], [12, "H"], [13, "H"]],
    [[2, "H"], [3, "H"], [4, "D"], [5, "C"], [6, "C"], [7, "C"], [8, "D"], [9, "C"], [10, "C"], [11, "C"], [12, "H"], [13, "H"]],
    [[3, "H"], [4, "D"], [5, "D"], [6, "D"], [7, "D"], [8, "D"], [9, "D"], [10, "D"], [11, "D"], [12, "H"]],
    [[3, "H"], [4, "H"], [5, "D"], [6, "D"], [7, "D"], [8, "D"], [9, "D"], [10, "D"], [11, "H"], [12, "H"]],
    [[2, "H"], [3, "H"], [4, "H"], [5, "H"], [6, "S"], [7, "S"], [8, "S"], [9, "S"], [10, "H"], [11, "H"], [12, "H"], [13, "H"]],
    [[1, "H"], [2, "H"], [3, "H"], [4, "S"], [5, "S"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "S"], [11, "S"], [12, "H"], [13, "H"], [14, "H"]],
    [[1, "H"], [2, "H"], [3, "S"], [4, "S"], [5, "B"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "B"], [11, "S"], [12, "S"], [13, "H"], [14, "H"]],
    [[1, "H"], [2, "S"], [3, "S"], [4, "B"], [5, "B"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "B"], [11, "B"], [12, "S"], [13, "S"], [14, "H"]],
    [[2, "S"], [3, "S"], [4, "B"], [5, "B"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "B"], [11, "B"], [12, "S"], [13, "S"]],
    [[3, "S"], [4, "B"], [5, "B"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "B"], [11, "B"], [12, "S"]],
    [[4, "B"], [5, "B"], [6, "B"], [7, "B"], [8, "B"], [9, "B"], [10, "B"], [11, "B"]],
  ];

  const colorMap = {
    H: "#dc2626",
    D: "#0f172a",
    C: "#00f0ff",
    S: "#991b1b",
    B: "#020617",
  };

  const rects = [];
  rows.forEach((row, y) => {
    row.forEach(([x, c]) => {
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * P}
          y={y * P}
          width={P}
          height={P}
          fill={colorMap[c]}
        />
      );
    });
  });

  return (
    <svg
      width={72}
      height={72}
      viewBox={`0 0 ${16 * P} ${16 * P}`}
      className="animate-float mx-auto drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
      aria-label="CommitCon FOSS Mascot"
    >
      {rects}
    </svg>
  );
}

/* ── Countdown Box ── */
function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="pixel-border border-neon-cyan bg-panel-dark px-3 py-2 md:px-5 md:py-3 min-w-[56px] md:min-w-[70px] flex items-center justify-center">
        <span className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl text-white leading-none">
          {pad(value)}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase tracking-wider font-[family-name:var(--font-code)]">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  const colonSep = (
    <span className="text-neon-pink text-xl sm:text-2xl font-[family-name:var(--font-pixel)] self-start mt-2 md:mt-3 select-none">
      :
    </span>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 gap-6 md:gap-7 overflow-hidden">
      {/* ── Mascot ── */}
      <PixelMascot />

      {/* ── Organizer Pill Badge ── */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-neon-cyan/40 text-xs text-neon-cyan font-[family-name:var(--font-code)]">
        <Sparkles size={14} className="text-neon-pink" />
        <span>Student Career Committee &amp; CPT • School of CSE • LPU</span>
      </div>

      {/* ── Main Title ── */}
      <div className="text-center">
        <p className="font-[family-name:var(--font-terminal)] text-lg sm:text-xl text-cyber-gold tracking-widest uppercase mb-1">
          Open Source / AI Summit &amp;
        </p>
        <h1 className="font-[family-name:var(--font-pixel)] text-3xl sm:text-5xl md:text-6xl tracking-wider text-center glow-pink leading-tight">
          <span className="text-white">COMMIT</span>
          <span className="text-neon-pink">CON</span>
          <span className="text-cyber-gold text-2xl sm:text-4xl ml-2">&apos;26</span>
        </h1>
      </div>

      {/* ── Tagline ── */}
      <p className="font-[family-name:var(--font-terminal)] text-xl sm:text-2xl text-neon-cyan text-center max-w-3xl leading-snug">
        24-Hour Production-Grade FOSS Hackathon &amp; AI Engineering Sprint
      </p>

      {/* ── Meta Pills (Date, Venue, Fee, Mode) ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-[family-name:var(--font-code)] text-gray-300">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-panel-dark pixel-border-sm border-panel-border">
          <Calendar size={15} className="text-neon-pink" />
          <span>3 Nov, 9 AM – 4 Nov, 5 PM (24 Hrs)</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-panel-dark pixel-border-sm border-panel-border">
          <MapPin size={15} className="text-cyber-gold" />
          <span>Lovely Professional University (Block 32)</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-panel-dark pixel-border-sm border-panel-border">
          <Ticket size={15} className="text-terminal-green" />
          <span className="text-terminal-green font-bold">₹199 / Participant</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-panel-dark pixel-border-sm border-panel-border">
          <Users size={15} className="text-neon-blue" />
          <span>1000+ Participants</span>
        </div>
      </div>

      {/* ── Description ── */}
      <p className="font-[family-name:var(--font-code)] text-sm sm:text-base text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
        CommitCon focuses on developing <strong className="text-white font-semibold">production-ready Free and Open Source Software (FOSS)</strong> rather than traditional pitch decks. Build inspectable codebases with atomic commit histories, automated CI/CD testing harnesses, and verified PRs that bypass standard resumes for Tier-1 placements.
      </p>

      {/* ── Countdown to Registration Close ── */}
      <div className="flex flex-col items-center gap-2 mt-2 p-5 bg-panel-dark pixel-border border-cyber-gold/50 rounded-sm">
        <span className="font-[family-name:var(--font-pixel)] text-xs text-cyber-gold glow-gold tracking-widest uppercase">
          🚨 Registration Closes In!
        </span>
        <span className="font-[family-name:var(--font-terminal)] text-lg text-neon-pink font-semibold">
          Strict Deadline: 2 November 2026 at 12:00 PM (Noon)
        </span>

        <div className="flex items-center gap-2 sm:gap-3 mt-1">
          <CountdownBox value={days} label="Days" />
          {colonSep}
          <CountdownBox value={hours} label="Hours" />
          {colonSep}
          <CountdownBox value={minutes} label="Minutes" />
          {colonSep}
          <CountdownBox value={seconds} label="Seconds" />
        </div>
      </div>

      {/* ── CTA Buttons ── */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <a
          href="#register"
          className="pixel-border bg-neon-pink hover:bg-neon-magenta text-white font-[family-name:var(--font-pixel)] text-sm px-8 py-3.5 cursor-pointer transition-colors duration-200 select-none shadow-[0_0_20px_rgba(255,42,133,0.5)]"
        >
          Register Now • ₹199
        </a>
        <a
          href="#prizes"
          className="pixel-border bg-panel-dark hover:bg-slate-800 text-cyber-gold font-[family-name:var(--font-pixel)] text-sm px-6 py-3.5 cursor-pointer transition-colors duration-200 border-cyber-gold"
        >
          View Academic &amp; Placement Perks
        </a>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="mt-4">
        <ChevronDown className="animate-bounce-down text-neon-cyan opacity-70 mx-auto" size={28} />
      </div>
    </section>
  );
}
