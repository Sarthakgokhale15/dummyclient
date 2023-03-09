import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import './AlertModal.css';
import { useNavigate } from "react-router-dom";

const Modal = ({ open, onClose }) => {
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p className='p1'>Registrations Started</p>
            {/* <h1>$20 CREDIT</h1> */}
            <p>Save upto Rs 2400 if you register for SuprCuber.</p>
            <p>Valid Till 31st March</p>
          </div>
          <div className='btnContainer'>
            <Button onClick={() => navigate("/register")} className="btn" type="submit" variant="danger">Register Now</Button>{' '}
          </div>
        </div>
        <img src='https://ik.imagekit.io/suprkid/Event_Details_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677841177973' alt='/' />
      </div>
    </div>
  );
};

export default Modal;