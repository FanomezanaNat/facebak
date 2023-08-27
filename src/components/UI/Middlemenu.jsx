import React from 'react'
import homeIcon from "../../assets/icon/home-icon.svg";
import watchIcon from "../../assets/icon/watch-icon.svg";
import marketplaceIcon from "../../assets/icon/marketplace-icon.svg";
import groupsIcon from "../../assets/icon/groups-icon.svg";
import gamesIcon from "../../assets/icon/games-icon.svg";

export default function Middlemenu() {
    return (
        <>
            <div className='middle-menu'>
                <button className='home'> <img src={homeIcon} alt="home" /></button>
                <button className='friendlist'> <img src={groupsIcon} alt="friendlist" /></button>
                <button className='videos'><img src={watchIcon} alt="videos" /></button>
                <button className='market'> <img src={marketplaceIcon} alt="market" /></button>
                <button className='games'> <img src={gamesIcon} alt="games" /></button>
            </div>
        </>
    )
}
