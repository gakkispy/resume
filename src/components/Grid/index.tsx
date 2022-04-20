import React, {useState} from 'react'
import Project from '../Project'
import PracticeProject from '../PracticeProject'
import Brief from '../Brief'
import PersonalProject from '../PersonalProject'
import { COL } from '../../types'
import './grid.css'

export default function Grid({colNum}: {colNum: COL}) {
  
  return (
    <div className='container'>
      <div className={`${colNum}-col`}>
          <Project></Project>
          <PracticeProject></PracticeProject>
      </div>
      <div className={`${colNum}-col`}>
        <Brief></Brief>
        <PersonalProject></PersonalProject>
        </div>
    </div>
  )
}
