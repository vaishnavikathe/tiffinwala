import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiEdit,
  FiMenu,
  FiUsers,
  FiShoppingBag,
  FiLogOut,
  FiX
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/vendor/dashboard", icon: <FiHome /> },
    { name: "Plan Management", path: "/vendor/add-plan", icon: <FiPlusCircle /> },
    { name: "Update Plan", path: "/vendor/update-plan", icon: <FiEdit /> },
    { name: "Add Menu", path: "/vendor/add-menu", icon: <FiMenu /> },
    { name: "Users", path: "/vendor/users", icon: <FiUsers /> },
    { name: "Orders", path: "/vendor/orders", icon: <FiShoppingBag /> },
  ];

  const baseClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200";
  const inactiveClass = "hover:bg-orange-500 text-gray-300";
  const activeClass = "bg-orange-600 text-white";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/vendor-login");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#0B1A2C] text-white p-5 transform transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >

      {/* Close button */}
      <button
        onClick={toggle}
        className="text-white text-2xl mb-4"
      >
        <FiX />
      </button>

      {/* Menu */}
      <h2 className="text-xl font-bold mb-8 tracking-wide">
        TiffinWala
      </h2>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={toggle}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 transition mt-10"
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;