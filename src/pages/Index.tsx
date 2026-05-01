import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RacesSection from "@/components/RacesSection";
import RulesSection from "@/components/RulesSection";
import LogistiqueSection from "@/components/LogistiqueSection";
import SponsorsSection from "@/components/SponsorsSection";
import SocialsSection from "@/components/SocialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <RacesSection />
      <LogistiqueSection />
      <RulesSection />
      <SponsorsSection />
      <SocialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
