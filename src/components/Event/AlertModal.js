import React from 'react';
import Button from 'react-bootstrap/Button';
import './AlertModal.css';

const Modal = ({ open, onClose }) => {
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
            <p>Register Now & Avail EARLY BIRD OFFER</p>
            <p>Valid Till 31st March</p>
          </div>
          <div className='btnContainer'>
            <Button  className="btn" type="submit" variant="danger">Register Now</Button>{' '}
          </div>
        </div>
        <img src='https://ik.imagekit.io/suprkid/imgcube-2-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677577069663' alt='/' />
      </div>
    </div>
  );
};

export default Modal;