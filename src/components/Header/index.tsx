import React, { useContext } from 'react'
import { LINK_TYPE } from '../../types'
import './header.css'
import Icon from '../Icon'
import { ThemeContext } from '../../context'

function Header() {
    const { theme } = useContext(ThemeContext)
    return (
      <div className={`header-container ${theme}`}>
        <div className='id-container'>
          <h1>姚森均</h1>
          <div className='post'>开发工程师</div>
        </div>
        <div className='info-container'>
          <div className="base-info">
            <div>男/1993.10</div>
            <div>硕士/2022年毕业</div>
            <div>中国计量大学</div>
          </div>
          <div className="contract-info">
            <Icon 
              text="https://github.com/gakkispy"
              position="right"
            />
            <Icon 
              type={LINK_TYPE.HOME}
              text="https://gakkispy.github.io"
              position="right"
            />
            <Icon 
              text="yaoenjun168@live.cn"
              position="right"
            />
            <Icon
              text={import.meta.env.VITE_PHONE as string}
              position="right"
              {...(import.meta.env.VITE_SECRIT && {linkHidden: true})}
            />
          </div>
        </div>
      </div>   
    )
}

export default Header