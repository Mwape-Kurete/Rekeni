import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import ReviewCardComp from "../Components/ReviewCardComp";
import NewAlbumCardComp from "../Components/NewAlbumsCardComp";
import FooterComp from "../Components/FooterComp";
import RatingsCardComp from "../Components/RatingsCardComp";
import AlbumCaroComp from "../Components/AlbumCaroComp";

import "../Styles/main.css";

function New() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="gy-3 recents">
          <h1 className="recent-revs-header">Recent Reviews</h1>
          <div className="review-container">
            <ReviewCardComp />
            <ReviewCardComp />
            <ReviewCardComp />
          </div>
        </Col>
        <Col xs={3} className="gy-3 new-albs-sect">
          <h1 className="recent-revs-header">New Albums</h1>
          <div className="d-flex justify-content-end new-albums">
            <NewAlbumCardComp />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="gy-3 popular ">
          <h1 className="recent-revs-header">Popular Albums</h1>
          <div className="popular-albums">
            <AlbumCaroComp />
            <AlbumCaroComp />
            <AlbumCaroComp />
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

export default New;
