import React from 'react'
import { Blog, Career, Company, Footer, Header, Innovations } from './containers'
import { Article, Brand, CTA, Feature, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Company/>
      <Innovations/>
      <Career/>
      <CTA/>
      <Blog/>
      <Footer/>
      <Brand/>
    </div>
  )
}

export default App
