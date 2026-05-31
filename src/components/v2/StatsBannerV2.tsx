import { motion } from "framer-motion";
import { Mountain, Calendar, Clock, Zap } from "lucide-react";
import { g } from "./theme";

const stats = [
  { icon: Mountain, label: "2 parcours",          sub: "12 km & 20 km"   },
  { icon: Calendar, label: "21 Novembre 2026",    sub: "Moselle"         },
  { icon: Clock,    label: "Départ dès 17h00",    sub: "Nuit tombée"     },
  { icon: Zap,      label: "Frontale obligatoire", sub: "Équipement nuit" },
];

const StatsBannerV2 = () => (
  <div style={{ backgroundColor: "#0d1220", borderTop: `1px solid ${g.a15}`, borderBottom: `1px solid ${g.a15}` }}>
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center gap-1 py-6 px-4 text-center"
          style={{ borderRight: i < stats.length - 1 ? `1px solid ${g.a10}` : "none" }}
        >
          <s.icon className="w-5 h-5 mb-1" style={{ color: g.primary }} />
          <span className="font-display text-lg tracking-wide" style={{ color: "white" }}>{s.label}</span>
          <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default StatsBannerV2;
