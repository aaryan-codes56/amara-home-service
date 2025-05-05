import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-wb.png'

const Navbar = () => {
  return (   
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>My Bookings</li>
        <li>Contact</li>
      </ul>
      <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
      </div>
      <hr/>
    </div>
  )
}

export default Navbar