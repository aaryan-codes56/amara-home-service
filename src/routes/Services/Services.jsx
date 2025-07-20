import React from 'react';
import './Services.css';

import most1_img from '../../assets/room.png';
import most2_img from '../../assets/foam.png';
import most3_img from '../../assets/pest.png';
import most4_img from '../../assets/gas.png';
import most5_img from '../../assets/massage.png';
import most6_img from '../../assets/repair4.png';
import most7_img from '../../assets/apartment.png';

const Services = () => {
  return (
    <div className="myservices-container">
      <h2>Our Services</h2>
      <div className="myservices-grid">

        <div className="myservices-card">
          <img src={most1_img} alt="Painting" />
          <h3>Painting</h3>
          <p>Interior and exterior wall painting.</p>
        </div>

        <div className="myservices-card">
          <img src={most2_img} alt="AC Service" />
          <h3>Foam-Jet AC Service</h3>
          <p>AC deep cleaning & servicing.</p>
        </div>

        <div className="myservices-card">
          <img src={most3_img} alt="Pest Control" />
          <h3>Pest Control</h3>
          <p>Get rid of cockroaches, termites, etc.</p>
        </div>

        <div className="myservices-card">
          <img src={most4_img} alt="Gas Service" />
          <h3>Gas Refill & Check-Up</h3>
          <p>Refill and safety check of LPG units.</p>
        </div>

        <div className="myservices-card">
          <img src={most5_img} alt="Massage" />
          <h3>Swedish Massage</h3>
          <p>Relaxing full-body stress relief massage.</p>
        </div>

        <div className="myservices-card">
          <img src={most6_img} alt="Electrician" />
          <h3>Electrician Service</h3>
          <p>Wiring, switches, light fitting & repair.</p>
        </div>

        <div className="myservices-card">
          <img src={most7_img} alt="Cleaning" />
          <h3>Home Deep Cleaning</h3>
          <p>Room, kitchen & bathroom deep cleaning.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
