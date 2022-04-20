import { useEffect, useState } from "react"
import themeStyle, { Theme } from '../utils/theme'
type typeStyle = keyof typeof themeStyle[Theme.COlORFUL]

export function useTheme(defaultTheme: Theme = Theme.COlORFUL) {
  const [theme, setTheme] = useState(defaultTheme)
  useEffect(() => {
    const root = document.documentElement
    Object.keys(themeStyle[theme]).map(style => {
        root.style.setProperty(style, themeStyle[theme][style as typeStyle])
    })
  }, [theme])
  return {
    theme,
    setTheme
  }
}