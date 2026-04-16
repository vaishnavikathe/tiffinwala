import React, { useState } from 'react';

function VendorRegister() {
  const [formData, setFormData] = useState({
    vendorName: '', 
    restaurantName: '', 
    mobile: '', 
    email: '', 
    address: '', 
    cuisine: ''
  });

  // This handles updating the state when you type
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Request Sent!");
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <section className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center text-orange-600">
          Vendor Registration
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vendor Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Owner/Vendor Name</label>
            <input 
              name="vendorName"
              type="text" 
              value={formData.vendorName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant/Mess Name</label>
            <input 
              name="restaurantName"
              type="text" 
              value={formData.restaurantName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              placeholder="e.g. Nashik Tiffin Center"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input 
              name="mobile"
              type="tel" 
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              placeholder="10-digit number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Shop Address</label>
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              placeholder="Full address of your shop/restaurant"
              rows="3"
              required
            />
          </div>


            <div>
  <label className="block text-sm font-medium text-gray-700">
    Cuisine Type
  </label>

  <select
    name="cuisine"
    value={formData.cuisine}
    onChange={handleChange}
    className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-orange-500  outline-none"
    required
  >
    <option value="">-- Select --</option>
    <option value="maharashtrian">Maharashtrian</option>
    <option value="north-indian">North Indian</option>
    <option value="jain">Jain Food</option>
    <option value="multi">Multi-cuisine</option>
  </select>
</div>

            

          <button 
            type="submit" 
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-md active:scale-95"
          >
            Submit Registration
          </button>
        </form>
      </section>
    </div>
  );
}

export default VendorRegister;