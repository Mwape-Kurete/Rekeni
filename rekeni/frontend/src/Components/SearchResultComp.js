import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "../Styles/ComponentStyles/search-results.css";

function SearchResultComp() {
  const albums = [
    {
      title: "Album 1",
      artist: "Artist 1",
      releaseDate: "2023",
      image: "https://via.placeholder.com/150", // Placeholder for album image
    },
    {
      title: "Album 2",
      artist: "Artist 2",
      releaseDate: "2022",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Album 3",
      artist: "Artist 3",
      releaseDate: "2021",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Album 4",
      artist: "Artist 4",
      releaseDate: "2020",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Album 5",
      artist: "Artist 5",
      releaseDate: "2019",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container className="mindmap-container">
      {/* Central node */}
      <div className="mindmap-node central-node">
        <h4 className="d-flex justify-content-center align-items-center text-align-center">
          Searched Album
        </h4>
      </div>

      {/* Map over the albums array to create nodes with Card components */}
      {albums.map((album, index) => (
        <Card
          key={index}
          className={`mindmap-node album-card node-${index + 1} node`}
        >
          <Card.Img variant="top" src={album.image} alt={album.title} />
          <Card.Body>
            <Card.Title>{album.title}</Card.Title>
            <Card.Text>By: {album.artist}</Card.Text>
            <Card.Text>Release Date: {album.releaseDate}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default SearchResultComp;
