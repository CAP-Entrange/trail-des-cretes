import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroPanelDay from "./HeroPanelDay";
import HeroPanelNight from "./HeroPanelNight";
import { useV3Theme } from "./V3ThemeContext";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
  });
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
};

const scrollAfterHero = () => {
  setTimeout(() => {
    document.getElementById("after-hero")?.scrollIntoView({ behavior: "smooth" });
  }, 50);
};

const HeroSplitV3 = () => {
  const { theme, setTheme } = useV3Theme();
  const isDesktop = useIsDesktop();
  const [hovered, setHovered] = useState<"day" | "night" | null>(null);

  // Mobile / tablette : on n'affiche que l'édition active.
  // La bascule se fait via le toggle Jour/Nuit du footer.
  if (!isDesktop) {
    return (
      <section
        id="hero-v3"
        className="relative w-full min-h-[100svh] overflow-hidden"
        aria-label="Édition active"
      >
        <AnimatePresence mode="wait">
          <motion.button
            key={theme}
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={scrollAfterHero}
            className="relative w-full h-[100svh] overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === "day" ? "Édition Jour — Trail des Crêtes" : "Édition Nuit — Nuit des Crêtes"}
          >
            {theme === "day" ? (
              <HeroPanelDay expanded />
            ) : (
              <HeroPanelNight expanded />
            )}
          </motion.button>
        </AnimatePresence>
      </section>
    );
  }

  // Desktop : split horizontal avec hover-expand + clic pour verrouiller le thème.
  const selectDesktop = (side: "day" | "night") => {
    setTheme(side);
    scrollAfterHero();
  };

  const dayGrow = hovered === "day" ? 1.4 : hovered === "night" ? 0.6 : 1;
  const nightGrow = hovered === "night" ? 1.4 : hovered === "day" ? 0.6 : 1;

  return (
    <section
      id="hero-v3"
      className="relative w-full min-h-[100svh] overflow-hidden"
      aria-label="Choisissez votre édition"
    >
      <div className="flex flex-row w-full h-[100svh]">
        <motion.button
          type="button"
          animate={{ flexGrow: dayGrow }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          onMouseEnter={() => setHovered("day")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => selectDesktop("day")}
          className="relative flex-1 basis-0 min-h-0 overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Édition Jour — Trail des Crêtes"
        >
          <HeroPanelDay expanded={hovered !== "night"} />
        </motion.button>

        <motion.button
          type="button"
          animate={{ flexGrow: nightGrow }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          onMouseEnter={() => setHovered("night")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => selectDesktop("night")}
          className="relative flex-1 basis-0 min-h-0 overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Édition Nuit — Nuit des Crêtes"
        >
          <HeroPanelNight expanded={hovered !== "day"} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSplitV3;
