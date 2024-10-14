import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/ComponentStyles/search-results.css";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function SearchResultComp() {
  const albums = [
    {
      title: "Album 1",
      artist: "Artist 1",
      releaseDate: "2023",
      image: placeholderImg, // Placeholder for album image
    },
    {
      title: "Album 2",
      artist: "Artist 2",
      releaseDate: "2022",
      image: placeholderImg,
    },
    {
      title: "Album 3",
      artist: "Artist 3",
      releaseDate: "2021",
      image: placeholderImg,
    },
    {
      title: "Album 4",
      artist: "Artist 4",
      releaseDate: "2020",
      image: placeholderImg,
    },
    {
      title: "Album 5",
      artist: "Artist 5",
      releaseDate: "2019",
      image: placeholderImg,
    },
  ];

  return (
    <Container className="mindmap-container">
      <Row>
        <Col xs={12}>
          {/* Central node */}
          <div className="central-node">
            <div className="d-flex justify-content-center align-items-center text-align-center py-4">
              <img
                className="searched-album"
                src={placeholderImg}
                alt="searched album"
              />
            </div>
          </div>

          {/* Map over the albums array to create nodes with Card components */}
          {albums.map((album, index) => (
            <Card
              key={index}
              className={`mindmap-node node-${
                index + 1
              } node d-flex justify-content-center align-items-center`}
            >
              <Card.Img
                className="image-discover"
                variant="top"
                src={album.image}
                alt={album.title}
              />
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>By: {album.artist}</Card.Text>
                <Card.Text>Release Date: {album.releaseDate}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResultComp;
