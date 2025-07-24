import React from 'react';
import logoImage from '../assets/Logo.jpeg';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logoImage} alt="V&P Elevators Logo" className="logo-img" />
        <span className="brand-name">V&P Elevators</span>
      </div>

      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
