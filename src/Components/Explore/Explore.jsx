import React from 'react';
import './Explore.css';
import {Link} from 'react-router-dom';

import women_img from '../../assets/women.webp';
import men_img from '../../assets/men.webp' ;
import ac_img from '../../assets/ac.webp';
import clean_img from '../../assets/clean.webp';
import elect_img from '../../assets/elect.webp';
import water_img from '../../assets/water.webp';
import paint_img from '../../assets/paint.webp';
import carp_img from '../../assets/carp.webp';


const Explore = () => {

  return (
    <div className="explore-container">
      <h2 className="explore-title">What are you looking for?</h2>
      <div className="explore-grid">
        
      <div className="service-card">
          <img src={women_img} alt="" className='service-icon'/>
          <p className='service-name'>Women's Salon & Spa</p>
      </div>

    
      <div className="service-card">
          <img src={men_img} alt="" className='service-icon'/>
          <p className='service-name'>Men's Salon & Massage</p>
      </div>
      <div className="service-card">
          <img src={ac_img} alt="" className='service-icon'/>
          <p className='service-name'>AC & Appliance Repair</p>
      </div>
      <div className="service-card">
          <img src={clean_img} alt="" className='service-icon'/>
          <p className='service-name'>Cleaning & Pest Control</p>
      </div>
      <div className="service-card">
          <img src={elect_img} alt="" className='service-icon'/>
          <p className='service-name'>Electrician & Plumber</p>
      </div>
      <div className="service-card">
          <img src={water_img} alt="" className='service-icon'/>
          <p className="service-tag">NEW</p>
          <p className='service-name'>Native Water Purifier</p>
      </div>
      <div className="service-card">
          <img src={paint_img} alt="" className='service-icon'/>
          <p className='service-name'>Walls & Rooms Painting</p>
      </div>
      <div className="service-card">
          <img src={carp_img} alt="" className='service-icon'/>
          <p className='service-name'>Carpenter</p>
      </div>
      </div>
      <Link to='/services'><button className="explore-btn">Explore All Services</button></Link>
    </div>
)
}

export default Explore;


