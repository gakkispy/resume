import React, { useContext } from 'react'
import Grid from '../Grid'
import PartItem, { PartList } from '../PartItem'
import PersonalProject from '../Exp/PersonalProject'
import { TempContext } from '../../context'
import Content from '../Content'
import Brief from '../Exp/Brief'
import Header from '../Header'
import SideBar from '../SideBar'

export default function SecondPage() {
  const {template, setTemplate} = useContext(TempContext)
  switch (template) {
    case '1':
      return (<>
            <Grid
                left={(
                    <>
                    <Content pageIndex={2}/>
                    </>
                )}
                right={<Brief />}
            /></>)
    case '2':
      return (<Grid
            side={<SideBar />}
            main={<Content pageIndex={2}/>}
            />)
    default:
      return (<Grid
        side={<SideBar />}
        main={<Content pageIndex={2}/>}
        />)
  }
}