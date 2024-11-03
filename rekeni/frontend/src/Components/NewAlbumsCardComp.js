import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/new-albums-card.css";

function NewAlbumCardComp({ albumProps = [] }) {
  if (albumProps.length === 0) {
    return <p>No albums available</p>;
  }

  return (
    <Container className="whole-new-album-cont d-flex justify-content-center align-items-center py-3">
      {albumProps.map((album) => (
        <Row className="new-album-box" key={album._id}>
          <Col xs={12} className="single-new-album-box py-3">
            <Row className="rating-layout">
              <Col xs={6} className="album-cover">
                <img
                  className="album-cover-small"
                  src={album.artworkUrl || placeholderImg}
                  alt={`Cover of ${album.title}`}
                />
              </Col>
              <Col xs={6} className="album-meta">
                <h6 className="title-small">
                  {album.title || "Unknown Title"}
                </h6>
                <p className="artist-small">
                  {album.artist || "Unknown Artist"}
                </p>
                <p className="release-date">
                  {album.releaseDate || "Unknown Date"}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default NewAlbumCardComp;
