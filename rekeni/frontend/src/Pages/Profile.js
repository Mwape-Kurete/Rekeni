import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../Components/NavbarComp";
import TopStackComp from "../Components/TopStackComp";
import "../Styles/main.css";

function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      {/* Add a Row to wrap the two columns */}
      <Row>
        <Col xs={12} md={6}>
          <TopStackComp />
        </Col>
        <Col xs={12} md={6}>
          <TopStackComp />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
