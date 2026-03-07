import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cretes.png";
import clubLogo from "@/assets/logo-club.png";
import Countdown from "./Countdown";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Les Crêtes d'Entrange - paysage brumeux avec bunker"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-primary text-sm sm:text-base mb-4"
        >
          Trail des fortifications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-6xl sm:text-8xl md:text-9xl leading-none text-gradient-amber mb-2"
        >
          Les Crêtes
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl text-foreground/80 mb-8"
        >
          d'Entrange
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground mb-2"
        >
          20 septembre 2026 — Départ 10h00
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-10"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#courses"
            className="inline-block bg-primary text-primary-foreground font-display text-xl px-8 py-4 tracking-wider hover:brightness-110 transition-all"
          >
            Découvrir les missions
          </a>
          <a
            href="#inscription"
            className="inline-block border border-primary text-primary font-display text-xl px-8 py-4 tracking-wider hover:bg-primary/10 transition-all"
          >
            S'inscrire
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
