import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Tracks from './components/Tracks'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import DiscordCTA from './components/DiscordCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-neon-pink selection:text-white">
      {/* ── Fixed Starfield & Mountains Background ── */}
      <Starfield />

      {/* ── Fixed Retro Header ── */}
      <Navbar />

      {/* ── Main Foreground Content ── */}
      <main className="relative z-10 flex flex-col gap-14 sm:gap-20 lg:gap-28">
        <Hero />
        <Schedule />
        <Prizes />
        <Tracks />
        <Speakers />
        <FAQ />
        <DiscordCTA />
      </main>

      {/* ── Retro Campsite Footer ── */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
