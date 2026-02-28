import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface RaceCardProps {
  distance: string;
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
  title,
  subtitle,
  elevation,
  slogan,
  description,
  funFact,
  index,
}: RaceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      className="bg-card border border-border hover:border-glow transition-colors duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-border">
        <span className="font-display text-5xl sm:text-6xl text-gradient-amber leading-none">
          {distance}
        </span>
        <p className="text-muted-foreground text-sm mt-1">{elevation}</p>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-1">
          {title}
        </h3>
        <p className="text-primary italic text-sm mb-3">« {subtitle} »</p>
        <p className="text-muted-foreground text-sm italic mb-4">"{slogan}"</p>
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
          href="#inscription"
          className="block text-center bg-primary text-primary-foreground font-display text-lg px-6 py-3 tracking-wider hover:brightness-110 transition-all"
        >
          S'engager — {distance}
        </a>
      </div>
    </motion.div>
  );
};

export default RaceCard;
