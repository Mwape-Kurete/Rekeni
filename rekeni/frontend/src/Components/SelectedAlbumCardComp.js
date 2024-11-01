import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/selected-album-card.css";

function SelectedAlbumCardComp({ album }) {
  return (
    <div className="selected-whole-contain d-flex justify-content-center align-items-center">
      <Row className="selected-containter">
        <Col xs={12} md={6} className="entire-search">
          <div className="d-flex select-meta">
            <div className="image">
              <img
                className="select-alb-cover-img"
                src={album.images[1]?.url || placeholderImg}
                alt={`${album.name} album cover`}
              />
            </div>
            <div className="selected-alb-info">
              <h4 className="album-title text-center">
                Selected Album:{" "}
                <span className="select-album">{album.name}</span>
              </h4>
              <h5 className="artist-title">
                Artist:{" "}
                <span className="select-artist-name">
                  {album.artists.map((artist) => artist.name).join(", ")}
                </span>
              </h5>
              <p className="year-title">
                Release Year:{" "}
                <span className="select-artist-name">{album.release_date}</span>
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
