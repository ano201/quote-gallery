import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Nav } from "react-bootstrap";
import "./Sidemenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];
  return (
    <Nav className="flex-column nav-container">
      <div>
        <FontAwesomeIcon icon={faCircleChevronLeft} className="img-fluid" />
      </div>
      <div className="link-container">
        {links.map((link) => (
          <Nav.Item key={link.href}>
            <Link to={link.href}>{link.title}</Link>
          </Nav.Item>
        ))}
      </div>
    </Nav>
  );
};

export default SideMenu;
