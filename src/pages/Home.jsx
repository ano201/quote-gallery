import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../components/Home/Banner";
import Main from "../components/Home/Main";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Row>
          <Main></Main>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
