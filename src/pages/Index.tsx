import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RacesSection from "@/components/RacesSection";
import RulesSection from "@/components/RulesSection";
import SponsorsSection from "@/components/SponsorsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <RacesSection />
      <RulesSection />
      <SponsorsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
