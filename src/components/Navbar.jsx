// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TiffinWala</div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vendor">Register</NavLink>
        {/* Added Login Button */}
        <NavLink to="/login" className="login-btn-nav">Join as Vendor</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;