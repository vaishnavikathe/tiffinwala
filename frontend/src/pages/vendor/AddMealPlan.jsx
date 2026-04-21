import { useState } from "react";
import { createPlan } from "../../services/vendorApi";
import DashboardLayout from "../../components/vendorDashboard/layout/DashboardLayout";

const AddMealPlan = () => {
  const [form, setForm] = useState({
    prepaid: true,
    postpaid: false,

    prepaidPlans: [
      { name: "", tiffinCount: "", price: "" }
    ],

    postpaidPlan: {
      deposit: "",
      pricePerTiffin: ""
    }
  });

  const [loading, setLoading] = useState(false);

  // ---------------- HANDLE PREPAID CHANGE ----------------
  const handlePrepaidChange = (index, field, value) => {
    const updated = [...form.prepaidPlans];
    updated[index][field] = value;

    setForm({ ...form, prepaidPlans: updated });
  };

  // ---------------- ADD MORE PREPAID ----------------
  const addPrepaidPlan = () => {
    setForm({
      ...form,
      prepaidPlans: [...form.prepaidPlans, { name: "", tiffinCount: "", price: "" }]
    });
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        planTypes: {
          prepaid: form.prepaid,
          postpaid: form.postpaid
        },
        prepaidPlans: form.prepaid ? form.prepaidPlans : [],
        postpaidPlan: form.postpaid ? form.postpaidPlan : {}
      };

      await createPlan(payload);

      alert("✅ Plan added");

    } catch (err) {
      console.error(err);
      alert("❌ Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h2 className="heading mb-6">Add Meal Plan</h2>

      <form onSubmit={handleSubmit} className="form-card space-y-6 max-w-2xl">

        {/* PLAN TYPE */}
        <div className="flex gap-6">
          <label>
            <input
              type="checkbox"
              checked={form.prepaid}
              onChange={() =>
                setForm({ ...form, prepaid: !form.prepaid })
              }
            />{" "}
            Prepaid
          </label>

          <label>
            <input
              type="checkbox"
              checked={form.postpaid}
              onChange={() =>
                setForm({ ...form, postpaid: !form.postpaid })
              }
            />{" "}
            Postpaid
          </label>
        </div>

        {/* PREPAID SECTION */}
        {form.prepaid && (
          <div className="space-y-4">
            <h3 className="font-semibold">Prepaid Plans</h3>

            {form.prepaidPlans.map((plan, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-3">

                <input
                  placeholder="Plan Name"
                  className="p-3 border rounded"
                  value={plan.name}
                  onChange={(e) =>
                    handlePrepaidChange(i, "name", e.target.value)
                  }
                />

                <input
                  placeholder="Tiffin Count"
                  className="p-3 border rounded"
                  value={plan.tiffinCount}
                  onChange={(e) =>
                    handlePrepaidChange(i, "tiffinCount", e.target.value)
                  }
                />

                <input
                  placeholder="Price"
                  className="p-3 border rounded"
                  value={plan.price}
                  onChange={(e) =>
                    handlePrepaidChange(i, "price", e.target.value)
                  }
                />

              </div>
            ))}

            <button
              type="button"
              onClick={addPrepaidPlan}
              className="btn-outline"
            >
              + Add Another Plan
            </button>
          </div>
        )}

        {/* POSTPAID SECTION */}
        {form.postpaid && (
          <div className="space-y-4">
            <h3 className="font-semibold">Postpaid Plan</h3>

            <input
              placeholder="Deposit"
              className="w-full p-3 border rounded"
              value={form.postpaidPlan.deposit}
              onChange={(e) =>
                setForm({
                  ...form,
                  postpaidPlan: {
                    ...form.postpaidPlan,
                    deposit: e.target.value
                  }
                })
              }
            />

            <input
              placeholder="Price per Tiffin"
              className="w-full p-3 border rounded"
              value={form.postpaidPlan.pricePerTiffin}
              onChange={(e) =>
                setForm({
                  ...form,
                  postpaidPlan: {
                    ...form.postpaidPlan,
                    pricePerTiffin: e.target.value
                  }
                })
              }
            />
          </div>
        )}

        <button className="btn-primary w-full">
          {loading ? "Adding..." : "Add Plan"}
        </button>

      </form>
    </DashboardLayout>
  );
};

export default AddMealPlan;