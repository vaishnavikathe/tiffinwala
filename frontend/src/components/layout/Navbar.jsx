import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  return (
    // Added w-screen and left-0 to ensure it pins to the very edge
    <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md w-screen overflow-hidden">
      <div className="w-full flex justify-between items-center py-4 px-6 md:px-10">
        
        {/* TOP LEFT: Logo */}
        <Link to="/" className="hover:opacity-90 transition ml-2">
          <h1 className="text-2xl font-bold italic tracking-wider px-3 py-1 border-2 border-white rounded-tr-2xl rounded-bl-2xl">
            TIFFIN<span className="not-italic font-light">WALA</span>
          </h1>
        </Link>

        {/* TOP RIGHT: All Links and Buttons Grouped */}
        <div className="flex items-center gap-6 mr-2">
          
          {/* Main Links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium hover:text-orange-200 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth/Vendor Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/vendor-login"
              className="text-sm font-medium hover:text-orange-200 transition hidden sm:block"
            >
              Vendor Login
            </Link>

            <Link
              to="/user-register"
              className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-orange-600 transition text-sm font-semibold whitespace-nowrap"
            >
              Sign Up
            </Link>

            <Link
              to="/vendor-register"
              className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-orange-600 transition text-sm font-semibold whitespace-nowrap"
            >
              Join as Vendor
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;