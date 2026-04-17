import { useState } from "react";
import { Link } from "react-router-dom";

const VendorLogin = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ---------------- VALIDATION ----------------
  const isEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isMobile = (value) => {
    return /^[6-9]\d{9}$/.test(value); // Indian mobile numbers
  };

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError(""); // clear error on typing
  };

  // ---------------- HANDLE SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { identifier, password } = formData;

    // Validation
    if (!isEmail(identifier) && !isMobile(identifier)) {
      setError("Enter a valid email or 10-digit mobile number");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Prepare payload
    let payload = {
      password,
    };

    if (isEmail(identifier)) {
      payload.email = identifier;
    } else {
      payload.mobile = identifier;
    }

    try {
      setLoading(true);

      console.log("Sending Payload:", payload);

      // 👉 Replace with your API call
      // const res = await axios.post("/api/vendor/login", payload);

      // Simulated success
      setTimeout(() => {
        setLoading(false);
        console.log("Login successful");
      }, 1000);

    } catch (err) {
      setLoading(false);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEF9F2] px-6">
      <div className="form-card w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-orange-100">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1A1208] mb-2">
            Vendor Login
          </h2>
          <p className="text-sm text-gray-500">
            Manage your kitchen and orders.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email / Mobile */}
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Email/Mobile Number
            </label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Enter email or 10-digit mobile number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-orange-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 text-white rounded-xl font-bold shadow-lg transition-all mt-2
              ${loading 
                ? "bg-orange-300 cursor-not-allowed" 
                : "bg-orange-600 hover:bg-orange-700 hover:-translate-y-0.5 active:scale-[0.98]"
              }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/vendor-register"
              className="text-orange-600 font-bold hover:text-orange-700"
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