import { useState } from "react";
import { addMenu } from "../../services/vendorApi";
import DashboardLayout from "../../components/vendorDashboard/layout/DashboardLayout";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    day: "",
    lunch: "",
    dinner: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMenu(menu);
    alert("Menu added");
  };

  return (
    <DashboardLayout>
      <h2 className="heading mb-6">Add Menu</h2>

      <form onSubmit={handleSubmit} className="form-card space-y-4 max-w-3xl">

        <div className="grid md:grid-cols-3 gap-4">

          <input
            placeholder="Day (Monday)"
            className="p-3 border rounded"
            onChange={e => setMenu({...menu, day: e.target.value})}
          />

          <input
            placeholder="Lunch Items"
            className="p-3 border rounded"
            onChange={e => setMenu({...menu, lunch: e.target.value})}
          />

          <input
            placeholder="Dinner Items"
            className="p-3 border rounded"
            onChange={e => setMenu({...menu, dinner: e.target.value})}
          />

        </div>

        <button className="btn-primary">Add Menu</button>

      </form>
    </DashboardLayout>
  );
};

export default AddMenu;