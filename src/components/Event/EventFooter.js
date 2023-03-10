import React from 'react'
import './EventFooter.css'
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OverlayCardFooter from '../OverlayCardFooter/OverlayCardFooter'

import { useNavigate } from "react-router-dom";
function EventFooter() {
    const navigate = useNavigate();
  return (
    <>
        <div className='EventFooterMain' >
            {/* <div className='EventFooterImg' style={{width:'100vw',display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                <img src='https://ik.imagekit.io/suprkid/Vector-5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677851993537'/>
            </div> */}
            
            
        
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <Button onClick={() => navigate("/register")} variant="danger">Register Now</Button>{' '}
                <p style={{fontWeight:'bold',paddingTop:'5vh'}}>Click below to download Rules & Regulations</p>
                <div className='regBtn' style={{width:'100vw',display:'flex',alignItems:'center',justifyContent:'center',}}>
                    <Button onClick={() => window.open("https://drive.google.com/file/d/1J5GoLwBNx6nxm1ZPm1n5rxkrLtYHFFza/view?usp=sharing")} className='regBtn' variant="outline-secondary">SuprCuber</Button>{' '}
                    <Button onClick={()=>window.open("https://drive.google.com/file/d/1dcO-C5CcABrvbfzVFtRYw2Imr3YcSFa3/view?usp=sharing")} className='regBtn' variant="outline-secondary">SuprGenius</Button>{' '}
                    <Button onClick={() => window.open("https://docs.google.com/document/d/1F-Gsyqy7QJ7Ys_D5p-zUtXIjW_XLhba5c89K1gAXSU0/edit?usp=sharing")} className='regBtn' variant="outline-secondary">SuprFounder Jr</Button>{' '}
                </div>
            </div>
            <div className='calc' style={{position:'relative',top:'10vh',width:'100vw',display:'flex',alignItems:'flex-start',zIndex:1}}>
                <img style={{maxWidth:'100vw',maxHeight:'100vh'}}src='https://ik.imagekit.io/suprkid/Framefooter1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677336550468'/>
            
            </div>
            <div style={{ position: 'relative' }}>
            <img style={{position:'relative',maxWidth:'100vw',zIndex:2}} src='https://ik.imagekit.io/suprkid/BG_GADEN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678339215345'/>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' ,zIndex:4}}>
                    <OverlayCardFooter />
                </div>
            </div>
            <Header bgcolor={'#152D5A'} color={'white'} expand={false} showFooter={true}/>
        </div>
        
        
        
       

      
    </>
    
  )
}

export default EventFooter