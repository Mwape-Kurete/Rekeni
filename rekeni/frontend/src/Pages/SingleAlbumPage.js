import React from "react";
import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";
import ReviewCardComp from "../Components/ReviewCardComp";
import AlbumSectComp from "../Components/AlbumSectComp";

import { Container, Row, Col } from "react-bootstrap";

function SingleAlbumPage() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row className="whole-single-ablum-info">
        <Col xs={12} className="single-album-info-container">
          <AlbumSectComp />
        </Col>
      </Row>
      <Row className="review-section-single">
        <Col xs={12} className="review-single-cont">
          <ReviewCardComp />
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default SingleAlbumPage;
