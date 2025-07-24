import React from 'react';

const FloatingContact = () => {
  return (
   <a
  href="https://wa.me/919309729749"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg px-4 py-2 hover:bg-green-600 transition duration-300 z-50"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {/* WhatsApp icon paths... */}
  </svg>
  <span className="font-medium hidden md:inline">Contact Us</span>
</a>

  );
};

export default FloatingContact;
