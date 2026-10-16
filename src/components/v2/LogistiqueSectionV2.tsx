import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { logistique, restaurationV2, sectionsV2, mapV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

type Props = {
  comboNote?: string;
  comboBanner?: ReactNode;
};

const LogistiqueSectionV2 = ({ comboNote, comboBanner }: Props) => {
  const s = sectionsV2.logistique;
  const { pack, consigne, menu } = restaurationV2;
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
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

        {/* Cards logistique */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {logistique.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6"
              style={{ border: `1px solid ${g.a20}`, backgroundColor: "#0d1220" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm shrink-0"
                style={{ backgroundColor: g.a10 }}
              >
                <item.icon className="w-6 h-6" style={{ color: g.light }} />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1" style={{ color: "white" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 overflow-hidden"
          style={{ border: `1px solid ${g.a20}`, backgroundColor: "#0d1220" }}
        >
          <iframe
            title={mapV2.title}
            loading="lazy"
            className="w-full h-72 sm:h-96 block"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapV2.lon - mapV2.zoomDelta * 2},${mapV2.lat - mapV2.zoomDelta},${mapV2.lon + mapV2.zoomDelta * 2},${mapV2.lat + mapV2.zoomDelta}&layer=mapnik&marker=${mapV2.lat},${mapV2.lon}`}
          />
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
            <span style={{ color: "rgba(255,255,255,0.6)" }}>{mapV2.title}</span>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapV2.lat},${mapV2.lon}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: g.light }}
            >
              Itinéraire →
            </a>
          </div>
        </motion.div>

        {/* Restauration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10"
          style={{ border: `1px solid ${g.a20}`, backgroundColor: "#0d1220" }}
        >
          <div className="mb-6">
            <h3 className="font-display text-2xl sm:text-3xl mb-1" style={{ color: "white" }}>
              {s.restaurationTitle}
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{s.restaurationSubtitle}</p>
          </div>

          {/* Pack */}
          <div
            className="flex items-center gap-4 p-4 rounded-sm mb-6"
            style={{ backgroundColor: g.a10, border: `1px solid ${g.a30}` }}
          >
            <pack.icon className="w-6 h-6 shrink-0" style={{ color: g.light }} />
            <div className="flex-1">
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                {pack.label}{comboNote ? " *" : ""}
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {pack.description}
              </p>
            </div>
            <span className="font-display text-xl" style={{ color: g.light }}>
              {pack.price}
            </span>
          </div>

          {/* Menu */}
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            {s.menuLabel}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {menu.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 p-3 rounded-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <item.icon className="w-5 h-5" style={{ color: g.primary }} />
                <span className="text-xs text-center" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Consigne */}
          <div
            className="mt-6 pt-4 flex items-center gap-3"
            style={{ borderTop: `1px solid ${g.a20}` }}
          >
            <consigne.icon className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.4)" }} />
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {consigne.text}{" "}
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{consigne.price}</span> — {consigne.note}.
            </p>
          </div>

          {comboNote && (
            <div
              className="mt-4 pt-3"
              style={{ borderTop: `1px solid ${g.a15}` }}
            >
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.35)" }}>
                {comboNote}
              </p>
            </div>
          )}
        </motion.div>

        {comboBanner && <div className="mt-6">{comboBanner}</div>}
      </div>
    </section>
  );
};

export default LogistiqueSectionV2;
