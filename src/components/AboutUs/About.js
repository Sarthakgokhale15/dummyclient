import React from 'react'
import './About.css'
function About() {
  return (
    <div className='AbouEvent' >
        <img style={{maxWidth:'100vw'}} src='https://ik.imagekit.io/suprkid/image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677848478891'/>
        <div className='HomeaboutText'>
          <h2 style={{color:'black'}}>About Us</h2>
          <p className='AboutUsParagraph'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu</p>
          {/* <p className='paragraph2'>Event Date:28th & 29th April 2023(Saturday & Sunday) <br></br>Timings:8 AM Onwards <br></br>Venue: Phoniex Market City Mall ,Kurla, Mumbai</p> */}

        </div>
        
        <div className='ImgGroup'>
          <div style={{display:'flex',flexDirection:'column'}}>
            <img className='EventimgBox1' src='https://ik.imagekit.io/suprkid/Group-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677505845780'/>
            <img style={{paddingTop:'100vh'}}  src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          {/* <img className='EventimgCone1' src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/> */}
            <img  style={{paddingBottom:'100vh'}} className='EventimgCone2' src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/>
            
            </div>
        </div>
        

    </div>
  )
}

export default About