import React, {useContext, useState } from 'react'
import { TEMPLATE } from '../../types'
import { TempContext } from '../../context'


export default function SwitchTemplate() {
    const {template, setTemplate} = useContext(TempContext)
    return (
        <div className="style-btn-container">
            <button className='print-btn side-btn' onClick={() => setTemplate(TEMPLATE.ONE)}>版式1</button>
            <button className='print-btn full-btn' onClick={() => setTemplate(TEMPLATE.TWO)}>版式2</button>
        </div>
    )
}
