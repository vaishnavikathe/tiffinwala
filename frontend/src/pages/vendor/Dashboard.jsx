import { useNavigate } from "react-router-dom";
import VendorNavbar from "../../components/VendorNavbar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <VendorNavbar />

      <div className="section container-custom">
        <h2 className="heading mb-6">Welcome Vendor 👋</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card cursor-pointer"
            onClick={() => navigate("/vendor/add-plan")}
          >
            <h3 className="font-semibold">Add Meal Plan</h3>
            <p className="subheading">Create prepaid/postpaid plans</p>
          </div>

          <div className="card cursor-pointer"
            onClick={() => navigate("/vendor/add-menu")}
          >
            <h3 className="font-semibold">Add Menu</h3>
            <p className="subheading">Set daily meals</p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Active Users</h3>
            <p className="text-2xl mt-2 text-orange-600">0</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;