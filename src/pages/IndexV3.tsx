import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { V3ThemeProvider, useV3Theme } from "@/components/v3/V3ThemeContext";
import V3Header from "@/components/v3/V3Header";
import HeroSplitV3 from "@/components/v3/HeroSplitV3";
import V3ThemeToggle from "@/components/v3/V3ThemeToggle";

// V1 (jour) sections
import AboutSection from "@/components/AboutSection";
import RacesSection from "@/components/RacesSection";
import RulesSection from "@/components/RulesSection";
import LogistiqueSection from "@/components/LogistiqueSection";
import SponsorsSection from "@/components/SponsorsSection";
import SocialsSection from "@/components/SocialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

// V2 (nuit) sections
import StarField from "@/components/v2/StarField";
import AboutSectionV2 from "@/components/v2/AboutSectionV2";
import RacesSectionV2 from "@/components/v2/RacesSectionV2";
import GearSectionV2 from "@/components/v2/GearSectionV2";
import LogistiqueSectionV2 from "@/components/v2/LogistiqueSectionV2";
import SponsorsSectionV2 from "@/components/v2/SponsorsSectionV2";
import CtaSectionV2 from "@/components/v2/CtaSectionV2";
import FooterV2 from "@/components/v2/FooterV2";

const DaySections = () => (
  <>
    <AboutSection />
    <RacesSection />
    <LogistiqueSection />
    <RulesSection />
    <SponsorsSection />
    <SocialsSection />
    <CtaSection />
    <Footer />
  </>
);

const NightSections = () => (
  <>
    <AboutSectionV2 />
    <RacesSectionV2 />
    <GearSectionV2 />
    <LogistiqueSectionV2 />
    <SponsorsSectionV2 />
    <CtaSectionV2 />
    <FooterV2 />
  </>
);

const V3Body = () => {
  const { theme } = useV3Theme();

  return (
    <motion.div
      animate={{ backgroundColor: theme === "night" ? "#080b14" : "#0d0d0d" }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative pb-20"
    >
      {theme === "night" && <StarField />}

      <V3Header />

      <HeroSplitV3 />

      <div id="after-hero" />

      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {theme === "day" ? <DaySections /> : <NightSections />}
        </motion.div>
      </AnimatePresence>

      <V3ThemeToggle />
    </motion.div>
  );
};

const IndexV3 = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <V3ThemeProvider>
      <V3Body />
    </V3ThemeProvider>
  );
};

export default IndexV3;
