import React from 'react';
import './HomeRepair.css';
import repair1 from '../../assets/repair1.png';
import repair2 from '../../assets/repair2.png';
import repair3 from '../../assets/repair3.png';
import repair4 from '../../assets/repair4.png';
import repair5 from '../../assets/repair5.png';
import repair6 from '../../assets/repair6.png';
import repair7 from '../../assets/repair7.png';
import repair8 from '../../assets/repair8.png';
import repair9 from '../../assets/repair9.png';

const HomeRepair = () => {
  return (
    <div className="repair">
      <div className="repair-section">
        <h2 className="repair-title">Home Repair & Installation</h2>

        <div className="repair-cards">
          <div className="repair-card">
            <img src={repair1} alt="" className="repair-icon" />
            <p className="repair-name">AC switchbox installation</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.83 <span>(13K)</span>
            </p>
            <p className="repair-price">₹249</p>
          </div>

          <div className="repair-card">
            <img src={repair2} alt="" className="repair-icon" />
            <p className="repair-name">Flush tank repair</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.74 <span>(12K)</span>
            </p>
            <p className="repair-price">₹199</p>
          </div>

          <div className="repair-card">
            <img src={repair3} alt="" className="repair-icon" />
            <p className="repair-name">Cupboard hinge installation</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.84 <span>(59K)</span>
            </p>
            <p className="repair-price">₹129</p>
          </div>

          <div className="repair-card">
            <img src={repair4} alt="" className="repair-icon" />
            <p className="repair-name">Fan repair</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.82 <span>(107K)</span>
            </p>
            <p className="repair-price">₹109</p>
          </div>

          <div className="repair-card">
            <img src={repair5} alt="" className="repair-icon" />
            <p className="repair-name">Curtain rod installation</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.85 <span>(45K)</span>
            </p>
            <p className="repair-price">₹129</p>
          </div>

          <div className="repair-card">
            <img src={repair6} alt="" className="repair-icon" />
            <p className="repair-name">Tap repair</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.82 <span>(137K)</span>
            </p>
            <p className="repair-price">₹49</p>
          </div>

          <div className="repair-card">
            <img src={repair7} alt="" className="repair-icon" />
            <p className="repair-name">Tap installation</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.81 <span>(23K)</span>
            </p>
            <p className="repair-price">₹59</p>
          </div>

          <div className="repair-card">
            <img src={repair8} alt="" className="repair-icon" />
            <p className="repair-name">Drill and hang</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.87 <span>(109K)</span>
            </p>
            <p className="repair-price">₹49</p>
          </div>

          <div className="repair-card">
            <img src={repair9} alt="" className="repair-icon" />
            <p className="repair-name">Stabiliser installation</p>
            <p className="repair-rating">
              <i className="fa fa-star"></i>
              4.85 <span>(7K)</span>
            </p>
            <p className="repair-price">₹119</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeRepair;
