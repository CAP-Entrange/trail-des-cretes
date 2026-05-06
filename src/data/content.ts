// ─────────────────────────────────────────────
//  FICHIER DE CONTENU CENTRALISÉ
//  Toutes les données textuelles et de configuration
//  de l'événement sont ici. Modifiez ce fichier pour
//  mettre à jour le site.
// ─────────────────────────────────────────────

import { TreePine, Heart, Backpack, Users, UtensilsCrossed, Car, Shirt, Sandwich, GlassWater, Flame, Star, Info } from "lucide-react";

import logoClub from "@/assets/logo-club.png";
import grade12Logo from "@/assets/grade_12k.png";
import grade21Logo from "@/assets/grade_21k.png";
import grade31Logo from "@/assets/grade_31k.png";

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
import vChalicarneLogo from "@/assets/sponsors/vchalicarne.png";
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
  tagline: "Là où le silence de l'acier rencontre l'effort.",
  date: "20 Septembre 2026",
  isoDate: "2026-09-20T10:00:00+02:00",
  startTime: "9h30",
  location: "Entrange, Moselle",
  registrationUrl: "https://fr.milesrepublic.com/event/trail-des-cretes-dentrange-7158",
  contactEmail: "yves.moreau6@orange.fr",
};

// ─── COURSES ──────────────────────────────────

export const races = [
  {
    distance: "12 km",
    grade: null,
    ribbon: "Marche",
    title: "La Ronde des Sentinelles",
    subtitle: "La mémoire sous les pieds",
    elevation: "380m D+",
    startTime: "10h00",
    price: "5€",
    slogan: "Marche — accessible à tous.",
    description:
      "Une randonnée guidée de 12 km sur les mêmes crêtes que les coureurs, sans la montre, sans le chrono. Familles, curieux et amoureux d'histoire sont les bienvenus. Chaque virage dévoile un vestige, chaque crête raconte un fragment de 1939. Ici, c'est le chemin qui compte.",
    funFact:
      "Lors de la drôle de guerre (1939–1940), des milliers de civils de la région furent évacués en 48h à peine. Beaucoup ne prirent que ce qu'ils pouvaient porter. Certains de ces chemins de crêtes étaient leurs seules routes de fuite. En marchant aujourd'hui, vous posez vos pas là où l'exode silencieux d'un peuple s'est joué.",
  },
  {
    distance: "12 km",
    grade: grade12Logo,
    title: "La Patrouille de Liaison",
    subtitle: "L'agilité du guetteur",
    elevation: "380m D+",
    startTime: "10h00",
    price: "15€",
    slogan: "Vigilance et rapidité.",
    description:
      "Un format nerveux qui simule les déplacements rapides des Coureurs de liaison entre les blocs de combat. Le tracé alterne relances sèches et sentiers sinueux en lisière de forêt. Idéal pour ceux qui veulent tester leur vitesse sur un terrain chargé d'histoire.",
    funFact:
      "Les soldats de la Ligne Maginot, surnommés les « Écrevisses du Rempart », vivaient à 30 mètres sous terre. Pour maintenir le lien avec la surface et les autres ouvrages, des patrouilles de liaison parcouraient quotidiennement ces chemins, peu importe la météo. Courir ce 12 km, c'est endosser le rôle de ces messagers de l'ombre qui assuraient la survie du secteur fortifié de Thionville.",
  },
  {
    distance: "22 km",
    grade: grade21Logo,
    title: "La Traversée des Blocs",
    subtitle: "L'endurance du béton",
    elevation: "650m D+",
    startTime: "09h30",
    price: "18€",
    slogan: "Tenir bon, coûte que coûte.",
    description:
      "Une distance exigeante qui vous emmène sur les hauteurs stratégiques. Les montées sont abruptes, comme pour conquérir un observatoire d'artillerie. Le terrain est technique, mêlant racines et vestiges bétonnés, demandant une concentration constante et une force physique à toute épreuve.",
    funFact:
      "Le secteur d'Entrange abrite des réseaux de galeries impressionnants. Saviez-vous que pour construire ces géants de béton, il a fallu acheminer des milliers de tonnes de matériaux sur ces mêmes crêtes à l'aide de voies ferrées étroites (système Decauville) ? Les pentes que vous grimpez aujourd'hui étaient autrefois le théâtre d'un défi logistique colossal, où chaque mètre de dénivelé était une victoire sur la roche.",
  },
  {
    distance: "32 km",
    grade: grade31Logo,
    title: "Le Mur des Crêtes",
    subtitle: "L'ultime résistance",
    elevation: "1050m D+",
    startTime: "09h30",
    price: "20€",
    slogan: "On ne passe pas !",
    description:
      "L'épreuve reine. Un parcours sauvage qui repousse les frontières de l'effort. Vous traverserez l'intégralité de la ligne de défense, là où la nature a repris ses droits sur les fortifications. Une immersion totale entre les blocs de l'Immerhof et les crêtes frontalières, une épopée où le mental prend le relais sur les jambes.",
    funFact:
      "« On ne passe pas ! » était la devise des troupes de forteresse. Les galeries de l'ouvrage d'Entrange étaient conçues pour être totalement autonomes pendant plusieurs semaines (usine électrique, hôpital, cuisines). En courant ce 31 km, vous traversez un « vaisseau de terre » immobile. On raconte que lors des nuits calmes, le vent dans les arbres des crêtes imite le murmure des ventilations de l'époque, rappelant que sous vos pieds, l'histoire respire encore.",
  },
];

