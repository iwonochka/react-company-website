import React from 'react'
import { Feature } from '../../components'
import './company.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Company = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='company section__margin' id='company'>
      <div className='company-feature'>
        <Feature title="Company" text="As a Managed Security Services Provider (MSSP), we offer on-demand expertise combined with the nonstop threat detection and response required to block attacks before they damage your business."/>
      </div>
      <div className='company-header'>
        <h1 className='gradient__text'>Technology that brings us forward</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='btn-light'>Read more</p>
      </div>
      <div className='company-container'>
        <Feature title="Software" text="We provide cyber security services to protect Software as a Service (SaaS) solutions"/>
        <Feature title="Finances" text="We’re trusted by leading financial institutions that are required to meet FFIEC guidelines"/>
        <Feature title="Education" text="We work together with education facilities to meet their cybersecurity policy"/>
      </div>

    </div>
  )
}

export default Company
