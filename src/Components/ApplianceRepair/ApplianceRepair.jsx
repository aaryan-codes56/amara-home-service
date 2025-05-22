import React from 'react';
import './ApplianceRepair.css';
import ac_img from '../../assets/ac.png';
import purifier_img from '../../assets/waterPurifier.png';
import washing_img from '../../assets/washingMachine.png';
import fridge_img from '../../assets/fridge.png';
import microwave_img from '../../assets/microwave.png';
import geyser_img from '../../assets/geyser.png';
import tv_img from '../../assets/tv.png';
import chimney_img from '../../assets/chimney.png';





const ApplianceRepair = () => {
  return (
    <div className="appliance-repair">
      <div className="appliance-repair-title">
        <h2>Appliance repair & service</h2>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="appliance-repair-cards">

        <div className="appliance-repair-card">
          <img src={ac_img} alt="AC Service and Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={purifier_img} alt="Water Purifier Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={washing_img} alt="Washing Machine Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={fridge_img} alt="Refrigerator Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={microwave_img} alt="Microwave Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={geyser_img} alt="Water Purifier Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={tv_img} alt="Water Purifier Repair" />
        </div>

        <div className="appliance-repair-card">
          <img src={chimney_img} alt="Water Purifier Repair" />
        </div>

      </div>
    </div>
  );
};

export default ApplianceRepair;
