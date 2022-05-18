import React from 'react'
import Divider from '../Divider'
import PartItem, { PartList } from '../PartItem'

export default function Project() {
  return (
    <div>
        <Divider text="工作经验" />
            <PartList>
                <PartItem 
                    title="2016.06-2016.12 浙江省安全生产科学技术学会 理事长助理"
                />
                <PartItem
                    title={`2017.07-2018.06 宁波市有态度网络科技有限公司 微信开发`}
                >
                    <PartList>
                        <PartItem 
                            title={'微信公众号后台'}
                            info={'负责微信公众号后台的开发：授权、分享、支付打赏等功能'}
                        />
                        <PartItem
                            title={'微信小程序：每日早知晓（下线）'}
                            info='利用mpvue框架开发的一个简单的资讯类小程序，后端接口采用基于PHP Laravel框架实现的个人Blog Demo作为restful api接口；\n
                            实现后台管理系统，方便后台管理人员更新、管理资讯，统计访问量；\n
                            前端实现资讯的分类排序查看等功能'
                            className={{"title":"text-decoration-delete"}}
                            lineBreak={'info'}
                        />

                    </PartList>
                </PartItem>
                <PartItem
                    title={`2019.03-2019.08 宁波市嘉众信息科技有限公司 运维实施工程师`}
                    info={'网络设备的配置优化，提出升级或优化方案;数据备份，容灾，数据监控，应急响应，故障排除等工作;进行小型机、服务器、路由器等设备管理，以及网络平台的运行监控和维护；'}
                >
                    <PartList>
                        <PartItem
                            title={'项目经历'}
                        >
                            <PartList>
                                <PartItem
                                    title={'宁波市鄞州第二人民医院住院楼动迁'}
                                    info="负责宁波市鄞州第二人民医院住院楼动迁网络建设项目中所涉及到的部分：\n设备部署：根据所规划的新住院楼整体架构和各区域架构的设计，安装相关交换机、防火墙等设备；\nIP地址规划：根据所规划的IP地址规划和分配原则对新住院楼整体IP地址进行划分；\n其他相关工作。"
                                    lineBreak='info'
                                />
                                <PartItem
                                    title={'宁波市五乡卫生院容灾备份'}
                                    info="负责Veritas容灾备份系统的上线与配置，实现容灾备份系统的数据备份、故障恢复、数据监控等工作，并进行演练。"
                                    />

                            </PartList>
                        </PartItem>
                    </PartList>
                </PartItem>
            </PartList>
    </div>
  )
}
