import React from 'react'
import { LINK_TYPE } from '../../types'
import './icon.css'

interface Props{
    hidden?: boolean;
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
    default: 
      return 'icon-link'
  }
}
export default function Icon(props: Props) {
  const { type, icon, text, hidden } = props
  const defaultType = type || matchUrlType(text)
  const defaultIcon = icon || matchIconType(defaultType)
  const formatLink = defaultType === LINK_TYPE.EMAIL? `mailto:${text}` : text
  const isMobile = defaultType === LINK_TYPE.PHONE
  const shouldHidden = typeof props.hidden !== 'undefined'? props.hidden : import.meta.env.PROD
  return (
    <BaseIcon iconName={defaultIcon}>
      {shouldHidden && isMobile? (
          <span className="link">{text.replace(/(\d{3})(\d+)(\d{3})/, "$1***$3")}</span>
        ): (
          <a href={hidden? '' : formatLink} className="link">{text}</a>
        )}
    </BaseIcon>    
  )
}
interface BaseIconProps {
  iconName: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler
  className?: string
}
export function BaseIcon({ iconName, children, onClick, className }: BaseIconProps) {
  return (
    <div className={`icon-container ${className? className : ''}`} onClick={onClick}>
      { children }
      <svg aria-hidden="true" className='icon'>
        <use href={'#' + iconName} />
      </svg>
    </div>
  )
}
