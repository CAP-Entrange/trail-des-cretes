import { event } from "@/data/content";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border text-center">
    <p className="font-display text-xl text-gradient-amber mb-2">
      {event.name}
    </p>
    <p className="text-muted-foreground text-sm">
      © 2026 — {event.location}
    </p>
  </footer>
);

export default Footer;
