import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import VendorLogin from "./pages/VendorLogin.jsx";
import VendorRegister from "./pages/VendorRegister.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;