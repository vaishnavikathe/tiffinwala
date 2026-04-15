// pages/Login.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    alert("Login functionality will be connected to the database soon!");
  };

  return (
    <div className="login-page">
      <Navbar />
      <section className="form-section">
        <div className="form-box">
          <h2>Vendor Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p style={{ marginTop: '15px', textAlign: 'center' }}>
            New vendor? <a href="/vendor">Register here</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;