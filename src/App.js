import React from 'react'
import { Blog, Career, Company, Footer, Header, Innovations } from './containers'
import { Article, CTA, Feature, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Company/>
      <Innovations/>
      <Career/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
