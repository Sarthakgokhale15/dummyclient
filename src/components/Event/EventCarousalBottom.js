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

			
			[
				
				{
					"title1":"Participation Criteria",
					"Description1":"Any child between the ages 3 years to 18 years can participate in the event.",
					"Description2":"3x3x3 Event is Mandatory to participate.",
					"Description3":"3 attempts will be provided for the events & average of 3 will be considered as the final score.",
					"Description4":"Incase of DNF, 2 more Attempts will be provided.",
					"Description5":"Absent or Late Entries will not be awarded Merit or Participation Certificates"
				},
				{
					"title1":"Age Criteria",
					"Description1":"Under 07 Yrs: Born on/after 28nd April, 2016.",
					"Description2":"07 to 09 Yrs: Born on/after 28nd April, 2014 .",
					"Description3":"09 to 11 Yrs: Born on/after 28nd April, 2012.",
					"Description4":"11 to 14 Yrs: Born on/after 28nd April, 2009.",
					"Description5":"4 to 18 Yrs: Born on/after 28nd April, 2005.",
					"Description6":"Parent Category (Open Category, ONLY if your child is participating)."
				},
				{
					"title1":"Event details and fees.",
					"img":'https://ik.imagekit.io/suprkid/Event_Details_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677841177973'
				},
				{
					"title1":"Maximum time limit to complete the cube.",
					"Description1":"There are many factors like age group, format of the puzzle, mode of solving the puzzle, etc which make it difficult to determine Maximum time limit.",
					"Description2":"As a thumb rule, in order to stay competitive, you can refer to the following for formats you wish to participate in:",
					"Description3":"2X2X2 - 5 minute max.",
					"Description4":"3X3X3 - 7 minute max.",
					"Description5":"Pyraminx - 5 minutes max.",
					"Description6":"Skewb - 5 minutes max.",
					"Description7":"Mirror - 10 minutes max.",
					"Description8":"4x4x4 - 10 minutes Max.",
					"Description9":"Clock - 5 minutes max.",
					
				},
				{
					"title1":"Parents Participation",
					"Description1":"Parents can also participate, if you can solve 3x3x3 you must join the PARENT CATEGORY 3x3x3 (Parents are allowed, Only if their child is a participant).",
					"Description2":"PARENT CATEGORY also have podium prizes and merit medals like children",
					
				},
				{
					"title1":"Score Calculation",
					"Description1":"All the 3 scores will be added and then divided by 3",
				},
				{
					"title1":"High IQ Participation",
					"Description1":"For the HI IQ, solving all 3 cubes like 4x4x4, 5x5x5 and Megaminx is Mandatory.",

				},
				{
					"title1":"Participation Prizes & Rewards",
					"Description1":"Participation Certificates for all, mentioning all events that they participate in.",
					"Description2":"Winner’s Trophy and Certificates for Podium Winners in each event.",
					"Description3":"Merit Medals and Certificates for all Participants of 3x3x3. (Except for Podium/ Trophy Winners)",
					"Description4":"High IQ Participation Trophy to all participants. (Except for Podium/ Trophy Winners)"
				}
			]
			,
			[
				{
					"title1":"Participation Prizes & Rewards",
					"Description1":"Participation Certificates for all, mentioning all events that they participate in.",
					"Description2":"Winner’s Trophy and Certificates for Podium Winners in each event.",
					"Description3":"Merit Medals and Certificates for all Participants of 3x3x3. (Except for Podium/ Trophy Winners)",
					"Description4":"High IQ Participation Trophy to all participants. (Except for Podium/ Trophy Winners)"
				}
			]

			

		
		
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
				<p style={{fontWeight:'bold'}}>{data[slideNo][0].title1}</p>
				<p>{data[slideNo][0].Description1}</p>
				<p>{data[slideNo][0].Description2}</p>
				<p>{data[slideNo][0].Description3}</p>
				<p>{data[slideNo][0].Description4}</p>
				<p>{data[slideNo][0].Description5}</p>
               
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
			<p style={{fontWeight:'bold'}}>{data[slideNo][1].title1}</p>
				<p>{data[slideNo][1].Description1}</p>
				<p>{data[slideNo][1].Description2}</p>
				<p>{data[slideNo][1].Description3}</p>
				<p>{data[slideNo][1].Description4}</p>
				<p>{data[slideNo][1].Description5}</p>
				<p>{data[slideNo][1].Description6}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
			<p style={{fontWeight:'bold'}}>{data[slideNo][2].title1}</p>
				<img src={data[slideNo][2].img}/>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
			<p style={{fontWeight:'bold'}}>{data[slideNo][3].title1}</p>
				<p>{data[slideNo][3].Description1}</p>
				<p>{data[slideNo][3].Description2}</p>
				<p>{data[slideNo][3].Description3}</p>
				<p>{data[slideNo][3].Description4}</p>
				<p>{data[slideNo][3].Description5}</p>
				<p>{data[slideNo][3].Description6}</p>
				<p>{data[slideNo][3].Description7}</p>
				<p>{data[slideNo][3].Description8}</p>
				<p>{data[slideNo][3].Description9}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo][4].title1}</p>
				<p>{data[slideNo][4].Description1}</p>
				<p>{data[slideNo][4].Description2}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo][5].title1}</p>
				<p>{data[slideNo][5].Description1}</p>

			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo][6].title1}</p>
				<p>{data[slideNo][6].Description1}</p>

			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				<p style={{fontWeight:'bold'}}>{data[slideNo][7].title1}</p>
				<p>{data[slideNo][7].Description1}</p>
				<p>{data[slideNo][7].Description2}</p>
				<p>{data[slideNo][7].Description3}</p>
				<p>{data[slideNo][7].Description4}</p>

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
