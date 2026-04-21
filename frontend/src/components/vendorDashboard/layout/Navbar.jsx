import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggle }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow">

      <div className="flex items-center gap-4">
        
        {/* ☰ Button */}
        <button
          onClick={toggle}
          className="text-2xl"
        >
          <FiMenu />
        </button>

        <h2 className="text-lg font-semibold">
          Welcome, Vendor 👋
        </h2>
      </div>

      
    </div>
  );
};

export default Navbar;