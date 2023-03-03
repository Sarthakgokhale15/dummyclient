import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './EventCarousalBottom.css';
// import { useNavigate } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
export default function EventCarousalBottom() {
	// const navigate = useNavigate();
	const [slideNo, setslideNo] = useState(0);
	const arr=['Cube Competition','Mental Math Competition','Super Shark'];
	const data=[
		{	

			"point1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
			"title1":"Participation Criteria",
			"point3":"Any child between ages 3 Years to 18 Years can participate in the event",
			"point4":"3X3X3 Event is Mandatory to participate ",
			"point5":"3 Attempts will be provided fot the event & average of 3 will be considered as final score",
            "point6":"In case of DNF, 2 more atttempts will be provided.",
            "point7":"Absent or late entries will not be awarded Merit or Participation Certificate.",
            "title2":"Age Criteria",
            "point8":"Under 7 Years Born on/after 28April 2016."

		},
		{	
			"point1":"Age Criteria",
			"point2":"lorem ipsum parents",
			"point3":"lorem ipsum parents",
			"point4":"lorem ipsum parents",
			"point5":"lorem ipsum parents"

		},
		{	
			"point1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
			"point2":"lorem ipsum sponsers",
			"point3":"lorem ipsum sponsers",
			"point4":"lorem ipsum sponsers",
			"point5":"lorem ipsum sponsers"

		}
	];
	const changeSlide=(index)=>{	
		setslideNo(index)
	}
  return (
	<div className='mainCard'>
		<div className='imgCone1'><img src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/></div>
	<div className='Main'>
        <div className='BtnGroup'>
            <Button onClick={()=>changeSlide(0)} variant="outline-danger">{arr[0]}</Button>{' '}
            <Button  onClick={()=>changeSlide(1)} variant="outline-danger">{arr[1]}</Button>{' '}
            <Button  onClick={()=>changeSlide(2)} variant="outline-danger">{arr[2]}</Button>{' '}
        </div>	
	<div className='bottomCard'>
	<TransitionGroup>
		<CSSTransition 
			timeout={100}
			classNames="silde right-to-left"
			key={slideNo} 
		>
	<div className='CarousalCardContent'>
		
		<div className='CarousalCardItem'>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo].title1}</p>
				<p>{data[slideNo].point3}</p>
                <p>{data[slideNo].point4}</p>
                <p>{data[slideNo].point5}</p>
                <p>{data[slideNo].point6}</p>
                <p>{data[slideNo].point7}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo].title2}</p>
				<p>{data[slideNo].point8}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo].title3}</p>
				<p>{data[slideNo].point5}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo].title4}</p>
				<p>{data[slideNo].point4}</p>
			</div>
			
		</div>
		
	</div>
	</CSSTransition>	
		</TransitionGroup>
	</div>
	
	<div className='btn'>
	{/* <Button onClick={() => navigate("/register")} variant="danger">Register Now</Button>{' '} */}
    <Button  variant="danger">Register Now</Button>{' '}
	</div>
	</div>
	<div className='imgCone2'><img src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/></div>
	</div>
	
  )
}
