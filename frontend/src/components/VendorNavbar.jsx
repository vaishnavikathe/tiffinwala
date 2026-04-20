import { useNavigate } from "react-router-dom";

const VendorNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/vendor-login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-semibold text-orange-600">
        Vendor Dashboard
      </h1>

      <button onClick={handleLogout} className="btn-outline">
        Logout
      </button>
    </div>
  );
};

export default VendorNavbar;