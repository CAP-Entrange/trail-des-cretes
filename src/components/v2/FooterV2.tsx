import { eventV2, club } from "@/data/content-v2";
import ClubModal from "@/components/ClubModal";
import { g, gradientText } from "./theme";

const FooterV2 = () => (
  <footer
    className="py-10 px-4 text-center"
    style={{ borderTop: `1px solid ${g.a20}` }}
  >
    <p className="font-display text-xl mb-2" style={gradientText}>
      {eventV2.name}
    </p>
    <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
      © 2026 — {eventV2.location}
    </p>
    <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
      Organisé par{" "}
      <ClubModal>
        <button
          className="underline decoration-dotted underline-offset-4 transition-colors cursor-pointer text-sm"
          style={{ color: g.light }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = g.primary; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = g.light; }}
        >
          {club.name}
        </button>
      </ClubModal>
    </p>
  </footer>
);

export default FooterV2;
