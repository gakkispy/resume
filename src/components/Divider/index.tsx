import React from 'react'
import './divider.css'
export default function ({text}: {text: string}) {
  return (
    <div className='divider'>
        <span className='text'>{text}</span>
    </div>
  )
}
