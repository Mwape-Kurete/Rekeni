import React from "react";
import Card from "react-bootstrap/Card";
import placeholderImg1 from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function TopStackComp() {
  const albums = [
    { src: placeholderImg1, title: "Album 1" },
    { src: placeholderImg1, title: "Album 2" },
    { src: placeholderImg1, title: "Album 3" },
    { src: placeholderImg1, title: "Album 4" },
    { src: placeholderImg1, title: "Album 5" },
  ];

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-6 top-albums-container">
        <h3 className="text-center">Your Top 5 Albums</h3>
        <div className="album-stack">
          {albums.map((album, index) => (
            <Card
              key={index}
              className="album-card"
              style={{ backgroundImage: `url(${album.src})` }}
            >
              <Card.ImgOverlay className="album-overlay">
                <Card.Title>{album.title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopStackComp;
