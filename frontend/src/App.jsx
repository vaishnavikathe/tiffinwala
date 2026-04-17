import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import VendorLogin from "./pages/Auth/VendorLogin";
import VendorRegister from "./pages/Auth/VendorRegister";
import UserLogin from "./pages/Auth/UserLogin";
import UserRegister from "./pages/Auth/UserRegister";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister/> } />
      </Routes>
    </Layout>
  );
};

export default App;