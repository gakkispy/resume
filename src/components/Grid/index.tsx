import React, {useContext, useState} from 'react'
import { ColContext, ThemeContext,TempContext } from '../../context'
import { TEMPLATE } from '../../types';
import { Theme } from '../../utils/theme';
import './grid.css'


interface Props{
  left?: React.ReactNode
  right?: React.ReactNode
  side?: React.ReactNode
  main?: React.ReactNode
}

export default function Grid({ left, right, side, main }: Props) {
  const colNum = useContext(ColContext)
  const {template, setTemplate} = useContext(TempContext)
  return (
    <>
      {template === TEMPLATE.TWO ? (
        <div className="container">
          <div className="grid-container">
            <div className="sidebar">
              {side}
            </div>
            <div className="main">
              {main}
            </div>
          </div>
        </div>
      ):(
        <div className='container'>
          <div className={`${colNum}-col-half`}>
            {left}
          </div>
          <div className={`${colNum}-col-half`}>
            {right}
          </div>
        </div>
      )}
    </>
  )
  
}
