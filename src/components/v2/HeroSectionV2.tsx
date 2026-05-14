import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Zap } from "lucide-react";
import CountdownV2 from "./CountdownV2";
import Logo from "@/components/Logo";
import { eventV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

const HeroSectionV2 = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

    {/* Radial green glow from bottom-center */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: `radial-gradient(ellipse 80% 40% at 50% 110%, ${g.a12}, transparent)` }}
    />
    <div className="absolute top-0 inset-x-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, #080b14, transparent)" }} />
    <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, #080b14, transparent)" }} />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <Logo />

      {/* Badge édition nuit */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
        style={{
          border: `1px solid ${g.a50}`,
          backgroundColor: g.a10,
          color: g.light,
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        <Zap className="w-3.5 h-3.5" />
        Édition Nuit · 1ère
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="uppercase tracking-[0.3em] text-sm sm:text-base mb-6"
        style={{ color: g.light }}
      >
        {eventV2.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="inline-flex items-stretch gap-4 mb-8"
      >
        <div className="text-left">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-none mb-2" style={{ color: "rgba(255,255,255,0.8)" }}>
            Nuit des Crêtes
          </h1>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-none" style={{ color: g.primary }}>
            d'Entrange
          </h2>
        </div>
        <div className="flex items-center gap-2 pl-2">
          <div className="w-px self-stretch" style={{ backgroundColor: g.a50 }} />
          <span
            className="font-display tracking-[0.25em] text-xs sm:text-sm uppercase"
            style={{ color: g.primary, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            1ère édition
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" style={{ color: g.primary }} />
          <span className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>{eventV2.date}</span>
        </div>
        <span className="hidden sm:block" style={{ color: g.primary }}>•</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" style={{ color: g.primary }} />
          <span className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Départ {eventV2.startTime}</span>
        </div>
        <span className="hidden sm:block" style={{ color: g.primary }}>•</span>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: g.primary }} />
          <span className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>{eventV2.location}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-10"
      >
        <CountdownV2 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#courses"
          className="inline-block font-display text-xl px-8 py-4 tracking-wider transition-all hover:brightness-110"
          style={{ backgroundColor: g.primary, color: "white" }}
        >
          Découvrir les parcours
        </a>
        <a
          href={eventV2.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display text-xl px-8 py-4 tracking-wider transition-all"
          style={{ border: `1px solid ${g.primary}`, color: g.light }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = g.a10; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
        >
          S'inscrire
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSectionV2;
