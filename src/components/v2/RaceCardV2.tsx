import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Clock, Tag } from "lucide-react";
import MountainBadge from "@/components/MountainBadge";

interface RaceCardV2Props {
  distance: string;
  color: string;
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

const RaceCardV2 = ({
  distance, color, title, subtitle, elevation, startTime, price, slogan,
  description, funFact, registrationUrl, index,
}: RaceCardV2Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      className="relative overflow-hidden flex flex-col transition-all duration-300"
      style={{
        backgroundColor: "#0d1220",
        border: `1px solid ${color}30`,
        boxShadow: `0 0 40px ${color}0d`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px ${color}25`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}60`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${color}0d`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
      }}
    >
      {/* Colored top bar */}
      <div style={{ height: "3px", backgroundColor: color }} />

      {/* Header */}
      <div className="p-6 sm:p-8 flex justify-between items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div>
          <span
            className="font-display text-5xl sm:text-6xl leading-none"
            style={{ color }}
          >
            {distance}
          </span>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{elevation}</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              <Clock className="w-3.5 h-3.5" />
              {startTime}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color }}>
              <Tag className="w-3.5 h-3.5" />
              {price}
            </span>
          </div>
        </div>

        {/* Badge montagne avec glow */}
        <div style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}>
          <MountainBadge color={color} size={60} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="font-display text-2xl sm:text-3xl mb-1" style={{ color: "white" }}>{title}</h3>
        <p className="italic text-sm mb-3" style={{ color }}>« {subtitle} »</p>
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.25)" }}>{slogan}</p>
        <div className="h-px w-full mb-4" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
          {description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium mt-auto mb-2 hover:underline"
          style={{ color }}
        >
          <span>✦ Le saviez-vous ?</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-sm p-4 text-sm leading-relaxed"
            style={{
              backgroundColor: `${color}08`,
              borderLeft: `2px solid ${color}40`,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {funFact}
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 sm:p-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-display text-lg px-6 py-3 tracking-wider transition-all hover:brightness-110"
          style={{ backgroundColor: color, color: "white" }}
        >
          S'engager — {distance}
        </a>
      </div>
    </motion.div>
  );
};

export default RaceCardV2;
