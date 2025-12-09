import React from "react";
import { Link } from "react-router-dom";
import whatsappLogo from "../assets/whatsapp-logo.webp";
import facebookLogo from "../assets/facebook-logo.webp";
import instagramLogo from "../assets/instagram-logo.webp";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            V&P Elevators
          </h3>
          <p>Delivering safe, efficient, and innovative elevator solutions for over 25 years.</p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <p>📞 +91 9309729749</p>
          <p>✉️ vandpelevators@gmail.com</p>
          <p>🏢 Mumbai, Maharashtra, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://wa.me/919309729749" target="_blank">
              <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <img src={facebookLogo} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 V&P Elevators. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="https://www.vecteezy.com/free-photos/elevator-maintenance"
            target="_blank"
            className="hover:text-white"
          >
            Image Credits: Vecteezy & Png Tree
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
