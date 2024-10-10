import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

import "../Styles/ComponentStyles/new-albums-card.css";

function NewAlbumCardComp() {
  return (
    <Container className="whole-new-album-cont d-flex justify-content-center align-items-center">
      <Row className="new-album-box">
        <Col xs={12} className="single-new-album-box py-3">
          <Row className="rating-layout">
            <Col xs={6} className="album-cover">
              <img
                className="album-cover-small"
                src={placeholderImg}
                alt="album cover small"
              />
            </Col>
            <Col xs={6} className="album-meta ">
              <h6 className="title-small">Album Title</h6>
              <p className="artist-small">Artist Name</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NewAlbumCardComp;
