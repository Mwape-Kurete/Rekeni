import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import SelectSearchBarArt from "../Components/SelectSearchBarArt";
import AlbumArtistTileComp from "../Components/AlbumArtistTilesComp";

import "../Styles/main.css";

function SelectTopAlbums() {
  return (
    <Container>
      <Row className="search-sect">
        <Col className="col-12">
          <h1 className="search-for">Search For Albums</h1>
          <SelectSearchBarArt />
        </Col>
      </Row>
      <Row className="chosen-sect">
        <Col className="col-12">
          <p className="chosen">Your Chosen Top 5</p>

          <AlbumArtistTileComp />
        </Col>
        <Col className="next-step">
          <Link to="/selctArtist" className="btn btn-next-page">
            Complete Sign Up
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SelectTopAlbums;
