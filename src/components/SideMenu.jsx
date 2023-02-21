import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Sidemenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const [flipIcon, setFlipIcon] = useState("horizontal");

  const showNav = () => {
    const nav = document.querySelector("#navigation");
    nav.classList.toggle("hide");
    nav.classList.contains("hide")
      ? setFlipIcon("horizontal")
      : setFlipIcon("");
  };

  return (
    <Nav
      id="navigation"
      className=" d-flex justify-content-between nav-container hide"
    >
      <div className="link-container d-flex flex-column align-items-center pt-5 bg-black">
        {links.map((link) => (
          <Nav.Item key={link.href}>
            <Link className="nav-link" to={link.href}>
              {link.title}
            </Link>
          </Nav.Item>
        ))}
      </div>
      <div className="nav-button">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          onClick={showNav}
          className="img-fluid mt-3 ms-1"
          inverse
          flip={flipIcon}
        />
      </div>
    </Nav>
  );
};

export default SideMenu;
