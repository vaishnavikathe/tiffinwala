import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./VendorSidebar";
import Navbar from "./VendorNavbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      />

      {/* Main Content */}
     <div
  className={`flex-1 min-h-screen bg-gray-50 transition-all duration-300
  ${isOpen ? "ml-64" : "ml-0"}`}
>
        {/* Navbar */}
        {/* <Navbar toggle={() => setIsOpen(!isOpen)} /> */}
       <Navbar
  toggle={() => setIsOpen(!isOpen)}
  isOpen={isOpen}
/>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  ); 
};

export default DashboardLayout;