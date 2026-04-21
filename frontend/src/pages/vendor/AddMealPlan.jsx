import { useState } from "react";
import { createPlan } from "../../services/vendorApi";
import DashboardLayout from "../../components/vendorDashboard/layout/DashboardLayout";

const AddMealPlan = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createPlan(form);
      alert("✅ Plan added");

      setForm({ name: "", price: "", duration: "", description: "" });

    } catch {
      alert("❌ Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h2 className="heading mb-6">Add Meal Plan</h2>

      <form onSubmit={handleSubmit} className="form-card max-w-lg space-y-4">

        <input
          className="w-full p-3 border rounded"
          placeholder="Plan Name"
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input
          className="w-full p-3 border rounded"
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({...form, price: e.target.value})}
        />

        <input
          className="w-full p-3 border rounded"
          placeholder="Duration (e.g. 30 days)"
          value={form.duration}
          onChange={e => setForm({...form, duration: e.target.value})}
        />

        <textarea
          className="w-full p-3 border rounded"
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({...form, description: e.target.value})}
        />

        <button className="btn-primary w-full">
          {loading ? "Adding..." : "Add Plan"}
        </button>

      </form>
    </DashboardLayout>
  );
};

export default AddMealPlan;