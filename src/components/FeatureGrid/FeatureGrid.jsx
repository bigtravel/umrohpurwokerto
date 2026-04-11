import React from 'react';
import './FeatureGrid.css';
import armadaImg from '../../assets/bus-travel.png';
import haramainImg from '../../assets/haramain.png';
import museumImg from '../../assets/museum-wahyu.jpeg';

const FeatureGrid = ({ region }) => {
  const features = [
    {
      title: "Armada Sendiri",
      desc: `Pulang Pergi dijemput armada eksklusif kami. Titik kumpul nyaman langsung di ${region}.`,
      image: armadaImg,
      imageAlt: "Armada Big Travel"
    },
    {
      title: "Kereta Cepat Haramain",
      desc: "GRATIS! Nikmati perjalanan Madinah-Makkah secepat kilat dengan tiket kereta cepat.",
      image: haramainImg,
      imageAlt: "Kereta Cepat Haramain"
    },
    {
      title: "Museum Wahyu",
      desc: "Napak tilas sejarah turunnya wahyu pertama di Museum Wahyu (Tiket Masuk Gratis).",
      image: museumImg,
      imageAlt: "Museum Wahyu"
    }
  ];

  return (
    <section className="feature-section" id="program">
      <div className="container">
        <div className="feature-header">
          <span className="feature-subtitle">Benefit Eksklusif</span>
          <h2 className="feature-title">Kenapa Warga {region} Memilih BIG Travel?</h2>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className={`feature-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
              <div className="feature-image-wrapper">
                <img src={feature.image} alt={feature.imageAlt} className="feature-image" />
              </div>
              <div className="feature-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

