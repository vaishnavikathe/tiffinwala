import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const VendorRegister = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  cuisine: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);
  };

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">

        <h1 className="heading text-center">
          Vendor Registration
        </h1>

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
            placeholder="Enter your email"
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