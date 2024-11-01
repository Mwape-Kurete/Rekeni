import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "../Styles/main.css";

import NavbarComp from "../Components/NavbarComp";
import SearchResultComp from "../Components/SearchResultComp";
import SelectedAlbumCardComp from "../Components/SelectedAlbumCardComp";

import { Container, Row, Col } from "react-bootstrap";

import "../Styles/main.css";

function SearchGen() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`/api/searchAlbums?query=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error Fetching search results: ", error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row className="album-populate">
        <Col xs={12} className="expand-album-gen">
          <SearchResultComp searchResults={searchResults} />
        </Col>
      </Row>
      <Row className="discover-search-cent">
        <Col xs={12} className="discover-sect-card">
          <SelectedAlbumCardComp />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchGen;
