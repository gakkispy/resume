import React, { useContext } from 'react'
import Brief from '../Exp/Brief'
import Grid from '../Grid'
import Header from '../Header'
import PracticeProject from '../Exp/PracticeProject'
import Project from '../Exp/Project'
import { TempContext } from '../../context'
import SideBar from '../SideBar'
import Content from '../Content'

export default function FirstPage() {
  const {template, setTemplate} = useContext(TempContext)
  switch (template) {
    case '1':
      return (<><Header />
            <Grid
                left={(
                    <>
                    <Content pageIndex={1}/>
                    </>
                )}
                right={<Brief />}
            /></>)
    case '2':
      return (<Grid
            side={<SideBar />}
            main={<Content pageIndex={1}/>}
            />)
    default:
      return (<Grid
        side={<SideBar />}
        main={<Content pageIndex={1}/>}
        />)
  }
}
