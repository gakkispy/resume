import { useEffect, useState } from 'react'
import { COL, TEMPLATE } from './types'
import { ColContext, TempContext, ThemeContext } from './context'
import { useTheme } from './hooks/useTheme'
import Menubar from './components/Menubar'
import FirstPage from './components/Pages/FirstPage'
import SecondPage from './components/Pages/SecondPage'
import './App.css'
import 'paper-css/paper.css'



function App() {
  const [colNum, setCol] = useState(COL.ONE)
  const [template, setTemplate] = useState(TEMPLATE.TWO)
  const [auth, setAuth] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (import.meta.env.DEV || !import.meta.env.VITE_SECRET || !import.meta.env.VITE_SECRET_VALUE) {
      setAuth(true)
      return
    }
    const query = window.location.search
    if (query) {
      const keyValue = query.slice(1).split('&')
      const queryObj = keyValue.reduce((pre: { [key: string]: string }, cur) => {
        const [key, value] = cur.split('=')
        pre[key] = value
        return pre
      }, {})
      if (queryObj[`${import.meta.env.VITE_SECRET}`] === import.meta.env.VITE_SECRET_VALUE) setAuth(true)
    }
  })
  if (!auth) {
    return <div>opps...You don't have a right to read this.</div>
  }
  return (
    <TempContext.Provider value={{template,setTemplate}}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <ColContext.Provider value={colNum}>
            <><section className='content-container sheet'>
              <FirstPage></FirstPage>
            </section><section className='content-container sheet'>
                <SecondPage></SecondPage>
              </section></>
            <Menubar setCol={setCol}></Menubar>
          </ColContext.Provider>
      </ThemeContext.Provider>
    </TempContext.Provider >

  )
}
export default App
