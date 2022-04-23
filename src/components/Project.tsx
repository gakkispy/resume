import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function Project() {
  return (
    <div>
        <Divider text="工作经验" />
            <PartList>
                <PartItem title="艾森斯软件公司 2019.09-2022.01"></PartItem>
                <PartList>
                    <PartItem 
                        info={`独立前端和生成PDF Node后端开发 管理用户从其他终端上传的图片和视频，支持不同角色群组对资源进行不同操作，视频发生点和拍摄行径能在地图上查看，添加，跳转等操作，视频和地图整体称为一个案件，一个案件可以由用户批注后下载为pdf`}
                        title="HKPF 图像视频后台管理系统"
                        technique={['vue2']}
                        >
                        <PartList>
                            <PartItem>
                                通过后端提供的swagger，自动化生成调用服务端api的axios代码，再通过全局配置axios自定义一些方法，为相应操作记录用户操作和接口重试等
                            </PartItem>
                            <PartItem>
                                优化请求图片的次数，将读取后的图片存入运行时内存，使用LFU算法将长久不再访问的图片释放，根据屏幕大小调整一屏图片数量，在图片定宽的条件下在三种视图下优化图片的间隙
                            </PartItem>
                            <PartItem>
                                优化生成pdf时间长问题，优化puppeteer使用方式，打开多页面而不是多次重新打开再闭关浏览器，将项目分离出一个生成pdf的入口文件，减少无用代码开销，在浏览器增加错误dom节点，而不是等待超时，更快的得到错误返回
                            </PartItem>
                            <PartItem>
                                为团队输出一些解决方案，利用puppeteer生成pdf方案，将arcgis地图和视频转成图片的方法，解决视频海报与视频比列不一致导致，刚开始播放使页面跳动问题，多输入下拉远程输入框组件
                            </PartItem>
                        </PartList>
                    </PartItem>
                    <PartItem
                        info={`合作开发 旧系统jsp重构成前后端分离办公系统，负责3个子系统的开发，包含出差审批系统，活动审批系统，员工管理系统，近100个表单开发，包括表单校验，计算表单，打印表单，邮件跳转到对应表单审批等功能`}
                        title="ogcio 办公系统审批相关系统"
                        technique={['react']}
                    >
                        <PartList>
                            <PartItem>
                                封装各种底层组件，并分享给负责其他子系统的同事，编写脚本，解决非兼容引入组件的方法变更，以实现在各个系统上，提高开发效率
                            </PartItem>
                            <PartItem>
                                设立service层，负责转换旧系统数据与新系统数据，以适配旧系统返回和接受的数据结构不变下，不影响新系统的基于ui设计的数据结构
                            </PartItem>
                            <PartItem>
                                优化项目在ipad的交互，利用webpack插件分离媒体查询代码，动态载入css样式，file-saver在ipad下载文件不能显示问题
                            </PartItem>
                        </PartList>  
                        
                    </PartItem>
                    <PartItem  
                        info="合作开发  为管理小程序富文本和用户信息的管理后台，主要负责项目前期基础搭建工作"
                        title="上港联 管理小程序的富文本后台"
                        technique={['vue3']}
                    >
                        <PartList>
                            <PartItem>
                                为团队踩坑vite和vue3，分享一些与以往webpack不同的注意点，和vue3项目代码组织问题
                            </PartItem>
                            <PartItem>
                                改造quill.js封装成vue3组件，定制toolbar，改造上传视频和图片模块，支持按钮和拖拽上传，并避免文件名重复，使其与ali-oss结合，上传结束后回填存储后的url到富文本
                            </PartItem>
                        </PartList>
                    </PartItem>
                </PartList>
            </PartList>
    </div>
  )
}
