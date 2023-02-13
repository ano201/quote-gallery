import React from "react";
import Home from "./pages/Home";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-100 c-style">
      {/* <Home></Home> */}
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
