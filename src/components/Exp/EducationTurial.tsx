import React from 'react'
import Divider from '../Divider'
import Icon from '../Icon'
import PartItem, { PartList } from '../PartItem'
import { LINK_TYPE } from '../../types'

export default function EducationTurial() {
    return (
        <div>
            <Divider text="教育经历" />
            <PartList>
                <PartItem
                    title="2012-2016 中国计量大学，安全工程专业，本科"
                    info="GPA: 2.8"
                    icon={{'type':LINK_TYPE.EDUCATION,
                            'textHidden':true,}}
                >
                    <PartList>
                        <PartItem
                            title="在校经历简介"
                        >
                            <PartList>
                                <PartItem title="学生组织经历">
                                    校社联办公室副主任、校粤港澳文化社组织部部长、班级生活委员"
                                </PartItem>
                                <PartItem title="奖惩情况">
                                二等奖学金一次、优秀班干部一次、三好学生一次"
                                </PartItem>
                            </PartList>
                        </PartItem>
                    </PartList>
                </PartItem>
                <PartItem
                    title="2019-2022 中国计量大学，安全工程专业，硕士"
                    info="GPA: 3.36"
                    icon={{'type':LINK_TYPE.EDUCATION,
                            'textHidden':true,}}
                >
                    <PartList>
                        <PartItem title="在校经历简介">
                            <PartList>
                                <PartItem title="奖惩情况 ">
                                一等奖学金两次、二等奖学金四次
                                </PartItem>
                            </PartList>
                        </PartItem>
                        <PartItem title="科研情况">
                            <PartList>
                                <PartItem  
                                    title="发明专利《基于人体骨架特征的3D卷积神经网络不安全行为检测系统》，公开，第一作者"
                                    info="专利号：CN111412044A，
                                        本发明公开了一种基于人体骨架特征的3D
                                        卷积神经网络不安全行为检测系统。发明涉及人
                                        体目标检测、人体姿态以及人体行为识别技术领
                                        域。该系统可以通过输入安全生产作业场所实时
                                        监控画面，通过YOLOX‑Tiny算法模型得到人体最
                                        小矩形包围框的坐标信息，减少视频冗余，随后
                                        使用LiteHRNet生成人体骨骼特征向量，最后基
                                        于PoseC3D人体动作识别网络模型来对作业人员
                                        是否存在不安全行为进行判断和行为分类。本发
                                        明采用轻量化算法，同时对输入视频影像进行逐
                                        帧冗余过滤，保留关键信息，在保障了识别精度
                                        的前提下提高了动作识别的实时性。"
                                        />
                                <PartItem
                                    title="《基于改进型Lite-HRNet和PoseC3D的行为识别模型》，在投"
                                    info=""
                                    />
                                <PartItem
                                    title="《基于改进型Radam优化器的DDPG路径规划算法》，在投"
                                    info=""
                                />
                            </PartList>
                        </PartItem>
                        <PartItem title="参与课题">
                            <PartList>
                                <PartItem
                                    title="《基于不安全行为识别的安防巡逻机器人研究》，毕业论文课题"
                                    info="本文提出了可以搭载于机器人平台上的DD-Net不安全行为识别方案用以实现安防巡逻机器人实现重点区域巡逻以及实现智能化行为识别的需求。
                                    通过分析对比方案各个模块的构成，确定使用基于采用Focal-Loss损失函数改进后的DD-Net作为本方案的核心，
                                    利用Swin-Transformer用作人体目标检测、Lite-HRNet提取人体骨架特征。本文提出的改进DD-Net网络，
                                    在进行训练后在JHMDB数据集上取得了比原网络精度提升10%左右的成绩，方案整体效果识别达到了92%的精度。\n
                                    其次，针对路径规划任务中DDPG原有算法存在的缺陷，提出了基于RAdam优化器的改进型DDPG算法。
                                    利用额外奖励函数，实现了路径规划算法优先选择重点巡逻区域目标的相关策略。改进后的DDPG算法在原算法的基础上，
                                    在避障场景下收敛速度提高21%，成功率提高至86%，额外奖励场景下，其收敛速度提高30%，成功率提高至96%。\n
                                    最后，将不安全行为识别方案的ROS机器人，用于在实际环境中测试，验证不安全行为识别方案
                                    ，实验证明了不安全行为识别方案在机器人平台下仍然具有一定的处理能力进行不安全行为的识别；
                                    将改进DDPG算法的路径规划方案部署至巡逻机器人上，验证了在实际环境下，路径规划方案能够优先基于重点巡逻区域的标注进行最优路径的选择。"
                                    lineBreak='info'
                                />
                            </PartList>
                        </PartItem>
                    </PartList>
                </PartItem>
            </PartList>
        </div>
    )
}

