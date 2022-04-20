import React, { useContext } from 'react'
import { Theme } from '../utils/theme'
import { ThemeContext } from '../context'


export default function SwitchTheme() {
  const { setTheme } = useContext(ThemeContext)
    
  return (
    <div className='print-btn-container'>
        <button  className='print-btn color-btn' onClick={() => setTheme(Theme.COlORFUL)}>彩色</button>
        <button  className='print-btn black-btn' onClick={() => setTheme(Theme.BACK)}>黑白</button>
    </div>
  )
}
