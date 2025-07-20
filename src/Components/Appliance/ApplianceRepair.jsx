import React from 'react';
import './ApplianceRepair.css';
import ac_img from '../../assets/ac.png';
import purifier_img from '../../assets/waterPurifier.png';
import washing_img from '../../assets/washingMachine.png';
import fridge_img from '../../assets/fridge.png';
import microwave_img from '../../assets/microwave.png';
import {Link} from 'react-router-dom';





const ApplianceRepair = () => {
  return (
    <div className="appliance-repair">
      <div className="appliance-repair-title">
        <h2>Appliance repair & service</h2>
      </div>

      <div className="appliance-repair-cards">

      <Link to='/services'>
        <div className="appliance-repair-card">
          <img src={ac_img} alt="AC Service and Repair" />
        </div>
        </Link>

        <Link to='/services'>
        <div className="appliance-repair-card">
          <img src={purifier_img} alt="Water Purifier Repair" />
        </div>
        </Link>

        <Link to='/services'>
        <div className="appliance-repair-card">
          <img src={washing_img} alt="Washing Machine Repair" />
        </div>
        </Link>

        <Link to='/services'>
        <div className="appliance-repair-card">
          <img src={fridge_img} alt="Refrigerator Repair" />
        </div>
        </Link>

        <Link to='/services'>
        <div className="appliance-repair-card">
          <img src={microwave_img} alt="Microwave Repair" />
        </div>
        </Link>


      </div>
    </div>
  );
};

export default ApplianceRepair;
