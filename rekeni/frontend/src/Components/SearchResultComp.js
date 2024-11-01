import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/ComponentStyles/search-results.css";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function SearchResultComp({ searchResults }) {
  return (
    <Row className="results-search-contain">
      {searchResults.map((album, index) => (
        <Col
          key={index}
          className="result-col col-3 d-flex align-content-center"
        >
          <div className="img-sml">
            <img
              className="result-img-search"
              src={album.artworkUrl || placeholderImg}
              alt={`Album artwork for ${album.title}`}
            />
          </div>
          <div className="album-meta-res">
            <h5 className="title">{album.title}</h5>
            <h6 className="name">{album.artist}</h6>
            <br />
            <p className="year">Release Year: {album.releaseDate || "N/A"}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SearchResultComp;
