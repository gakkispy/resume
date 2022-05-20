import React from 'react'
import { LINK_TYPE } from '../../types';
import Icon from '../Icon';
import './partItem.css'
import lineBreakUtil from '../../utils/lineBreak'

interface Props{
    children?: React.ReactNode;
    info?: React.ReactNode;
    title?: React.ReactNode;
    technique?: string[];
    append?: boolean;
    icon?: icon;
    className?: className
    lineBreak?: string;
}

interface icon {
    type: LINK_TYPE;
    text?: string;
    textHidden?: boolean;
}
interface className {
  container?: string;
  title?:string;
  info?: string;
  content?: string;
}
 

export default function   PartItem(this: any, {children, info, title, technique, append, icon, className, lineBreak}: Props) {
  switch(lineBreak) {
    case 'children':
      children = lineBreakUtil(children);
    case 'title':
      title = lineBreakUtil(title);
    case 'info':
      info = lineBreakUtil(info);
      console.log(info)
    default:
      break;
  }
  const classNames = className ? className : {};
  return (
        <li>
            <div className={`${classNames.container ? classNames.container : ""} item-container`}>
               {title && <div className="title-container">
                  <div className={`${classNames.title ? classNames.title : ""} title`} {...(icon?.text && {onClick: titleClick(icon.text)})}>{icon && <Icon textHidden={icon.textHidden} text={icon.text ? icon.text : ''} type={icon.type} />}{title}</div>
                  {technique && <div className="technique">{technique.join(',')}</div>}
                </div>}
               {!append && info && <div className={`${classNames.info ? classNames.info : ""} bg-info`}>
                  {info}
                </div>}
                <div className={`${classNames.content ? classNames.content : ""} item-content`}>
                {children}    
                </div>
                {append && info && <div className={`${classNames.info ? classNames.info : ""} bg-info`}>
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


export function titleClick(url:string) {
  return () => {
    window.open(url)
  }
}