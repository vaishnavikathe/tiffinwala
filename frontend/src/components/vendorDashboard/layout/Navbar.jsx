import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="text-2xl">
          <FiMenu />
        </button>

        <h2 className="text-lg font-semibold">
          Welcome, Vendor 👋
        </h2>
      </div>

      {/* Logout */}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/vendor-login");
        }}
      >
        Logout
      </button>

    </div>
  );
};

export default Navbar;