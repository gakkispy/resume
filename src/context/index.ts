import React from "react";
import { Theme } from "../utils/theme";

export const ThemeContext = React.createContext({
    theme: Theme.BACK,
    setTheme: (theme: Theme) => {}
  });