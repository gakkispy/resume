import React, { useContext, useState } from 'react'
import { Theme } from '../../utils/theme'
import { ThemeContext } from '../../context'
import { RATIO } from '../../types'


export default function SwitchTheme() {
  const {theme, setTheme } = useContext(ThemeContext)
    
  return (
      <div className='print-btn-container'>
        <button className='print-btn color-btn' onClick={() => setTheme(Theme.COlORFUL)}>彩色</button>
        <button className='print-btn black-btn' onClick={() => setTheme(Theme.BLACK)}>黑白</button>
      </div>
  )
}
