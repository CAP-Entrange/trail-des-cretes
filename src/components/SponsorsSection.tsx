import { motion } from "framer-motion";

import ccceLogo from "@/assets/sponsors/ccce.png";
import entrangeLogo from "@/assets/sponsors/entrange.jpg"
import creditMutuelLogo from "@/assets/sponsors/credit_mutuel.svg"

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "CCCE",
      imgPath: ccceLogo,
      url: "https://www.ccce.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Commune d'Entrange",
      imgPath: entrangeLogo,
      url: "https://www.entrange.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Commune d'Entrange",
      imgPath: creditMutuelLogo,
      url: "https://www.creditmutuel.fr/cmo/fr/caisses-et-distributeurs/ResultatsRechercheGeographique.aspx?inseeCode=57323",
      bg: "#FFFFFF"
    },
    // Ajoute tes autres sponsors ici
  ];

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-gradient-amber mb-4">
          Nos Alliés
        </h2>
        <p className="text-muted-foreground mb-14">
          Ils soutiennent l'aventure des Crêtes d'Entrange
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: sponsor.bg || 'transparent' }}
              viewport={{ once: true }}
              className="group relative h-24 w-40 sm:h-28 sm:w-52 flex items-center justify-center p-4 border border-border/40 bg-secondary/5 rounded-xl hover:border-primary/40 hover:bg-secondary/10 transition-all duration-300"
            >
              <img
                src={sponsor.imgPath}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain filter opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none" />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-12">
          Intéressé par un partenariat ?{" "}
          <a href="mailto:yves.moreau6@orange.fr" className="text-primary font-medium hover:underline transition-all">
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;