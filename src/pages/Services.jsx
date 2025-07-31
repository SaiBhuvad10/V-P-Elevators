import React from 'react';
import installImg from '../assets/Elevators_Install.webp';
import escalatorImg from '../assets/Escalators.webp';
import maintenanceImg from '../assets/Maintenance.webp';
import '../App.css';

function Services() {
  return (
    <div>
      <section id="services" className="services" style={{ background: '#f7f9fb', padding: '40px 0' }}>
        <h2 className="services-title" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 700, marginBottom: 32, color: '#1a2236' }}>
          Our Services
        </h2>
        <div className="service-grid" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          <div className="service-box" style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: 24,
            width: 320,
            textAlign: 'center',
            transition: 'transform 0.2s',
          }}>
            <img src={installImg} alt="Elevator Installation" style={{ width: '100%', borderRadius: 12, marginBottom: 16, height: 180, objectFit: 'cover' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a2236', marginBottom: 8 }}>Elevator Installation</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>Modern, efficient, and custom-designed elevators.</p>
          </div>
          <div className="service-box" style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: 24,
            width: 320,
            textAlign: 'center',
            transition: 'transform 0.2s',
          }}>
            <img src={escalatorImg} alt="Escalator Services" style={{ width: '100%', borderRadius: 12, marginBottom: 16, height: 180, objectFit: 'cover' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a2236', marginBottom: 8 }}>Escalator Services</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>Reliable escalators for public and private spaces.</p>
          </div>
          <div className="service-box" style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            padding: 24,
            width: 320,
            textAlign: 'center',
            transition: 'transform 0.2s',
          }}>
            <img src={maintenanceImg} alt="Maintenance" style={{ width: '100%', borderRadius: 12, marginBottom: 16, height: 180, objectFit: 'cover' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a2236', marginBottom: 8 }}>Maintenance</h3>
            <p style={{ color: '#555', fontSize: '1rem' }}>24/7 maintenance services for your peace of mind.</p>
          </div>
        </div>

        <div className="cta-section" style={{
          background: 'linear-gradient(90deg, #0077b6 0%, #00b4d8 100%)',
          borderRadius: 16,
          padding: '40px 24px',
          textAlign: 'center',
          color: '#fff',
          marginBottom: '48px',
          maxWidth: 900,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Need help choosing the right solution?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>Our experts are ready to guide you through the best elevator and escalator services.</p>
          <button className="cta-button" style={{
            background: '#fff',
            color: '#0077b6',
            fontWeight: 700,
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'background 0.2s, color 0.2s'
          }} onClick={() => { window.location.href = '/Contact';
          }}
           onMouseOver={(e) => (e.currentTarget.style.background = '#eee4e4ff')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#ffffffff')}
            >Request a Quote</button>
        </div>

        <div className="testimonial-section" style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '32px 0'
        }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1a2236', marginBottom: 24 }}>What Our Clients Say</h3>
          <div className="testimonial-grid" style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div className="testimonial-box" style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: '24px 20px',
              minWidth: 280,
              maxWidth: 400,
              fontStyle: 'italic',
              color: '#333'
            }}>
              <p style={{ marginBottom: 12 }}>"Professional and fast service. Highly recommended!"</p>
              <strong style={{ color: '#0077b6' }}>– Mehta Builders</strong>
            </div>
            <div className="testimonial-box" style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              padding: '24px 20px',
              minWidth: 280,
              maxWidth: 400,
              fontStyle: 'italic',
              color: '#333'
            }}>
              <p style={{ marginBottom: 12 }}>"Their team provided the perfect elevator solution for our mall."</p>
              <strong style={{ color: '#0077b6' }}>– Urban Heights Group</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
