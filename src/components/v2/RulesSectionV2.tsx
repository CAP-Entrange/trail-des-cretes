import { motion } from "framer-motion";
import { rulesV2, sectionsV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

const RulesSectionV2 = () => {
  const s = sectionsV2.rules;
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
        <p className="text-center mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {s.subtitle}
        </p>
        <p className="text-center text-sm italic mb-14 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
          {s.description}
        </p>

        <div className="space-y-4">
          {rulesV2.map((rule, i) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 p-6"
              style={{ border: `1px solid ${g.a20}`, backgroundColor: "#0d1220" }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-sm"
                style={{ backgroundColor: g.a10 }}
              >
                <rule.icon className="w-6 h-6" style={{ color: g.light }} />
              </div>
              <div>
                <h3 className="font-display text-xl" style={{ color: "white" }}>
                  {rule.title}
                  <span className="text-sm ml-2 font-body" style={{ color: "rgba(255,255,255,0.4)" }}>
                    ({rule.subtitle})
                  </span>
                </h3>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {rule.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSectionV2;
