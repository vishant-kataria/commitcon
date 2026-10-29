import { MessageCircle, Ticket } from "lucide-react";

export default function DiscordCTA() {
  return (
    <section id="register" className="relative overflow-hidden flex items-center justify-center py-16 sm:py-24">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[family-name:var(--font-pixel)] text-5xl sm:text-7xl md:text-9xl opacity-5 text-white whitespace-nowrap">
          COMMITCON &apos;26
        </span>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 bg-cyber-gold/20 border border-cyber-gold text-cyber-gold font-[family-name:var(--font-pixel)] text-xs uppercase tracking-widest">
          LIMITED SEATS • 1000+ ENGINEERS
        </div>

        <h2 className="font-[family-name:var(--font-pixel)] text-xl sm:text-2xl md:text-3xl text-neon-pink glow-pink leading-snug">
          LOCK IN YOUR COMMITCON SEAT BEFORE NOON, NOV 2!
        </h2>

        <p className="font-[family-name:var(--font-code)] text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join 1000+ LPU developers for 24 hours of production FOSS engineering. Enjoy academic course exemptions, direct placement opportunities with TPC, full-night catering, and industry mentorship.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="https://forms.gle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon-pink hover:bg-neon-magenta text-white font-[family-name:var(--font-pixel)] text-sm px-8 py-4 pixel-border border-neon-pink transition-colors duration-200 shadow-[0_0_25px_rgba(255,42,133,0.6)]"
          >
            <Ticket size={18} />
            PAY &amp; REGISTER • ₹199
          </a>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-neon-cyan font-[family-name:var(--font-pixel)] text-sm px-6 py-4 pixel-border border-neon-cyan transition-colors duration-200"
          >
            <MessageCircle size={18} />
            JOIN COMMUNITY DISCORD
          </a>
        </div>

        {/* Note */}
        <p className="font-[family-name:var(--font-code)] text-xs text-gray-400">
          Official Section-wise Duty Leave will be applied automatically for all confirmed registrations.
        </p>
      </div>
    </section>
  );
}
