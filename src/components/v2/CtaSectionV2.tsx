import { motion } from "framer-motion";
import { ctaV2, eventV2 } from "@/data/content-v2";
import { g } from "./theme";

const CtaSectionV2 = () => (
  <section id="inscription" className="py-28 px-4 relative overflow-hidden">
    {/* Ambient green glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${g.a10}, transparent)` }}
    />

    <div className="relative z-10 max-w-2xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl sm:text-6xl md:text-7xl mb-6"
        style={{ color: "white" }}
      >
        {ctaV2.heading}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-lg mb-10 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {ctaV2.subtext}
      </motion.p>

      <motion.a
        href={eventV2.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="inline-block font-display text-2xl px-12 py-5 tracking-wider transition-all hover:brightness-110"
        style={{
          backgroundColor: g.primary,
          color: "white",
          boxShadow: `0 0 40px ${g.a25}`,
        }}
        
      >
        S'inscrire à la Nuit des Crêtes
      </motion.a>
    </div>
  </section>
);

export default CtaSectionV2;
