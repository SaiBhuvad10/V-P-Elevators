import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="V&P Elevators" className="w-12 h-12" />
          <span className="font-bold text-lg text-gray-800">V&P Elevators</span>
        </div>

        {/* Hamburger */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex gap-6 font-medium text-gray-700`}
        >
          <NavLink to="/" className="hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-600">
            About
          </NavLink>
          <NavLink to="/services" className="hover:text-blue-600">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
