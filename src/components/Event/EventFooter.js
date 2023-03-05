import React from 'react'
import './EventFooter.css'
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function EventFooter() {
  return (
    <>
        <div className='EventFooterMain' >
            {/* <div className='EventFooterImg' style={{width:'100vw',display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                <img src='https://ik.imagekit.io/suprkid/Vector-5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677851993537'/>
            </div> */}
            
            
        
            <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:'15vh'}}>
                <p style={{fontWeight:'bold'}}>Click below for Rules & Regulations</p>
                <div className='regBtn' style={{width:'100vw',display:'flex',alignItems:'center',justifyContent:'center',}}>
                    <Button onClick={() => window.open("https://drive.google.com/file/d/1nX0wfSKav3DkwTTdRaip91XybOz5HZnu/view")} className='regBtn' variant="outline-secondary">Regulation</Button>{' '}
                    <Button onClick={() => window.open("https://drive.google.com/file/d/1wenOHVkZlIzFhOpi1uOnFWD8UGIg9fVB/view")} className='regBtn' variant="outline-secondary">Offline Competition Rules</Button>{' '}
                    <Button onClick={() => window.open("https://www.youtube.com/playlist?list=PLU9tNOmRgaYFIuc-FEiTliWlZNx-UqRj0")} className='regBtn' variant="outline-secondary">Watch Scrambling Videos</Button>{' '}
                </div>
            </div>
            <div style={{position:'relative',top:'10vh',width:'100vw',display:'flex',alignItems:'flex-start',zIndex:1}}>
                <img style={{maxWidth:'100vw',maxHeight:'100vh'}}src='https://ik.imagekit.io/suprkid/Framefooter1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677336550468'/>
            
            </div>
             <img style={{position:'relative',maxWidth:'100vw',zIndex:2}} src='https://ik.imagekit.io/suprkid/CTA_section.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677853015317'/>
            <Header bgcolor={'#152D5A'} color={'white'} expand={false}/>
        </div>
        
        
        
       

      
    </>
    
  )
}

export default EventFooter