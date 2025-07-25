import React from 'react';
import '../App.css';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="content">
          <h1>Welcome to <span className="highlight">V&P Elevators</span></h1>
          <p>Your trusted partner for Elevators, Escalators & Maintenance Services</p>
          <Link to="/services" className="cta-button">
            Explore Our Services
          </Link>
        </div>
      </section>
      <section className="carousel-section">
        <Carousel />
      </section>
    </>
  );
}

export default Home;
