import React from 'react'
import './About.css'
function About() {
  return (
    <div className='AboutUs' >
        <img style={{maxWidth:'100vw'}} src='https://ik.imagekit.io/suprkid/image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677848478891'/>
        <div className='HomeaboutText aboutusText' >
          <h2 style={{color:'black'}} className='aboutusText'>About Us</h2>
          <p className='AboutUsParagraph'>The two-day event will be a fun-filled extravaganza for kids and parents! It will feature a variety of activities such as competitions (Rubiks, Mental Maths, Supr Shark India), art and craft workshops, dance / music performances, games, as well as mental agility camps, talent competitions and more.</p>
          {/* <p className='paragraph2'>Event Date:28th & 29th April 2023(Saturday & Sunday) <br></br>Timings:8 AM Onwards <br></br>Venue: Phoniex Market City Mall ,Kurla, Mumbai</p> */}

        </div>
        
        <div className='ImgGroup aboutUsImgGorup'>
          <div style={{display:'flex',flexDirection:'column'}}>
            <img style={{position:'relative',bottom:'15vh'}}className='aboutUsImgBox1' src='https://ik.imagekit.io/suprkid/Group-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677505845780'/>

          </div>
          <div style={{display:'flex',flexDirection:'column'}}>

            <img  style={{paddingBottom:'20vh',position:'relative',bottom:'15vh'}} className='EventimgCone2 aboutUsImgCone1' src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/>
            
            </div>
        </div>
        
        
        

    </div>
  )
}

export default About