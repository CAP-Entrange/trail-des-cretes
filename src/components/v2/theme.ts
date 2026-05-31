import type React from "react";

// Couleurs primaires — vert identité CAP Entrange (hsl(93 72% 44%), même que la v1)
export const g = {
  primary:  "hsl(93, 72%, 44%)",
  light:    "hsl(93, 65%, 56%)",
  gradient: "linear-gradient(135deg, hsl(93, 85%, 68%), hsl(93, 72%, 44%))",
  a08:  "hsla(93, 72%, 44%, 0.08)",
  a10:  "hsla(93, 72%, 44%, 0.10)",
  a12:  "hsla(93, 72%, 44%, 0.12)",
  a15:  "hsla(93, 72%, 44%, 0.15)",
  a20:  "hsla(93, 72%, 44%, 0.20)",
  a25:  "hsla(93, 72%, 44%, 0.25)",
  a30:  "hsla(93, 72%, 44%, 0.30)",
  a35:  "hsla(93, 72%, 44%, 0.35)",
  a40:  "hsla(93, 72%, 44%, 0.40)",
  a50:  "hsla(93, 72%, 44%, 0.50)",
};

export const gradientText: React.CSSProperties = {
  background: g.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
