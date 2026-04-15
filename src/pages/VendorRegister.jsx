// pages/VendorRegister.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function VendorRegister() {

  // ── FORM DATA STATE ──
  // Stores all input values in one object
  const [formData, setFormData] = useState({
    vendorName:     '',
    restaurantName: '',
    mobile:         '',
    email:          '',
    address:        '',
    cuisine:        ''
  });

  // ── UI STATE ──
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ── HANDLE INPUT CHANGE ──
  // Updates state dynamically as the user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // ── HANDLE FORM SUBMIT ──
  function handleSubmit(e) {
    e.preventDefault(); // Prevents page reload

    // Step 1: Validation
    if (
      !formData.vendorName ||
      !formData.restaurantName ||
      !formData.mobile ||
      !formData.email ||
      !formData.address
    ) {
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }

    // Step 2: Mobile Check (10 digits)
    if (formData.mobile.length !== 10 || isNaN(formData.mobile)) {
      setErrorMessage('Mobile number must be exactly 10 digits.');
      return;
    }

    // Step 3: Success Logic
    setErrorMessage('');
    setIsSubmitted(true);

    // Reset the form fields after successful submission
    setFormData({
      vendorName: '',
      restaurantName: '',
      mobile: '',
      email: '',
      address: '',
      cuisine: ''
    });

    console.log("New Vendor Registered:", formData);
  }

  return (
    <div className="vendor-register-page">
      <Navbar />

      <section className="page-header">
        <h1>Register as a Vendor</h1>
        <p>Join TiffinWala and grow your business by reaching local customers.</p>
      </section>

      <section className="form-section">
        <div className="form-box">
          <h2>Vendor Details</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Owner/Vendor Name *</label>
              <input
                type="text"
                name="vendorName"
                placeholder="Full Name"
                value={formData.vendorName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Restaurant / Mess Name *</label>
              <input
                type="text"
                name="restaurantName"
                placeholder="e.g. Annapurna Mess"
                value={formData.restaurantName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                maxLength="10"
                placeholder="10-digit number"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Full Address *</label>
              <textarea
                name="address"
                rows="3"
                placeholder="Shop address, Area, City"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Cuisine Type</label>
              <select name="cuisine" value={formData.cuisine} onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="maharashtrian">Maharashtrian</option>
                <option value="north-indian">North Indian</option>
                <option value="jain">Jain Food</option>
                <option value="multi">Multi-cuisine</option>
              </select>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
              disabled={isSubmitted}
              style={{ width: '100%', opacity: isSubmitted ? 0.6 : 1 }}
            >
              {isSubmitted ? 'Request Sent!' : 'Submit Registration'}
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✓ Registration successful! Our team will call you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default VendorRegister;