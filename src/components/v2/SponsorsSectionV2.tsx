import { motion } from "framer-motion";
import { sponsors, eventV2, sectionsV2 } from "@/data/content-v2";
import { g, gradientText } from "./theme";

const SponsorsSectionV2 = () => {
  const s = sectionsV2.sponsors;
  return (
    <section className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#0a0e1a" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl mb-4" style={gradientText}>
          {s.title}
        </h2>
        <p className="mb-14" style={{ color: "rgba(255,255,255,0.4)" }}>{s.subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: sponsor.bg || "#0d1220",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              className="group relative h-20 w-36 sm:h-24 sm:w-44 flex items-center justify-center rounded-sm overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover="hover"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = g.a50;
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${g.a15}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <motion.img
                src={sponsor.imgPath}
                alt={sponsor.name}
                variants={{
                  initial: { padding: "0.75rem", opacity: 0.65 },
                  hover:   { padding: "0",       opacity: 1    },
                }}
                initial="initial"
                animate="initial"
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full w-full object-contain"
              />
            </motion.a>
          ))}
        </div>

        <p className="text-sm mt-12" style={{ color: "rgba(255,255,255,0.3)" }}>
          {s.partnershipLabel}{" "}
          <a href={`mailto:${eventV2.contactEmail}`} className="hover:underline transition-all" style={{ color: g.light }}>
            {s.partnershipCta}
          </a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSectionV2;
