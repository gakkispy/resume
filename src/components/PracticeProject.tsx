import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function PracticeProject() {
  return (
    <div>
        <Divider text="实习经历" />
        <PartList>
          <PartItem title="深圳钧韬咨询公司 2018.09-2018.11" info={"开发微信h5页面，保险单元课配合swiper,css3,百分比布局实现h5动画"} append technique={['JQuery']}>    
          </PartItem> 
        </PartList>
    </div>
  )
}
