import { motion } from "framer-motion";

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
          Rejoignez les Sentinelles
        </motion.h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Enfilez vos chaussures de trail et venez arpenter les chemins de patrouille. L'histoire vous attend sur les crêtes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://fr.milesrepublic.com/event/trail-des-cretes-dentrange-7158"
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
