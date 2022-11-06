import React from 'react'
import { LINK_TYPE } from '../../types'
import Divider from '../Divider'
import Icon from '../Icon'
import PartItem, { PartList } from '../PartItem'

export default function Brief() {
  return (
         <><Divider text="技能清单" /><div className='skill-container mt-xs'>
        <div className="skill-desc">
           熟悉掌握
        </div>
        <div className="skill-list">
           <Icon
              type={LINK_TYPE.NEURALNETWORK}
              text="掌握CNN、YOLO、Transformer等网络模型"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.DEEPLEARNING}
              text="掌握Tensorflow、Keras、Pytorch深度学习框架，了解MXNet、Caffe、CNTK等框架"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.CV}
              text="掌握计算机视觉以及图像处理等知识，掌握图像识别、目标检测、行为识别等相关技术"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.ROBOT}
              text="掌握机器人开发、路径规划等相关技术，熟悉ROS、ROS2操作系统，了解遗传算法、A*算法等经典算法"
              linkHidden={true} />
        </div>
        <div className="skill-desc">
           其他技能
        </div>
        <div className="skill-list">
           <Icon
              type={LINK_TYPE.PHP}
              text="掌握Web开发：PHP、Node.js，了解Python Flask、ASP.NET Core"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.LARAVEL}
              text="掌握Web框架：Laravel、ThinkPHP"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.REACT}
              text="掌握前端框架：Vue、React"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.PYTHON}
              text="熟练运用Python，了解C、C++、C#等语言"
              linkHidden={true} />
           <Icon
              type={LINK_TYPE.LINUX}
              text="熟练运用Linux系统，了解Linux命令，以及开发环境配置"
              linkHidden={true} />
        </div>
     </div></>
  )
}
