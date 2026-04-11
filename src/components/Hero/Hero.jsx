import React from 'react';
import './Hero.css';

const Hero = ({ region, landmarkImg, bgPosition = 'center' }) => {
  return (
    <section 
      className="hero"
      style={{ 
        backgroundImage: `url(${landmarkImg})`,
        backgroundPosition: bgPosition
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🌙</span> Spesial Muharam 1448 H
          </div>
          <h1 className="hero-title">
            Sedulur Purwokerto Umroh Nyaman , Mangkat Langsung Sekang <span className="highlight">Purwokerto</span>
          </h1>
          <div className="hero-cta-group">
            <a href="https://wa.me/62816677408" className="btn btn-primary hero-btn" target="_blank" rel="noreferrer">Konsultasi Gratis via WA</a>
            <button className="btn btn-outline hero-btn-outline" onClick={() => { const el = document.getElementById('hotel'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Lihat Detail Paket</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
