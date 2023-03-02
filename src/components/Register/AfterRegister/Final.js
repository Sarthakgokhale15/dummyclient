import './Final.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";

function Final() {
  // const navigate = useNavigate();
  return (
    <div className="Final">
      <img src='https://ik.imagekit.io/suprkid/Frame.png'></img>
      <h3>Thank you, your registration is successful</h3>
      <div className='btn'>
      <Button  variant="danger">Submit another registration</Button>{' '}
        {/* <Button onClick={() => navigate("/register")} variant="danger">Submit another registration</Button>{' '} */}
      </div>
    </div>
  )
}

export default Final