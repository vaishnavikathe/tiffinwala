import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // Styles for the standard navigation links
  const navLinkClasses = ({ isActive }) => 
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-[#E8630A]' : 'text-[#7A6A5A] hover:text-[#E8630A]'
    }`;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-[70px] px-8 bg-white border-b border-[#E8630A1A]">
      
      {/* Logo: Matching the v2 HTML style */}
      <NavLink to="/" className="text-xl font-bold font-serif tracking-tight">
        <span className="text-[#E8630A]">Tiffin</span>
        <span className="text-[#1A1208]">Wala</span>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <NavLink to="/" end className={navLinkClasses}>
          Home
        </NavLink>
        
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>

        {/* Register Button: Border style from v2 HTML */}
        <NavLink 
          to="/vendor" 
          className="px-5 py-2 text-sm font-medium text-[#E8630A] border border-[#E8630A33] rounded-lg hover:bg-[#FFF4EC] transition-all"
        >
          Register
        </NavLink>

        {/* Join as Vendor: Dark button from v2 HTML */}
        <NavLink 
          to="/login" 
          className="px-5 py-2 text-sm font-medium text-white bg-[#1A1208] rounded-lg hover:bg-[#E8630A] transition-all shadow-sm active:scale-95"
        >
          Join as Vendor
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;