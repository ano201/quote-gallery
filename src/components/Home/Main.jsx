import React from "react";
import { Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import SingleCard from "../SingleCard";

const Main = () => {
  const { data } = useFetch();

  return (
    <div className="mx-4">
      <Row>
        {data &&
          data.map((singleData) => (
            <div className="col-sm-12 col-md-6 col-xl-3 col-xxl-3">
              <SingleCard
                key={singleData.id}
                singleData={singleData}
              ></SingleCard>
            </div>
          ))}
      </Row>
    </div>
  );
};

export default Main;
