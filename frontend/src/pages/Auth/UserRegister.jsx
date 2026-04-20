import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { registerUser } from "../../services/api";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const UserRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await registerUser(formData);
      console.log("Register success:", res);

      // ✅ SUCCESS TOAST (Styled)
      toast.success("User Registered Successfully!", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#fff7ed",   // light orange
          color: "#c2410c",        // dark orange text
          border: "1px solid #fdba74",
        },
      });

      navigate("/user-login");

    } catch (err) {
      setError(err.message || "Registration failed");

      // ❌ ERROR TOAST
      toast.error("Registration failed!", {
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">

        <h2 className="text-3xl font-bold text-[#1A1208] mb-2 text-center">
          User Register
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
          />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200
                         focus:border-orange-500 focus:ring-2 focus:ring-orange-200
                         outline-none transition-all resize-none"
              required
            />
          </div>

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          {/* Password */}
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/user-login")}
            className="text-orange-500 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>

      </Card>
    </div>
  );
};

export default UserRegister;