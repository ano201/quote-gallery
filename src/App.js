import React from "react";
import Home from "./pages/Home";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-100 c-style">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
