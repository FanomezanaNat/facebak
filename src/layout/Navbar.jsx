import React from 'react'
import Leftmenu from '../components/UI/Leftmenu';
import Rightmenu from '../components/UI/Rightmenu';
import Middlemenu from '../components/UI/Middlemenu';

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Leftmenu />
                <Middlemenu />
                <Rightmenu />
            </nav>
        </>
    )
}
