import { createContext, useContext, useState, ReactNode } from "react";

export type V3Theme = "day" | "night";

type V3ThemeContextValue = {
  theme: V3Theme;
  setTheme: (t: V3Theme) => void;
  hasInteracted: boolean;
  markInteracted: () => void;
};

const V3ThemeContext = createContext<V3ThemeContextValue | null>(null);

export const V3ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<V3Theme>("day");
  const [hasInteracted, setHasInteracted] = useState(false);

  const setTheme = (t: V3Theme) => {
    setThemeState(t);
    setHasInteracted(true);
  };

  const markInteracted = () => setHasInteracted(true);

  return (
    <V3ThemeContext.Provider value={{ theme, setTheme, hasInteracted, markInteracted }}>
      {children}
    </V3ThemeContext.Provider>
  );
};

export const useV3Theme = () => {
  const ctx = useContext(V3ThemeContext);
  if (!ctx) throw new Error("useV3Theme must be used within V3ThemeProvider");
  return ctx;
};
