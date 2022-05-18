import React from 'react'
import Brief from '../Exp/Brief'
import Grid from '../Grid'
import Header from '../Header'
import PracticeProject from '../Exp/PracticeProject'
import Project from '../Exp/Project'
import SideBar from '../SideBar'
import EducationTurial from '../Exp/EducationTurial'
import PersonalProject from '../Exp/PersonalProject'

export default function OnePage() {
    return (
        <>
            <Grid
                main={(
                    <>
                    <EducationTurial />
                    <Project />
                    <PersonalProject />
                    </>
                )}
                side={<SideBar/>}
            />
        </>
    )
}
