import { useEffect, useState } from "react";
import { addMenu, getPlans } from "../../services/vendorApi";

const MenuManagement = () => {
  const [menu, setMenu] = useState({
    day: "",
    mealType: "lunch",
    items: [{ name: "", type: "sabzi" }]
  });

  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ FETCH PLANS
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await getPlans();
        setPlans(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPlans();
  }, []);

  // 🔥 Handle item change
  const handleItemChange = (index, field, value) => {
    const updated = [...menu.items];
    updated[index][field] = value;
    setMenu({ ...menu, items: updated });
  };

  const addItem = () => {
    setMenu({
      ...menu,
      items: [...menu.items, { name: "", type: "sabzi" }]
    });
  };

  const removeItem = (index) => {
    const updated = menu.items.filter((_, i) => i !== index);
    setMenu({ ...menu, items: updated });
  };

  // 🔥 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ✅ send planId also
      await addMenu({
        ...menu,
        planId: selectedPlan._id
      });

      alert("✅ Menu added");

      setMenu({
        day: "",
        mealType: "lunch",
        items: [{ name: "", type: "sabzi" }]
      });

    } catch (err) {
      console.error(err);
      alert("❌ Failed to add menu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      {/* ================= PLAN CARDS ================= */}
      {!showForm && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Your Plans</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-white p-5 rounded-xl shadow border"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {plan.name}
                </h3>

                <p className="text-gray-600">
                  Price: ₹{plan.price}
                </p>

                <p className="text-gray-600 mb-4">
                  Meals: {plan.meals}
                </p>

                <button
                  onClick={() => {
                    setSelectedPlan(plan);
                    setShowForm(true);
                  }}
                  className="bg-orange-600 text-white px-4 py-2 rounded"
                >
                  Add Menu
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= FORM ================= */}
      {showForm && (
        <>
          {/* 🔙 Back */}
          <button
            onClick={() => setShowForm(false)}
            className="mb-4 text-orange-600"
          >
            ← Back to Plans
          </button>

          {/* Plan Name */}
          <h2 className="text-2xl font-semibold mb-4">
            Add Menu for: {selectedPlan?.name}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="form-card space-y-6 max-w-3xl mx-auto"
          >

            {/* Day + Meal */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Day (Monday)"
                className="p-3 border rounded"
                value={menu.day}
                onChange={(e) =>
                  setMenu({ ...menu, day: e.target.value })
                }
              />

              <select
                className="p-3 border rounded"
                value={menu.mealType}
                onChange={(e) =>
                  setMenu({ ...menu, mealType: e.target.value })
                }
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            {/* Items */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Menu Items</h3>

              {menu.items.map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-3 gap-3"
                >
                  <input
                    placeholder="Item Name"
                    className="p-3 border rounded"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(i, "name", e.target.value)
                    }
                  />

                  <select
                    className="p-3 border rounded"
                    value={item.type}
                    onChange={(e) =>
                      handleItemChange(i, "type", e.target.value)
                    }
                  >
                    <option value="sabzi">Sabzi</option>
                    <option value="dal">Dal</option>
                    <option value="rice">Rice</option>
                    <option value="roti">Roti</option>
                    <option value="other">Other</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => removeItem(i)}
                    className="bg-red-100 text-red-600 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addItem}
                className="border border-orange-500 text-orange-600 px-4 py-2 rounded"
              >
                + Add Item
              </button>
            </div>

            {/* Submit */}
            <button className="bg-orange-600 text-white w-full py-3 rounded">
              {loading ? "Adding..." : "Add Menu"}
            </button>

          </form>
        </>
      )}
    </div>
  );
};

export default MenuManagement;