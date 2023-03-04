import React from 'react'
import CustomCarousel from './components/CarousalTop/CustomCarousal'
import Timer from './components/Clock/Timer/Timer'
import Header from './components/Header/Header'
import About from './components/Home/About'
import LogoSlider from './components/slider/slider'
import './App.css'
import CarousalBottom from './components/CarousalBottom/CarousalBottom'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Header />
      <Timer />
      <CustomCarousel />
      <About />
      <div className='Homeplane2'><img src='https://ik.imagekit.io/suprkid/Groupplane.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677315309559'/></div>

      <div className='sliderMain'>
        <div  className="sliderParent"style={{backgroundColor:"#1B2631",display:"flex",justifyContent:"center",flexDirection:"column",textAlign:'center'}}>
          <h2 style={{color:"white" ,marginTop:'5rem'}}>Our Sponsors</h2>
          <LogoSlider />
        </div>
      </div>

      <CarousalBottom/>
      <Footer />
      <Header bgcolor={'#152D5A'} color={'white'} expand={false}/>

    </div>
  )
}

export default App