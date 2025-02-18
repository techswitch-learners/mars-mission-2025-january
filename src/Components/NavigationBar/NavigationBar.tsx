import React from 'react';
import {Link} from 'react-router-dom';
import "./NavigationBar.scss";

function NavigationBar() {


return (
    <>
        <div className="mobile-menu">
            <button className='hamburger-button'>&#9776;</button>
        </div>

        <div className="desktop-menu">
            <Link to="/home"> Home </Link>
            <Link to="/rover/Perseverance"> Perseverance</Link> 
            <Link to="/rover/Curiousity"> Curiousity </Link>
            <Link to="/rover/Spirit"> Spirit </Link> 
            <Link to="/rover/Opportunity"> Opportunity </Link> 
        </div>
    </>  
    );
}
export default NavigationBar;
