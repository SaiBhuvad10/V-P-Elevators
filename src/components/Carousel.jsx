import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css"; // Ensure this is imported

import elevator1 from "../assets/elevator1.webp";
import elevator2 from "../assets/elevator2.webp";
import elevator3 from "../assets/elevator3.webp";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Elevators</h2>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {[elevator1, elevator2, elevator3].map((img, i) => (
            <div key={i}>
              <img src={img} alt={`Elevator ${i + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
