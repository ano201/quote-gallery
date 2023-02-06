import React from "react";
import { Container } from "react-bootstrap";
import bnimg from "./ano.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="position-relative">
      <div>
        <img src={bnimg} className="img-fluid" alt="" />
      </div>
      <Container className="text-danger position-absolute top-0 m-2">
        <h2>Quote of the day</h2>
      </Container>
    </div>
  );
};

export default Banner;
