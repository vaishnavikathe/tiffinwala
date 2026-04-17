import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const UserLogin = () => {
  const navigate = useNavigate();

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
    return /^[6-9]\d{9}$/.test(value); // Indian numbers
  };

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError(""); // clear error while typing
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

      console.log("User Login Payload:", payload);

      // 👉 Replace with actual API call
      // const res = await axios.post("/api/user/login", payload);

      // Simulated success
      setTimeout(() => {
        setLoading(false);
        console.log("Login successful");
        navigate("/dashboard"); // redirect after login
      }, 1000);

    } catch (err) {
      setLoading(false);
      setError("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">

        <h2 className="text-3xl font-bold text-[#1A1208] mb-2 text-center">
          User Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <Input
            label="Email/Mobile Number"
            type="text"
            name="identifier"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="Enter email or 10-digit mobile number"
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <Button
            type="submit"
            className={`w-full mt-4 ${loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        {/* Redirect */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/user-register")}
            className="text-orange-500 cursor-pointer font-medium hover:underline"
          >
            Register
          </span>
        </p>

      </Card>
    </div>
  );
};

export default UserLogin;