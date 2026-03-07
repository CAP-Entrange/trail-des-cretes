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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 relative"
        >
          <div className="absolute inset-0 rounded-full bg-background" />
          <img
            src={clubLogo}
            alt="Logo du club"
            className="relative z-10 w-full h-full object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-primary text-sm sm:text-base mb-6"
        >
          Sur les traces des défenseurs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl leading-none text-foreground/80 mb-2"
        >
          Le trail des crêtes
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl text-gradient-amber  mb-8"
        >
          d'Entrange
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground mb-8"
        >
          {/* Date */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar w-4 h-4 text-primary"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
            <span className="text-lg">20 Septembre 2026</span>
          </div>

          <span className="text-primary hidden sm:block">•</span>

          {/* Heure */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-4 h-4 text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span className="text-lg">10h00</span>
          </div>

          <span className="text-primary hidden sm:block">•</span>

          {/* Lieu */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin w-4 h-4 text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span className="text-lg">Entrange, Moselle</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
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
