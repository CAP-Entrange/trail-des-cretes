import React from 'react';
import { motion } from 'framer-motion';
import ligneClubLogo from "@/assets/logo-line-club.png";
import clubLogo from "@/assets/logo-club.png";

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto min-h-[500px] overflow-visible">
      
      {/* Conteneur des Ailes */}
      <div
        className="absolute inset-0 flex w-full h-full items-center justify-center z-10"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      >
        {/* Aile Gauche */}
        <div className="w-1/2 h-full flex items-center justify-end">
          <img
            src={ligneClubLogo}
            alt="Aile gauche"
            className="w-full h-full object-contain object-right opacity-40"
          />
        </div>

        {/* Aile Droite */}
        <div className="w-1/2 h-full flex items-center justify-start">
          <img
            src={ligneClubLogo}
            alt="Aile droite"
            className="w-full h-full object-contain object-left opacity-40"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>

      {/* Logo Central — isolé du flex avec inline-flex */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        style={{ width: 'clamp(180px, 33vw, 320px)', height: 'clamp(180px, 33vw, 320px)' }}
        className="relative z-20 flex-shrink-0"
      >
        {/* Cercle de fond */}
        <div
          className="absolute inset-0 bg-background shadow-inner"
          style={{ borderRadius: '50%' }}
        />
        <img
          src={clubLogo}
          alt="Logo du club"
          className="relative z-20 w-full h-full object-contain p-4"
        />
      </motion.div>

    </div>
  );
};

export default Logo;