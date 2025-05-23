import React from 'react'
import './Most.css';
import most1_img from '../../assets/room.png';
import most2_img from '../../assets/foam.png';
import most3_img from '../../assets/pest.png';
import most4_img from '../../assets/gas.png';
import most5_img from '../../assets/massage.png';
import most6_img from '../../assets/back.png';
import most7_img from '../../assets/apartment.png';


const Most = () => {
  return (
    <div className="booked">
    <div className="booked-section">
    <h2 className="most-title">Most Booked Services</h2>

    <div className="booked-cards">

      <div className="most-booked">
        <img src={most1_img} alt="" className="most-icon" />
        <p className="most-name">Rooms/Walls Painting</p>
        <p className="rating">
        <i class="fa fa-star" aria-hidden="true"></i>
          4.79 <span>(4K)</span>
        </p>
        <p className="price">₹49</p>
      </div>
      
      <div className="most-booked">
        <img src={most2_img} alt="" className="most-icon" />
        <p className="most-name">Foam-Jet AC Service</p>
        <p className="rating">
        <i class="fa fa-star" ></i>
          4.79 <span>(105K)</span>
        </p>
        <p className="price">₹1,098</p>
      </div>

      <div className="most-booked">
        <img src={most3_img} alt="" className="most-icon" />
        <p className="most-name">Pest Control</p>
        <p className="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          4.79 <span>(1.4M)</span>
        </p>
        <p className="price">₹599</p>
      </div>

      <div className="most-booked">
        <img src={most4_img} alt="" className="most-icon" />
        <p className="most-name">Gas Refill & Check Up</p>
        <p className="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          4.80 <span>(35K)</span>
        </p>
        <p className="price">₹1,498</p>
      </div>

      <div className="most-booked">
        <img src={most5_img} alt="" className="most-icon" />
        <p className="most-name">Swedish Stress Relief Massage</p>
        <p className="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          4.83 <span>(15K)</span>
        </p>
        <p className="price">₹3,999</p>
        </div>

        <div className="most-booked">
        <img src={most6_img} alt="" className="most-icon" />
        <p className="most-name">Deep Tissue Pain Relief Massage</p>
        <p className="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          4.83 <span>(15K)</span>
        </p>
        <p className="price">₹3,999</p>
        </div>

        <div className="most-booked">
        <img src={most7_img} alt="" className="most-icon" />
        <p className="most-name">Apartment Termite Control</p>
        <p className="rating">
          <i class="fa fa-star" aria-hidden="true"></i>
          4.83 <span>(15K)</span>
        </p>
        <p className="price">₹3,999</p>
      </div>
    </div>
  </div>
  </div>

)}

export default Most;