import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../Components/NavbarComp";
import TopStackComp from "../Components/TopStackComp";
import UserInformation from "../Components/UserInformation";
import ReviewCardComp from "../Components/ReviewCardComp";
import RatingsCardComp from "../Components/RatingsCardComp";
import FooterComp from "../Components/FooterComp";

import "../Styles/main.css";

function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <UserInformation />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <h1 className="top-albums-header">Your Top 4 Albums</h1>
          <div className="cont-for-stack d-flex justify-content-center align-items-center">
            <TopStackComp />
          </div>
        </Col>
      </Row>
      <div className="bottom-divider d-flex justify-content-center align-items-center">
        <Row className="user-ratings-reviews">
          <Col xs={6}>
            <h1 className="user-reviews">Your Reviews</h1>
            <ReviewCardComp />
          </Col>
          <Col xs={6}>
            <h1 className="user-ratings">Your Ratings</h1>
            <RatingsCardComp />
          </Col>
        </Row>
      </div>

      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Profile;
