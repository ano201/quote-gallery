import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black py-3 mt-5 footer-container">
      <div className="container">
        <p className="text-center">
          Copyright &copy; Quote Gallery {new Date().getFullYear()}
        </p>
        <div className="d-flex justify-content-center">
          <Link className="px-1 f-link" to="/home">
            Home
          </Link>
          <Link className="px-1 f-link" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
