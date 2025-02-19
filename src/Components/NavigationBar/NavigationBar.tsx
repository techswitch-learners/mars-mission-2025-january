import React, { useState } from 'react';
import { Link } from 'react-router';
import "./NavigationBar.scss";

function NavigationBar() {    
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenuDisplayForMobile = () => {    
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
    <>
        <div className="mobile-menu">
            <button className='hamburger-open-button' onClick={toggleMenuDisplayForMobile}>&#9776;</button>
        </div>

        <div className={`navigation-links-container ${isMenuOpen ? 'show' : ''}`}>
            <div className="mobile-menu-close">
                <button className='hamburger-close-button' onClick={toggleMenuDisplayForMobile}>&times;</button>
            </div>
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
