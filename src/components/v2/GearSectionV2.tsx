import { motion } from "framer-motion";
import { gearV2, sectionsV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

const GearSectionV2 = () => {
  const s = sectionsV2.gear;
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl text-center mb-3"
          style={gradientText}
        >
          {s.title}
        </motion.h2>
        <p className="text-center mb-14" style={{ color: "rgba(255,255,255,0.4)" }}>
          {s.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gearV2.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-sm"
              style={{
                backgroundColor: item.required ? g.a08 : "rgba(255,255,255,0.03)",
                border: `1px solid ${item.required ? g.a35 : "rgba(255,255,255,0.07)"}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: item.required ? g.a15 : "rgba(255,255,255,0.05)" }}
              >
                <item.icon
                  className="w-5 h-5"
                  style={{ color: item.required ? g.light : "rgba(255,255,255,0.3)" }}
                />
              </div>
              <p
                className="text-sm flex-1"
                style={{ color: item.required ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)" }}
              >
                {item.label}
              </p>
              <span
                className="text-xs font-display tracking-wider px-2 py-0.5 rounded-full shrink-0"
                style={{
                  backgroundColor: item.required ? g.a25 : "rgba(255,255,255,0.06)",
                  color: item.required ? g.light : "rgba(255,255,255,0.25)",
                }}
              >
                {item.required ? "Oblig." : "Recomm."}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearSectionV2;
