import { Link } from "react-router-dom";

const VendorLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F2] px-6">
      <div className="form-card w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-orange-100 transition-all">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="heading text-3xl font-bold text-[#1A1208] mb-2">Vendor Login</h2>
          <p className="text-sm text-gray-500 subheading">Welcome back! Please enter your details.</p>
        </div>
        
        <form className="space-y-5">
          {/* Email Field */}
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="name@kitchen.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="text-left">
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <Link to="/forgot-password" size="sm" className="text-xs text-orange-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-300"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-700 hover:-translate-y-0.5 transition-all active:scale-[0.98] mt-2">
            Sign In
          </button>
        </form>

        {/* Footer Link - Navigation to Register */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link 
              to="/vendor-register" 
              className="text-orange-600 font-bold hover:text-orange-700 transition-colors"
            >
              Register your Kitchen
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;