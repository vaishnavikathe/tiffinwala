import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiEdit,
  FiMenu,
  FiUsers,
  FiShoppingBag,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/vendor/dashboard", icon: <FiHome /> },
    { name: "Add Plan", path: "/vendor/add-plan", icon: <FiPlusCircle /> },
    { name: "Update Plan", path: "/vendor/update-plan", icon: <FiEdit /> },
    { name: "Add Menu", path: "/vendor/menu", icon: <FiMenu /> },
    { name: "Users", path: "/vendor/users", icon: <FiUsers /> },
    { name: "Orders", path: "/vendor/orders", icon: <FiShoppingBag /> },
  ];

  // 🔥 Common styles
  const baseClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200";
  const inactiveClass = "hover:bg-orange-500 text-gray-300";
  const activeClass = "bg-orange-600 text-white";

  // 🔥 Logout logic (basic version)
  const handleLogout = () => {
    localStorage.removeItem("token"); // adjust based on your auth
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen fixed bg-gray-900 text-white p-5 flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold mb-8 tracking-wide">
          TiffinWala
        </h2>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section (Logout) */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 transition"
      >
        <FiLogOut />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;