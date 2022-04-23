import React, { useState } from 'react'
import { COL } from '../../types'
import { BaseIcon } from '../Icon'
import SwitchCol from '../SwitchCol'
import SwitchRatio from '../SwitchRatio'
import SwitchTheme from '../SwitchTheme'
import './menubar.css'
import classnames from 'classnames'

export default function Menubar(props: { setCol: (col: COL) => void}) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='menubar'>
        <BaseIcon
          iconName='icon-bars' 
          onClick={() => setToggle(!toggle)}
          ></BaseIcon> 
        <div className={classnames("menubar-container", {toggle})}>
          <SwitchTheme></SwitchTheme>
          <SwitchCol setCol={props.setCol}></SwitchCol>
          <SwitchRatio></SwitchRatio>
        </div>      
    </div>
  )
}
