import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
// Components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className=" overflow-hidden">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
    </div>
  );
};

export default App;
