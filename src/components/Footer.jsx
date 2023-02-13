import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-black py-3 mt-5"
      //   style={{ boxShadow: "0 0 10px rgb(243, 122, 9)" }}
    >
      <div className="container">
        <p className="text-center">Copyright &copy; Quote Gallery 2023</p>
        <div className="d-flex justify-content-center">
          <a className="px-1" href="#">
            Home
          </a>
          <a className="px-1" href="#">
            About Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
