import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/albumcarocard.css";

function AlbumCaroComp({ albumPropsCards }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = (albumId) => {
    console.log(`Navigating to album with ID: ${albumId}`); // Log for debugging
    navigate(`/singleAlbum?query=${albumId}`); // Navigate with query parameter
  };

  return (
    <>
      {albumPropsCards.map((album) => (
        <Card
          key={album.spotifyId}
          style={{ width: "18rem", cursor: "pointer" }} // Add pointer cursor for UX
          className="bg-dark album-overlays mb-3"
          onClick={() => handleCardClick(album.spotifyId)} // Add onClick event
        >
          <Card.Img
            src={album.artworkUrl || placeholderImg}
            alt={`Album cover for ${album.title}`}
          />
          <Card.ImgOverlay>
            <Card.Title>{album.title}</Card.Title>
            <Card.Text>
              by: <span className="artist-name">{album.artist}</span>
            </Card.Text>
            <Card.Text>Released: {album.releaseDate}</Card.Text>
            {album.averageRating !== null && (
              <Card.Text>
                Average Rating: {album.averageRating.toFixed(1)}
              </Card.Text>
            )}
          </Card.ImgOverlay>
        </Card>
      ))}
    </>
  );
}

export default AlbumCaroComp;
