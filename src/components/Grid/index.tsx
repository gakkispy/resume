import React, {useContext, useState} from 'react'
import { ColContext } from '../../context'
import './grid.css'

interface Props{
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export default function Grid({ left, right }: Props) {
  const colNum = useContext(ColContext)
  return (
    <div className='container'>
      <div className={`${colNum}-col`}>
        {left}
      </div>
      <div className={`${colNum}-col`}>
        {right}
      </div>
    </div>
  )
}
