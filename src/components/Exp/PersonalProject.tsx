import React from 'react'
import Divider from '../Divider'
import Icon from '../Icon'
import PartItem, { PartList } from '../PartItem'
import { LINK_TYPE } from '../../types'

export default function PersonalProject() {
  return (
    <div>
      <Divider text="个人作品" />
      <PartList>
        <PartItem
            title="个人简历"
            info="基于cynxxx的简历项目，使用react hook, vite实现，添加一些功能扩充，
            支持A4预览，全屏查看，彩色和黑白，单列双列，添加了不同版本展示、组件样式定制化功能。
            保存pdf利用vite的开发阶段使用esbuild，不用通过babel转译es6模板，缩短生成页面时间，利用puppeteer，
            无需手动打开页面再另存为pdf生成，只需要运行脚本就可以快速构建
            并利用github page方便线上访问。"
            icon={{'type':LINK_TYPE.GITHUB,
                    'textHidden':true,}}
            />
        <PartItem
          title="番茄时钟"
          icon={{'type':LINK_TYPE.GITHUB,
                  'text':'https://github.com/gakkispy/tomato-time/',
                  'textHidden':true,}}
          className={{'title':'hover-hand'}}
          info="UI构思来自 windows 10 应用 番茄钟 10 ，在使用原生 javascript 完成应用后，用 React + react-router + ES6 重写该应用，可以设置工作、休息时间，设有快进功能，快速完成当前状态进入下一状态。"
          />
      </PartList>
    </div>
  )
}
