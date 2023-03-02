import React,{useState} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import './Card.css'

const Card = ({property,onClickCallback,img}) => {
    
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces,temp} = property;
    if(temp==='back'){
        return (
        <div  id={`card-${index}`} className="card" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:'white'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between'}}>
            <p>Cube Competition</p>
            <button onClick={onClickCallback}><CloseIcon/></button>
            
        </div>


        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        
        
    </div>
    )
    }
    return (

        
        <div id={`card-${index}`} className="card" >
            <img className='cardImg' src={img} alt={city} />
            <div className="details">
                <p>Cube Competition</p>
            </div>
        </div>
        

    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;