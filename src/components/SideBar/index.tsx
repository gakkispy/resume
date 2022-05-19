import React, { useContext } from 'react'
import { LINK_TYPE } from '../../types'
import './sidebar.css'
import Icon from '../Icon'
import { ThemeContext } from '../../context'
import Divider from '../Divider'
import Avatar from '../Avatar'
import Brief from '../Exp/Brief'

export default function SideBar() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`sidebar-container ${theme}`}>
            <Avatar />
            <div className='id-container'>
                <h1>姚森均</h1>
                <div className='post'>开发工程师</div>
            </div>
            <Divider text="基本信息" />
            <div className='info-container mt-xs' >
                <div className="base-info">
                    <Icon
                        type={LINK_TYPE.GENDER}
                        text="男/1993.10"
                        linkHidden={true}
                    />

                    <Icon
                        type={LINK_TYPE.EDUCATION}
                        text="硕士/2022年毕业"
                        linkHidden={true}
                    />
                    <Icon
                        type={LINK_TYPE.NATION}
                        text="汉"
                        linkHidden={true}
                    />
                </div>

                <div className="contract-info mt-xs">
                    <Icon
                        type={LINK_TYPE.EMAIL}
                        text="yaosenjun168@live.cn"
                    />
                    <Icon
                        type={LINK_TYPE.HOME}
                        text="https://gakkispy.github.io"
                    />
                    <Icon
                        type={LINK_TYPE.PHONE}
                        text={import.meta.env.VITE_PHONE as string}
                    />
                </div>
            </div>
            <Brief />
        </div>
    )
}



