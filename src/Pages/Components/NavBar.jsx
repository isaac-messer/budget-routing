import React from 'react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
    return (
        <>
            <nav>
        <Link to='/'>Home</Link>
        <Link to='/settings'>Settings</Link>
            </nav>
        </>
    )
}