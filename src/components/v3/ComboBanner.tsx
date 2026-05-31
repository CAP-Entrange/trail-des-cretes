import { motion } from "framer-motion";
import { comboOffer } from "@/data/content-v3";

const Icon = comboOffer.icon;

const ComboBanner = () => (
  <motion.div
    id="combo-offer"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
    className="relative overflow-hidden rounded-sm"
    style={{
      background:
        "linear-gradient(135deg, hsl(38,85%,16%) 0%, hsl(95,55%,14%) 45%, hsl(220,45%,12%) 100%)",
      border: "1px solid rgba(252,211,77,0.2)",
    }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(252,211,77,0.07), transparent 70%)",
      }}
      aria-hidden
    />

    <div className="relative px-6 py-8 sm:py-10 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border border-amber-400/30 bg-amber-400/10 text-amber-300 text-[0.6rem] uppercase tracking-[0.25em]">
        <Icon className="w-3 h-3" />
        {comboOffer.badge}
        <Icon className="w-3 h-3" />
      </div>

      <p className="font-display text-2xl sm:text-3xl text-white leading-none mb-1">
        {comboOffer.title}
      </p>
      <p
        className="font-display text-lg sm:text-xl mb-4"
        style={{ color: "hsl(48,96%,65%)" }}
      >
        {comboOffer.subtitle}
        <span className="text-white/40 text-sm font-body ml-2 tracking-normal normal-case">
          · {comboOffer.savings}
        </span>
      </p>

      <p className="text-white/60 text-xs sm:text-sm mb-6 max-w-sm mx-auto leading-relaxed font-body">
        {comboOffer.description}
      </p>

      <a
        href="#inscription"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{
          background:
            "linear-gradient(135deg, hsl(48,96%,53%) 0%, hsl(93,72%,44%) 100%)",
          color: "#0a0a0a",
        }}
      >
        {comboOffer.cta} →
      </a>
    </div>
  </motion.div>
);

export default ComboBanner;
