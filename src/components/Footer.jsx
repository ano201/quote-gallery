import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-black py-3 mt-5"
      style={{ boxShadow: "0 0 10px rgb(243, 122, 9)" }}
    >
      <div className="container">
        <p className="text-center">Copyright &copy; Quote Gallery 2023</p>
        <div className="d-flex justify-content-center">
          <Link className="px-1" to="/home">
            Home
          </Link>
          <Link className="px-1" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
