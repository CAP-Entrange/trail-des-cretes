import RaceCard from "./RaceCard";
import { races, event } from "@/data/content";

const RacesSection = () => {
  return (
    <section id="courses" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl text-center text-gradient-amber mb-4">
          🏃 Les Missions du Jour
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Une marche et trois courses. Choisissez votre mission sur les chemins de patrouille de la Ligne Maginot.
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
