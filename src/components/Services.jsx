import React from 'react';
import installImg from '../assets/Elevators_Install.jpg';
import escalatorImg from '../assets/Escalators.jpg';
import maintenanceImg from '../assets/Maintenance.jpeg';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service-box">
          <img src={installImg} alt="Elevator Installation" />
          <h3>Elevator Installation</h3>
          <p>Modern, efficient, and custom-designed elevators.</p>
        </div>
        <div className="service-box">
          <img src={escalatorImg} alt="Escalator Services" />
          <h3>Escalator Services</h3>
          <p>Reliable escalators for public and private spaces.</p>
        </div>
        <div className="service-box">
          <img src={maintenanceImg} alt="Maintenance" />
          <h3>Maintenance</h3>
          <p>24/7 maintenance services for your peace of mind.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
