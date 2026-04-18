import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { registerVendor } from "../../services/api";

const VendorRegister = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cuisine: "",
    shopName: "",
    shopAddress: "",
  });


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
    const res = await registerVendor(formData);

    console.log("Vendor registered:", res);

    navigate("/vendor/login");

  } catch (err) {
    setError(err.message || "Registration failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">


        <h2 className="text-3xl font-bold text-[#1A1208] mb-2 text-center">
          Vendor Registration
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
            label="Shop Name"
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            placeholder="Enter your shop name"
            required
          />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
              Address
            </label>

            <textarea
              name="shopAddress"
              value={formData.shopAddress}
              onChange={handleChange}
              placeholder="Enter your shop address"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
               focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
               outline-none transition-all resize-none"
              required
            />
          </div>

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="kitchen@gmail.com"
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />

          <div>
            <label className="text-sm font-medium">
              Cuisine Type
            </label>

            <select
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-md 
               bg-white text-gray-700
               focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select cuisine</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="North-Indian">North-Indian</option>
              <option value="Jain">Jain</option>
              <option value="Multi-Cuisine">Multi-Cuisine</option>
            </select>
          </div>

          <Button type="submit" className="w-full mt-4">
            Register
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default VendorRegister;