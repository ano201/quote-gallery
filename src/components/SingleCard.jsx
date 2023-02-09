import React from "react";
import { Card } from "react-bootstrap";
import "./SingleCard.css";

const SingleCard = ({ singleData }) => {
  const { about, img, data } = singleData;

  return (
    <div>
      <Card
        className="mt-2 mt-lg-5 mt-md-3 bg-black c-card"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{about}</Card.Title>
          <Card.Text>{data}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
