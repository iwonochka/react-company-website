import React from 'react'
import { useState } from "react";
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#innovations">Innovations</a></p>
          <p><a href="#careers">Careers</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
        ? <RiCloseLine  onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line  onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#innovations">Innovations</a></p>
              <p><a href="#careers">Careers</a></p>
              <p><a href="#blog">Blog</a></p>
              <div className='navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
