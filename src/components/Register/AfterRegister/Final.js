import './Final.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Final(props) {
  const navigate = useNavigate();
  return (
    <div className="Final">
      <img src='https://ik.imagekit.io/suprkid/Frame.png'></img>
      <h3>Thanks for your interest! </h3>
      <p>Your registration is NOT confirmed yet. Your registration will be confirmed post fee payment, details will be shared with you soon..</p>
      <div className='btn' >
      <Button  onClick={() => navigate("/register")} variant="danger">Submit another registration</Button>{' '}
        {/* <Button onClick={() => navigate("/register")} variant="danger">Submit another registration</Button>{' '} */}
        
      </div>
      
      {props.showPayment?
     
     <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_LR1c8KMbs2yF5R/view" data-text="Pay Now for SuprFounder Jr" data-color="#EB0028" data-size="medium">
     {
       (function(){
         var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
         if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
         s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
         rzp && rzp.init && rzp.init()}})()
       }
   </div>
  
   :<div></div>
     }

    </div>
  )
}

export default Final