import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cretes.png";
import Countdown from "./Countdown";
import Logo from "./Logo";
import { event } from "@/data/content";

/*
Quand la vidéo arrivera

     1. Convertir en WebM + MP4 si nécessaire (ex: HandBrake, FFmpeg)
     2. Recommandé : résolution 1920×1080 max, bitrate ~4-6 Mbps, durée 15-30s
     3. Déposer dans public/videos/ sous les noms hero-drone.webm et hero-drone.mp4
     4. C'est tout — le code est déjà en place
*/

// Durée d'affichage de la photo entre deux passages de la vidéo (ms)
const PHOTO_PAUSE_MS = 8000;

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleVideoEnd = useCallback(() => {
    setShowPhoto(true);
    /*setTimeout(() => {
      setShowPhoto(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, PHOTO_PAUSE_MS);*/
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video / image fallback */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          poster={heroImage}
          preload="auto"
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-drone.webm" type="video/webm" />
          <source src="/videos/hero-drone.mp4" type="video/mp4" />
        </video>
        {/* Photo affichée pendant la pause entre deux passages vidéo */}
        <img
          src={heroImage}
          alt="Les Crêtes d'Entrange - paysage brumeux avec bunker"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${showPhoto ? "opacity-100" : "opacity-0"}`}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-stretch gap-4 mb-8"
        >
          <div className="text-left">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-none text-foreground/80 mb-2">
              Le trail des crêtes
            </h1>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-gradient-amber leading-none">
              d'Entrange
            </h2>
          </div>
          <div className="flex items-center gap-2 pl-2">
            <div className="w-px self-stretch bg-primary/50" />
            <span
              className="font-display text-primary tracking-[0.25em] text-xs sm:text-sm [writing-mode:vertical-rl] rotate-180 uppercase"
            >
              {event.edition}ème édition
            </span>
          </div>
        </motion.div>

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
