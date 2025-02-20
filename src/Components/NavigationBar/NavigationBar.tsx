import React, { useState } from "react";
import { Link } from "react-router";
import "./NavigationBar.scss";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuDisplayForMobile = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mobile-menu">
        <button
          className="hamburger-open-button"
          aria-label="Open navigation menu"
          onClick={toggleMenuDisplayForMobile}
        >
          &#9776;
        </button>
      </div>

      <div className={`navigation-links-container ${isMenuOpen ? "show" : ""}`}>
        <div className="mobile-menu-close">
          <button
            className="hamburger-close-button"
            aria-label="Close navigation menu"
            onClick={toggleMenuDisplayForMobile}
          >
            &times;
          </button>
        </div>
        <Link to="/home" className="navigation-link">
          Home
        </Link>
        <Link to="/rover/perseverance" className="navigation-link">
          Perseverance
        </Link>
        <Link to="/rover/curiosity" className="navigation-link">
          Curiousity
        </Link>
        <Link to="/rover/spirit" className="navigation-link">
          Spirit
        </Link>
        <Link to="/rover/opportunity" className="navigation-link">
          Opportunity
        </Link>
      </div>
    </>
  );
}
export default NavigationBar;
