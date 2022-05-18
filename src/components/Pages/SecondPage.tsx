import React from 'react'
import Grid from '../Grid'
import PartItem, { PartList } from '../PartItem'
import PersonalProject from '../Exp/PersonalProject'

export default function SecondPage() {
  return (
    <div>
          <Grid
              left={
              <>
                <PartList>
                  <PartItem>
                    向file-saver提pull/request解决safair 6.0+不能在新窗口打开并下载，向vue-html-to-paper提pull/reuqeset,解决生成pdf时form表单控件丢失输入输出
                  </PartItem>
                </PartList>
                <PersonalProject></PersonalProject>
              </>
            }
          />
    </div>
  )
}
