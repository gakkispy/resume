import React from "react";
import { COL,TEMPLATE } from "../types";
import { Theme } from "../utils/theme";

export const ThemeContext = React.createContext({
    theme: Theme.BLACK,
    setTheme: (theme: Theme) => {}
});
export const ColContext = React.createContext(COL.ONE);

export const TempContext = React.createContext({
    template: TEMPLATE.ONE,
    setTemplate: (template: TEMPLATE) => {}
})