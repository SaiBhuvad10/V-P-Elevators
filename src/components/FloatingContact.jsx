import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png'; // adjust path if needed
import '../App.css';

const FloatingContact = () => {
  return (
    <a
      href="https://wa.me/919309729749"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-contact"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-img" />
      <span className="contact-text">Contact Us</span>
    </a>
  );
};

export default FloatingContact;
