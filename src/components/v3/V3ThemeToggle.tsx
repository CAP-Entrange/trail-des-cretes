import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useV3Theme } from "./V3ThemeContext";
import { g } from "@/components/v2/theme";

const V3ThemeToggle = () => {
  const { theme, setTheme } = useV3Theme();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor:
          theme === "night" ? "rgba(8, 11, 20, 0.85)" : "rgba(13, 13, 13, 0.75)",
        borderTop: `1px solid ${theme === "night" ? g.a20 : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
        <div
          className="relative inline-flex items-center rounded-full p-1 shadow-xl"
          style={{
            backgroundColor:
              theme === "night" ? "rgba(13, 18, 32, 0.7)" : "rgba(255, 255, 255, 0.1)",
            border: `1px solid ${theme === "night" ? g.a30 : "rgba(255,255,255,0.15)"}`,
          }}
        >
          {/* Active slider */}
          <motion.div
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            animate={{ left: theme === "day" ? 4 : "calc(50% + 0px)" }}
            className="absolute rounded-full"
            style={{
              top: 4,
              bottom: 4,
              width: "calc(50% - 4px)",
              background:
                theme === "day"
                  ? "linear-gradient(135deg, hsl(48, 96%, 60%), hsl(38, 92%, 50%))"
                  : `linear-gradient(135deg, ${g.primary}, hsl(220, 50%, 15%))`,
            }}
            aria-hidden
          />

          <button
            type="button"
            onClick={() => setTheme("day")}
            className="relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full font-display text-sm uppercase tracking-[0.15em] transition-colors"
            style={{
              color:
                theme === "day"
                  ? "#1a1a1a"
                  : "rgba(255,255,255,0.6)",
            }}
            aria-pressed={theme === "day"}
          >
            <Sun className="w-4 h-4" />
            Trail des Crêtes
          </button>
          <button
            type="button"
            onClick={() => setTheme("night")}
            className="relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full font-display text-sm uppercase tracking-[0.15em] transition-colors"
            style={{
              color:
                theme === "night"
                  ? "#ffffff"
                  : "rgba(255,255,255,0.55)",
            }}
            aria-pressed={theme === "night"}
          >
            <Moon className="w-4 h-4" />
            Nuit des Crêtes
          </button>
        </div>
      </div>
    </div>
  );
};

export default V3ThemeToggle;
