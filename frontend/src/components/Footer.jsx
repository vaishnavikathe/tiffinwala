
import React from 'react';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1208] text-center py-6">

      <p className="font-sans text-sm text-gray-400">
        © {currentYear} <span className="text-orange-400">TiffinWala</span> — Fresh meals, happy customers.
      </p>

      <p className="font-sans text-xs text-gray-500 mt-1">
        Healthy home-cooked meals delivered to your doorstep.
      </p>

    </footer>
  );
}

export default Footer;