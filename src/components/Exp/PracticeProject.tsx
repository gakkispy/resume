import React from 'react'
import Divider from '../Divider'
import PartItem, { PartList } from '../PartItem'

export default function PracticeProject(props: { pageIndex: number, cols?: number }) {
  return (
    <div>
      {(props.pageIndex == 1 || (props.cols != undefined && props.cols == 1))  && (<>
        <Divider text="实习经历" />
        <PartList>
          <PartItem
            title="2019-2021 杭州童乐码教育科技有限公司，讲师"
            info="负责学生Python、C++等语言的学习和掌握，并且负责学生的编程实践、竞赛辅导。"
            />
        </PartList></>)}
    </div>
  )
}
