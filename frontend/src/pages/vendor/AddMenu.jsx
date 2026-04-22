import { useState } from "react";
import { addMenu } from "../../services/vendorApi";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    day: "",
    mealType: "lunch",
    items: [{ name: "", type: "sabzi" }]
  });

  const [loading, setLoading] = useState(false);

  // 🔥 Handle item change
  const handleItemChange = (index, field, value) => {
    const updated = [...menu.items];
    updated[index][field] = value;
    setMenu({ ...menu, items: updated });
  };

  // 🔥 Add new item
  const addItem = () => {
    setMenu({
      ...menu,
      items: [...menu.items, { name: "", type: "sabzi" }]
    });
  };

  // 🔥 Remove item
  const removeItem = (index) => {
    const updated = menu.items.filter((_, i) => i !== index);
    setMenu({ ...menu, items: updated });
  };

  // 🔥 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addMenu(menu);

      alert("✅ Menu added");

      // reset form
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
    <>
      <h2 className="text-2xl font-semibold">Add Menu</h2>
      <center>
      <form
        onSubmit={handleSubmit}
        className="form-card space-y-6 max-w-3xl"
      >

        {/* 🔹 Day + Meal Type */}
        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Day (Monday)"
            className="p-3 border rounded focus:ring-2 focus:ring-orange-400 outline-none"
            value={menu.day}
            onChange={(e) =>
              setMenu({ ...menu, day: e.target.value })
            }
          />

          <select
            className="p-3 border rounded focus:ring-2 focus:ring-orange-400 outline-none"
            value={menu.mealType}
            onChange={(e) =>
              setMenu({ ...menu, mealType: e.target.value })
            }
          >
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

        </div>

        {/* 🔹 Dynamic Items */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Menu Items</h3>

          {menu.items.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-3 gap-3 items-center"
            >

              {/* Item Name */}
              <input
                placeholder="Item Name (e.g. Paneer)"
                className="p-3 border rounded"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(i, "name", e.target.value)
                }
              />

              {/* Item Type */}
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

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeItem(i)}
                className="bg-red-100 text-red-600 px-3 py-2 rounded hover:bg-red-200 transition"
              >
                Remove
              </button>

            </div>
          ))}

          {/* Add Item Button */}
          <button
            type="button"
            onClick={addItem}
            className="btn-outline"
          >
            + Add Item
          </button>
        </div>

        {/* 🔹 Submit */}
        <button className="btn-primary w-full">
          {loading ? "Adding..." : "Add Menu"}
        </button>

      </form>
      </center>
    </>
  );
};

export default AddMenu;