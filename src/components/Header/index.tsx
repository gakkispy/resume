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
          <h1>伍慧琳</h1>
          <div className='post'>前端开发工程师</div>
        </div>
        <div className='info-container'>
          <div className="base-info">
            <div>女/1997.06</div>
            <div>本科/2019年毕业</div>
            <div>广东技术师范大学-数字媒体技术</div>
          </div>
          <div className="contract-info">
            <Icon 
              text="https://github.com/cyanxxx"
            />
            <Icon 
              type={LINK_TYPE.HOME}
              text="http://114.132.224.28"
            />
            <Icon 
              text="504512494@qq.com"
            />
            <Icon
              text={import.meta.env.VITE_PHONE as string}
            />
          </div>
        </div>
      </div>   
    )
}

export default Header