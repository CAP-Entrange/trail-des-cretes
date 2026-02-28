import RaceCard from "./RaceCard";

const races = [
  {
    distance: "13 km",
    title: "La Patrouille de Liaison",
    subtitle: "L'agilité du guetteur",
    elevation: "350m D+",
    slogan: "Vigilance et rapidité.",
    description:
      "Un format nerveux qui simule les déplacements rapides des estafettes entre les blocs de combat. Le tracé alterne relances sèches et sentiers sinueux en lisière de forêt. Idéal pour ceux qui veulent tester leur vitesse sur un terrain chargé d'histoire.",
    funFact:
      "Les soldats de la Ligne Maginot, surnommés les « Écrevisses du Rempart », vivaient à 30 mètres sous terre. Pour maintenir le lien avec la surface et les autres ouvrages, des patrouilles de liaison parcouraient quotidiennement ces chemins, peu importe la météo. Courir ce 13 km, c'est endosser le rôle de ces messagers de l'ombre qui assuraient la survie du secteur fortifié de Thionville.",
  },
  {
    distance: "21 km",
    title: "La Traversée des Blocs",
    subtitle: "L'endurance du béton",
    elevation: "600m D+",
    slogan: "Tenir bon, coûte que coûte.",
    description:
      "Une distance exigeante qui vous emmène sur les hauteurs stratégiques. Les montées sont abruptes, comme pour conquérir un observatoire d'artillerie. Le terrain est technique, mêlant racines et vestiges bétonnés, demandant une concentration constante et une force physique à toute épreuve.",
    funFact:
      "Le secteur d'Entrange abrite des réseaux de galeries impressionnants. Saviez-vous que pour construire ces géants de béton, il a fallu acheminer des milliers de tonnes de matériaux sur ces mêmes crêtes à l'aide de voies ferrées étroites (système Decauville) ? Les pentes que vous grimpez aujourd'hui étaient autrefois le théâtre d'un défi logistique colossal, où chaque mètre de dénivelé était une victoire sur la roche.",
  },
  {
    distance: "31 km",
    title: "Le Mur des Crêtes",
    subtitle: "L'ultime résistance",
    elevation: "850m D+",
    slogan: "On ne passe pas !",
    description:
      "L'épreuve reine. Un parcours sauvage qui repousse les frontières de l'effort. Vous traverserez l'intégralité de la ligne de défense, là où la nature a repris ses droits sur les fortifications. Une immersion totale entre les blocs de l'Immerhof et les crêtes frontalières, une épopée où le mental prend le relais sur les jambes.",
    funFact:
      "« On ne passe pas ! » était la devise des troupes de forteresse. Les galeries de l'ouvrage d'Entrange étaient conçues pour être totalement autonomes pendant 3 mois (usine électrique, hôpital, cuisines). En courant ce 31 km, vous traversez un « vaisseau de terre » immobile. On raconte que lors des nuits calmes, le vent dans les arbres des crêtes imite le murmure des ventilations de l'époque, rappelant que sous vos pieds, l'histoire respire encore.",
  },
];

const RacesSection = () => {
  return (
    <section id="courses" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl sm:text-6xl text-center text-gradient-amber mb-4">
          🏃 Les Missions du Jour
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Trois distances, trois histoires. Choisissez votre mission sur les chemins de patrouille de la Ligne Maginot.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {races.map((race, i) => (
            <RaceCard key={race.distance} {...race} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RacesSection;
