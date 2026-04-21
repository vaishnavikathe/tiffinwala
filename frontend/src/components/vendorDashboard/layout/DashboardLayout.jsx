import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="w-full min-h-screen bg-gray-50">
        <Navbar toggle={toggleSidebar} />
        <div className="p-6">{children}</div>
      </div>

    </div>
  );
};

export default DashboardLayout;