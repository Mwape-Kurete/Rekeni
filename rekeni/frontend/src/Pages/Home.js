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
        <Col xs={6} className="review-sect-home">
          <h1 className="home-titles">Quickview: Reviews</h1>
          <ReviewcCardComp />
        </Col>
        <Col xs={4} className="album-sect-home ">
          <h1 className="home-titles">Quickview: Highly Rated Albums</h1>
          <div className="popular-albums">
            <AlbumCaroComp />
            <AlbumCaroComp />
          </div>
        </Col>
      </Row>

      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Home;
