import React from 'react'
import Divider from '../Divider'
import PartItem, { PartList } from '../PartItem'

export default function Project(props: { pageIndex: number, cols?: number }) {
    return (
        <div>
            <Divider text="工作经验" />
            <PartList>
                {props.pageIndex  == 1 && (<><PartItem
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
                            className={{ "title": "text-decoration-delete" }}
                            lineBreak={'info'}
                        />

                    </PartList>
                </PartItem></>)},
                {props.pageIndex  == 2 && (<><PartItem
                    title={`2019.03-2019.08 宁波市嘉众信息科技有限公司 运维实施工程师`}
                    info={'网络设备的配置优化，提出升级或优化方案;数据备份，容灾，数据监控，应急响应，故障排除等工作;进行小型机、服务器、路由器等设备管理，以及网络平台的运行监控和维护；'}
                >
                    {/* <PartList>
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
                    </PartList> */}
                <PartItem
                    title={`2022.07-至今，宁波市某仪器仪表公司 算法研究工程师`}
                    info={`任职公司研究中心算法研究工程师一职，负责研究适合公司仪器设备的算法并编写，期间将部门原有算法进行了整合重构，搭建了内部算法测试工具。`}
                >
                    <PartList>
                        <PartItem
                            title={`信号异常检测算法Debug`}
                            info={`解决公司原有异常检测算法在部分情况下失效的问题，该算法采用随机森林进行机器学习，对异常信号进行特征匹配来进行异常判断，由于此前人员训练过程中将部分参数写为固定值，后续产品迭代参数变动，因此将参数改为形参输入，并重新训练解决。`}
                        />
                        <PartItem
                            title={`一元线性回归并寻找最佳线性度区间算法`}
                            info={`由于硬件参数实际值与理论值出现波动，因此采用一元线性回归来进行拟合后寻找最佳线性度区间，采用R^2作为评价指标`}
                        />
                        <PartItem
                            title={`重叠峰解析算法`}
                            info={`采用scipy的find_peaks，获取在阈值范围内的峰谷点，判断是否存在重叠峰形，若是，采用基于高斯函数的多元曲线拟合，将峰形解析为若干个高斯峰。`}
                        />
                    </PartList>
                </PartItem>
                </PartItem></>)}
            </PartList>
        </div>
    )
}
