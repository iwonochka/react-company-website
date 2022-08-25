import React from 'react';
import logo from '../../assets/logo.png';
import {FaYoutube, FaTwitter, FaFacebookSquare} from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-links'>
        <div className='footer-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='footer-links_div'>
          <h4>Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Innovations</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className='footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
        <div className='footer-links_div'>
          <h4>Contact</h4>
          <p>+49 176 123456789</p>
          <p>securitysolutions@stingray.com</p>
          <p>Find us here:</p>
          <div className='footer-links_icons'>
            <p><FaYoutube/></p>
            <p><FaTwitter/></p>
            <p><FaFacebookSquare/></p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>© 2022 Stingray Inc. All rights reserved. </p>

      </div>
    </div>
  )
}

export default Footer
