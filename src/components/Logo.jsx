import React from 'react';
import { motion } from 'framer-motion';
import ligneClubLogo from "@/assets/logo-line-club.png"
import clubLogo from "@/assets/logo-club.png";

// Supposons que ces images soient déjà importées
// import clubLogo from './chemin/vers/votre/clubLogo.png';
// import ligneClubLogo from './chemin/vers/votre/ligneClubLogo.png';

const Logo = () => {
  return (
    // Conteneur principal qui définit la zone de "flottement"
    <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto min-h-[500px] overflow-visible">
      
      {/* --- Conteneur des Ailes (Arrière-plan avec fondus) --- */}
      {/* On utilise un masque global pour les bords top/bottom */}
      <div 
        className="absolute inset-0 flex w-full h-full items-center justify-center z-10"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      >
        {/* Aile Gauche - Prend 50% de la largeur */}
        <div 
          className="w-1/2 h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            maskImage: 'linear-gradient(to left, black 50%, transparent 100%)'
          }}
        >
          <img
            src={ligneClubLogo}
            alt="Aile gauche"
            className="w-full h-full object-contain object-right opacity-40 filter"
          />
        </div>

        {/* Aile Droite - Prend 50% de la largeur + Effet miroir */}
        <div 
          className="w-1/2 h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
          }}
        >
          <img
            src={ligneClubLogo}
            alt="Aile droite"
            className="w-full h-full object-contain object-left scale-x-[-1] opacity-40 filter"
          />
        </div>
      </div>

      {/* --- Logo Central (Premier plan) --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative z-20 w-64 h-64 md:w-40 md:h-40 drop-shadow-2xl" 
      >
        {/* Fond du logo pour masquer la jonction des lignes */}
        <div className="absolute inset-0 rounded-full bg-background shadow-inner" />
        <img
          src={clubLogo}
          alt="Logo du club"
          className="relative z-10 w-full h-full object-contain p-4"
        />
      </motion.div>
      
    </div>
  );
};

export default Logo;