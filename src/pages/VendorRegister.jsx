import { Link } from "react-router-dom";

export default function VendorRegister() {
  return (
    <div className="w-full flex-grow bg-[#121621] flex flex-col items-center justify-center text-white py-12">
      <div className="w-full max-w-xs text-center">
        <h2 className="text-3xl font-bold mb-10">Vendor Registration</h2>

        <div className="space-y-6">
          {/* Shop/Restaurant Name Field */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-gray-300">Shop / Restaurant Name</label>
            <input 
              type="text" 
              placeholder="Enter name"
              className="bg-transparent border border-gray-600 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-center"
            />
          </div>

          {/* Shop/Restaurant Address Field */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-gray-300">Shop Address</label>
            <textarea 
              placeholder="Enter full address"
              rows="3"
              className="bg-transparent border border-gray-600 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-center resize-none"
            />
          </div>

          {/* Owner/Vendor Name Field */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-gray-300">Owner Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="bg-transparent border border-gray-600 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-center"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-gray-300">Email</label>
            <input 
              type="email" 
              placeholder="Enter email"
              className="bg-transparent border border-gray-600 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-center"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col items-center">
            <label className="mb-2 text-gray-300">Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              className="bg-transparent border border-gray-600 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-center"
            />
          </div>

          {/* Register Button */}
          <button className="w-full bg-[#1e5aff] hover:bg-blue-700 text-white font-medium py-3 rounded transition-colors mt-4">
            Register Business
          </button>

          {/* Navigation to Login Page */}
          <p className="mt-8 text-gray-400 text-sm">
            Already have an account?{" "}
            <Link 
              to="/vendor/login" 
              className="text-[#1e5aff] font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}