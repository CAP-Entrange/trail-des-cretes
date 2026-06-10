// ─────────────────────────────────────────────
//  FICHIER DE CONTENU CENTRALISÉ
//  Toutes les données textuelles et de configuration
//  de l'événement sont ici. Modifiez ce fichier pour
//  mettre à jour le site.
// ─────────────────────────────────────────────

import { TreePine, Heart, Backpack, Users, UtensilsCrossed, Car, Shirt, Sandwich, GlassWater, Flame, Star, Info } from "lucide-react";

import logoClub from "@/assets/logo-club.png";

import ccceLogo from "@/assets/sponsors/ccce.png";
import entrangeLogo from "@/assets/sponsors/entrange.jpg";
import creditMutuelLogo from "@/assets/sponsors/credit_mutuel.svg";
import thomeLogo from "@/assets/sponsors/thome.gif";
import oneLuxLogo from "@/assets/sponsors/one-luxembourg.jpg";
import KKlogo from "@/assets/sponsors/knap-kneip.svg";
import ScanBureautiqueLogo from "@/assets/sponsors/scan-bureautique.webp";
import fhEnergieLogo from "@/assets/sponsors/fh-energie.webp";
import fbrunelloLogo from "@/assets/sponsors/f-brunello.png";
import vilvotLogo from "@/assets/sponsors/vivot-et-fils.png";
import salonAntoniniLogo from "@/assets/sponsors/antonini.jpg";
import romeoLogo from "@/assets/sponsors/romeo.png";
import chezBarbLogo from "@/assets/sponsors/barb.png";
import InflorescenceLogo from "@/assets/sponsors/inflorescence.png";
import sebMotoLogo from "@/assets/sponsors/sebmoto.svg";
import tableOrientaleLogo from "@/assets/sponsors/la-table-orientale.png";
import vChalicarneLogo from "@/assets/sponsors/gallys.jpg";
import scoiffLogo from "@/assets/sponsors/scoiff.png";
import concertauxLogo from "@/assets/sponsors/concertaux.png";
import jsdCoiffureLogo from "@/assets/sponsors/jsd_coiffure.png";
import saveurLogo from "@/assets/sponsors/saveur-et-gourmandise.png";
import vitaLogo from "@/assets/sponsors/vita.png";
import benevolePicture from "/benevoles.png";

// ─── CLUB ─────────────────────────────────────

export const club = {
  name: "CAP Entrange",
  logo: logoClub,
  picture: benevolePicture,
  foundedYearsAgo: 11,
  description: "Club de course à pied basé à Entrange, qui court dans les environs : forêts, crêtes et chemins de trail des alentours de la frontière franco-luxembourgeoise.",
  sessions: [
    { day: "Mercredi soir", time: "19h", distance: "10–12 km" },
    { day: "Dimanche matin", time: "9h", distance: "14–16 km" },
  ],
  note: "Sorties principalement orientées trail — tous niveaux bienvenus !",
  socials: {
    facebook: "https://www.facebook.com/capentrange/",
    instagram: "https://www.instagram.com/trail_des_cretes/",
  },
};

// ─── ÉVÉNEMENT ────────────────────────────────

export const event = {
  name: "Trail des Crêtes d'Entrange",
  organizer: "CAP Entrange",
  edition: 9,
  lastYearParticipants: 438,
  tagline: "L'acier pour mémoire, la forêt pour terrain de jeu.",
  date: "20 Septembre 2026",
  isoDate: "2026-09-20T10:00:00+02:00",
  startTime: "9h30",
  location: "Entrange, Moselle",
  registrationUrl: "https://chronopro.net/produit/9eme-trail-dentrange/",
  contactEmail: "yves.moreau6@orange.fr",
};

// ─── COURSES ──────────────────────────────────

