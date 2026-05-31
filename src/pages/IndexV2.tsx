import { useEffect }       from "react";
import HeroSectionV2      from "@/components/v2/HeroSectionV2";
import StarField           from "@/components/v2/StarField";
import StatsBannerV2      from "@/components/v2/StatsBannerV2";
import AboutSectionV2     from "@/components/v2/AboutSectionV2";
import RacesSectionV2     from "@/components/v2/RacesSectionV2";
import GearSectionV2      from "@/components/v2/GearSectionV2";
import LogistiqueSectionV2 from "@/components/v2/LogistiqueSectionV2";
import RulesSectionV2     from "@/components/v2/RulesSectionV2";
import SponsorsSectionV2  from "@/components/v2/SponsorsSectionV2";
import CtaSectionV2       from "@/components/v2/CtaSectionV2";
import FooterV2           from "@/components/v2/FooterV2";

/*
  ── MIGRATION v2 → v1 ──────────────────────────────────────────────────────
  Pour remplacer la v1 par cette page comme page principale :

  Dans App.tsx :
    1. Importer IndexV2 au lieu de Index (ou en plus)
    2. Changer <Route path="/" element={<Index />} />
           par  <Route path="/" element={<IndexV2 />} />
    3. Supprimer ou rediriger la route /v2

  Optionnel : archiver src/components/ (sections jour) et src/pages/Index.tsx
  ───────────────────────────────────────────────────────────────────────────
*/

const IndexV2 = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
  <div style={{ backgroundColor: "#080b14" }}>
    <StarField />
    <HeroSectionV2 />
    <AboutSectionV2 />
    <RacesSectionV2 />
    <GearSectionV2 />
    <LogistiqueSectionV2 />
    <RulesSectionV2 />
    <SponsorsSectionV2 />
    <CtaSectionV2 />
    <FooterV2 />
  </div>
  );
};

export default IndexV2;
