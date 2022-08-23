import React from 'react'
import './feature.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Feature = ({title, text, animation, delay, duration}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} className='feature-container__feature'>
      <div className='feature-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='feature-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature
