import React from 'react';
import './Investors.css';
import nstLogo from '../../assets/nst.png';
import ruLogo from '../../assets/ru.png';
import teslaLogo from '../../assets/tesla.png';
import boatLogo from '../../assets/boat.png';
import kpmgLogo from '../../assets/kpmg.png';
import zomatoLogo from '../../assets/zoma.png';

const Investors = () => {
  return (
    <div className="investors-section">
      <h2 className="investors-title">Our Investors</h2>
      
      <div className="investors-logos">
        <img src={nstLogo} alt="Newton School of Technology" className="investors-img" />
        <img src={ruLogo} alt="Rishihood University" className="investors-img" />
        <img src={zomatoLogo} alt="" className="investors-img" />
        <img src={boatLogo} alt="" className="investors-img" />
        <img src={kpmgLogo} alt="" className="investors-img" />
        <img src={teslaLogo} alt="" className="investors-img" />
      </div>

      <div className="investors-contact">
        <p>
          For media queries, contact: 
          <a href="mailto:press@amara.com"> press@amara.com</a>
        </p>
        <p className="investors-cta">You could be a part of our journey. Interested?</p>
      </div>
    </div>
  );
};

export default Investors;
