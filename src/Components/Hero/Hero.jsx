import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className="hero-content">
          <h1>Welcome to Amara Home Solutions</h1>
          <p>Your one stop solution for all home services.</p>         
          </div>
          <div className="exploremore-btn"> <Link to='/services'><button className="explore-btn">Explore More</button></Link></div>
         
        </div>
      </div>
    // </div>
  );
};
export default Hero;
