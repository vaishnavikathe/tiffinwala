import { useState } from "react";
import API from "../../services/api";
import VendorNavbar from "../../components/VendorNavbar";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    day: "",
    lunch: "",
    dinner: ""
  });

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/menu/create", menu, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      alert("Menu Added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <VendorNavbar />

      <div className="section container-custom">
        <h2 className="heading mb-6">Add Menu</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="day" placeholder="Day (Monday)" onChange={handleChange} />
          <input name="lunch" placeholder="Lunch Items" onChange={handleChange} />
          <input name="dinner" placeholder="Dinner Items" onChange={handleChange} />

          <button className="btn-primary">Add Menu</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;