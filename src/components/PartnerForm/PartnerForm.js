import React,{useState} from 'react'
import Timer from '../Clock/Timer/Timer'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import './PartnerForm.css'
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function PartnerForm() {
  const navigate=useNavigate();
  return (
    <div>
        <Header />
        <Timer />
        <div>
            <FormPartner />
        </div>
    </div>
  )
}

export default PartnerForm




function FormPartner() {
  const navigate=useNavigate();
    const [isLoading, setLoading] = useState(false)
    // const [brandRepName, setbrandRepName] = useState('')
    // const [email, setemail] = useState('')
    const [ContactNumber, setContactNumber] = useState('+91 ')


    const brandNameRef=useRef();
    const brandRepNameRef=useRef();
    const emailRef=useRef();
    const ContactNumberRef=useRef();
    function formatDate(date) {
      var year = date.getFullYear(),
          month = date.getMonth() + 1, // months are zero indexed
          day = date.getDate(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
          minuteFormatted = minute < 10 ? "0" + minute : minute,
          morning = hour < 12 ? "am" : "pm";
  
      return  day  + "/" +month + "/" + year + " " + hourFormatted + ":" +
              minuteFormatted + morning;
  }

    const handlePhoneNumberChange = (event) => {
      const input = event.target;
      // Check if the user is trying to edit the first three characters
      if (input.selectionStart < 4) {
        // If so, move the cursor to the end of the input field
        input.selectionStart = input.selectionEnd = input.value.length;
      } else {
        // Otherwise, update the phoneNumber state as usual
        setContactNumber(input.value);
      }
    };
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        setLoading(true);
        const brandName=brandNameRef.current.value;
        const brandRepName=brandNameRef.current.value;
        const email=emailRef.current.value;
        const formattedContactNumber=ContactNumber.substring(3);
        const date=formatDate(new Date()).toString();
        console.log(formattedContactNumber)

    //    console.log(brandName);
    //    console.log(brandRepName);
    //    console.log(email);
    //    console.log(ContactNumber);
     
        const data=[brandName,brandRepName,email,formattedContactNumber,date];
        console.log(data);
      await axios.post("https://super-legend-server-main.vercel.app/partner",{
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

        body:data
      
    }).then(res=>{

      if(res.status==200){
        setLoading(false);
        navigate("/AfterSubmit");
      }
      
    }).catch(e=>{
      console.log(e);
      return null;
    });
    setLoading(false);


       
       
        
    }
  return (
    <div className='partnerFormMain'>
     {isLoading?<CircularProgress />:
        <Form className='partnerForm' onSubmit={handleSubmit}>
        <h2>Please fill up your details below!</h2>
          <Form.Group>
            <Form.Label>Brand Name</Form.Label>
            <Form.Control ref={brandNameRef}  type="text"  name="brandName" placeholder="Enter Brand Name" style={{width:'90%'}} required />
    
          </Form.Group>  
          <Form.Group>
            <Form.Label>Brand Representative Name</Form.Label>
            <Form.Control ref={brandRepNameRef} type="text"  name="brandRepName"  placeholder="Enter Brand Representative Name" style={{width:'90%'}} required />
    
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" style={{width:'90%'}} required/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact Number</Form.Label>
        
            <Form.Control onChange={handlePhoneNumberChange}   value={ContactNumber} type="tel" placeholder="Enter 10 digit  Number" style={{width:'90%'}} required pattern="\+91 \d{10}"/>
            
          </Form.Group>
         
          
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>}   
    
    </div>
  );
}

// export default FormPartner;