import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/ComponentStyles/search-results.css";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function SearchResultComp() {
  return (
    <>
      <Row className="results-search-contain">
        <Col className="result-col col-12 d-flex align-content-center">
          <div className="img-sml">
            <img
              className="result-img-search"
              src={placeholderImg}
              alt="Rendered Album from resluts"
            />
          </div>
          <div className="album-meta-res">
            <h5 className="title">Albulm Title</h5>
            <h6 className="name">Artist Name</h6>
            <br />
            <p className="year">Release Year: 0000</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SearchResultComp;
