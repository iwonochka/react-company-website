import React from 'react'
import { Feature } from '../../components'
import './innovations.css'

const innovationsData = [
  {
    title: "Breaking the bias in cyber",
    text: "Taking active role in leading on inclusion and diversity"
  },
  {
    title: "Holistic security concept",
    text: "Keep an overview and reduce risks at the same time"
  },
  {
    title: "360° protection as a guarantee for your business success",
    text: "A solid foundation for corporate growth"
  },
]

const Innovations = () => {
  return (
    <div className='innovations section__padding' id="innovations">
      <div className='innovations-header'>
        <h1 className='gradient__text'>Accelerate the delivery of security transformation programs</h1>
        <p>Get started</p>
      </div>
      <div className='innovations-container'>
        {innovationsData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Innovations
