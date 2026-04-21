import { useState, useEffect } from "react";

const PlanModal = ({ onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    mealCount: "",
    description: "",
    prepaid: true,
    postpaid: false
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      id: initialData?.id || Date.now()
    };

    onSubmit(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Plan" : "Create Plan"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full p-3 border rounded"
            placeholder="Plan Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="number"
            className="w-full p-3 border rounded"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            type="number"
            className="w-full p-3 border rounded"
            placeholder="Meal Count"
            value={form.mealCount}
            onChange={(e) =>
              setForm({ ...form, mealCount: e.target.value })
            }
          />

          <textarea
            className="w-full p-3 border rounded"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* Plan Type */}
          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                checked={form.prepaid}
                onChange={() =>
                  setForm({ ...form, prepaid: !form.prepaid })
                }
              /> Prepaid
            </label>

            <label>
              <input
                type="checkbox"
                checked={form.postpaid}
                onChange={() =>
                  setForm({ ...form, postpaid: !form.postpaid })
                }
              /> Postpaid
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button className="btn-primary">
              {initialData ? "Update" : "Create"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PlanModal;