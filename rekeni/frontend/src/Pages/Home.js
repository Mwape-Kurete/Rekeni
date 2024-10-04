import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import JumbotronComp from "../Components/JumbotronComp";
import ReviewcCardComp from "../Components/ReviewCardComp";
import AlbumCaroComp from "../Components/AlbumCaroComp";
import FooterComp from "../Components/FooterComp";

import "../Styles/main.css";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
        <Col xs={12}>
          <JumbotronComp />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <ReviewcCardComp />
        </Col>
        <Col xs={6}>
          <AlbumCaroComp />
        </Col>
      </Row>
      <FooterComp />
    </Container>
  );
}

export default Home;