// ─── RÈGLEMENT ────────────────────────────────

export const rules = [
  {
    icon: TreePine,
    title: "Respect de la Zone",
    subtitle: "Environnement",
    text: "La forêt est notre couverture et notre patrimoine. Une Sentinelle ne laisse aucune trace de son passage. Gardez vos preuves (déchets) dans vos poches jusqu'au prochain poste. Honorons la nature qui protège nos vestiges.",
  },
  {
    icon: Heart,
    title: "Fraternité d'Armes",
    subtitle: "Entraide",
    text: "Une Sentinelle n'abandonne jamais un camarade blessé. Porter secours est une priorité absolue, le chrono est secondaire face à l'intégrité d'autrui.",
  },
  {
    icon: Backpack,
    title: "Le Paquetage de la Sentinelle",
    subtitle: "Autonomie",
    text: "Soyez maîtres de votre autonomie. Pour préserver nos crêtes, aucun gobelet jetable ne sera fourni. Munissez-vous de votre propre contenant (flasque ou gobelet réutilisable) pour faire le plein à la cantine. Un bon équipement est le premier pas vers la victoire.",
  },
  {
    icon: Users,
    title: "Courtoisie sur le Front",
    subtitle: "Fair-play",
    text: "Les boyaux et sentiers sont parfois étroits. Laissez passer les plus rapides avec le sourire. Le respect des bénévoles (nos commissaires de zone) est la base de notre unité.",
  },
  {
    icon: UtensilsCrossed,
    title: "Le Ravitaillement du Fort",
    subtitle: "Ressources",
    text: "Ne gaspillez pas les ressources. Servez-vous à la « cantine » avec mesure pour permettre à toutes les unités de tenir jusqu'à l'arrivée.",
  },
];

// ─── LOGISTIQUE & RESTAURATION ────────────────

export const logistique = [
  {
    icon: Car,
    title: "Parking",
    text: "Parking gratuit à 3 min de l'A31 (sortie Thionville-Uckange). Places limitées — venez tôt ou covoiturez !",
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
    label: "Pack Course + Sandwich & Boisson",
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
  { name: "Seb-Moto Yutz",       imgPath: sebMotoLogo,         url: "https://www.seb-moto.fr/",                                                                                     bg: "#c82a22" },
  { name: "La Table Orientale",  imgPath: tableOrientaleLogo,  url: "http://latableorientale.com/nous-contacter.html",                                                              bg: "#FFFFFF" },
  { name: "Valerie Chalicarne",  imgPath: vChalicarneLogo,     url: "https://www.gallys-immo.fr/conseiller/valerie.chalicarne,187",                                                 bg: "#FFFFFF" },
  { name: "Sandrine Coiff",      imgPath: scoiffLogo,          url: "https://www.sandrinecoiff.fr",                                                                                 bg: "#FFFFFF" },
  { name: "Concertaux",          imgPath: concertauxLogo,      url: "https://www2.concertaux.fr/",                                                                                  bg: "#FFFFFF" },
  { name: "Saveurs Et Gourmandises", imgPath: saveurLogo,      url: "https://share.google/IOkPwMSUT5zMtBtWl",                                                                       bg: "#FFFFFF" },
  { name: "JSD Coiffure",        imgPath: jsdCoiffureLogo,     url: "https://www.planity.com/jsd-coiffure-57330-hettange-grande",                                                   bg: "#FFFFFF" },
  { name: "Vita d'Uomo",         imgPath: vitaLogo,            url: "https://www.vitaduomo.com/fr/Vita-d-Uomo?",                                                                    bg: "#000000" },
];
