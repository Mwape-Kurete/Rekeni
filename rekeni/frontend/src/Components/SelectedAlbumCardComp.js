import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/selected-album-card.css";

function SelectedAlbumCardComp() {
  return (
    <div className="selected-whole-contain d-flex justify-content-center align-items-center">
      <Row className="selected-containter">
        <Col xs={12} md={6} className="entire-search">
          <div className="d-flex select-meta">
            <div className="image">
              <img
                className="select-alb-cover-img"
                src={placeholderImg}
                alt="selected album cover"
              />
            </div>
            <div className="selected-alb-info">
              <h2 className="album-title text-center">
                Selected Album: <span className="select-album">Album Name</span>
              </h2>
              <h5 className="artist-title">
                Artist: <span className="select-artist-name">Artist Name</span>
              </h5>
              <p className="year-title">
                Release Year: <span className="select-artist-name">0000</span>
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center go-to-review">
            <h5 className="prompt text-center">
              Have thoughts on the Album? Leave a review
            </h5>
            <Link to="/singleAlbum" className="btn btn-reviewCTA">
              Review
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SelectedAlbumCardComp;
