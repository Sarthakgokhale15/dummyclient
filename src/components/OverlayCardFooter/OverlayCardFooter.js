import Button from 'react-bootstrap/Button'
import React from 'react'
import './OverlayCardFooter.css'
import { useNavigate } from 'react-router-dom'

function OverlayCardFooter() {
    const navigate=useNavigate();
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className='footerOverlayCard'>
            <p>Hurry Up and grab the Early Bird Discount</p>
            <Button onClick ={()=>navigate("/register")}style={{backgroundColor:'#A51D3A'}} variant='danger'>Register Now</Button>
        </div>
       
    </div>
  )
}

export default OverlayCardFooter