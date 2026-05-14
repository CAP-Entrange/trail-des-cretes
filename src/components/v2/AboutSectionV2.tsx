import { motion } from "framer-motion";
import { sectionsV2, aboutV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

const AboutSectionV2 = () => (
  <section className="py-20 sm:py-28 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl sm:text-6xl mb-10"
        style={gradientText}
      >
        {sectionsV2.about.title}
      </motion.h2>

      <div className="space-y-6">
        {aboutV2.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {p}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg font-medium italic"
          style={{ color: g.light }}
        >
          {aboutV2.closing}
        </motion.p>
      </div>
    </div>
  </section>
);

export default AboutSectionV2;
