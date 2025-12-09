import React, { useState, useEffect } from "react";

import img1 from "../assets/elevator1.webp";
import img2 from "../assets/elevator2.webp";
import img3 from "../assets/elevator3.webp";

const slides = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, idx) => {
        const opacityClass = idx === current ? "opacity-100" : "opacity-0";
        return (
          <img
            key={slide.id}
            src={slide.url}
            alt={`Elevator image ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${opacityClass}`}
          />
        );
      })}
    </div>
  );
}

export default Carousel;
