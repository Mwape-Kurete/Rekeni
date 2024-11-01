import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../Styles/ComponentStyles/search-results.css";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function ArtistResultComp({ artist, albums }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {artist && albums.length > 0 ? (
        <Row className="results-search-contain">
          <h2>{artist}'s Top 5 Albums</h2>
          {albums.map((album, index) => (
            <Col
              key={index}
              className="result-col col-3 d-flex align-content-center"
              onClick={handleShow}
            >
              <div className="img-sml">
                <img
                  className="result-img-search"
                  src={album.artwork || placeholderImg}
                  alt={`${album.title} album cover`}
                />
              </div>
              <div className="album-meta-res">
                <p className="title">{album.title}</p>
                <p className="year">Release Date: {album.releaseDate}</p>
              </div>
            </Col>
          ))}
          {/* Album Modal */}
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{artist}'s Top Albums</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {albums.map((album, index) => (
                <div key={index} className="modal-album-item">
                  <img
                    className="modal-img"
                    src={album.artwork || placeholderImg}
                    alt={`${album.title} album cover`}
                  />
                  <div className="modal-album-meta">
                    <h5>{album.title}</h5>
                    <p>Release Date: {album.releaseDate}</p>
                    <a
                      href={album.albumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Spotify
                    </a>
                  </div>
                </div>
              ))}
              <Button
                className="mt-2 submitReviewBTN backBTNmodal"
                onClick={handleClose}
              >
                Go Back
              </Button>
            </Modal.Body>
          </Modal>
        </Row>
      ) : (
        <p>No albums found. Start a search above!</p>
      )}
    </>
  );
}

export default ArtistResultComp;
