import { useState, useEffect } from "react";
import AddMenu from "./AddMenu";
import { getPlans } from "../../services/vendorApi";

const MenuManagement = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null); // 👈 which plan clicked

  // 🔥 Fetch plans
  useEffect(() => {
  const fetchPlans = async () => {
    try {
      const res = await getPlans();

      console.log("FULL RESPONSE:", res);       // debug
      console.log("ACTUAL DATA:", res.data);    // debug

      // ✅ FIX HERE
      setPlans(res.data.plans || res.data);

    } catch (err) {
      console.error(err);
    }
  };

  fetchPlans();
}, []);

  return (
    <div className="p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Menu Management
      </h2>

      {/* 🔥 SHOW CARDS ONLY IF NO PLAN SELECTED */}
      {!selectedPlan && (
        <div className="grid md:grid-cols-3 gap-6">
        

          {plans.map((plan) => (
            <div
              key={plan._id}
              className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">
                {plan.name}
              </h3>

              <p className="text-gray-600 mt-2">
                Price: ₹{plan.price}
              </p>

              <p className="text-gray-600">
                Duration: {plan.duration} days
              </p>

              <button
                onClick={() => setSelectedPlan(plan)}
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              >
                Add Menu
              </button>
            </div>
          ))}

        </div>
      )}

      {/* 🔥 SHOW FORM WHEN BUTTON CLICKED */}
      {selectedPlan && (
        <div>
          <button
            onClick={() => setSelectedPlan(null)}
            className="mb-4 text-blue-500 underline"
          >
            ← Back to Plans
          </button>

          <AddMenu selectedPlan={selectedPlan} />
        </div>
      )}

    </div>
  );
};

export default MenuManagement;