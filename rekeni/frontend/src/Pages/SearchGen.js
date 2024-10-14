import React from "react";
import "../Styles/main.css";

import NavbarComp from "../Components/NavbarComp";
import SearchResultComp from "../Components/SearchResultComp";
import SelectedAlbumCardComp from "../Components/SelectedAlbumCardComp";

import { Container, Row, Col } from "react-bootstrap";

function SearchGen() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row className="album-populate">
        <Col xs={12} className="expand-album-gen"></Col>
      </Row>
      <Row className="discover-search-cent">
        <Col xs={12} className="discover-sect-card"></Col>
      </Row>
    </Container>
  );
}

export default SearchGen;
