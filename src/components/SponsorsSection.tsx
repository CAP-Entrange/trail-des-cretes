import { motion } from "framer-motion";

import ccceLogo from "@/assets/sponsors/ccce.png";
import entrangeLogo from "@/assets/sponsors/entrange.jpg"
import creditMutuelLogo from "@/assets/sponsors/credit_mutuel.svg"
import thomeLogo from "@/assets/sponsors/thome.gif"
import oneLuxLogo from "@/assets/sponsors/one-luxembourg.jpg"
import KKlogo from "@/assets/sponsors/knap-kneip.svg"
import ScanBureautiqueLogo from "@/assets/sponsors/scan-bureautique.webp"
import fhEnergieLogo from "@/assets/sponsors/fh-energie.webp"
import fbrunelloLogo from "@/assets/sponsors/f-brunello.png"
import vilvotLogo from "@/assets/sponsors/vivot-et-fils.png"
import salonAntoniniLogo from "@/assets/sponsors/antonini.jpg"
import romeoLogo from "@/assets/sponsors/romeo.png"
import chezBarbLogo from "@/assets/sponsors/barb.png"
import InflorescenceLogo from "@/assets/sponsors/inflorescence.png"
import sebMotoLogo from "@/assets/sponsors/sebmoto.svg"
import tableOrientaleLogo from "@/assets/sponsors/la-table-orientale.png"
import vChalicarneLogo from "@/assets/sponsors/vchalicarne.png"
import scoiffLogo from "@/assets/sponsors/scoiff.png"
import concertauxLogo from "@/assets/sponsors/concertaux.png"
import jsdCoiffureLogo from "@/assets/sponsors/jsd_coiffure.png"
import saveurLogo from "@/assets/sponsors/saveur-et-gourmandise.png"
import vitaLogo from "@/assets/sponsors/vita.png"


const SponsorsSection = () => {
  const sponsors = [
    {
      name: "CCCE",
      imgPath: ccceLogo,
      url: "https://www.ccce.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Commune d'Entrange",
      imgPath: entrangeLogo,
      url: "https://www.entrange.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Crédit Mutuel",
      imgPath: creditMutuelLogo,
      url: "https://www.creditmutuel.fr/cmo/fr/caisses-et-distributeurs/ResultatsRechercheGeographique.aspx?inseeCode=57323",
      bg: "#FFFFFF"
    },
    {
      name: "Thome - Groupe Hubert",
      imgPath: thomeLogo,
      url: "https://thomemetz.wordpress.com/",
      bg: "#FFFFFF"
    },
    {
      name: "One Luxebourg",
      imgPath: oneLuxLogo,
      url: "https://www.linkedin.com/company/one-luxembourg",
      bg: "#FFFFFF"
    },
    {
      name: "Karp-Kneip",
      imgPath: KKlogo,
      url: "https://www.karpkneip.lu/",
      bg: "#FFFFFF"
    },
    {
      name: "Scan Bureautique",
      imgPath: ScanBureautiqueLogo,
      url: "https://www.scanbureautique.com/",
      bg: "#FFFFFF"
    },
    {
      name: "FH Energie",
      imgPath: fhEnergieLogo,
      url: "https://www.fh-energie.com/",
      bg: "#FFFFFF"
    },
    {
      name: "Franck Brunello",
      imgPath: fbrunelloLogo,
      url: "https://www.pagesjaunes.fr/pros/06591224",
      bg: "#FFFFFF"
    },
    {
      name: "Vilvot & fils",
      imgPath: vilvotLogo,
      url: "https://vilvotetfils.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Salon Antonini",
      imgPath: salonAntoniniLogo,
      url: "https://www.facebook.com/SalonANTONINI/?locale=fr_FR",
      bg: "#131312"
    },
    {
      name: "Romeo couverture",
      imgPath: romeoLogo,
      url: "https://romeo-couverture.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Chez Barb",
      imgPath: chezBarbLogo,
      url: "https://www.facebook.com/p/Chez-Barb-100067337318273/",
      bg: "#FFFFFF"
    },
    {
      name: "Inflorescence57",
      imgPath: InflorescenceLogo,
      url: "https://www.facebook.com/inflorescence57/?locale=fr_FR",
      bg: "#FFFFFF"
    },
    {
      name: "Seb-Moto Yutz",
      imgPath: sebMotoLogo,
      url: "https://www.seb-moto.fr/",
      bg: "#c82a22"
    },
    {
      name: "La Table Orientale",
      imgPath: tableOrientaleLogo,
      url: "http://latableorientale.com/nous-contacter.html",
      bg: "#FFFFFF"
    },
    {
      name: "Valerie Chalicarne",
      imgPath: vChalicarneLogo,
      url: "https://www.gallys-immo.fr/conseiller/valerie.chalicarne,187",
      bg: "#FFFFFF"
    },
    {
      name: "Sandrine Coiff",
      imgPath: scoiffLogo,
      url: "https://www.sandrinecoiff.fr",
      bg: "#FFFFFF"
    },
    {
      name: "Concertaux",
      imgPath: concertauxLogo,
      url: "https://www2.concertaux.fr/",
      bg: "#FFFFFF"
    },
    {
      name: "Saveurs Et Gourmandises",
      imgPath: saveurLogo,
      url: "https://share.google/IOkPwMSUT5zMtBtWl",
      bg: "#FFFFFF"
    },
    {
      name: "JSD Coiffure",
      imgPath: jsdCoiffureLogo,
      url: "https://www.planity.com/jsd-coiffure-57330-hettange-grande",
      bg: "#FFFFFF"
    },
    {
      name: "Vita d'Uomo",
      imgPath: vitaLogo,
      url: "https://www.vitaduomo.com/fr/Vita-d-Uomo?",
      bg: "#000000"
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-gradient-amber mb-4">
          Nos Alliés
        </h2>
        <p className="text-muted-foreground mb-14">
          Ils soutiennent l'aventure des Crêtes d'Entrange
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {sponsors.map((sponsor, i) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: sponsor.bg || 'transparent' }}
              className="group relative h-24 w-40 sm:h-28 sm:w-52 flex items-center justify-center border border-border/40 rounded-xl hover:border-primary/40 transition-all duration-300 overflow-hidden"
              whileHover="hover" // Déclenche l'état "hover" pour les enfants
            >
              <motion.img
                src={sponsor.imgPath}
                alt={sponsor.name}
                variants={{
                  initial: { padding: "1rem", opacity: 0.7 }, // Correspond à p-4
                  hover: { padding: "0rem", opacity: 1 }      // Transition vers p-0
                }}
                initial="initial"
                animate="initial"
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full w-full object-contain filter"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none" />
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-12">
          Intéressé par un partenariat ?{" "}
          <a href="mailto:yves.moreau6@orange.fr" className="text-primary font-medium hover:underline transition-all">
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;