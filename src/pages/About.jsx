import '../App.css';
import aboutBanner from '../assets/about-banner.webp';

const styles = {
  container: {
    fontFamily: 'Poppins, Segoe UI, sans-serif',
    background: '#f7fafd',
    minHeight: '100vh',
    paddingBottom: '40px'
  },
  bannerWrapper: {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    marginBottom: '30px'
  },
  banner: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7)'
  },
  heading: {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '2.8rem',
    fontWeight: 700,
    letterSpacing: '2px',
    textShadow: '0 4px 24px rgba(0,0,0,0.6)'
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    margin: '40px 0'
  },
  statBox: {
    background: '#fff',
    borderRadius: '16px',
    padding: '28px 36px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    textAlign: 'center',
    minWidth: '140px'
  },
  statValue: {
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#0072ce',
    margin: 0
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#333',
    margin: 0
  },
  section: {
    background: '#fff',
    borderRadius: '16px',
    margin: '32px auto',
    padding: '36px 32px',
    maxWidth: '900px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
  },
  sectionAlt: {
    background: '#f0f6fb',
    borderRadius: '16px',
    margin: '32px auto',
    padding: '36px 32px',
    maxWidth: '900px'
  },
  subheading: {
    fontSize: '2rem',
    fontWeight: 600,
    color: '#0072ce',
    marginBottom: '18px'
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#222',
    marginBottom: '18px'
  },
  cardContainer: {
    display: 'flex',
    gap: '24px',
    marginTop: '24px'
  },
  card: {
    flex: 1,
    background: '#f7fafd',
    borderRadius: '12px',
    padding: '28px 22px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '10px'
  },
  cardText: {
    fontSize: '1rem',
    color: '#444'
  },
  cta: {
    background: 'linear-gradient(90deg, #0072ce 0%, #005fa3 100%)',
    borderRadius: '16px',
    margin: '48px auto 0 auto',
    padding: '36px 32px',
    maxWidth: '900px',
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,114,206,0.10)'
  },
  ctaButton: {
    display: 'inline-block',
    background: '#fff',
    color: '#0072ce',
    fontWeight: 600,
    fontSize: '1.1rem',
    padding: '12px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s'
  }
};

const About = () => {
  return (
    <div style={styles.container}>
      {/* Hero Image */}
      <div style={styles.bannerWrapper}>
        <img src={aboutBanner} alt="About Banner" style={styles.banner} />
        <h1 style={styles.heading}>About V&amp;P Elevators</h1>
      </div>

      {/* Quick Stats */}
      <div style={styles.statsContainer}>
        {[
          { label: 'Installations', value: '200+' },
          { label: 'Years of Excellence', value: '25+' },
          { label: 'Cities Covered', value: '30+' },
          { label: 'Technicians', value: '100+' },
        ].map((stat, idx) => (
          <div key={idx} className="stat-box-hover" style={styles.statBox}>
            <h2 style={styles.statValue}>{stat.value}</h2>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.subheading}>Our Mission</h2>
        <p style={styles.paragraph}>
          To deliver world-class vertical transportation solutions with a focus on safety,
          reliability, and efficiency.
        </p>
        <h2 style={styles.subheading}>Our Vision</h2>
        <p style={styles.paragraph}>
          To become Maharashtra’s most trusted elevator brand through innovation and customer-centric service.
        </p>
      </section>

      {/* Why Choose Us */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Why Choose V&amp;P Elevators?</h2>
        <div style={styles.cardContainer}>
          <div className="card-hover" style={styles.card}>
            <h3 style={styles.cardTitle}>🔒 Safety First</h3>
            <p style={styles.cardText}>We adhere to the highest safety standards with 24/7 emergency response systems.</p>
          </div>
          <div className="card-hover" style={styles.card}>
            <h3 style={styles.cardTitle}>⚙️ Customized Solutions</h3>
            <p style={styles.cardText}>Each elevator is tailored to your project needs and building type.</p>
          </div>
          <div className="card-hover" style={styles.card}>
            <h3 style={styles.cardTitle}>📈 Proven Track Record</h3>
            <p style={styles.cardText}>Hundreds of successful installations across commercial and residential buildings.</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.subheading}>Our Leadership</h2>
        <p style={styles.paragraph}>
          Led by visionary founder <strong>Sai Patel</strong>, our leadership emphasizes innovation,
          quality service, and long-term partnerships with clients.
        </p>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={{ color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, Segoe UI, sans-serif', fontWeight: 600 }}>Need an Elevator Partner You Can Trust?</h2>
        <p style={{ color: '#fff', marginBottom: '20px', fontFamily: 'Poppins, Segoe UI, sans-serif', fontWeight: 400 }}>
          Get in touch today to request a consultation or quote.
        </p>
        <a href="/contact" className="cta-btn-hover" style={styles.ctaButton}>Contact Us</a>
      </section>
      {/* Hover effect styles */}
      <style>{`
        .card-hover {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .card-hover:hover {
          box-shadow: 0 8px 32px rgba(0,114,206,0.18), 0 2px 16px rgba(0,0,0,0.10);
          transform: translateY(-8px) scale(1.03);
        }
        .stat-box-hover {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .stat-box-hover:hover {
          box-shadow: 0 6px 24px rgba(0,114,206,0.13), 0 2px 12px rgba(0,0,0,0.08);
          transform: translateY(-5px) scale(1.04);
        }
        .cta-btn-hover {
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .cta-btn-hover:hover {
          background: #0072ce;
          color: #fff;
          box-shadow: 0 6px 24px rgba(0,114,206,0.18);
          transform: translateY(-2px) scale(1.04);
        }
      `}</style>
    </div>
  );
};

// ...styles object remains unchanged

export default About;
