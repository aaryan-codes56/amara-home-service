import React from 'react';
import './FemaleSalon.css';
import hair_img from '../../assets/hair.png';
import facial_img from '../../assets/facial.png';
import waxing_img from '../../assets/waxing.png';
import threading_img from '../../assets/threading.png';
import manicure_img from '../../assets/manicure.png';
import pedicure_img from '../../assets/pedicure.png';
import bleach_img from '../../assets/bleach.png';
import smartLockBanner from '../../assets/smartLockBanner.png';



const FemaleSalon = () => {
  return (
    <div className="female-salon">
      <div className="female-salon-title">
        <h2>Salon for Women</h2>
      </div>

      <div className="female-salon-cards">

        <div className="female-salon-card">
          <img src={facial_img} alt="Facial" />
        </div>
        
        <div className="female-salon-card">
          <img src={waxing_img} alt="Waxing" />
        </div>

        <div className="female-salon-card">
          <img src={threading_img} alt="Threading" />
        </div>

        <div className="female-salon-card">
          <img src={manicure_img} alt="Manicure" />
        </div>

        <div className="female-salon-card">
          <img src={pedicure_img} alt="Pedicure" />
        </div>

        <div className="female-salon-card">
          <img src={bleach_img} alt="Pedicure" />
        </div>

        <div className="female-salon-card">
          <img src={hair_img} alt="Pedicure" />
        </div>

      </div>

      <div className="smart-lock-banner">
        <img src={smartLockBanner} alt="Smart Lock Banner" />
      </div>

    </div>
  );
};

export default FemaleSalon;
