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
  const [date, setDate] = useState(new Date());
  const [submit, setsubmit] = useState(false)
  const [loading, setloading] = useState(false)
  const [categorySelected, setcategorySelected] = useState(false)
  const [eventCubeCategorySelected, seteventCubeCategorySelected] = useState(false)
  const [genderSelected, setgenderSelected] = useState(false)
  const [ContactNumber, setContactNumber] = useState('+91 ')
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    Age: '',
    gender: '',
    Category: [],

    Location:'',
    JcaMember:'',
    CubeCat:["3X3X3"],
    
  })

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



const validateForm=()=>{
 
  // if(!formData.CubeCat.includes('3X3X3')){
  //     return false;
  // }
  if(formData.name===''|| formData.Category.length===0 || ContactNumber==='+91 ' || formData.Location==='' || formData.gender==='' ||formData.parentName===''){
    return false;
  }
  if(ContactNumber.length!=14){
    return false;
  }
  if(formData.Category.includes('SuprCuber') && formData.CubeCat.length===0){
    return false;
  }
  if(formData.Category.includes('SuprCuber') && formData.JcaMember===''){
    return false;
  }
  return true;
}


  const onChangeHandler = (event) => {
     



    let val=event.target.value
    if(event.target.name==='eventCubeCategory'){
      console.log(event.target.name);
      console.log("working");
      let copy={ ...formData }
      if (event.target.checked) {
        copy.CubeCat.push(event.target.value)
        seteventCubeCategorySelected(true);
      } else {
        
        copy.CubeCat = copy.CubeCat.filter(el => el !== event.target.value)
        if(copy.CubeCat.length===0){
          seteventCubeCategorySelected(false);
        }
        // else{seteventCubeCategorySelected(true);}
        
      }
      // console.log(copy)
      setFormData(copy)
    }

   
    else if (event.target.name==='gender'){
      let copy = { ...formData }

      if (event.target.checked) {
        setgenderSelected(true);
        copy.gender=val;
      } 
      else{
        setgenderSelected(false);
      }

      setFormData(copy)
    }
    else if (event.target.name === 'Category') {
      


      let copy = { ...formData }

      if (event.target.checked) {
        copy.Category.push(val)
        setcategorySelected(true);
      } else {
       
        copy.Category = copy.Category.filter(el => el !== event.target.value)
        if(copy.Category.length===0){
          setcategorySelected(false);
        }
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
    if(!validateForm()){
      alert("Form has errors.");
      return;
     }
     console.log(date)
    // if(formData.childName==='' || formData.Age==='' || formData.parentName==' '|| )
    event.preventDefault();

    let category1=formData.Category.includes('SuprCuber');
    let category2=formData.Category.includes('SuprGenius');
    let category3=formData.Category.includes('SuprFounder Jr');
     console.log(ContactNumber)
    const data = {
      childName:formData.childName,
      Age:formData.Age,
      gender:formData.gender,
      parentName:formData.parentName,
      category1:category1,
      category2:category2,
      category3:category3,
      FormattedContactNumber:ContactNumber.substring(4),
      location:formData.Location,
      JcaMember:formData.JcaMember,
      cat1:formData.CubeCat.includes('3X3X3'),
      cat2:formData.CubeCat.includes('2X2X2'),
      cat3:formData.CubeCat.includes('4X4X4'),
      cat4:formData.CubeCat.includes('Skewb'),
      cat5:formData.CubeCat.includes('Mirror'),
      cat6:formData.CubeCat.includes('Pyraminx'),
      cat7:formData.CubeCat.includes('Parents 3X3X3'),
      cat8:formData.CubeCat.includes('Mosaic'),
      cat9:formData.CubeCat.includes('Clock'),
      cat10:formData.CubeCat.includes('High IQ'),

    };
    console.log(data);
    console.log(formData.CubeCat);
    setloading(true);

    // https://super-legend-server-main.vercel.app
     await axios.post("https://super-legend-server-main.vercel.app/user",{
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',

       body:data
      
    }).then(res=>{

      if(res.status==200){
        setloading(false);
        navigate("/registrationSuccessful");
      }
      
    }).catch(e=>{
      console.log(e);
      return null;
    });

    setloading(false);
  }
  return (

    <div className="FormContainer">
      {loading?<CircularProgress />:<div>
      <h2>Please Fill The Details To Register</h2>
      <form onSubmit={onSubmitHandler} className='Form' method='POST' >
        <div className="form">
        <div className='col1'>
          <div className="form-group">
            <label htmlFor="childName" className="form-label">Child Full Name</label>
            <input className="form-control" name="childName" onChange={onChangeHandler} value={formData.childName} placeholder="Leo" required pattern='[A-Za-z]+'/>
            <span className='span'>Please enter valid name</span>
          </div>
          <div className="form-group">
            <label htmlFor="Age" className="form-label">Age</label>
            <input className="form-control" name="Age" onChange={onChangeHandler} value={formData.Age} placeholder="8-15" required />
            <span className='span'>Age must be in 8-15  </span>
            </div>
            {/* <Form.Group controlId="duedate">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group> */}
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Which category you would like to participate</label>
            <div className='category'>
              
              <Form.Group required={formData.Category.length!==0}>
                <div key={`default-radio1`} className="mb-3 category" style={{fontSize:'2.2vh'}}>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='SuprCuber' label='SuprCuber' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='SuprGenius' label='SuprGenius' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='SuprFounder Jr' label='SuprFounder Jr' inline onChange={onChangeHandler}/>
                </div>
              </Form.Group>
              <div><span className='span'>Please select at least one category</span></div>
          </div>
          
          <div className="form-group">
          <label htmlFor="ContactNumber" className="form-label">Contact Number</label>
          <input onChange={handlePhoneNumberChange}   value={ContactNumber} className="form-control" name="ContactNumber" type="tel" placeholder="Enter 10 digit phone number" required pattern="\+91 \d{10}"/>
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
              <div key={`default-radio2`} className="mb-3" style={{fontSize:'2.2vh'}}>
                <Form.Check name='gender' type='radio' label='Male' value='Male' onChange={(e)=>{
                  setgenderSelected(true)
                  onChangeHandler(e,'Male');
                  
                  }}
                  inline
                  required
                
                />


                <Form.Check  name='gender' type='radio' label='Female' value='Female' onChange={(e)=>{
                  setgenderSelected(true)
                  onChangeHandler(e,'Female');

                  }}
                  inline
                  required
                />
                <Form.Check name='gender' type='radio' label='Other' value='Other' onChange={(e)=>{
                  setgenderSelected(true)
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
          {formData.Category.includes('SuprCuber')?<div className="form-group">
          <label htmlFor="gender" className="form-label">Are you a JCA Member</label>
                    <div className='category'>
                  
                  <Form.Group >
                    <div key={`default-radio3`} className="mb-3" style={{fontSize:'2.2vh'}}>
                      <Form.Check   required name="JcaMember" type='radio' value='Yes' label='Yes' inline onChange={onChangeHandler}/>
                      <Form.Check   required name="JcaMember" type='radio' value='No' label='No' inline onChange={onChangeHandler}/>

                    </div>
                  </Form.Group>
                  <div><span className='span'>Please select at least one option</span></div></div>
            </div>:<div></div>}
           { formData.Category.includes('SuprCuber')?<div className="form-group" >
              <label htmlFor="cubeCat" className="form-label">Which category you would like to participate</label>
              <div className='category'>
                
                <Form.Group >
                  <div key={`default-radio4`} className="mb-3 category " style={{fontSize:'2.2vh',display:'flex',flexDirection:'row'}}>
                    <Form.Check  defaultChecked disabled  name="eventCubeCategory" type='checkbox' value='3X3X3' label='3X3X3'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='2X2X2' label='2X2X2'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='4X4X4' label='4X4X4'  onChange={onChangeHandler}/>
                  </div>
               
                  <div key={`default-radio5`} className="mb-3 category" style={{fontSize:'2.2vh',display:'flex',flexDirection:'row'}}>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Skewb' label='Skewb'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Mirror' label='Mirror'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Pyraminx' label='Pyraminx'  onChange={onChangeHandler}/>
                  </div>
              
                  <div key={`default-radio6`} className="mb-3 category" style={{fontSize:'2.2vh',display:'flex',flexDirection:'row'}}>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Parents 3X3X3' label='Parents 3X3X3'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Mosaic' label='Mosaic'  onChange={onChangeHandler}/>
                    
                  </div>
                
                  <div key={`default-radio7`} className="mb-3 category eventCube" style={{fontSize:'2.2vh',display:'flex',flexDirection:'row'}}>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='Clock' label='Clock'  onChange={onChangeHandler}/>
                    <Form.Check  required={!eventCubeCategorySelected} name="eventCubeCategory" type='checkbox' value='High IQ' label='High IQ'  onChange={onChangeHandler}/>
                    
                  </div>
                </Form.Group>
                <div><span className='span'>Please select at least one category</span></div>
              </div>
          </div>
            :<div></div>}
        </div>
        </div>
        <div className="form-group btn">
          

          <Button  onClick={onSubmitHandler}  type='submit' className="btn"  variant="danger">Register</Button>{' '}
          
        </div>
        
      </form>
      </div>}
    </div>
  );
}




