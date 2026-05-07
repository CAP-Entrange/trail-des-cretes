import { motion } from "framer-motion";
import { rules, sections } from "@/data/content";

const RulesSection = () => {
  const s = sections.rules;
  return (
    <section className="py-20 sm:py-28 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl text-center text-gradient-amber mb-2">
          {s.title}
        </h2>
        <p className="text-center text-muted-foreground mb-4">
          {s.subtitle}
        </p>
        <p className="text-center text-sm text-foreground/60 italic mb-14 max-w-xl mx-auto">
          {s.description}
        </p>

        <div className="space-y-6">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card border border-border p-6 hover:border-glow transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                <rule.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">
                  {rule.title}
                  <span className="text-muted-foreground text-sm ml-2 font-body">
                    ({rule.subtitle})
                  </span>
                </h3>
                <p className="text-foreground/70 text-sm mt-1 leading-relaxed">
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

export default RulesSection;
