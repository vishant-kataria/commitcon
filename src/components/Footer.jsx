function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.44a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function DiscordIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function CamperVan() {
  return (
    <svg width="120" height="70" viewBox="0 0 120 70" fill="none" className="drop-shadow-lg">
      <rect x="10" y="14" width="75" height="40" rx="4" fill="#f8fafc" />
      <rect x="75" y="24" width="35" height="30" rx="6" fill="#f8fafc" />
      <rect x="10" y="34" width="100" height="10" fill="#f97316" />
      <rect x="10" y="44" width="100" height="4" fill="#fbbf24" />
      <rect x="15" y="8" width="60" height="6" rx="2" fill="#e2e8f0" />
      <rect x="25" y="4" width="40" height="4" fill="#cbd5e1" />
      <path d="M85 24 L104 24 L108 34 L85 34 Z" fill="#38bdf8" opacity="0.8" />
      <rect x="20" y="20" width="18" height="12" rx="2" fill="#38bdf8" opacity="0.8" />
      <rect x="44" y="20" width="18" height="12" rx="2" fill="#38bdf8" opacity="0.8" />
      <rect x="108" y="38" width="4" height="6" fill="#fef08a" />
      <rect x="8" y="38" width="2" height="6" fill="#ef4444" />
      <circle cx="32" cy="54" r="10" fill="#1e293b" />
      <circle cx="32" cy="54" r="5" fill="#94a3b8" />
      <circle cx="92" cy="54" r="10" fill="#1e293b" />
      <circle cx="92" cy="54" r="5" fill="#94a3b8" />
    </svg>
  );
}

function CampfireScene() {
  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-indigo-950/40" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050819] via-[#0d1238] to-[#121636]" />

      {[
        { left: "10%", top: "15%", delay: "0s" },
        { left: "25%", top: "8%", delay: "0.7s" },
        { left: "45%", top: "20%", delay: "1.4s" },
        { left: "65%", top: "5%", delay: "0.3s" },
        { left: "80%", top: "18%", delay: "1.1s" },
        { left: "90%", top: "10%", delay: "0.5s" },
      ].map((star, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            animation: `twinkle 2s ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}

      <svg
        className="absolute bottom-6 left-0 w-full"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        style={{ height: "130px" }}
      >
        <polygon
          points="0,200 100,80 200,140 350,50 500,120 600,60 750,110 900,40 1050,100 1200,70 1200,200"
          fill="#0c1133"
        />
        <polygon
          points="0,200 50,140 180,100 300,150 450,80 550,140 700,90 850,130 950,100 1100,140 1200,110 1200,200"
          fill="#080c26"
        />
      </svg>

      <div className="absolute bottom-0 left-0 w-full h-6 bg-[#0a0f1d]" />
      <div className="absolute bottom-6 left-0 w-full h-[2px] bg-[#1a2342]" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-6 sm:gap-12 md:gap-16">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-red-700 rounded-t-lg relative shadow-[0_0_8px_rgba(239,68,68,0.5)]">
            <div className="w-3 h-1 bg-cyan-400 absolute top-2 left-1.5 shadow-[0_0_4px_#22d3ee]" />
          </div>
          <div className="w-8 h-4 bg-slate-900 rounded-b" />
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-8 h-10 flex items-end justify-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-8 bg-orange-500 rounded-t-full animate-pulse-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-5 bg-amber-400 rounded-t-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-yellow-200 rounded-t-full" />
          </div>
          <div className="w-8 h-2 bg-[#422006] rounded -mt-0.5" />
          <div className="w-12 h-2 bg-orange-500/20 rounded-full blur-sm -mt-1" />
        </div>

        <div className="hidden sm:block">
          <CamperVan />
        </div>
      </div>
    </div>
  );
}

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: DiscordIcon, label: "Discord", href: "https://discord.gg" },
];

const RESOURCES = [
  { label: "CommitCon Official Noting Sheet", href: "#" },
  { label: "Education-Rev Exemption Policy", href: "#prizes" },
  { label: "Duty Leave Verification Portal", href: "#" },
  { label: "OSI FOSS Contribution Guide", href: "#tracks" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#050819] mt-16">
      <CampfireScene />

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ADDRESS */}
          <div>
            <h4 className="font-[family-name:var(--font-pixel)] text-xs text-neon-cyan mb-4 tracking-wider">
              VENUE &amp; ORGANIZERS
            </h4>
            <p className="font-[family-name:var(--font-code)] text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Block 32 (Event Arena)</strong>
              <br />
              Lovely Professional University,
              <br />
              Jalandhar - Delhi G.T. Road, Phagwara,
              <br />
              Punjab - 144411
            </p>
            <p className="font-[family-name:var(--font-code)] text-xs text-cyber-gold mt-3">
              Student Career Committee &amp; CPT, School of CSE
            </p>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-[family-name:var(--font-pixel)] text-xs text-neon-cyan mb-4 tracking-wider">
              OFFICIAL RESOURCES
            </h4>
            <ul className="space-y-2">
              {RESOURCES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-code)] text-sm text-gray-400 hover:text-neon-pink transition-colors duration-200"
                  >
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* STAY CONNECTED */}
          <div>
            <h4 className="font-[family-name:var(--font-pixel)] text-xs text-neon-cyan mb-4 tracking-wider">
              CONNECT &amp; COMMUNITY
            </h4>
            <p className="font-[family-name:var(--font-code)] text-xs text-gray-400 mb-4">
              Join the official developer channels for announcements, mentor sessions, and live updates.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 bg-slate-900/60 rounded border border-slate-800 text-gray-400 hover:text-neon-pink hover:border-neon-pink transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900">
        <p className="text-center text-xs text-gray-600 py-4 font-[family-name:var(--font-code)]">
          © 2026 CommitCon • Lovely Professional University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
