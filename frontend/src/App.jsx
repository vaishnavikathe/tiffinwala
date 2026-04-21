import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Auth Pages
import VendorLogin from "./pages/Auth/VendorLogin";
import VendorRegister from "./pages/Auth/VendorRegister";
import UserLogin from "./pages/Auth/UserLogin";
import UserRegister from "./pages/Auth/UserRegister";

// Home
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";

// Protected and Vendor Pages
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/vendor/Dashboard";
import AddMealPlan from "./pages/vendor/AddMealPlan";
import EditMealPlan from "./pages/vendor/EditMealPlan";
import AddMenu from "./pages/vendor/AddMenu";
import Users from "./pages/vendor/Users";

const App = () => {
  return (
    <Layout>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />

        {/* Vendor Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/vendor/dashboard" element={<Dashboard />} />
          <Route path="/vendor/add-plan" element={<AddMealPlan />} />
          <Route path="/vendor/edit-plan/:id" element={<EditMealPlan />} />
          <Route path="/vendor/add-menu" element={<AddMenu />} />
          <Route path="/vendor/users" element={<Users />} />
        </Route>

      </Routes>
    </Layout>
  );
};

export default App;