import React, { useEffect, useState } from 'react'
import { RATIO } from '../types'
const A4_SIZE = 595
export default function SwitchRatio() {
    const [ ratio, setRatio ] = useState(RATIO.FULL)
    useEffect(() => {
        const content = document.getElementById('content-container')
        if(ratio === RATIO.A4) {
            document.body.classList.add('A4')
            content?.classList.add('sheet')
            content?.classList.remove('screen')
        }else{
            document.body.classList.remove('A4')
            content?.classList.remove('sheet')
            content?.classList.add('screen')
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


