import React from 'react'
import './About.css'
import Team from '../../Components/Team/Team'
import Investors from '../../Components/Investors/Investors';

const About = () => {
  return (
    <>
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-heading">Who we are</h2>
        <p className="about-description">
          Amara operates a technology-driven, full-stack online services marketplace for quality driven services and solutions across various home and beauty categories. Our platform enables consumers to easily order services, including cleaning, pest control, plumbing, carpentry, appliance servicing and repair, painting, skincare, hair grooming and massage therapy. These services are delivered by trained and independent service professionals at the consumers’ convenience. We are focused on enabling delivery of a quality driven, standardized and reliable service experience.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h3 className="stat-number">48,000+</h3>
          <p className="stat-label">Active Service Professionals</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-number">13 Million+</h3>
          <p className="stat-label">Consumers</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-number">60+</h3>
          <p className="stat-label">Cities</p>
        </div>
        <div className="stat-box">
          <h3 className="stat-number">4+</h3>
          <p className="stat-label">Countries</p>
        </div>
      </div>
    </div>
      <Team />
      <Investors />
    </>
  );
};


export default About