import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      style={{
        background: '#f0f4f8',
        padding: '4rem 1rem',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: '#ffffff',
          padding: '2.5rem',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '2rem',
            color: '#003566',
            fontWeight: 600,
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '1rem',
            marginBottom: '2rem',
          }}
        >
          Have questions or need a quote? We'd love to hear from you.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 500, marginBottom: '0.5rem', color: '#222' }}>
              Full Name
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 500, marginBottom: '0.5rem', color: '#222' }}>
              Email Address
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 500, marginBottom: '0.5rem', color: '#222' }}>
              Message
            </span>
            <textarea
              rows={5}
              placeholder="Type your message"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              background: '#0072ce',
              color: '#fff',
              padding: '0.9rem',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#005da8')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#0072ce')}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
