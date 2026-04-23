import { FiMenu } from "react-icons/fi";

const Navbar = ({ openSidebar, isOpen }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      {/* Left side */}
      <div className="flex items-center gap-4">

        {/* ☰ ONLY when sidebar is CLOSED */}
        {!isOpen && (
          <button
            onClick={openSidebar}
            className="text-2xl"
          >
            <FiMenu />
          </button>
        )}

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