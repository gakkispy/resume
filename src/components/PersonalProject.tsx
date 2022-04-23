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
            基于react hook, vite实现，有别于传统的使用html/css，能使用组件开发模式，并添加一些功能扩充，
            支持A4预览，全屏查看，彩色和黑白，单列双列不同版本
            保存pdf利用vite的开发阶段使用esbuild，不用通过babel转译es6模板，缩短生成页面时间，利用puppeteer，
            无需手动打开页面再另存为pdf生成，只需要运行脚本就可以快速构建
            并利用github page方便线上访问
            <Icon
              text="https://github.com/cyanxxx/resume"
            />
         
        </PartItem>
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
