import './AfterRegister.css';
import '../../Clock/Clock.css'
import React, { useState, useEffect } from "react";
import Header from '../../Header/Header';
import Clock from "../../Clock/Clock";
import Timer from '../../Clock/Timer/Timer'
import Final from './Final'

import { useLocation } from 'react-router-dom';




function Register() {
  const {state} = useLocation();
  const { showPayment } = state; 
  
  return (
    <div className="register">
      <Header />
      <Timer />
      <div className='about1'>
        <div className='cloud1'>
          <img src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
        </div>
        
        <div className='cloud2'>
          <img src='https://ik.imagekit.io/suprkid/Group-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409257813'/> 
        </div>
        <div className='imageRegister'>
          <img src='https://ik.imagekit.io/suprkid/Frame_36.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677418552360'/>
        </div>
        <div className='cloud3'>
          <img src='https://ik.imagekit.io/suprkid/Group_5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409279201'/>
        </div>
        <div className='rainbow'>
          <img src='https://ik.imagekit.io/suprkid/Group-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677418497832'/>
        </div>
        <div className='cloud4'>
          <img src='https://ik.imagekit.io/suprkid/Group-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409257813'/>
        </div>
        <div className='cloud5'>
          <img src='https://ik.imagekit.io/suprkid/Group-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409257813'/>
        </div>
      </div>
      <div className='Form1'>
        <Final showPayment={showPayment}/>
      </div>
      {/* <div>
        <Final />
      </div> */}
      
    </div>
  );
}

export default Register;
