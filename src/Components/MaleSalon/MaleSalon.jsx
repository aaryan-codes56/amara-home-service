import React from 'react';
import './MaleSalon.css';
import hair_img from '../../assets/men1.png';
import facial_img from '../../assets/men2.png';
import colour_img from '../../assets/men3.png';
import ped_img from '../../assets/men4.png';

const MaleSalon = () => {
  return (
    <div className="male-salon">
      <div className="male-salon-title">
        <h2>Salon for Men</h2>
      </div>

      <div className="male-salon-cards">
        <div className="male-salon-card">
          <img src={hair_img} alt="Facial" />
        </div>

        <div className="male-salon-card">
          <img src={facial_img} alt="Shaving" />
        </div>

        <div className="male-salon-card">
          <img src={colour_img} alt="Beard Styling" />
        </div>

        <div className="male-salon-card">
          <img src={ped_img} alt="Massage" />
        </div>

      </div>
    </div>
  );
};

export default MaleSalon;
