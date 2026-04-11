import React from 'react';
import hotelMakkahImg from '../../assets/hotel-azka-al-safa.JPEG';
import hotelMadinahImg from '../../assets/hotel-dar-an-naem.jpg';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section" id="hotel">
      <div className="container">
        <div className="pricing-box">
          <div className="pricing-header">
            <h3 className="package-title">Paket Umroh 10 Hari - Keberangkatan 23 Juni 2026</h3>
            <div className="package-price">
              <span className="currency">Rp</span>
              <span className="amount">28.500.000</span>
              <span className="per-pax">/pax</span>
            </div>
          </div>
          
          <div className="pricing-split">

            <div className="pricing-left">
              <h4 className="split-title">Hotel Premium & Strategis</h4>
              <div className="hotel-cards">
                <div className="hotel-card">
                  <img src={hotelMakkahImg} alt="Hotel Azka Al Safa Makkah" className="hotel-img" />
                  <div className="hotel-info">
                    <span className="hotel-location">📍 Makkah</span>
                    <h5 className="hotel-name">Azka Al Safa (5 Menit ke Pelataran Masjid)</h5>
                  </div>
                </div>
                <div className="hotel-card">
                  <img src={hotelMadinahImg} alt="Hotel Dar An Naem Madinah" className="hotel-img" />
                  <div className="hotel-info">
                    <span className="hotel-location">📍 Madinah</span>
                    <h5 className="hotel-name">Dar An Naem (5 Menit ke Masjid Nabawi)</h5>
                  </div>
                </div>
              </div>
            </div>


            <div className="pricing-right">
              <h4 className="split-title">Fasilitas & Layanan</h4>
              <ul className="benefit-list">
                <li><span className="check-icon">✅</span> Tiket Pesawat PP (Maskapai Internasional Full Service)</li>
                <li><span className="check-icon">✅</span> Visa Umroh & Asuransi Perjalanan</li>
                <li><span className="check-icon">✅</span> City Tour Makkah & Madinah</li>
                <li><span className="check-icon">✅</span> GRATIS Kereta Cepat + Visit Museum Wahyu</li>
                <li><span className="check-icon">✅</span> Makan 3x Sehari dan Snack (Menu Indonesia)</li>
                <li><span className="check-icon">✅</span> Muthawwif/Pembimbing Tersertifikasi</li>
                <li><span className="check-icon">✅</span> Kajian Sirah Nabawiyah Eksklusif</li>
                <li><span className="check-icon">✅</span> Handling Bandara & Perlengkapan</li>
              </ul>
            </div>
          </div>

          <div className="accommodation-wrap">
            <p className="accommodation-desc">
              Tersedia Juga Paket Akomodasi <span className="highlight-price">Rp2.000.000</span> Premium Pulang Pergi antara Purwokerto ke Bandara Soekarno Hatta (Transportasi, Konsumsi & Hotel).
            </p>
            <div className="accommodation-benefits">
              <h5 className="benefit-label">Benefit:</h5>
              <ul className="accommodation-list">
                <li><span className="check-icon">✅</span> Berangkat dari Purwokerto dengan Armada Sendiri</li>
                <li><span className="check-icon">✅</span> Menginap 1 Malam di Hotel dekat Bandara Soekarno Hatta</li>
                <li><span className="check-icon">✅</span> Penjemputan Kepulangan dari Bandara Soekarno Hatta ke Purwokerto</li>
              </ul>
            </div>
          </div>

          <div className="pricing-cta-wrap centered">
            <button className="btn btn-primary btn-cta" onClick={() => { const el = document.getElementById('daftar'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
