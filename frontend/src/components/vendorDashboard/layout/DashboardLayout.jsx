import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-50 md:ml-64">

        {/* Navbar */}
        <Navbar toggle={() => setIsOpen(!isOpen)} />

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;