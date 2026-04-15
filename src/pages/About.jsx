// pages/About.jsx
// This is the About page for TiffinWala.
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn more about TiffinWala and our mission.</p>
      </section>

      {/* ── ABOUT CONTENT ── */}
      <section className="about-content">

        {/* Our Story */}
        <div className="about-box">
          <h2>Our Story</h2>
          <p>
            TiffinWala was started in 2022 by two friends from Nashik. They noticed that
            students and working people around them struggled to find good, healthy, and
            affordable home-cooked food every day. So they built TiffinWala — a simple
            platform to connect local tiffin vendors with hungry customers.
          </p>
        </div>

        {/* Our Mission */}
        <div className="about-box mission-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple — to make sure everyone can get a fresh, healthy,
            home-cooked meal every single day. We want to support local tiffin vendors
            and help them reach more customers easily.
          </p>
        </div>

        {/* Info Cards */}
        <h2 className="section-title">What We Stand For</h2>
        <div className="about-grid">

          <div className="about-card">
            <span className="card-icon">🏠</span>
            <h3>Started from Home</h3>
            <p>We started small in Nashik and are now growing across Maharashtra and India.</p>
          </div>

          <div className="about-card">
            <span className="card-icon">📍</span>
            <h3>Growing Across India</h3>
            <p>We now serve over 30 cities and are adding new areas every month.</p>
          </div>

          <div className="about-card">
            <span className="card-icon">👩‍🍳</span>
            <h3>Supporting Vendors</h3>
            <p>We give vendors the tools and visibility they need to grow their business.</p>
          </div>

          <div className="about-card">
            <span className="card-icon">🤝</span>
            <h3>Community First</h3>
            <p>We are a community of vendors and customers who love good food.</p>
          </div>

        </div>

        {/* Our Values */}
        <h2 className="section-title">Our Values</h2>
        <div className="values-list">

          <div className="value-item">
            <span className="value-dot"></span>
            <div>
              <h4>Quality & Hygiene</h4>
              <p>We check every vendor to make sure the food is clean, safe, and fresh.</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-dot"></span>
            <div>
              <h4>Honest Pricing</h4>
              <p>No hidden charges. What you see is what you pay.</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-dot"></span>
            <div>
              <h4>On-Time Delivery</h4>
              <p>We take delivery time seriously. Late food is not acceptable to us.</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-dot"></span>
            <div>
              <h4>Food for Everyone</h4>
              <p>Affordable meals for students, families, and working professionals.</p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

export default About;