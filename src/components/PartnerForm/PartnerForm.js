import React,{useState} from 'react'
import Timer from '../Clock/Timer/Timer'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './PartnerForm.css'
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
    // const [ContactNumber, setContactNumber] = useState()


    const brandNameRef=useRef();
    const brandRepNameRef=useRef();
    const emailRef=useRef();
    const ContactNumberRef=useRef();

    const validateInput=()=>{
        
    }

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        setLoading(true);
        const brandName=brandNameRef.current.value;
        const brandRepName=brandNameRef.current.value;
        const email=emailRef.current.value;
        const ContactNumber=ContactNumberRef.current.value;
    //    console.log(brandName);
    //    console.log(brandRepName);
    //    console.log(email);
    //    console.log(ContactNumber);
        const data=[brandName,brandRepName,email,ContactNumber];
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
        {/* <h1>Intrested in partnering with us? </h1> */}
          <Form.Group>
            <Form.Label>Brand Name</Form.Label>
            <Form.Control ref={brandNameRef}  type="text"  name="brandName" placeholder="Enter Brand Name" style={{width:'90%'}} required/>
    
          </Form.Group>  
          <Form.Group>
            <Form.Label>Brand Representative Name</Form.Label>
            <Form.Control ref={brandRepNameRef} type="text"  name="brandRepName"  placeholder="Enter Brand Representative Name" style={{width:'90%'}} required/>
    
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
            <Form.Control ref={ContactNumberRef} type="tel" placeholder="Enter Contact Number" style={{width:'90%'}} required pattern="[0-9]{10}"/>
          </Form.Group>
          
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>}   
    
    </div>
  );
}

// export default FormPartner;