import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1e5aff] text-white py-6 px-12 flex justify-between items-center shadow-md">
      <h1 className="text-5xl font-semibold tracking-tight">MessMate</h1>
      <div className="flex items-center space-x-8 text-xl font-medium">
        <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
        <Link to="/about" className="hover:opacity-80 transition-opacity">About</Link>
        <Link to="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
        <Link 
          to="/vendor/login" 
          className="border-2 border-white px-4 py-1 rounded-sm hover:bg-white hover:text-[#1e5aff] transition-all"
        >
          Vendor Login
        </Link>
      </div>
    </nav>
  );
}