export const races = [
  {
    distance: "12 km",
    color: null,
    ribbon: "Marche",
    title: "La Balade des Crêtes",
    subtitle: "Nature & découverte",
    elevation: "380m D+",
    startTime: "10h00",
    price: "5€",
    slogan: "Marche — accessible à tous.",
    description:
      "Une randonnée de 12 km ouverte à tous, sur le même tracé que le trail 12 km. À travers les forêts et crêtes du plateau qui borde la frontière franco-luxembourgeoise, familles et curieux découvrent à leur rythme des paysages préservés et plusieurs ouvrages de la Ligne Maginot, discrets témoins d'une histoire enfouie dans la végétation. Ici, c'est le chemin qui compte.",
    funFact:
      "Les crêtes d'Entrange abritent une faune discrète mais variée : chevreuils, rapaces et parfois sangliers croisent les sentiers. Les ouvrages de la Ligne Maginot, aujourd'hui recouverts de mousse et de lierre, sont devenus des refuges naturels pour les chauves-souris et certains insectes rares. La nature a repris ses droits sur le béton, transformant l'histoire en écrin de biodiversité.",
  },
  {
    distance: "12 km",
    color: "#10B981",
    title: "Le Sentier des Crêtes",
    subtitle: "Vif et technique",
    elevation: "380m D+",
    startTime: "10h00",
    price: "15€",
    slogan: "Vivacité et découverte.",
    description:
      "Le même parcours de 12 km que la marche, couru en trail sur les forêts et crêtes du plateau frontalier. Les sentiers se révèlent autrement à bonne allure : montées franches, appuis techniques, et de belles vues sur la frontière franco-luxembourgeoise. Le tracé longe aussi quelques ouvrages de la Ligne Maginot. Idéal pour découvrir le relief du secteur sans se lancer sur les longues distances.",
    funFact:
      "Le secteur d'Entrange se trouve à la jonction de plusieurs écosystèmes forestiers, ce qui en fait un territoire naturellement riche. Les sentiers de crêtes que vous arpentez étaient, il y a moins d'un siècle, des chemins de surveillance militaire. Aujourd'hui, ils sont fréquentés par les coureurs, les randonneurs — et quelques renards très peu farouches.",
  },
  {
    distance: "22 km",
    color: "#0c9cf5",
    title: "La Traversée des Forêts",
    subtitle: "Au cœur des hauteurs mosellanes",
    elevation: "650m D+",
    startTime: "09h30",
    price: "18€",
    slogan: "Ténacité et naturel.",
    description:
      "Une distance exigeante qui s'enfonce dans les zones boisées les plus préservées du plateau, reliant plusieurs communes du secteur au fil des crêtes. Le tracé passe par des clairières ouvertes exceptionnellement pour la course et longe plusieurs ouvrages de la Ligne Maginot aujourd'hui recouverts de mousse et de lierre. Terrain technique, nature généreuse — chaque montée se mérite.",
    funFact:
      "Pour ériger ces forteresses, les crêtes furent autrefois sillonnées par des voies ferrées étroites (système Decauville), acheminant des milliers de tonnes de matériaux au cœur de la forêt. Paradoxalement, l'ampleur de ces chantiers militaires a sanctuarisé le massif : protégées par le secret de la défense, ces zones n'ont jamais connu l'urbanisation. Les pentes abruptes que vous défiez aujourd'hui sont le témoin intact de ce passé colossal, où la nature a fini par recouvrir l'acier.",
  },
  {
    distance: "32 km",
    color: "#f64309",
    title: "L'Épopée des Crêtes",
    subtitle: "Le grand tour sauvage",
    elevation: "1050m D+",
    startTime: "09h30",
    price: "20€",
    slogan: "Liberté et dépassement.",
    description:
      "L'épreuve reine. Un grand tour qui s'étend sur les communes de Kanfen, Volmerange-les-Mines, Escherange, Angevillers et Oeutrange — bien au-delà des seules crêtes d'Entrange. Certaines sections traversent des zones naturelles protégées, ouvertes spécialement pour la course. Au fil des forêts et des panoramas frontaliers, la nature offre un décor rare où chaque kilomètre se mérite.",
    funFact:
      "Sous vos foulées, les galeries de l'ouvrage d'Entrange s'étirent sur des centaines de mètres. Véritable cité enfouie, ce géant de béton était conçu pour une autonomie totale : usine électrique, infirmerie et réserves vitales vibraient autrefois sous la roche. Aujourd'hui classées, ces structures semblent ne faire qu'un avec le massif. On raconte que lors des nuits calmes, le vent s’engouffrant dans les arbres imite le murmure des anciennes ventilations — comme si la forêt respirait encore au rythme de l'histoire.",
  },
];

// ─── RÈGLEMENT ────────────────────────────────

