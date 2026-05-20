import { motion } from "framer-motion";
import clubLogo from "@/assets/logo-club.png";
import { club } from "@/data/content";
import { g } from "@/components/v2/theme";

const LogoMedallion = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 18 }}
    className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
  >
    {/* Glow halo */}
    <div
      className="absolute inset-0 rounded-full blur-2xl animate-pulse-glow"
      style={{
        background: `radial-gradient(circle, ${g.a30}, transparent 70%)`,
      }}
      aria-hidden
    />

    <div
      className="relative rounded-full shadow-2xl"
      style={{
        width: "clamp(140px, 20vw, 220px)",
        height: "clamp(140px, 20vw, 220px)",
        backgroundColor: "hsl(0 0% 5%)",
        border: "3px solid rgba(255,255,255,0.18)",
      }}
    >
      <img
        src={clubLogo}
        alt={`Logo ${club.name}`}
        className="relative w-full h-full object-contain p-3"
      />
    </div>
  </motion.div>
);

export default LogoMedallion;
