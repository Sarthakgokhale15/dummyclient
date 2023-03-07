import React from 'react'
import './About.css'
function About() {
  return (
    <div className='AbouEvent' >
        <img style={{maxWidth:'100vw'}} src='https://ik.imagekit.io/suprkid/image-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677916130291'/>
        <div className='aboutText'>
          <h2>About the event</h2>
          <p className='AboutEventParagraph1'>The two-day event will be a fun-filled extravaganza for kids and parents! It will feature a variety of activities such as competitions (Rubiks, Mental Maths, Supr Shark India), art and craft workshops, dance / music performances, games, as well as mental agility camps, talent competitions and more.</p>
          <p className='AboutEventParagraph'>Event Date:28th & 29th April 2023(Saturday & Sunday) <br></br>Timings:8 AM Onwards <br></br>Venue: Phoniex Market City Mall ,Kurla, Mumbai</p>

        </div>
        <div className='ImgGroup'>
          <img className='EventimgBox1 boxx' src='https://ik.imagekit.io/suprkid/Group-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677505845780'/>
          <img className='EventimgCone1 conee1' src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/>
          <img className='EventimgCone2 conee2' src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/>
        </div>

    </div>
  )
}

export default About