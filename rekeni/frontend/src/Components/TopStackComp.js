//Top 5 albums or top 5 artist stack carousel for profile page
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/ComponentStyles/top-five.css";

function TopStackComp() {
  return (
    <Container fluid className="top-cont">
      <Row>
        <div className="card-top">
          <h3 className="title">Card 1</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle"></div>
        </div>
        <div className="card-top">
          <h3 className="title">Card 2</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle"></div>
        </div>
        <div className="card-top">
          <h3 className="title">Card 3</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle"></div>
        </div>
        <div className="card-top">
          <h3 className="title">Card 4</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle"></div>
        </div>

        <div className="card-top">
          <h3 className="title">Card 5</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle"></div>
        </div>
      </Row>
    </Container>
  );
}

export default TopStackComp;