export const rules = [
  {
    icon: TreePine,
    title: "Respect de la Nature",
    subtitle: "Environnement",
    text: "Forêts et crêtes sont notre terrain de jeu et notre patrimoine commun. Ne laissez aucun déchet sur le parcours — chaque emballage repart avec vous jusqu'au prochain ravitaillement. Certaines zones traversées sont protégées : préservons-les ensemble.",
  },
  {
    icon: Heart,
    title: "Entraide sur le Parcours",
    subtitle: "Solidarité",
    text: "Porter secours à un coureur en difficulté est une priorité absolue. Le chrono est secondaire face à la sécurité de tous. Ne laissez jamais quelqu'un derrière vous si vous pouvez lui venir en aide.",
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
    text: "Les sentiers sont parfois étroits. Laissez passer les plus rapides avec le sourire et respectez nos bénévoles, qui rendent la course possible. La bienveillance est le premier règlement du trail.",
  },
  {
    icon: UtensilsCrossed,
    title: "Ravitaillement",
    subtitle: "Ressources",
    text: "Servez-vous aux ravitaillements avec mesure pour que chaque coureur puisse en profiter jusqu'à l'arrivée. Ne gaspillez pas les ressources communes.",
  },
];

// ─── TITRES DE SECTIONS ───────────────────────

export const sections = {
  about: {
    title: "Présentation",
  },
  races: {
    title: "Les Parcours",
    subtitle: "Une marche et trois courses sur les crêtes et forêts d'Entrange.",
  },
  rules: {
    title: "Le Règlement",
    subtitle: "Règlement officiel des Crêtes d'Entrange",
    description: "Chaque participant s'engage à respecter ces quelques règles simples, pour la sécurité de tous et le respect des zones naturelles traversées.",
  },
  logistique: {
    title: "Sur Place",
    subtitle: "Tout le confort pour bien vivre votre journée",
    restaurationTitle: "Restauration sur place",
    restaurationSubtitle: "Buvette & petite restauration ouverte toute la journée",
    menuLabel: "Au menu",
  },
  sponsors: {
    title: "Nos Partenaires",
    subtitle: "Ils soutiennent l'aventure des Crêtes d'Entrange",
    partnershipLabel: "Intéressé par un partenariat ?",
    partnershipCta: "Contactez-nous",
  },
};

// ─── PRÉSENTATION ─────────────────────────────

export const about = {
  paragraph1After:
    " vous invite à courir au cœur d'un territoire naturel d'exception. Le Trail des Crêtes d'Entrange serpente à travers les forêts mosellanes, longe des clairières préservées et franchit les crêtes panoramiques qui dominent la frontière franco-luxembourgeoise.",
  paragraphs: [
    "Le tracé traverse des zones naturelles remarquables, parfois protégées et ouvertes exceptionnellement pour la course. Vous passerez à proximité de plusieurs ouvrages de la Ligne Maginot, témoins silencieux réappropriés par la végétation — une histoire qui affleure sans jamais dominer.",
    "Que vous soyez traileur confirmé ou randonneur curieux, les crêtes d'Entrange vous offrent une expérience rare : celle d'un territoire sauvage, à la fois dépaysant et chargé d'une mémoire discrète.",
  ],
  closing:
    "Des kilomètres de nature préservée, une journée sportive et humaine inoubliable.",
};

// ─── INSCRIPTION (CTA) ────────────────────────

export const cta = {
  heading: "Prêt à courir les crêtes ?",
  subtext:
    "Chaussez vos trails et venez explorer les sentiers sauvages d'Entrange. La nature et l'histoire vous attendent.",
};

// ─── LOGISTIQUE & RESTAURATION ────────────────

export const logistique = [
  {
    icon: Car,
    title: "Parking",
    text: "Parking gratuit à 3 min de l'A31 (sortie 44 - Hettange-Grande). Places limitées — venez tôt ou covoiturez !",
  },
  {
    icon: Shirt,
    title: "Vestiaires & Douches",
    text: "Vestiaires et douches disponibles sur place pour vous rafraîchir après l'effort.",
  },
];

export const restauration = {
  pack: {
    icon: Star,
    label: "Pack Course: Sandwich & Boisson",
    description: "Optionnel à l'inscription — économisez en réservant à l'avance.",
    price: "+6 €",
  },
  consigne: {
    icon: Info,
    text: "Consigne verre",
    price: "1 €",
    note: "remboursée à la restitution",
  },
  menu: [
    { icon: Sandwich, label: "Sandwich" },
    { icon: GlassWater, label: "Soft / Bière / Crémant" },
    { icon: Flame, label: "Frites" },
    { icon: Star, label: "Crêpes" },
  ],
};

