import { useEffect, useState } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'
import Menubar from './components/Menubar'
import './App.css'
import  'paper-css/paper.css'
import { COL } from './types'
import { ThemeContext } from './context'
import { useTheme } from './hooks/useTheme'



function App() {
  const [colNum, setCol] = useState(COL.ONE)
  const [auth, setAuth] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => {
    if (!import.meta.env.VITE_SECRET || !import.meta.env.VITE_SECRET_VALUE)return
    const query = window.location.search
    if(query) {
      const keyValue = query.slice(1).split('&')
      const queryObj = keyValue.reduce((pre: {[key: string]: string}, cur) => {
        const [key, value] = cur.split('=')
        pre[key] = value
        return pre
      }, {})
      if (queryObj[`${import.meta.env.VITE_SECRET}`] === import.meta.env.VITE_SECRET_VALUE) setAuth(true)
    }
  })
  if (!auth){
    return <div>opps...You don't have a right to read this.</div>
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}> 
      <section id='content-container'>
        <Header />
        <Grid colNum={colNum} />
      </section>
      <Menubar setCol={setCol}></Menubar>  
    </ThemeContext.Provider>
   
  )
}
export default App
