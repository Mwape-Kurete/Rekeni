import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Services/UserContext";

import { Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../Components/NavbarComp";
import TopStackComp from "../Components/TopStackComp";
import UserInformation from "../Components/UserInformation";
import ReviewCardComp from "../Components/ReviewCardComp";
import RatingsCardComp from "../Components/RatingsCardComp";
import FooterComp from "../Components/FooterComp";
import AlbumArtistTilesComp from "../Components/AlbumArtistTilesComp";

import "../Styles/main.css";

function Profile() {
  const location = useLocation();
  const { user } = useContext(UserContext);

  //for loading reviews
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = user.userId;

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await axios.get(`/api/review/user/${userId}`);

        console.log("response for fetch user profile reviews: ", response.data);

        setAllReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.error("Error Fetching uesr profile Reviews: ", error);
      }
    };

    fetchUserReviews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <UserInformation />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <h1 className="top-albums-header">Your Top 5 Albums</h1>
          <div className="cont-for-stack d-flex justify-content-center align-items-center">
            {/* <TopStackComp /> */}
            <AlbumArtistTilesComp />
          </div>
        </Col>
      </Row>
      <div className="bottom-divider d-flex justify-content-center align-items-center">
        <Row className="user-ratings-reviews d-flex justify-content-center align-items-center">
          <Col xs={12}>
            <h1 className="user-reviews ">Your Reviews</h1>
            <ReviewCardComp allReviews={allReviews} location={location} />
          </Col>
        </Row>
      </div>

      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default Profile;
