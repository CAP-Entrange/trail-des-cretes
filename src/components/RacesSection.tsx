import RaceCard from "./RaceCard";
import { races, event, sections } from "@/data/content";

const RacesSection = () => {
  const s = sections.races;
  return (
    <section id="courses" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl text-center text-gradient-amber mb-4">
          {s.title}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          {s.subtitle}
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {races.map((race, i) => (
            <RaceCard key={race.title} {...race} registrationUrl={event.registrationUrl} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacesSection;
