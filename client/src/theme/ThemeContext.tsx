import { createContext } from "react";
import React, { useState } from "react";
import { CSSProperties } from "react";

interface CProps {
  children?: JSX.Element;
}
interface Props {
  theme: string;
  allThemeStyles?: any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
interface ThemeProps {
  dark: CSSProperties;
  light: CSSProperties;
  common?: any;
}
export const ThemeContext = createContext<Props>({} as Props);

const ThemeProvider = ({ children }: CProps) => {
  const [theme, setTheme] = useState<string>("light");
  const themeStyles: ThemeProps = {
    dark: {
      background: "#000000",
      color: "#fff",
    },
    light: {
      background: "#ECF0F3",
    },
    common: {
      transition: "all 1s ease",
    },
  };
  const allThemeStyles = {
    ...themeStyles.common,
    ...(theme === "light" ? themeStyles.light : themeStyles.dark),
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, allThemeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
