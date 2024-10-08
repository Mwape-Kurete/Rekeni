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
        <Col
          xs={6}
          className="review-sect-home d-flex justify-content-center overflow-auto"
        >
          <ReviewcCardComp />
        </Col>
        <Col
          xs={6}
          className="album-sect-home d-flex justify-content-start overflow-x-auto"
        >
          <AlbumCaroComp />
        </Col>
      </Row>

      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Home;
