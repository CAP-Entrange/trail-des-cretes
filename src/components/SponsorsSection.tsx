const SponsorsSection = () => {
  const placeholders = [
    "Votre logo ici",
    "Votre logo ici",
    "Votre logo ici",
    "Votre logo ici",
    "Votre logo ici",
    "Votre logo ici",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {placeholders.map((text, i) => (
            <div
              key={i}
              className="h-28 border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm hover:border-glow hover:text-primary transition-colors cursor-pointer"
            >
              {text}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-8">
          Intéressé par un partenariat ?{" "}
          <a href="mailto:contact@cretes-entrange.fr" className="text-primary hover:underline">
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
