import { motion } from "framer-motion";
import ClubModal from "@/components/ClubModal";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl mb-8 text-gradient-amber">
            Présentation
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80">
            <p>
              <ClubModal>
                <button className="font-bold text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80 transition-colors cursor-pointer">
                  CAP Entrange
                </button>
              </ClubModal>{" "}
              vous propose de courir dans les pas des défenseurs de la Ligne Maginot. Bien plus qu'une simple compétition sportive, le Trail des Crêtes est une immersion au cœur d'un patrimoine historique exceptionnel.
            </p>
            <p>
              Imaginez-vous foulant les sentiers de patrouille autrefois empruntés par les "Écrevisses du Rempart". Entre forêts denses et vestiges de béton, chaque foulée vous rapproche de l'histoire. Vous franchirez les crêtes stratégiques qui surplombent les ouvrages fortifiés, là où le destin de la frontière s'est autrefois joué.
            </p>
            <p>
              Venez pour le défi physique, restez pour l'émotion. Que vous soyez un traileur aguerri ou un passionné d'histoire, nos parcours vous offrent une expérience unique où la nature a repris ses droits sur les fortifications, créant un décor sauvage et mystérieux. 
            </p>
            <p className="italic text-muted-foreground pt-4">
              Rejoignez-nous pour une aventure où le sport rencontre la mémoire. Relevez le défi, honorez le passé.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
