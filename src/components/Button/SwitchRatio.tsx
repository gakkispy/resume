import React, { useEffect, useState, useContext } from 'react'
import { RATIO } from '../../types'
import { ColContext, ThemeContext } from '../../context'
const A4_SIZE = 595
const addAndRemoveClass = (contents: NodeListOf<Element> , addClass: string, removeClass: string) => {
    contents.forEach(content => content.classList.add(addClass)) 
    contents.forEach(content => content.classList.remove(removeClass))
}
export default function SwitchRatio() {
    const [ ratio, setRatio ] = useState(RATIO.FULL)
    const {theme, setTheme} = useContext(ThemeContext)
    useEffect(() => {
        const contents = document.querySelectorAll('.content-container') || []
        if(ratio === RATIO.A4) {
            document.body.classList.add('A4')
            addAndRemoveClass(contents, 'sheet', 'screen')
        }else{
            document.body.classList.remove('A4')
            addAndRemoveClass(contents, 'screen', 'sheet')
        }
    }, [ratio])
    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > A4_SIZE) {
            setRatio(RATIO.A4)
        }else{
            setRatio(RATIO.FULL)
        }
    }, [])
    return (
        <div className='ratio-btn-container'>
          <button className='print-btn' onClick={() => setRatio(RATIO.A4)}>A4</button>
            <button className='print-btn' onClick={() => setRatio(RATIO.FULL)}>自适应</button>
      </div>
  )
}


