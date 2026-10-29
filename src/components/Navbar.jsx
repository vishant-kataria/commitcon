import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "SCHEDULE", href: "#schedule" },
  { label: "AWARDS & EXEMPTIONS", href: "#prizes" },
  { label: "TRACKS", href: "#tracks" },
  { label: "SPEAKERS", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 shadow-lg shadow-black/50" : "bg-slate-950/85"
      } backdrop-blur-md`}
      style={{
        borderBottom: "2px solid transparent",
        borderImage: "linear-gradient(90deg, #ff2a85, #00f0ff) 1",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-red-700 pixel-border-sm border-neon-pink flex items-center justify-center font-[family-name:var(--font-pixel)] text-white text-xs shadow-[0_0_10px_rgba(255,42,133,0.5)]">
              C
            </div>
            <div>
              <span className="font-[family-name:var(--font-pixel)] text-sm sm:text-base tracking-wider text-white group-hover:text-neon-cyan transition-colors">
                COMMIT<span className="text-neon-pink">CON</span>
                <span className="text-cyber-gold text-xs ml-1">&apos;26</span>
              </span>
              <span className="block text-[10px] font-[family-name:var(--font-code)] text-gray-400">
                School of CSE • LPU
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-[family-name:var(--font-terminal)] text-lg text-gray-300 hover:text-neon-cyan transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#register"
              className="pixel-border-sm bg-neon-pink hover:bg-neon-magenta text-white font-[family-name:var(--font-pixel)] text-xs px-4 py-2 transition-colors duration-200"
            >
              REGISTER • ₹199
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block font-[family-name:var(--font-terminal)] text-xl text-gray-300 hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="block text-center pixel-border-sm bg-neon-pink text-white font-[family-name:var(--font-pixel)] text-xs py-3 mt-4"
          >
            REGISTER NOW • ₹199
          </a>
        </div>
      )}
    </nav>
  );
}
