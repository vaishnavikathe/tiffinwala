
import React from 'react';

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} TiffinWala. All rights reserved.</p>
        <p style={{ fontSize: '12px', marginTop: '5px', opacity: 0.7 }}>
          Healthy home-cooked meals delivered to your doorstep.
        </p>
      </div>
    </footer>
  );
}

export default Footer;