import { useState } from "react";
import API from "../../services/api";
import VendorNavbar from "../../components/VendorNavbar";

const AddMealPlan = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    duration: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/plan/create", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      alert("Plan Added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <VendorNavbar />

      <div className="section container-custom">
        <h2 className="heading mb-6">Add Meal Plan</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="name" placeholder="Plan Name" onChange={handleChange} className="input" />
          <input name="price" placeholder="Price" onChange={handleChange} className="input" />
          <input name="duration" placeholder="Duration" onChange={handleChange} className="input" />
          <textarea name="description" placeholder="Description" onChange={handleChange} className="input" />

          <button className="btn-primary">Add Plan</button>
        </form>
      </div>
    </div>
  );
};

export default AddMealPlan;