// pages/Home.jsx
// The main landing page for TiffinWala.
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Fresh Tiffin Delivered to Your Doorstep</h1>
          <p>Connect with local tiffin vendors and enjoy home-cooked meals every day.</p>
          <div className="hero-buttons">
            <Link to="/vendor" className="btn">Register Your Mess</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="stats">
        <div className="stat-box">
          <h2>500+</h2>
          <p>Registered Vendors</p>
        </div>
        <div className="stat-box">
          <h2>10,000+</h2>
          <p>Meals Served Daily</p>
        </div>
        <div className="stat-box">
          <h2>30+</h2>
          <p>Cities Covered</p>
        </div>
        <div className="stat-box">
          <h2>4.8 ★</h2>
          <p>Average Rating</p>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="features">
        <h2 className="section-title">Why Choose TiffinWala?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>On-time Delivery</h3>
            <p>Meals delivered hot and on time to your home or office every day.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Verified Vendors</h3>
            <p>Every vendor is checked for quality and hygiene before joining our platform.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Price</h3>
            <p>Daily, weekly and monthly plans starting from just ₹60 per meal.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🥗</div>
            <h3>Healthy & Diverse</h3>
            <p>Balanced meals with vegetarian, Jain, and regional options available.</p>
          </div>
        </div>
      </section>

      {/* ── VENDOR CTA SECTION ── */}
      <section className="cta">
        <div className="cta-content">
          <h2>Want to Grow Your Tiffin Business?</h2>
          <p>Join hundreds of vendors already earning more with TiffinWala.</p>
          <Link to="/vendor" className="btn btn-large">Start Registering Now</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;