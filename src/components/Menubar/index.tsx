import React, { useState,useContext } from 'react'
import { COL, TEMPLATE } from '../../types'
import { BaseIcon } from '../Icon'
import SwitchCol from '../Button/SwitchCol'
import SwitchRatio from '../Button/SwitchRatio'
import SwitchTheme from '../Button/SwitchTheme'
import SwitchTemplate from '../Button/SwitchTemplate'
import './menubar.css'
import classnames from 'classnames'
import { TempContext } from '../../context'

export default function Menubar(props: {setCol: (col: COL) => void}) {
  const [toggle, setToggle] = useState(false)
  const {template, setTemplate} = useContext(TempContext)
  return (
    <div className='menubar'>
        <BaseIcon
          iconName='icon-bars' 
          onClick={() => setToggle(!toggle)}
          ></BaseIcon> 
        <div className={classnames("menubar-container", {toggle})}>
          <SwitchTemplate></SwitchTemplate>
          <SwitchTheme></SwitchTheme>
          <SwitchRatio></SwitchRatio>
          {template == TEMPLATE.ONE && (<SwitchCol setCol={props.setCol}></SwitchCol>)}
        </div>      
    </div>
  )
}
