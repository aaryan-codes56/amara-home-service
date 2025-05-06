import React from 'react';
import './Team.css';
import team_img1 from '../../assets/about.png';

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Our Leadership Team</h2>
      <div className="team-grid">

        <div className="team-card">
          <img src={team_img1} alt="" className="team-icon" />
          <p className="team-name">Aaryan Krishna</p>
          <p className="team-role">Managing Director & CEO</p>
        </div>

        <div className="team-card">
          <img src="" alt="" className="team-icon" />
          <p className="team-name">Geeta Singh</p>
          <p className="team-role">Executive Director & CTPO</p>
        </div>

        <div className="team-card">
          <img src="" alt="" className="team-icon" />
          <p className="team-name">Aakansha Raj</p>
          <p className="team-role">Executive Director & COO</p>
        </div>

        <div className="team-card">
          <img src="" alt="" className="team-icon" />
          <p className="team-name">Isha Singh</p>
          <p className="team-role">Chief Financial Officer</p>
        </div>

        <div className="team-card">
          <img src="" alt="" className="team-icon" />
          <p className="team-name">Gyanvi Singh</p>
          <p className="team-role">Chief Business Officer</p>
        </div>

        <div className="team-card">
          <img src="" alt="" className="team-icon" />
          <p className="team-name">Rex Singh</p>
          <p className="team-role">Chief Human Resources Officer</p>
        </div>

      </div>
    </div>
  );
};

export default Team;
