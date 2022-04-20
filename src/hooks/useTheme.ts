import { useEffect, useState } from "react"
import themeStyle, { Theme } from '../utils/theme'
type typeStyle = keyof typeof themeStyle[Theme.COlORFUL]

export function useTheme() {
  const [theme, setTheme] = useState(Theme.BACK)
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