import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">
      <h2 className="text-lg font-semibold">Welcome, Vendor 👋</h2>

      <div className="flex items-center gap-4">
        <FiBell size={20} />
        <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/vendor-login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;