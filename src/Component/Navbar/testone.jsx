import React from "react";
import Slider from "react-slick";

// Make sure you import slick-carousel styles (either in this file or in index.js)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the speed of autoplay (in milliseconds)
  };

  const imageUrls = [
    "https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg?t=st=1733372880~exp=1733376480~hmac=3561421e0ee4ce918f49f4ff7596c7f5dc4e49a44a79baf5491b0fb8d288a0c0&w=826",
    "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1733372613~exp=1733376213~hmac=cd8569e69cf69fc0f2c652314041a27c4393996a92ca14d27f1ba5eb98788fe7&w=826",
    "https://img.freepik.com/free-photo/medium-shot-gamer-playing-with-controller_23-2149829172.jpg?t=st=1733373023~exp=1733376623~hmac=09884feceb6a6e5ae62ef3fe86acc6dcb9b8475b676d42c10dc356873be9586c&w=826",
    "https://img.freepik.com/free-photo/cool-gaming-setup-with-neon-lights-still-life_23-2149829150.jpg?t=st=1733373183~exp=1733376783~hmac=841e1135d8901860d978362948d1d55088f7a3e44f14e61cac5c5a1654d2b29c&w=826",
    "https://img.freepik.com/free-photo/high-angle-gaming-controllers-arrangement_23-2149829179.jpg?t=st=1733373239~exp=1733376839~hmac=4ccb443394f91e249d0cd5002dca0107fb26375d7e9cef55255bdc744d617ce1&w=826"
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
