import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ toggle, isOpen }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      {/* Left side */}
      <div className="flex items-center gap-4">

        {/* ✅ SAME BUTTON (changes icon) */}
        <button
          onClick={toggle}
          className="text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <h2 className="text-lg font-semibold">
          Welcome, Vendor 👋
        </h2>
      </div>

      {/* Logout */}
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