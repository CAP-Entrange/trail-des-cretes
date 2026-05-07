import { motion } from "framer-motion";
import { event, cta } from "@/data/content";

const CtaSection = () => {
  return (
    <section id="inscription" className="py-20 sm:py-28 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-6xl text-gradient-amber mb-4"
        >
          {cta.heading}
        </motion.h2>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
          {cta.subtext}
        </p>
        <p className="text-muted-foreground/60 text-sm mb-10">
          Déjà <span className="text-primary font-semibold">{event.lastYearParticipants} coureurs</span> l'année dernière — et vous ?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={event.registrationUrl}
            target="_blank"
            className="inline-block bg-primary text-primary-foreground font-display text-2xl px-10 py-5 tracking-wider hover:brightness-110 transition-all"
          >
            S'inscrire maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
