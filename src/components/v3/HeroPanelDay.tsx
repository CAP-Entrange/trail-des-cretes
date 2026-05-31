import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sun } from "lucide-react";
import heroImage from "@/assets/hero-cretes.png";
import { eventDay } from "@/data/content-v3";

type Props = {
  expanded: boolean;
};

const HeroPanelDay = ({ expanded }: Props) => (
  <div className="relative w-full h-full overflow-hidden cursor-pointer group">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Crêtes d'Entrange au lever du jour"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Day overlay — sombre comme la v1 (bg-gradient-to-b from-background/70 via-background/50 to-background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      {/* Subtle sun glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(252, 211, 77, 0.18), transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 lg:px-12 py-12 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-amber-500/40 bg-amber-50/10 text-amber-200 text-[0.7rem] uppercase tracking-[0.2em] backdrop-blur-sm"
      >
        <Sun className="w-3.5 h-3.5" />
        Édition Jour
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-none text-foreground/85 mb-2">
          Trail des Crêtes
        </h1>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-gradient-amber">
          d'Entrange
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: expanded ? 1 : 0.7, y: 0 }}
        transition={{ delay: 0.3 }}
        className="uppercase tracking-[0.2em] text-primary text-xs sm:text-sm mb-6 max-w-md"
      >
        {eventDay.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-foreground/85 mb-6 text-sm sm:text-base"
      >
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{eventDay.date}</span>
        </div>
        <span className="text-primary hidden sm:block">•</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>{eventDay.startTime}</span>
        </div>
        <span className="text-primary hidden lg:block">•</span>
        <div className="hidden lg:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{eventDay.location}</span>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0, height: expanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-foreground/75 max-w-md mx-auto mb-6 text-sm sm:text-base">
          Marche 12 km, trails 12 / 22 / 32 km. Crêtes panoramiques, forêts mosellanes, ouvrages Maginot. Une journée sportive et humaine.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-display text-xs sm:text-sm text-primary tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity"
      >
        Explorer →
      </motion.div>
    </div>
  </div>
);

export default HeroPanelDay;
