import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import '../App.css'; // Assuming your CSS is here

function Footer() {
  return (
    <footer className="vp-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>V&P Elevators</h3>
          <p>Delivering safe, efficient, and innovative elevator solutions for over 25 years.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📞 +91 9309729749</p>
          <p>✉️ vandpelevators@gmail.com</p>
          <p>🏢 Mumbai, Maharashtra, India</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#carousel">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://wa.me/919309729749" target="_blank" rel="noopener noreferrer">
              <img src={whatsappLogo} alt="WhatsApp" className="social-logo" />
            </a>
            <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
            </a>
            <a href="https://instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="social-logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 V&P Elevators. All rights reserved.</p>
        <p>
          <a
            href="https://www.vecteezy.com/free-photos/elevator-maintenance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Credits: Vecteezy & Png Tree
          </a>
          <a href='https://pngtree.com/freepng/whatsapp-icon-whatsapp-logo-whatsapp-icon-free-template_3584845.html'>png image from pngtree.com/</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
