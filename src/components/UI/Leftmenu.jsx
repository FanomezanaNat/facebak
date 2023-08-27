import React from 'react'
import facebookIcon from "../../assets/icon/facebook-logo.svg";
export default function Leftmenu() {
    return (
        <>
            <div className='left-menu'>
                <img src={facebookIcon} className="brand" />
                <input type="search" name="" id="search" placeholder='search on facebook' />
            </div>
        </>
    )
}
