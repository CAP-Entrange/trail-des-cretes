import clubLogo from "@/assets/logo-club.png";
import { club } from "@/data/content";
import { comboOffer } from "@/data/content-v3";
import ClubModal from "@/components/ClubModal";
import { useV3Theme } from "./V3ThemeContext";
import { g } from "@/components/v2/theme";

const Icon = comboOffer.icon;

const V3Header = () => {
  const { theme } = useV3Theme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor:
          theme === "night" ? "rgba(8, 11, 20, 0.65)" : "rgba(13, 13, 13, 0.55)",
        borderBottom: `1px solid ${theme === "night" ? g.a20 : "rgba(255,255,255,0.06)"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-3">
        {/* Logo — ouvre la modale CAP Entrange */}
        <ClubModal>
          <button
            type="button"
            aria-label={`En savoir plus sur ${club.name}`}
            className="rounded-full bg-background/80 shadow-lg p-1.5 shrink-0 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            style={{
              width: "clamp(56px, 8vw, 80px)",
              height: "clamp(56px, 8vw, 80px)",
              border: `1px solid ${theme === "night" ? g.a30 : "rgba(255,255,255,0.12)"}`,
            }}
          >
            <img
              src={clubLogo}
              alt={`Logo ${club.name}`}
              className="w-full h-full object-contain pointer-events-none"
            />
          </button>
        </ClubModal>

        {/* Combo CTA */}
        <div
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(48, 96%, 53%) 0%, hsl(93, 72%, 44%) 50%, hsl(220, 50%, 18%) 100%)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <Icon className="w-4 h-4 shrink-0" />
          <div className="text-left leading-tight">
            <div className="font-display text-[0.55rem] sm:text-[0.7rem] uppercase tracking-[0.2em] opacity-95">
              {comboOffer.badge}
            </div>
            <div className="font-display text-xs sm:text-sm">
              {comboOffer.subtitle}
              <span className="hidden md:inline opacity-90"> · {comboOffer.savings}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default V3Header;
