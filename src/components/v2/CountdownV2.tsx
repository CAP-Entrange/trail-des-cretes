import { useState, useEffect } from "react";
import { eventV2 } from "@/data/content-v2";
import { g } from "./theme";

const EVENT_DATE = new Date(eventV2.isoDate);

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CountdownV2 = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Jours",  value: timeLeft.days    },
    { label: "Heures", value: timeLeft.hours   },
    { label: "Min",    value: timeLeft.minutes },
    { label: "Sec",    value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-10">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-6xl animate-pulse-glow" style={{ color: g.light }}>
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownV2;
