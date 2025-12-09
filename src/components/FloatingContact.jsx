import React from "react";
import whatsappLogo from "../assets/whatsapp-logo.webp";

function FloatingContact() {
  return (
    <a
      href="https://wa.me/919309729749"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-green-600 transition"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
      <span className="font-medium">Contact Us</span>
    </a>
  );
}

export default FloatingContact;
