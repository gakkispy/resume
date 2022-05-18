import React, {useState} from "react"
import "./avatar.css"
import AvatarUrl from '../../assets/img/avatar-1.png'

export default function Avatar() {
    return (
        <div className="avatar-top-box">
            <div className="avatar-img-box">
                <img src={AvatarUrl} alt="avatar" />
            </div>
        </div>
    )
}
