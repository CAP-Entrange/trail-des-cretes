import HeroSection from "@/components/HeroSection";
import RacesSection from "@/components/RacesSection";
import RulesSection from "@/components/RulesSection";
import SponsorsSection from "@/components/SponsorsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RacesSection />
      <RulesSection />
      <SponsorsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