// ─── SPONSORS ─────────────────────────────────

export const sponsors = [
  { name: "CCCE",                imgPath: ccceLogo,            url: "https://www.ccce.fr/",                                                                                         bg: "#FFFFFF" },
  { name: "Commune d'Entrange",  imgPath: entrangeLogo,        url: "https://www.entrange.fr/",                                                                                     bg: "#FFFFFF" },
  { name: "Crédit Mutuel",       imgPath: creditMutuelLogo,    url: "https://www.creditmutuel.fr/cmo/fr/caisses-et-distributeurs/ResultatsRechercheGeographique.aspx?inseeCode=57323", bg: "#FFFFFF" },
  { name: "Thome - Groupe Hubert", imgPath: thomeLogo,         url: "https://thomemetz.wordpress.com/",                                                                             bg: "#FFFFFF" },
  { name: "One Luxembourg",      imgPath: oneLuxLogo,          url: "https://www.linkedin.com/company/one-luxembourg",                                                              bg: "#FFFFFF" },
  { name: "Karp-Kneip",          imgPath: KKlogo,              url: "https://www.karpkneip.lu/",                                                                                    bg: "#FFFFFF" },
  { name: "Scan Bureautique",    imgPath: ScanBureautiqueLogo, url: "https://www.scanbureautique.com/",                                                                             bg: "#FFFFFF" },
  { name: "FH Energie",          imgPath: fhEnergieLogo,       url: "https://www.fh-energie.com/",                                                                                  bg: "#FFFFFF" },
  { name: "Franck Brunello",     imgPath: fbrunelloLogo,       url: "https://www.pagesjaunes.fr/pros/06591224",                                                                      bg: "#FFFFFF" },
  { name: "Vilvot & fils",       imgPath: vilvotLogo,          url: "https://vilvotetfils.fr/",                                                                                     bg: "#FFFFFF" },
  { name: "Salon Antonini",      imgPath: salonAntoniniLogo,   url: "https://www.facebook.com/SalonANTONINI/?locale=fr_FR",                                                         bg: "#131312" },
  { name: "Romeo couverture",    imgPath: romeoLogo,           url: "https://romeo-couverture.fr/",                                                                                 bg: "#FFFFFF" },
  { name: "Chez Barb",           imgPath: chezBarbLogo,        url: "https://www.facebook.com/p/Chez-Barb-100067337318273/",                                                        bg: "#FFFFFF" },
  { name: "Inflorescence57",     imgPath: InflorescenceLogo,   url: "https://www.facebook.com/inflorescence57/?locale=fr_FR",                                                       bg: "#FFFFFF" },
  // { name: "Seb-Moto Yutz",       imgPath: sebMotoLogo,         url: "https://www.seb-moto.fr/",                                                                                     bg: "#c82a22" },
  { name: "La Table Orientale",  imgPath: tableOrientaleLogo,  url: "http://latableorientale.com/nous-contacter.html",                                                              bg: "#FFFFFF" },
  { name: "Valerie Chalicarne",  imgPath: vChalicarneLogo,     url: "https://www.gallys-immo.fr/conseiller/valerie.chalicarne,187",                                                 bg: "#FFFFFF" },
  { name: "Sandrine Coiff",      imgPath: scoiffLogo,          url: "https://www.sandrinecoiff.fr",                                                                                 bg: "#FFFFFF" },
  { name: "Concertaux",          imgPath: concertauxLogo,      url: "https://www2.concertaux.fr/",                                                                                  bg: "#FFFFFF" },
  { name: "Saveurs Et Gourmandises", imgPath: saveurLogo,      url: "https://share.google/IOkPwMSUT5zMtBtWl",                                                                       bg: "#FFFFFF" },
  { name: "JSD Coiffure",        imgPath: jsdCoiffureLogo,     url: "https://www.planity.com/jsd-coiffure-57330-hettange-grande",                                                   bg: "#FFFFFF" },
  { name: "Vita d'Uomo",         imgPath: vitaLogo,            url: "https://www.vitaduomo.com/fr/Vita-d-Uomo?",                                                                    bg: "#000000" },
];
