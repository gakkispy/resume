import React, { useContext } from "react";
import { TempContext } from "../../context";
import EducationTurial from "../Exp/EducationTurial";
import PersonalProject from "../Exp/PersonalProject";
import Project from "../Exp/Project";

interface Props  {
    pageIndex: number
}
export default function Content({pageIndex}: Props) {
    const {template, setTemplate} = useContext(TempContext)
    return (
        <>
            <EducationTurial pageIndex={pageIndex}></EducationTurial>
            <Project pageIndex={pageIndex}></Project>
            <PersonalProject pageIndex={pageIndex}></PersonalProject>
        </>)}