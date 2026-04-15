// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import VendorRegister from './pages/VendorRegister.jsx';
// 1. Create this file in your pages folder first!
import Login from './pages/VendorLogin.jsx'; 

// 2. Fix this path to match your folder structure
import './styles/style.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/vendor"  element={<VendorRegister />} />
        {/* 3. Added the Login Route */}
        <Route path="/login"   element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;