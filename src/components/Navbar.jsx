import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Replace with correct path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <div className="logo-container">
          <img src={logo} alt="V&P Elevators Logo" />
        </div>
        <span className="brand-name">V&P Elevators</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
