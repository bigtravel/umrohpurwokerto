import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Countdown from '../components/Countdown/Countdown';
import FastFacts from '../components/FastFacts/FastFacts';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Pricing from '../components/Pricing/Pricing';
import Gift from '../components/Gift/Gift';
import Testimonial from '../components/Testimonial/Testimonial';
import Schedule from '../components/Schedule/Schedule';
import Footer from '../components/Footer/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp';

import landmarkImg from '../assets/foto-jamaah-big-travel-pwt.jpg';

const region = 'Purwokerto';
const bgPosition = 'center';

const Landing = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', '#008D91');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero region={region} landmarkImg={landmarkImg} bgPosition={bgPosition} />
        <Countdown />
        <FastFacts region={region} />
        <FeatureGrid region={region} />
        <Pricing />
        <Gift />
        <Testimonial region={region} />
        <Schedule />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Landing;
