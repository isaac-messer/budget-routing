import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BudgetContext } from '../Context';

export const NavBar = () => {
    const { user, title } = useContext(BudgetContext);

    return (
        <>    
            <nav>
                <div id="personalInfo">
                    <h4>{user}</h4>       
                </div>
                <div id="titleInfo">
                    <h3>{title}</h3>
                </div>
                <div id="navInfo">
                    <h4><span>
                        <Link to='/'>Home</Link>
                        <Link to='/settings'>Settings</Link>   
                    </span></h4>
                </div>
                
            </nav> 
        </>
    );
};