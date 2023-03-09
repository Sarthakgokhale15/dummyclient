import './Final.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Final() {
  const navigate = useNavigate();
  return (
    <div className="Final">
      <img src='https://ik.imagekit.io/suprkid/Frame.png'></img>
      <h3>Thanks for your interest! </h3>
      <p>Your registration is NOT confirmed yet. Your registration will be confirmed post fee payment, details will be shared with you soon..</p>
      <div className='btn'>
      <Button  onClick={() => navigate("/register")} variant="danger">Submit another registration</Button>{' '}
        {/* <Button onClick={() => navigate("/register")} variant="danger">Submit another registration</Button>{' '} */}
      </div>
    </div>
  )
}

export default Final