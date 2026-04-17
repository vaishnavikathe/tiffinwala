import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container-custom flex justify-between items-center py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          TiffinWala
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4">

  {/* User Auth */}
  <Link
    to="/user-register"
    className="btn-outline border-white text-white bg-white/10 hover:bg-white hover:text-orange-500 text-sm"
  >
    Sign Up
  </Link>

  {/* Vendor Auth */}
  <Link
    to="/vendor-login"
    className="text-sm hover:text-gray-200"
  >
    Vendor Login
  </Link>

  <Link
    to="/vendor-register"
    className="btn-outline border-white text-white bg-white/10 hover:bg-white hover:text-orange-500 text-sm"
  >
    Become a Vendor
  </Link>

</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;