import React from 'react';
import './Hero.css';
import Explore from '../Explore/Explore';
import Banner from '../Banner/Banner';
import Most from '../Most/Most';
import FemaleSalon from '../FemaleSalon/FemaleSalon';
import MaleSalon from '../MaleSalon/MaleSalon';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero-container'>
          <div className="hero-content">
            <h1>Welcome to Amara Home Solutions</h1>
            <p>Your one stop solution for all home services.</p>
            <div className="search-box">
              <input type="text" placeholder="Search for services like plumber, electrician..." />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <Explore />
      <Banner />
      <Most />
      <FemaleSalon />
      <MaleSalon />
    </>
  );
};

export default Hero;
