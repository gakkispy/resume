import { useState, useEffect } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'
import './App.css'
import  'paper-css/paper.css'
import SwitchTheme from './components/SwitchTheme'
import SwitchCol from './components/SwitchCol'
import { COL } from './types'
import { ThemeContext } from './context'
import { useTheme } from './hooks/useTheme'


function App() {
  useEffect(() => {
    document.body.classList.add('A4')
  }, [])
  const [colNum, setCol] = useState(COL.ONE)
  const {theme, setTheme} = useTheme()
  return (
    <ThemeContext.Provider value={{theme, setTheme}}> 
      <section className='sheet'>
        <Header />
        <Grid colNum={colNum} />
      </section>
      <SwitchTheme></SwitchTheme>
      <SwitchCol setCol={setCol}></SwitchCol>
    </ThemeContext.Provider>
   
  )
}
export default App
