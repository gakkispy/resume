import React from 'react'
import Divider from './Divider'
import Icon from './Icon'
import PartItem, { PartList } from './PartItem'
import { LINK_TYPE } from '../types'

export default function PersonalProject() {
  return (
    <div>
      <Divider text="个人作品" />
      <PartList>
        <PartItem>
          参与赫尔辛基大学的全栈公开课程，学习React, Redux, Node.js, MongoDB, GraphQL 以及 TypeScript，完成1-12章课程学习与作业，
            <Icon
              text="https://github.com/cyanxxx/fullstack-learn"
            />
         
        </PartItem>
        <PartItem>
          个人主页，记录开发时遇到的问题，研读框架的一些思考和学习公开课的笔记
          <Icon 
              type={LINK_TYPE.HOME}
              text="http://114.132.224.28"
          />
        </PartItem> 
      </PartList>
    </div>
  )
}
