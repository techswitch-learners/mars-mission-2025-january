import React from 'react';
import {Link} from 'react-router-dom';
import "./NavigationBar.scss";

function NavigationBar() {    
    const showMenu = () => {
        const divContainer = document.getElementById("navigation-links-container");
        (divContainer as HTMLElement).style.display = 'flex';
        const elements = document.getElementsByClassName("navigation-link");
        for (let i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.display = 'flex';
        }
    }
return (
    <>
        <div className="mobile-menu">
            <button className='hamburger-button' onClick={showMenu}>&#9776;</button>
        </div>

        <div className="navigation-links-container" id="navigation-links-container">
            <Link to="/home" className='navigation-link'> Home </Link>
            <Link to="/rover/Perseverance" className='navigation-link'> Perseverance</Link> 
            <Link to="/rover/Curiousity" className='navigation-link'> Curiousity </Link>
            <Link to="/rover/Spirit" className='navigation-link'> Spirit </Link> 
            <Link to="/rover/Opportunity" className='navigation-link'> Opportunity </Link> 
        </div>
    </>  
    );
}
export default NavigationBar;
