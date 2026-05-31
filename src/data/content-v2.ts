import { Info, UtensilsCrossed, Soup, Zap, Shield, Wind, GlassWater, Smartphone, Thermometer, Sparkles, TreePine, Heart, Users, Eye, AlertTriangle, Backpack } from "lucide-react";

export { club, sponsors, logistique } from "@/data/content";

export const eventV2 = {
  name: "Nuit des Crêtes d'Entrange",
  organizer: "CAP Entrange",
  edition: 1,
  tagline: "Quand la forêt s'éteint, les coureurs s'allument.",
  date: "21 Novembre 2026",
  isoDate: "2026-11-21T17:00:00+01:00",
  startTime: "17h00",
  location: "Entrange, Moselle",
  registrationUrl: "https://chronopro.net/produit/trail-nocturne-des-cretes-dentrange/",
  contactEmail: "yves.moreau6@orange.fr",
};

export const racesV2 = [
  {
    distance: "12 km",
    color: "hsl(93, 72%, 44%)",
    title: "Le Sentier des Crêtes",
    subtitle: "Vif, technique & nocturne",
    elevation: "380m D+",
    startTime: "17h30",
    price: "15€",
    slogan: "Vivacité sous les étoiles.",
    description:
      "Le sentier des crêtes comme vous ne l'avez jamais vu — dans le noir. Les 12 km du tracé habituel révèlent une dimension inédite à la lueur des frontales : les ombres dansent, les contrastes tranchent, et la forêt parle autrement. Montées franches, appuis techniques, quelques ouvrages de la Ligne Maginot qui surgissent de l'obscurité.",
    funFact:
      "La nuit, les animaux des crêtes sont bien plus actifs. Chevreuils, renards et rapaces nocturnes peuplent les sentiers que vous arpentez. Les ouvrages Maginot, silencieux le jour, semblent s'animer à la lueur des frontales — le béton prend des reliefs inattendus.",
  },
  {
    distance: "20 km",
    color: "#0c9cf5",
    title: "La Traversée des Forêts",
    subtitle: "Profondeur & obscurité",
    elevation: "550m D+",
    startTime: "17h15",
    price: "18€",
    slogan: "La nuit amplifie tout.",
    description:
      "20 km dans les zones boisées les plus préservées du plateau, entièrement de nuit. Le tracé traverse des clairières ouvertes spécialement pour la course et longe plusieurs ouvrages de la Ligne Maginot. Seule la frontale, le balisage et vos sensations vous guident. Une expérience de trail hors du commun.",
    funFact:
      "À 17h un 21 novembre, le soleil est déjà couché depuis plus d'une heure. Vous courrez dans une obscurité totale, rythmée par le faisceau de votre frontale. Les crêtes forment un couloir naturel entre ciel étoilé et forêt silencieuse — un terrain de course unique en Moselle.",
  },
];

export const gearV2 = [
  { icon: Zap,         label: "Lampe frontale",     required: true  },
  { icon: Shield,      label: "Couverture de survie",            required: true  },
  { icon: Sparkles,        label: "Bandes lumineuses / réfléchissants",   required: true  },
  { icon: GlassWater,  label: "Flasque ou gourde (min 500 ml)", required: false  },
  { icon: Smartphone,  label: "Téléphone chargé",               required: false },
  { icon: Thermometer, label: "Gants & bonnet",                  required: false },
];

