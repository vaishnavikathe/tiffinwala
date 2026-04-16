import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login system coming soon!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAFAF8] px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-sm border border-[#E8630A1A]">
        <h2 className="text-3xl font-serif font-bold text-[#1A1208] mb-2 text-center">
          Vendor Login
        </h2>
        <p className="text-[#7A6A5A] text-center mb-8 text-sm">
          Manage your tiffin service and orders
        </p>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[#1A1208] uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E8630A] outline-none transition-all"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1208] uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E8630A] outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-[#1A1208] text-white rounded-lg font-bold hover:bg-[#E8630A] transition-all transform active:scale-[0.98] shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#7A6A5A]">
          New to TiffinWala?{' '}
          <Link to="/vendor" className="text-[#E8630A] font-bold hover:underline">
            Register your business
          </Link>
        </p>
      </div>
    </div>
  );
}

export default VendorLogin;