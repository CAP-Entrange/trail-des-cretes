import { motion } from "framer-motion";
import { logistique, restauration, sections } from "@/data/content";

const LogistiqueSection = () => {
  const { pack, consigne, menu } = restauration;
  const s = sections.logistique;

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <h2 className="font-display text-4xl sm:text-6xl text-center text-gradient-amber mb-2">
          {s.title}
        </h2>
        <p className="text-center text-muted-foreground mb-14">
          {s.subtitle}
        </p>

        {/* Logistics cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {logistique.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card border border-border p-6 hover:border-glow transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Restauration block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border"
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-border">
            <h3 className="font-display text-3xl text-foreground">{s.restaurationTitle}</h3>
            <p className="text-muted-foreground text-sm mt-1">{s.restaurationSubtitle}</p>
          </div>

          {/* Pack highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-6 mt-6 p-4 bg-primary/10 border border-primary/30 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/20 text-primary">
              <pack.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg text-primary tracking-wide">{pack.label}</p>
              <p className="text-foreground/70 text-sm mt-0.5">{pack.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-display text-3xl text-primary">{pack.price}</span>
            </div>
          </motion.div>

          {/* Menu items */}
          <div className="px-6 pt-5 pb-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-display">{s.menuLabel}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {menu.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex flex-col items-center gap-2 p-4 border border-border hover:border-glow transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground/80 text-center leading-snug">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Consigne footer */}
          <div className="px-6 py-4 mt-3 border-t border-border flex items-center gap-3">
            <consigne.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              {consigne.text} <span className="text-foreground/80 font-medium">{consigne.price}</span> — {consigne.note}.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogistiqueSection;
