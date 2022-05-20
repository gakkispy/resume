import React, { useContext } from "react";
import { TempContext } from "../../context";
import { TEMPLATE } from "../../types";
import EducationTurial from "../Exp/EducationTurial";
import PersonalProject from "../Exp/PersonalProject";
import PracticeProject from "../Exp/PracticeProject";
import Project from "../Exp/Project";

interface Props  {
    pageIndex: number
    cols?: number
}
export default function Content({pageIndex, cols}: Props) {
    const {template, setTemplate} = useContext(TempContext)
    return (
        <>
            {((cols == 1 && template == TEMPLATE.ONE) || template == TEMPLATE.TWO) && (<EducationTurial pageIndex={pageIndex} {...(template == '1' && cols != undefined && { cols: cols})}/>)}
            <PracticeProject pageIndex={pageIndex} {...(template == '1' && cols != undefined && { cols: cols})}/>
            <Project pageIndex={pageIndex} {...(template == '1' && cols != undefined && { cols: cols})}/>
            <PersonalProject pageIndex={pageIndex} {...(template == '1' && cols != undefined && { cols: cols})}/>
        </>)}