export const rulesV2 = [
  {
    icon: TreePine,
    title: "Respect de la Nature",
    subtitle: "Environnement",
    text: "La forêt nocturne abrite une faune sensible aux perturbations. Restez sur le balisage, évitez les éclairages dirigés vers les sous-bois, et ramenez tous vos déchets. Aucun gobelet jetable — flasque ou gobelet réutilisable obligatoire.",
  },
  {
    icon: Heart,
    title: "Entraide Nocturne",
    subtitle: "Solidarité",
    text: "La nuit, un coureur en difficulté est plus vulnérable. Porter secours est une priorité absolue — le chrono passe après. Restez avec la personne et alertez le poste de contrôle le plus proche.",
  },
  {
    icon: Eye,
    title: "Visibilité Permanente",
    subtitle: "Frontale & réfléchissants",
    text: "La frontale doit rester allumée du départ à l'arrivée, même dans les sections où le balisage est bien visible. Bandes réfléchissantes obligatoires : vous devez être repérable à distance par les bénévoles et les autres coureurs.",
  },
  {
    icon: Backpack,
    title: "Autonomie & Équipement",
    subtitle: "Autonomie",
    text: "Soyez maîtres de votre autonomie. Aucun gobelet jetable ne sera fourni — munissez-vous de votre propre flasque ou gobelet réutilisable. Un bon équipement, c'est aussi respecter les zones naturelles que vous traversez.",
  },
  {
    icon: Users,
    title: "Courtoisie sur les Sentiers",
    subtitle: "Fair-play",
    text: "Les sentiers étroits demandent de la patience la nuit. Annoncez votre dépassement à la voix, laissez le passage avec le sourire, et remerciez les bénévoles qui éclairent la nuit pour vous.",
  },
  {
    icon: AlertTriangle,
    title: "Signalement d'Abandon",
    subtitle: "Sécurité",
    text: "Tout abandon doit être signalé impérativement à un bénévole. Ne quittez jamais le parcours sans prévenir — l'organisation doit savoir où se trouve chaque coureur jusqu'à la dernière frontale.",
  },
];

export const sectionsV2 = {
  about: { title: "L'Édition Nuit" },
  races: {
    title: "Les Parcours",
    subtitle: "Deux courses entièrement de nuit sur les crêtes et forêts d'Entrange.",
  },
  gear: {
    title: "Équipement",
    subtitle: "Préparation obligatoire pour courir la nuit en sécurité.",
  },
  rules: {
    title: "Le Règlement",
    subtitle: "Règlement officiel de la Nuit des Crêtes",
    description: "Courir de nuit impose des règles supplémentaires : visibilité, sécurité et solidarité sont essentielles pour que la nuit reste une fête.",
  },
  logistique: {
    title: "Sur Place",
    subtitle: "Briefing, départs et confort pour la nuit",
    restaurationTitle: "Restauration & boissons chaudes",
    restaurationSubtitle: "Buvette ouverte dès 16h — boissons chaudes disponibles",
    menuLabel: "Au menu",
  },
  sponsors: {
    title: "Nos Partenaires",
    subtitle: "Ils soutiennent la Nuit des Crêtes d'Entrange",
    partnershipLabel: "Intéressé par un partenariat ?",
    partnershipCta: "Contactez-nous",
  },
};

export const aboutV2 = {
  paragraphs: [
    "Quand la nuit tombe sur les crêtes d'Entrange, le paysage se transforme. Les silhouettes des arbres se découpent sur un ciel étoilé, les ouvrages de la Ligne Maginot surgissent dans les halos de frontale, et le silence de la forêt prend une densité particulière.",
    "La Nuit des Crêtes, c'est une expérience sensorielle radicalement différente : les repères visuels s'effacent, les sens s'aiguisent, et chaque kilomètre gagne en intensité. Un trail de nuit n'est pas simplement un trail dans le noir — c'est un rapport nouveau à l'effort, à la nature, à soi.",
  ],
  closing: "Deux parcours, une seule nuit, des crêtes pour vous seuls.",
};

export const ctaV2 = {
  heading: "Prêt à courir dans le noir ?",
  subtext: "21 novembre 2026 — Entrange, Moselle. Les crêtes vous attendent dans l'obscurité.",
};

export const restaurationV2 = {
  pack: {
    icon: UtensilsCrossed,
    label: "Pack Course: Pâtes & Boisson",
    description: "Optionnel à l'inscription — un vrai plat chaud pour récupérer après la nuit.",
    price: "+6 €",
  },
  consigne: {
    icon: Info,
    text: "Consigne verre",
    price: "1 €",
    note: "remboursée à la restitution",
  },
  menu: [
    { icon: Soup, label: "Pâtes chaudes" },
    { icon: GlassWater, label: "Soft / Bière / Crémant" },
  ],
};