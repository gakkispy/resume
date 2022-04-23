import React from "react";
import { COL } from "../types";
import { Theme } from "../utils/theme";

export const ThemeContext = React.createContext({
    theme: Theme.BACK,
    setTheme: (theme: Theme) => {}
});
export const ColContext = React.createContext(COL.ONE);