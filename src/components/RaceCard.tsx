import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface RaceCardProps {
  distance: string;
  grade: any;
  title: string;
  subtitle: string;
  elevation: string;
  slogan: string;
  description: string;
  funFact: string;
  index: number;
}

const RaceCard = ({
  distance,
  grade,
  title,
  subtitle,
  elevation,
  slogan,
  description,
  funFact,
  index,
}: RaceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // const url = "#inscription"
  const url = "https://fr.milesrepublic.com/event/trail-des-cretes-dentrange-7158"

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      className="bg-card border border-border hover:border-glow transition-colors duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-border flex justify-between items-center">
        <div>
          <span className="font-display text-5xl sm:text-6xl text-gradient-amber leading-none">
            {distance}
          </span>
          <p className="text-muted-foreground text-sm mt-1">{elevation}</p>
        </div>

        {/* Affichage du Grade à droite */}
        { grade && (
          <div className="h-20 w-20 sm:h-26 sm:w-26 flex items-center justify-center">
            <img 
              src={ grade} 
              alt="Difficulté" 
              className="h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-1">
          {title}
        </h3>
        <p className="text-primary italic text-sm mb-3">« {subtitle} »</p>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">{slogan}</p>
        <div data-orientation="horizontal" role="none" className="shrink-0 h-[1px] w-full mb-4 bg-border"></div>
        <p className="text-foreground/80 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Le saviez-vous */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary text-sm font-medium mt-auto mb-2 hover:underline"
        >
          <span>💡 Le saviez-vous ?</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-concrete rounded-sm p-4 text-sm text-foreground/70 leading-relaxed"
          >
            {funFact}
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 sm:p-8 border-t border-border">
        <a
          href={url}
          className="block text-center bg-primary text-primary-foreground font-display text-lg px-6 py-3 tracking-wider hover:brightness-110 transition-all"
        >
          S'engager — {distance}
        </a>
      </div>
    </motion.div>
  );
};

export default RaceCard;
