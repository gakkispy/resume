import React, {useState} from "react"
import "./avatar.css"
import AvatarUrl from '../../assets/img/avatar-1.png'
import RealPhotoUrl from '../../assets/img/real-photo.jpg'

export default function Avatar() {
    return (
        <div className="avatar-top-box">
            <div className="avatar-img-box">
                <img src={import.meta.env.VITE_SECRIT ? AvatarUrl : RealPhotoUrl} alt="avatar" />
            </div>
        </div>
    )
}
