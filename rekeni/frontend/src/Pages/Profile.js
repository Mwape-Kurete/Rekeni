import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../Components/NavbarComp";
import TopStackComp from "../Components/TopStackComp";
import UserInformation from "../Components/UserInformation";
import ReviewCardComp from "../Components/ReviewCardComp";
import RatingsCardComp from "../Components/RatingsCardComp";
import FooterComp from "../Components/FooterComp";
import AlbumArtistTilesComp from "../Components/AlbumArtistTilesComp";

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
          <h1 className="top-albums-header">Your Top 5 Albums</h1>
          <div className="cont-for-stack d-flex justify-content-center align-items-center">
            {/* <TopStackComp /> */}
            <AlbumArtistTilesComp />
          </div>
        </Col>
      </Row>
      <div className="bottom-divider d-flex justify-content-center align-items-center">
        <Row className="user-ratings-reviews">
          <Col xs={12}>
            <h1 className="user-reviews">Your Reviews</h1>
            <ReviewCardComp />
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
