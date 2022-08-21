import React from 'react'
import './career.css'
import careerImage from "../../assets/image2.jpg";

const Career = () => {
  return (
    <div className='career section__padding' id='career'>
      <div className='career-image'>
        <img src={careerImage} alt="career" />
      </div>
      <div className='career-content'>
        <h4>Become a part of the team</h4>
        <h1 className='gradient__text'>Help shape the future of cyber security</h1>
        <p>We’re expanding rapidly and we want your career to grow with us. We strive to provide a fulfilling work environment to our employees – one that fosters creativity and allows for career development.</p>
        <h4>Get to know more</h4>
      </div>
    </div>
  )
}

export default Career
