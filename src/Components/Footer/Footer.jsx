import React, { Fragment } from 'react'
import './Footer.css'
import { Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <Outlet />
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
        
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@amara.com</p>
          <p>Phone: +91 9934514766</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-x"></i></a>
            <a href=""><i className="fab fa-linkedin-in"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 Amara Private Limited. All rights reserved.</p>
    </footer>
    </>
    
  )
}

export default Footer