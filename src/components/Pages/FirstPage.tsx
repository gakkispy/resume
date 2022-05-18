import React from 'react'
import Brief from '../Exp/Brief'
import Grid from '../Grid'
import Header from '../Header'
import PracticeProject from '../Exp/PracticeProject'
import Project from '../Exp/Project'

export default function FirstPage() {
  return (
    <>
        <Header />
        <Grid
            left={(
                <>
                <Project />
                <PracticeProject />
                </>
            )}
            right={<Brief />}
        />
    </>
  )
}
