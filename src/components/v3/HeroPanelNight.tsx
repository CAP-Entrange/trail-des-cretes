import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Moon } from "lucide-react";
import { eventNight } from "@/data/content-v3";
import { g } from "@/components/v2/theme";

type Props = {
  expanded: boolean;
};

const MiniStars = memo(() => {
  const stars = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.6 + 0.3,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 6,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
});
MiniStars.displayName = "MiniStars";

const HeroPanelNight = ({ expanded }: Props) => (
  <div
    className="relative w-full h-full overflow-hidden cursor-pointer group"
    style={{ backgroundColor: "#080b14" }}
  >
    <MiniStars />

    {/* Radial green glow from bottom */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${g.a20}, transparent)` }}
    />
    {/* Moon glow top-left */}
    <div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(180, 200, 255, 0.18), transparent 70%)",
        filter: "blur(24px)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 py-12 text-center">
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
        <Moon className="w-3.5 h-3.5" />
        Édition Nuit
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h1
          className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none mb-2"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Nuit des Crêtes
        </h1>
        <h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none"
          style={{ color: g.primary }}
        >
          d'Entrange
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: expanded ? 1 : 0.7, y: 0 }}
        transition={{ delay: 0.3 }}
        className="uppercase tracking-[0.2em] text-xs sm:text-sm mb-6 max-w-md"
        style={{ color: g.light }}
      >
        {eventNight.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-sm sm:text-base"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" style={{ color: g.primary }} />
          <span>{eventNight.date}</span>
        </div>
        <span className="hidden sm:block" style={{ color: g.primary }}>•</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" style={{ color: g.primary }} />
          <span>{eventNight.startTime}</span>
        </div>
        <span className="hidden lg:block" style={{ color: g.primary }}>•</span>
        <div className="hidden lg:flex items-center gap-2">
          <MapPin className="w-4 h-4" style={{ color: g.primary }} />
          <span>{eventNight.location}</span>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0, height: expanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="max-w-md mx-auto mb-6 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
          Deux parcours nocturnes (12 et 20 km) à la frontale. La forêt sous les étoiles, les ouvrages Maginot sous un autre jour.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ color: g.primary }}
      >
        Explorer →
      </motion.div>
    </div>
  </div>
);

export default HeroPanelNight;
