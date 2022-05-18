import React, { useContext, useState } from 'react'
import { TempContext } from '../../context';
import { LINK_TYPE, TEMPLATE } from '../../types'
import './icon.css'

interface Props{
    linkHidden?: boolean;
    textHidden?: boolean;
    type?: LINK_TYPE;
    icon?: string;
    text: string;
}
const matchUrlType = (text: string) => {
  if(text.match('github')) {
    return LINK_TYPE.GITHUB
  }else if(text.match(/^\d+$/)){
    return LINK_TYPE.PHONE
  }else if(text.match(/@/)){
    return LINK_TYPE.EMAIL
  }
}
const matchIconType = (text: unknown) => {
  switch (text){
    case LINK_TYPE.EMAIL:
      return 'icon-envelope'
    case LINK_TYPE.GITHUB:
      return 'icon-github'
    case LINK_TYPE.PHONE:
      return 'icon-mobile'
    case LINK_TYPE.HOME:
      return 'icon-house'
    case LINK_TYPE.NATION:
      return 'icon-earth'
    case LINK_TYPE.EDUCATION:
      return 'icon-education'
    case LINK_TYPE.NEURALNETWORK:
      return 'icon-neuralnetwork'
    case LINK_TYPE.DEEPLEARNING:
      return 'icon-deeplearning'
    case LINK_TYPE.CV:
      return 'icon-computervision'
    case LINK_TYPE.ROBOT:
      return 'icon-robot'
    case LINK_TYPE.PHP:
      return 'icon-php'
    case LINK_TYPE.LARAVEL:
      return 'icon-laravel'
    case LINK_TYPE.REACT:
      return 'icon-react'
    case LINK_TYPE.PYTHON:
      return 'icon-python'
    case LINK_TYPE.LINUX:
      return 'icon-linux'
    default: 
      return 'icon-link'
  }
}

const judgeGender = (text: string) => {
  if(text.match('男')) {
    return 'icon-sexm'
  }else if(text.match('女')){
    return 'icon-sexw'
  } else {
    return null
  }
}
export default function Icon(props: Props) {
  const { type, icon, text, linkHidden, textHidden } = props
  const {template, setTemplate} = useContext(TempContext)
  const defaultType = type || matchUrlType(text)
  const defaultGenderIcon = judgeGender(text)
  const defaultIcon = icon || (defaultGenderIcon || matchIconType(defaultType))
  const formatLink = defaultType === LINK_TYPE.EMAIL? `mailto:${text}` : text
  const isMobile = defaultType === LINK_TYPE.PHONE
  const shouldHidden = typeof props.linkHidden !== 'undefined'? props.linkHidden : import.meta.env.PROD
  const iconPosition = template === TEMPLATE.TWO? 'icon-position-left' : ''
  return (
    <>{template == TEMPLATE.ONE ? (
        <BaseIcon iconName={defaultIcon} className={`${iconPosition && iconPosition} ${textHidden ? 'inlineFlex' : ''}`}>
      {shouldHidden && isMobile? (
          <span className="link">{text.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3")}</span>
        ): (
          <a {...(!linkHidden && {href: `${formatLink}`, target: 'blank'})} className="link">{!textHidden && text}</a>
        )}
    </BaseIcon>
    ):(
      <FrontIcon iconName={defaultIcon}  className={`${iconPosition} ${textHidden ? 'inlineFlex' : ''}`}>
        {shouldHidden && isMobile? (
          <span className="link">{text.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3")}</span>
        ): (
          <a {...(!linkHidden && {href: `${formatLink}`, target: 'blank'})} className="link">{!textHidden && text}</a>
        )}
      </FrontIcon>
    )}</>
        
  )
}
interface BaseIconProps {
  iconName: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler
  className?: string
}
export function BaseIcon({ iconName, children, onClick, className}: BaseIconProps) {
  return (
    <div className={`icon-container ${className? className : ''}`} onClick={onClick}>
      { children }
      <svg aria-hidden="true" className='icon'>
        <use href={'#' + iconName} />
      </svg>
    </div>
  )
}


export function FrontIcon({ iconName, children, onClick, className }: BaseIconProps) {
  return (
    <div className={`icon-container ${className? className : ''}`} onClick={onClick}>
      <svg aria-hidden="true" className='icon'>
        <use href={'#' + iconName} />
      </svg>
      { children }
    </div>
  )
}
