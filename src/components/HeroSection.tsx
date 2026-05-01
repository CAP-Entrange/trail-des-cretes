import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cretes.png";
import Countdown from "./Countdown";
import Logo from "./Logo";
import { event } from "@/data/content";

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

        <Logo></Logo>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-primary text-sm sm:text-base mb-6"
        >
          {event.tagline}
        </motion.p>
        {/* 
          L'histoire au pas de course.
          Héritiers du béton, maîtres des cimes.
          Là où le silence de l'acier rencontre l'effort.
          Entre ciel de traîne et racines de fer.
          La Mémoire sous chaque Foulée.
         */}

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
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-lg">{event.date}</span>
          </div>

          <span className="text-primary hidden sm:block">•</span>

          {/* Heure */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-lg">{event.startTime}</span>
          </div>

          <span className="text-primary hidden sm:block">•</span>

          {/* Lieu */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-lg">{event.location}</span>
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
