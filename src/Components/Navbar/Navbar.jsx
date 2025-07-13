import React, { Fragment } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-wb.png'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (   
    <Fragment>
    <div className='navbar'>
    <Link to="/"><img src={logo} alt="" className="logo" /></Link>  
      <ul>
       <Link className="nav-link" to='/about'> <li>About</li></Link>
       <Link className="nav-link" to='/services'> <li>Services</li></Link>
       <Link className="nav-link" to='/booking'> <li>My Bookings</li></Link> 
        <Link className="nav-link" to='/contact'> <li>Contact Us</li></Link>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </div>
    </Fragment>
  )
}

export default Navbar