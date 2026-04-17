import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const UserLogin = () => {
  const navigate = useNavigate();

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

    console.log("User Login:", formData);

    // later → API call
    // navigate("/vendors");
  };

  return (
    <div className="section flex justify-center items-center">
      <Card className="w-full max-w-md">

        <h1 className="heading text-center">
          User Login
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

        {/* Redirect */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/user-register")}
            className="text-orange-500 cursor-pointer font-medium"
          >
            Register
          </span>
        </p>

      </Card>
    </div>
  );
};

export default UserLogin;