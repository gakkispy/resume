import React from 'react'
import './partItem.css'

interface Props{
    children?: React.ReactNode;
    info?: React.ReactNode;
    title?: React.ReactNode;
    technique?: string[];
    append?: boolean;
}
export default function PartItem({children, info, title, technique, append}: Props) {
  return (
        <li>
            <div className='item-container'>
               {title && <div className="title-container">
                  <div className="title">{title}</div>
                  {technique && <div className="technique">{technique.join(',')}</div>}
                </div>}
               {!append && info && <div className="bg-info">
                  {info}
                </div>}
                <div className='content'>
                {children}    
                </div>
                {append && info && <div className="bg-info">
                  {info}
                </div>}
            </div>
        </li>
  )
}
export function PartList({children}: Props) {
  return (
        <ul>
            {children}
        </ul>
  )
}
