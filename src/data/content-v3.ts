// ─────────────────────────────────────────────
//  CONTENU v3 — Page unifiée Jour + Nuit
//  Réutilise les contenus v1 et v2, ajoute l'offre combo.
// ─────────────────────────────────────────────

import { Sparkles } from "lucide-react";

export { event as eventDay } from "@/data/content";
export { eventV2 as eventNight } from "@/data/content-v2";

export const comboOffer = {
  icon: Sparkles,
  badge: "COMBO 2 COURSES",
  title: "Faites les 2 éditions",
  subtitle: "Pack nuit offert",
  savings: "Économisez 6€",
  description:
    "Inscrivez-vous au Trail des Crêtes (jour) et à la Nuit des Crêtes : le Pack Course de l'édition nuit est offert.",
  cta: "S'inscrire aux 2 éditions",
  packNote:
    "* Combo 2 Courses : ne prenez pas le Pack Course lors de votre inscription à la Nuit des Crêtes — il vous est offert.",
  packNoteNight:
    "* Vous avez fait le Trail des Crêtes (jour) ? Le Pack Course vous est offert — profitez du Combo 2 Courses.",
  // À ajuster quand la promo est finalisée côté Miles Republic / billetterie
  registrationUrl:
    "https://fr.milesrepublic.com/event/trail-des-cretes-dentrange-7158",
};

export const v3Sections = {
  hero: {
    intro: "Deux éditions, une seule aventure",
    helper: "Choisissez votre édition",
    helperDesktop: "Survolez pour découvrir, cliquez pour explorer",
    helperTouch: "Touchez une édition pour l'explorer",
  },
  toggle: {
    day: "Jour",
    night: "Nuit",
  },
};
