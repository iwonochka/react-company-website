import React from 'react'
import { useRef, useEffect } from "react";
import './header.css'
import img1 from '../../assets/image1.png'
import { gsap } from "gsap";

const Header = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 2,
      y: 50,
      opacity: 0,
      ease: "sine.in sine.out",
      delay: 0.2
    })
  }, [])


  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 ref={headerRef} className='gradient__text'>Your partner for digital transformation</h1>
        <p>Modern cyber threats such as ransomware or targeted attacks, demand equally sophisticated defense techniques
          that provide both reliable threat detection and rapid response times. </p>
        <div className='header-content__input'>
          <input type="email" placeholder='Your Email' />
          <button className='shake-left' type='button'>Discover more</button>
        </div>
      </div>
      <div className='header-image'>
        <img src={img1} alt="rocket" />
      </div>
    </div>
  )
}

export default Header
