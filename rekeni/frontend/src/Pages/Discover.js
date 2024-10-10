import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";
import DiscoverSearchCardComp from "../Components/DiscoverSearchCardComp";
import SearchResultComp from "../Components/SearchResultComp";

import "../Styles/main.css";

function Discover() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row className="album-populate">
        <Col xs={12} className="expand-album-gen">
          <SearchResultComp />
        </Col>
      </Row>
      <Row className="discover-search-cent">
        <Col xs={12} className="discover-sect-card">
          <DiscoverSearchCardComp />
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Discover;
