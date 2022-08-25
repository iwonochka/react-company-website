import React from 'react'
import { Blog, Career, Company, Footer, Header, Innovations } from './containers'
import { CTA, Navbar } from './components'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Company/>
      <Innovations/>
      <CTA/>
      <Blog/>
      <Career/>
      <Footer/>
    </div>
  )
}

export default App
