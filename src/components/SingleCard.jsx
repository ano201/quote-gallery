import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleCard = ({ singleData }) => {
  const { about, img, data } = singleData;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{about}</Card.Title>
          <Card.Text>{data}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
