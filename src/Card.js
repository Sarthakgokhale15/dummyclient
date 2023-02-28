import React,{useState} from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const Card = ({property,onClickCallback}) => {
    
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces,temp} = property;
    if(temp==='back'){
        return (
        <div  id={`card-${index}`} className="card">
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
            <button onClick={onClickCallback}><CloseIcon/></button>
            
        </div>

        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="details">
            <span className="index">{index+1}</span>
            <p className="location">
               temp<br />
                {address}
            </p>
            <ul className="features">
                <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
            </ul>

        </div>
    </div>
    )
    }
    return (

        
        <div id={`card-${index}`} className="card" >
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {temp}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div>
        </div>
        

    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;