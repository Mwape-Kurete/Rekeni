import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";
import DiscoverSearchCardComp from "../Components/DiscoverSearchCardComp";
import ArtistResultComp from "../Components/ArtistResultComp";

import "../Styles/main.css";

function Discover() {
  const [artist, setArtist] = useState(null);
  const [topAlbums, setTopAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/discover?artistQuery=${encodeURIComponent(query)}`
      );
      setArtist(response.data.artist);
      setTopAlbums(response.data.topAlbums);
    } catch (error) {
      console.error(
        "Error Fetching discover results:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row className="discover-search-cent">
        <Col xs={12} className="discover-sect-card">
          <DiscoverSearchCardComp onSearch={handleSearch} />
        </Col>
      </Row>
      <Row className="album-populate">
        <Col xs={12} className="expand-album-gen">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ArtistResultComp artist={artist} albums={topAlbums} />
          )}
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Discover;
