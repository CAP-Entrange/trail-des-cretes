import RaceCardV2 from "./RaceCardV2";
import { racesV2, eventV2, sectionsV2 } from "@/data/content-v2";
import { gradientText } from "./theme";

const RacesSectionV2 = () => {
  const s = sectionsV2.races;
  return (
    <section id="courses" className="py-20 sm:py-28 px-4" style={{ backgroundColor: "#080b14" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl text-center mb-4" style={gradientText}>
          {s.title}
        </h2>
        <p className="text-center mb-14 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
          {s.subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {racesV2.map((race, i) => (
            <RaceCardV2
              key={race.title}
              {...race}
              registrationUrl={eventV2.registrationUrl}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacesSectionV2;
