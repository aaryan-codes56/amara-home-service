import React from 'react'
import './Banner.css';
import new1_img from '../../assets/new1.webp';
import new2_img from '../../assets/new2.webp';
import new3_img from '../../assets/new3.webp';


const Banner = () => {
  return (
    
    <div className="banner-box">
        <img src={new1_img} alt=""className="banner-image" />
        <img src={new2_img} alt=""className="banner-image" />
        <img src={new3_img} alt=""className="banner-image" />
    </div>
)
}

export default Banner