import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const VendorLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    console.log("Login Data:", formData);
  };

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">

        <h1 className="heading text-center">
          Vendor Login
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

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
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <Button type="submit" className="w-full mt-4">
            Login
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default VendorLogin;