import { event, club } from "@/data/content";
import ClubModal from "@/components/ClubModal";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border text-center">
    <p className="font-display text-xl text-gradient-amber mb-2">
      {event.name}
    </p>
    <p className="text-muted-foreground text-sm mb-1">
      © 2026 — {event.location}
    </p>
    <p className="text-muted-foreground text-sm">
      Organisé par{" "}
      <ClubModal>
        <button className="text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80 transition-colors cursor-pointer text-sm">
          {club.name}
        </button>
      </ClubModal>
    </p>
  </footer>
);

export default Footer;
