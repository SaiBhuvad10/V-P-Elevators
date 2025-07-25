import React from 'react';
import '../App.css';
import LottieAnimation from './LottieAnimation';

function Home() {
  return (
    <section className="hero" id="home">
      <div className="content">
        <h1>Welcome to <span className="highlight">V&P Elevators</span></h1>
        <p>Your trusted partner for Elevators, Escalators & Maintenance Services</p>
        <a href="#services" className="cta-button">Explore Our Services</a>
      </div>
    </section>
  );
}

export default Home;
