import React from 'react';
import './Home.css';
import InfoTicker from './InfoTicker';
import HomeImage from '../Assets/FerasAljoudi2.jpg';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/FerasAljoudiResume.pdf';
    link.download = 'FerasAljoudiResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="text-content">
        <h1>Welcome to my Portfolio</h1>
        <h1>Feras Aljoudi</h1>
        <button className="download-btn" onClick={handleDownload}>Download CV</button>
      </div>
      <div className="image-content">
        <img src={HomeImage} alt="Home" className="home-image" />
      </div>
      <InfoTicker />
    </section>
  );
};

export default Home;
