import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function Brief() {
  return (
    <div>
         <Divider text="个人简介" />
         <PartList>
             <PartItem>
                熟悉Flex布局，响应式布局
             </PartItem>
             <PartItem>
                熟悉使用ES6, Vue并有深刻理解，同时也了解主流的React React Native GraphQL
             </PartItem>
             <PartItem>
                熟悉使用Typescript，负责的项目多以TypeScript为主
             </PartItem>
             <PartItem>
                了解Node.js express jest, 有搭建轻量服务端经验，了解基本的CI/CD, 有配置Jenkins和Github Action 项目部署经验
             </PartItem>
         </PartList>
    </div>
  )
}
