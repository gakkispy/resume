import { useState } from 'react'
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
  const {theme, setTheme} = useTheme()
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
