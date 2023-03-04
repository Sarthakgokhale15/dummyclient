import React from 'react'
import Timer from '../Clock/Timer/Timer'
import Header from '../Header/Header'
import About from './About'
import AboutCardGroup from './CardsGroup'
function AboutUs() {
  return (
    <div>
        <Header />
        <Timer />
        <About />
        
        
        <AboutCardGroup />
        
    </div>
  )
}

export default AboutUs