import { MapPin, ExternalLink, Award } from "lucide-react";

const SPEAKERS = [
  {
    name: "Jaideep Prasad",
    role: "Industry Leader & Open Source Architect",
    location: "Kolkata",
    linkedin: "https://www.linkedin.com/in/jaideep-prasad-117379167/",
    tag: "Guest Speaker & Evaluator",
  },
  {
    name: "Nishant Kumar Thakur",
    role: "Systems Engineer & FOSS Specialist",
    location: "Bangalore",
    linkedin: "https://www.linkedin.com/in/nishantkthakur/",
    tag: "Guest Speaker & Evaluator",
  },
  {
    name: "Souhardya Bose",
    role: "AI & Distributed Systems Engineer",
    location: "Bangalore",
    linkedin: "https://www.linkedin.com/in/souhardya-bose/",
    tag: "Guest Speaker & Evaluator",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative max-w-7xl mx-auto px-4 sm:px-6">
      {/* CLI Header */}
      <div className="mb-12 text-center">
        <span className="cli-prompt">cat GUESTS_AND_MENTORS.json</span>
        <h2 className="font-[family-name:var(--font-pixel)] text-2xl sm:text-3xl text-white mt-4 glow-gold">
          KEYNOTE SPEAKERS &amp; GUESTS
        </h2>
        <p className="font-[family-name:var(--font-terminal)] text-lg text-cyber-gold mt-1">
          Direct Mentorship &amp; Code Reviews from Bangalore &amp; Kolkata Industry Leaders
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SPEAKERS.map((speaker) => (
          <div
            key={speaker.name}
            className="bg-panel-dark pixel-border border-panel-border p-6 flex flex-col justify-between hover:border-cyber-gold transition-colors duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-cyber-gold/20 border border-cyber-gold/40 text-cyber-gold text-[10px] font-[family-name:var(--font-code)] uppercase">
                  {speaker.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400 font-[family-name:var(--font-code)]">
                  <MapPin size={12} className="text-neon-pink" />
                  {speaker.location}
                </span>
              </div>

              <div className="w-16 h-16 bg-slate-800 rounded-sm pixel-border-sm border-slate-700 mb-4 flex items-center justify-center font-[family-name:var(--font-pixel)] text-lg text-neon-cyan">
                {speaker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="font-[family-name:var(--font-code)] text-lg font-bold text-white mb-1">
                {speaker.name}
              </h3>
              <p className="font-[family-name:var(--font-code)] text-xs text-gray-400 mb-4">
                {speaker.role}
              </p>
            </div>

            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 hover:border-neon-cyan hover:text-neon-cyan text-xs text-gray-300 font-[family-name:var(--font-code)] transition-colors mt-4"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>

      {/* Special Endorsement / Patron Box */}
      <div className="p-6 bg-panel-dark pixel-border border-cyber-gold/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-cyber-gold/20 rounded border border-cyber-gold text-cyber-gold">
            <Award size={28} />
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-code)] text-base font-bold text-white">
              Official Endorsement &amp; LORs by Sami Anand Sir
            </h4>
            <p className="text-xs text-gray-300 font-[family-name:var(--font-code)] mt-0.5">
              Top 3 Hackathon Teams &amp; Lead Coordinators receive official Letters of Recommendation (LOR) for placement acceleration.
            </p>
          </div>
        </div>

        <span className="shrink-0 px-3 py-1.5 bg-slate-900 border border-cyber-gold text-cyber-gold text-xs font-[family-name:var(--font-code)] font-bold">
          TPC &amp; Career Committee
        </span>
      </div>
    </section>
  );
}
