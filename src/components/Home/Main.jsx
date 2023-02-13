import React from "react";
import { Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import SingleCard from "../SingleCard";
import "./Home.css";

const Main = () => {
  const { data } = useFetch();

  return (
    <div className="mx-4">
      <div className="m-auto c-max">
        <Row>
          {data &&
            data.map((singleData) => (
              <div
                key={singleData.id}
                className="m-auto col-sm-12 col-md-6 col-xl-3 col-xxl-3"
              >
                <SingleCard singleData={singleData}></SingleCard>
              </div>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Main;
