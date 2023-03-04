import './Form.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RadioBtn from './RadioBtn';
import Form from 'react-bootstrap/Form';
import validator from "validator";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function CustomForm() {
  const navigate = useNavigate();
  const [submit, setsubmit] = useState(false)
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


  const onSubmitHandler = (event) => {

    event.preventDefault()
    console.log(formData)
    setsubmit(true);
    axios.get(`http://localhost:3001/api/v1/batch`).then((response) => {
     console.log(response.status);
    // if(response.status==200){
    //   navigate("/registrationSuccessful");
    //  }
    });

    navigate("/");
    // axios post to database
  }
  return (
    // <div>hello</div>
    <div className="FormContainer">
      <h1>Please Fill The Details To Register</h1>
      <form onSubmit={onSubmitHandler} className='Form' >
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
                <div key={`default-radio`} className="mb-3">
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Rubix Cube' label='Rubix Cube' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Mental Math' label='Mental Math' inline onChange={onChangeHandler}/>
                  <Form.Check  required={!categorySelected} name="Category" type='checkbox' value='Super Tank' label='Super Tank' inline onChange={onChangeHandler}/>
                </div>
              </Form.Group>
              <div><span className='span'>Please select at least one category</span></div>
          </div>
          
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
              <div key={`default-radio`} className="mb-3">
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
          <Button  onClick={onSubmitHandler} className="btn" type="submit" variant="danger">Submit</Button>{' '}
          
        </div>
      </form>
    </div>
  );
}

export default CustomForm;
