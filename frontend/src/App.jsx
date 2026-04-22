import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "./components/layout/Layout";
import DashboardLayout from "./components/vendorDashboard/layout/VendorDashboardLayout";

// Auth Pages
import VendorLogin from "./pages/Auth/VendorLogin";
import VendorRegister from "./pages/Auth/VendorRegister";
import UserLogin from "./pages/Auth/UserLogin";
import UserRegister from "./pages/Auth/UserRegister";

// Home Pages
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";

// Protected + Vendor Pages
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/vendor/Dashboard";
import AddMealPlan from "./pages/vendor/PlanManagement";
import EditMealPlan from "./pages/vendor/EditMealPlan";
import AddMenu from "./pages/vendor/AddMenu";
import Users from "./pages/vendor/Users";

const App = () => {
  return (
    <Routes>

      {/*  MAIN WEBSITE */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* AUTH PAGES */}
      <Route path="/vendor-login" element={<VendorLogin />} />
      <Route path="/vendor-register" element={<VendorRegister />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-register" element={<UserRegister />} />

      {/*  VENDOR DASHBOARD */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

          {/* Redirect (optional but useful) */}
          <Route path="/vendor" element={<Navigate to="/vendor/dashboard" />} />

          <Route path="/vendor/dashboard" element={<Dashboard />} />
          <Route path="/vendor/add-plan" element={<AddMealPlan />} />
          <Route path="/vendor/edit-plan/:id" element={<EditMealPlan />} />
          <Route path="/vendor/add-menu" element={<AddMenu />} />
          <Route path="/vendor/users" element={<Users />} />

        </Route>
      </Route>

      {/*  404 PAGE (optional but recommended) */}
      <Route path="*" element={<h1 className="text-center mt-10 text-2xl">404 - Page Not Found</h1>} />

    </Routes>
  );
};

export default App;