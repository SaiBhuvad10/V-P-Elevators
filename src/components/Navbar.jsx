import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Update the path if needed

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand-section">
        <div className="logo-wrapper">
          <div className="logo-container">
            <img src={logo} alt="V&P Elevators Logo" />
          </div>
          <span className="brand-name">V&P Elevators</span>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeclassname="active">
          About
        </NavLink>
        <NavLink to="/services" className="nav-link" activeclassname="active">
          Services
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
