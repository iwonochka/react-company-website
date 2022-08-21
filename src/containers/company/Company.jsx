import React from 'react'
import { Feature } from '../../components'
import './company.css'

const Company = () => {
  return (
    <div className='company section__margin' id='company'>
      <div className='company-feature'>
        <Feature/>
      </div>
      <div className='company-header'>
        <h1 className='gradient__text'>Technology that brings us forward</h1>
        <p>Read more</p>
      </div>
      <div className='company-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>

    </div>
  )
}

export default Company
