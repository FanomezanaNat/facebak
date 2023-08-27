import React from 'react'
import messageIcon from "../../assets/icon/messages-icon.svg";
import notificationMessage from "../../assets/icon/notifications-icon.svg";
import menuIcon from "../../assets/icon/menu-icon.svg"
export default function Rightmenu() {
    return (
        <>
            <div className='right-menu'>
                <button className='menu'> <img src={menuIcon} alt="menu" /></button>
                <button className='messages'> <img src={messageIcon} alt="message" /></button>
                <button className='notification'> <img src={notificationMessage} alt="notification" /></button>
                <button className='account'></button>
            </div></>
    )
}
