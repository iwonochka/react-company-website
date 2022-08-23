import React from 'react'
import { Feature } from '../../components'
import './innovations.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const innovationsData = [
  {
    title: "Breaking the bias",
    text: "We are taking active role in leading on inclusion and diversity.",
    delay: "0"
  },
  {
    title: "Holistic security concept",
    text: "Keep an overview and reduce risks at the same time.",
    delay: "300"
  },
  {
    title: "360° protection",
    text: "A solid foundation for corporate growth as a guarantee for your business success.",
    delay: "600"
  },
]

const Innovations = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='innovations section__padding' id="innovations">
      <div className='innovations-header'>
        <h1 className='gradient__text'>Accelerate the delivery of security transformation programs</h1>
        <p data-aos="zoom-in" data-aos-delay="1500" className='btn-light'>Get started</p>
      </div>
      <div className='innovations-container fade-left'>
        {innovationsData.map((item, index) => (
          <Feature animation="fade-left" duration="1500" delay={item.delay} title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Innovations
