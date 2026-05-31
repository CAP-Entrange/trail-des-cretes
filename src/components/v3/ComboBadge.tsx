import { motion } from "framer-motion";
import { comboOffer } from "@/data/content-v3";
import { g } from "@/components/v2/theme";

const Icon = comboOffer.icon;

const ComboBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 18 }}
    className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
  >
    {/* Pulse glow halo */}
    <div
      className="absolute inset-0 rounded-full blur-2xl animate-pulse-glow pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${g.a40}, transparent 70%)`,
      }}
      aria-hidden
    />

    <a
      href={comboOffer.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block group"
    >
      <div
        className="relative rounded-full px-5 py-4 sm:px-7 sm:py-5 flex flex-col items-center text-center shadow-2xl transition-transform duration-300 group-hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, hsl(48, 96%, 53%) 0%, hsl(93, 72%, 44%) 50%, hsl(220, 50%, 15%) 100%)",
          border: "2px solid rgba(255,255,255,0.25)",
          minWidth: "200px",
          maxWidth: "280px",
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <Icon className="w-4 h-4 text-white" />
          <span className="font-display text-[0.65rem] sm:text-xs tracking-[0.25em] text-white uppercase">
            {comboOffer.badge}
          </span>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="font-display text-lg sm:text-xl text-white leading-tight">
          {comboOffer.subtitle}
        </div>
        <div className="font-display text-[0.7rem] sm:text-xs tracking-[0.15em] text-white/90 uppercase mt-1">
          {comboOffer.savings}
        </div>
        <div className="mt-2 text-[0.65rem] sm:text-xs text-white/85 font-body italic">
          {comboOffer.cta} →
        </div>
      </div>
    </a>
  </motion.div>
);

export default ComboBadge;
