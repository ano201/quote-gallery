import React from "react";
import { Container } from "react-bootstrap";
import bnimg from "./ano.jpg";

const Banner = () => {
  return (
    <div className="position-relative mb-3">
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
