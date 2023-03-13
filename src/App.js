import React from 'react'
import CustomCarousel from './components/CarousalTop/CustomCarousal'
import Timer from './components/Clock/Timer/Timer'
import Header from './components/Header/Header'
import About from './components/Home/About'
import LogoSlider from './components/slider/slider'
import './App.css'
import CarousalBottom from './components/CarousalBottom/CarousalBottom'
import Footer from './components/Footer/Footer'
import DownloadBrochure from './components/Home/DownloadBrochure'
import './assets/Fonts/Montserrat/static/Montserrat-SemiBold.ttf'
function App() {
  return (
    <div>
      <div>
      <Header fixed={true}/>
      <Timer />
      <CustomCarousel />
      <About />
      <div className='Homeplane2'><img src='https://ik.imagekit.io/suprkid/Groupplane.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677315309559'/></div>

      <div className='sliderMain'>
        <div  className="sliderParent"style={{backgroundColor:"#1B2631",display:"flex",justifyContent:"center",flexDirection:"column",textAlign:'center'}}>
          <h2 style={{color:"white" ,marginTop:'5rem'}}>Our Partners</h2>
          <LogoSlider />
        </div>
      </div>
      {/* <div style={{width:'100vw',position:'relative',display:'flex',color:'#101828',alignItems:'center',justifyContent:'center',marginTop:'10vh'}}>
        <h1>Whats In It For Us!</h1>
      </div> */}
      <CarousalBottom/>
      <Footer />
      <Header bgcolor={'#152D5A'} color={'white'} expand={false} showFooter={true} fixed={false}/>
      </div>
      <DownloadBrochure />
    </div>
  )
}

export default App