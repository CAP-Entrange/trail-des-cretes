import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Clock, Tag } from "lucide-react";
import MountainBadge from "./MountainBadge";

interface RaceCardProps {
  distance: string;
  color: string | null;
  ribbon?: string;
  title: string;
  subtitle: string;
  elevation: string;
  startTime: string;
  price: string;
  slogan: string;
  description: string;
  funFact: string;
  registrationUrl: string;
  index: number;
}

const RaceCard = ({
  distance,
  color,
  ribbon,
  title,
  subtitle,
  elevation,
  startTime,
  price,
  slogan,
  description,
  funFact,
  registrationUrl,
  index,
}: RaceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      className="relative overflow-hidden bg-card border border-border hover:border-glow transition-colors duration-300 flex flex-col"
    >
      {ribbon && (
        <div
          className="absolute top-5 -right-8 w-36 text-black text-[18px] font-display tracking-widest uppercase text-center py-0.5 rotate-45 shadow-md pointer-events-none"
          style={{ backgroundColor: "#f9dc07" }}
        >
          {ribbon}
        </div>
      )}
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-border flex justify-between items-center">
        <div>
          <span className="font-display text-5xl sm:text-6xl text-gradient-amber leading-none">
            {distance}
          </span>
          <p className="text-muted-foreground text-sm mt-1">{elevation}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {startTime}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-primary">
              <Tag className="w-3.5 h-3.5" />
              {price}
            </span>
          </div>
        </div>

        {/* Badge montagne coloré */}
        {color && (
          <div className="flex items-center justify-center">
            <MountainBadge color={color} size={60} />
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
          href={registrationUrl} target="_blank"
          className="block text-center bg-primary text-primary-foreground font-display text-lg px-6 py-3 tracking-wider hover:brightness-110 transition-all"
        >
          S'engager — {distance}
        </a>
      </div>
    </motion.div>
  );
};

export default RaceCard;
