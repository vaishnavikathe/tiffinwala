import { Link } from "react-router-dom";

export default function VendorLogin() {
  return (
    <div className="w-full flex-grow bg-[#121621] flex flex-col items-center justify-center text-white py-12">
      <div className="w-full max-w-xs text-center">
        <h2 className="text-3xl font-bold mb-10">Vendor Login</h2>

        <div className="space-y-6">
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

          {/* Login Button */}
          <button className="w-full bg-[#1e5aff] hover:bg-blue-700 text-white font-medium py-3 rounded transition-colors mt-4">
            Login
          </button>

          {/* NEW: Registration Link */}
          <p className="mt-8 text-gray-400 text-sm">
            New vendor?{" "}
            <Link 
              to="/vendor/register" 
              className="text-[#1e5aff] font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}