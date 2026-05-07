import { motion } from "framer-motion";
import ClubModal from "@/components/ClubModal";
import { about, sections } from "@/data/content";

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
          <h2 className="font-display text-4xl sm:text-6xl mb-8 text-gradient-amber">
            {sections.about.title}
          </h2>
          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80">
            <p>
              <ClubModal>
                <button className="font-bold text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80 transition-colors cursor-pointer">
                  CAP Entrange
                </button>
              </ClubModal>{" "}
              {about.paragraph1After}
            </p>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="italic text-muted-foreground pt-4">{about.closing}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
