import React from 'react'
import './Hero.css'
import { Outlet } from 'react-router-dom'
import Explore from '../Explore/explore'
import Banner from '../Banner/banner'
import Most from '../Most/most'

const Hero = () => {
  return (
    <>
      <Outlet />
    <div className='hero'>
    <div className='hero-container'>
      <div className="hero-content">
        <h1>Welcome to Amara Home Service</h1>
        <p>Your one stop solution for all home services.</p>
        <div className="search-box">
          <input type="text" placeholder="Search for services like plumber, electrician..." />
          <button>Search</button>
        </div>
      </div>
    </div>
    </div>
    <Explore  />
    <Banner />
    <Most />
    </>
  )
}

export default Hero