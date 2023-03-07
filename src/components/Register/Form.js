import './Form.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CircularProgress from '@mui/material/CircularProgress';

import RadioBtn from './RadioBtn';
import Form from 'react-bootstrap/Form';
import validator from "validator";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';


export default function CustomForm() {

  const navigate = useNavigate();
  const [submit, setsubmit] = useState(true)
  const [loading, setloading] = useState(false)
  const [categorySelected, setcategorySelected] = useState(false)
  const [genderVal, setgenderVal] = useState('')
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    Age: '',
    gender: '',
    Category: [],
    ContactNumber:'',
    Location:'',
    jcaId:'No',
    jcaIdNumber:'',
    mentorName:'',
  })




  const onChangeHandler = (event) => {
    let val=event.target.value

    // console.log(event)
    if (event.target.name==='gender'){
      let copy = { ...formData }

      if (event.target.checked) {
        copy.gender=val;
      } 

      setFormData(copy)
    }
    else if (event.target.name === 'Category') {
      

      let copy = { ...formData }

      if (event.target.checked) {
        copy.Category.push(val)
        setcategorySelected(categorySelected|true);
      } else {
        setcategorySelected(categorySelected|false);
        copy.Category = copy.Category.filter(el => el !== event.target.value)
      }
      // console.log(copy)
      setFormData(copy)

    } else {
     
      
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }


   const onSubmitHandler =  async(event) => {
   
    if(formData.Category.includes('Rubix Cube') && formData.jcaId==='Yes'&& formData.jcaIdNumber===''){
      return null;
    }
    if(formData.Category.includes('Rubix Cube') && formData.jcaId==='Yes' && formData.mentorName===''){
      return null;
    }
    event.preventDefault()
    // console.log(formData)
    setsubmit(true);

    let category1=formData.Category.includes('Rubix Cube');
    let category2=formData.Category.includes('Mental Math');
    let category3=formData.Category.includes('Super Tank');
    const data = {
      childName:formData.childName,
      Age:formData.Age,
      gender:formData.gender,
      parentName:formData.parentName,
      category1:category1,
      category2:category2,
      category3:category3,
      ContactNumber:formData.ContactNumber,
      location:formData.Location,
      jcaId:formData.jcaId,
      jcaIdNumber:formData.jcaIdNumber,
      mentorName:formData.mentorName
      

    };
    // console.log("log working");
    // https://super-legend-server.vercel.app
     await axios.post("https://super-legend-server-main.vercel.app/user",{
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        // params:data
      // headers:{
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Request-Headers": 'Content-Type, Authorization'

      // },
       body:data
      
    }).then(res=>{
      // console.log(res)
      if(res.status==200){
        setloading(false);
        navigate("/registrationSuccessful");
        // setsubmit(false);
      }
    }).catch(e=>console.log(e));
    // console.log("log working");
    // setloading(true);
    // if(res.status==200){
    //   setloading(false);
    //   // navigate("/registrationSuccessful");
    //   // setsubmit(false);
    // }
    // console.log(res);
  }
  return (
    // <div>hello</div>
    <div className="FormContainer">
      <h2>Please Fill The Details To Register</h2>
      <form onSubmit={onSubmitHandler} className='Form' method='POST' >
        <div className="form">
        <div className='col1'>
          <div className="form-group">
            <label htmlFor="childName" className="form-label">Child Full Name</label>
            <input className="form-control" name="childName" onChange={onChangeHandler} value={formData.childName} placeholder="Leo" required />
            <span className='span'>Please enter valid name</span>
          </div>
          <div className="form-group">
            <label htmlFor="Age" className="form-label">Age</label>
            <input className="form-control" name="Age" onChange={onChangeHandler} value={formData.Age} placeholder="8-15" required />
            <span className='span'>Age must be in 8-15  </span>
            </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Which category you would like to participate</label>
            <div className='category'>
              
              <Form.Group >
                <div key={`default-radio`} className="mb-3 category" style={{fontSize:'2.2vh'}}>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Rubix Cube' label='Rubix Cube' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Mental Math' label='Mental Math' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Super Tank' label='Super Tank' inline onChange={onChangeHandler}/>
                </div>
              </Form.Group>
              <div><span className='span'>Please select at least one category</span></div>
          </div>
          {formData.Category.includes('Rubix Cube')?
            <div className="form-group">
                <label htmlFor="gender" className="form-label">Do you have valid JCA Id</label>
                <div className='category'>
              
              <Form.Group >
                <div key={`default-radio`} className="mb-3" style={{fontSize:'2.2vh'}}>
                  <Form.Check  required={!categorySelected} name="jcaId" type='radio' value='Yes' label='Yes' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="jcaId" type='radio' value='No' label='No' inline onChange={onChangeHandler}/>

                </div>
              </Form.Group>
              <div><span className='span'>Please select at least one option</span></div>
          </div>
          {formData.jcaId==="Yes"?
          <div>
            <div className="form-group">
            <label htmlFor="jcaId" className="form-label">JCA Id</label>
            <input className="form-control" name="jcaIdNumber" onChange={onChangeHandler} value={formData.jcaIdNumber}  required />
            <span className='span'>Please enter valid JCA Id</span>
            
            </div>
            <div className="form-group">
            <label htmlFor="mentorName" className="form-label">Mentor Name</label>
            <input className="form-control" name="mentorName" onChange={onChangeHandler} value={formData.mentorName}  required />
            <span className='span'>Please enter JCA Mentor Name</span>
            </div>
            </div>
          :<div></div>}

                </div>:<div></div>}
          
          <div className="form-group">
          <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
          <input className="form-control" name="ContactNumber" onChange={onChangeHandler} value={formData.ContactNumber} placeholder="9876543210" required pattern='^[0-9]{10}$'/>
          <span className='span'>Enter valid Contact Number</span>
        </div>
        </div>
        </div>
        <div className='col2'>
          <div className="form-group">
            <label htmlFor="parentName" className="form-label">Parent Name</label>
            <input className="form-control" name="parentName" onChange={onChangeHandler} value={formData.parentName} placeholder="John" required/>
            <span className='span'>Parent Name only contains characters</span>
          </div>
          <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div className='gender'>
            <Form.Group>
              <div key={`default-radio`} className="mb-3" style={{fontSize:'2.2vh'}}>
                <Form.Check name='gender' type='radio' label='Male' value='Male' onChange={(e)=>{
                  setgenderVal('Male')
                  onChangeHandler(e,'Male');
                  
                  }}
                  inline
                  required
                
                />


                <Form.Check name='gender' type='radio' label='Female' value='Female' onChange={(e)=>{
                  setgenderVal('Female')
                  onChangeHandler(e,'Female');

                  }}
                  inline
                  required
                />
                <Form.Check name='gender' type='radio' label='Other' value='Other' onChange={(e)=>{
                  setgenderVal('Other')
                  onChangeHandler(e,'Other');

                  }}
                  inline
                  required
                />
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Location" className="form-label">Location</label>
          <input className="form-control" name="Location" onChange={onChangeHandler} value={formData.Location} placeholder="EG:Kurla" required/>
          <span className='span'>Please enter valid location</span>
        </div>
        </div>
        </div>
        <div className="form-group btn">
          {loading?<CircularProgress />:<div></div>}
          <Button  disabled={!submit}onClick={onSubmitHandler} className="btn"  variant="danger">Register</Button>{' '}
          
        </div>
      </form>
    </div>
  );
}




