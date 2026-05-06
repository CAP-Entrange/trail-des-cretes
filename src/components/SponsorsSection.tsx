import { motion } from "framer-motion";
import { sponsors, event } from "@/data/content";

const SponsorsSection = () => {

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
              className="group relative h-24 w-40 sm:h-28 sm:w-52 flex items-center justify-center border border-border/40 rounded-xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
              whileHover="hover" // Déclenche l'état "hover" pour les enfants
            >
              <motion.img
                src={sponsor.imgPath}
                alt={sponsor.name}
                variants={{
                  initial: { padding: "1rem", opacity: 0.7 }, // Correspond à p-4
                  hover: { padding: "0rem", opacity: 1 }      // Transition vers p-0
                }}
                initial="initial"
                animate="initial"
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full w-full object-contain filter"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none" />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-12">
          Intéressé par un partenariat ?{" "}
          <a href={`mailto:${event.contactEmail}`} className="text-primary font-medium hover:underline transition-all">
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;