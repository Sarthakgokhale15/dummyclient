import React,{useState} from 'react';
import PropTypes from 'prop-types';
// import CloseIcon from '@mui/icons-material/Close';
import './Card.css'
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Card = ({property,onClickCallback,img,text}) => {
    const navigate=useNavigate();
    
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces,temp} = property;
    if(temp==='back'){
        return (
        <div  id={`card-${index}`} className="card" style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'column',backgroundColor:'white'}}>
        <div style={{height:'50%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
       
            <CloseButton onClick={onClickCallback}/>
           
            
        </div>
        <p style={{fontWeight:'bold'}}>Visit</p>
        <p style={{fontWeight:'bold'}}>{text}</p>
        <p style={{fontWeight:'bold'}}>Event Page</p>

        <Button onClick={()=>navigate("/Event")} variant="danger">Know more</Button>{' '}
        
        
    </div>
    )
    }
    return (

        
        <div id={`card-${index}`} className="card" >
            <img className='cardImg' src={img} alt={text} />
            <div className="details">
                
                <p style={{}}>{text}</p>
            </div>
        </div>
        

    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;