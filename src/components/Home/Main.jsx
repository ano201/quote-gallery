import React from "react";
import useFetch from "../../hooks/useFetch";
import SingleCard from "../SingleCard";

const Main = () => {
  const { data } = useFetch();

  return (
    <div>
      {data &&
        data.map((singleData) => (
          <SingleCard key={singleData.id} singleData={singleData}></SingleCard>
        ))}
    </div>
  );
};

export default Main;
