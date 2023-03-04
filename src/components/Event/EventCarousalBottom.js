import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './EventCarousalBottom.css';
// import { useNavigate } from "react-router-dom";
import EventFooter from './EventFooter.js'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { display } from '@mui/system';
export default function EventCarousalBottom() {
	// const navigate = useNavigate();
	const [slideNo, setslideNo] = useState(0);
	const arr=['Cube Competition','Mental Math Competition','Super Shark'];
	const data=[

			
			[
				
				{
					"title1":"Participation Criteria",
					"Description1":"Any child between the ages 3 years to 18 years can participate in the event.\n 3x3x3 Event is Mandatory to participate.\n3 attempts will be provided for the events & average of 3 will be considered as the final score.\nIncase of DNF, 2 more Attempts will be provided.\nAbsent or Late Entries will not be awarded Merit or Participation Certificates.",
				},
				{
					"title1":"Age Criteria",
					"Description1":"Under 07 Yrs: Born on/after 28nd April, 2016\n07 to 09 Yrs: Born on/after 28nd April, 2014\n09 to 11 Yrs: Born on/after 28nd April, 2012\n11 to 14 Yrs: Born on/after 28nd April, 2009\n14 to 18 Yrs: Born on/after 28nd April, 2005\nParent Category (Open Category, ONLY if your child is participating)",
					
				},
				{
					"title1":"Event details and fees.",
					"img":'https://ik.imagekit.io/suprkid/Event_Details_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677841177973'
				},
				{
					"title1":"Maximum time limit to complete the cube.",
					"Description1":"There are many factors like age group, format of the puzzle, mode of solving the puzzle, etc which make it difficult to determine Maximum time limit.\nAs a thumb rule, in order to stay competitive, you can refer to the following for formats you wish to participate in:\n2X2X2 - 5 minute max\n3X3X3 - 7 minute max\nPyraminx - 5 minutes max\nSkewb - 5 minutes max\nMirror - 10 minutes max\n4x4x4 - 10 minutes Max\nClock - 5 minutes max",
		
				},
				{
					"title1":"Parents Participation",
					"Description1":"Parents can also participate, if you can solve 3x3x3 you must join the PARENT CATEGORY 3x3x3 (Parents are allowed, Only if their child is a participant)\nPARENT CATEGORY also have podium prizes and merit medals like children",

					
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
					"Description1":"Participation Certificates for all, mentioning all events that they participate in.\nWinner’s Trophy and Certificates for Podium Winners in each event.\nMerit Medals and Certificates for all Participants of 3x3x3. (Except for Podium/ Trophy Winners)\nHigh IQ Participation Trophy to all participants. (Except for Podium/ Trophy Winners)",
					
				}
			]
			,
			[
				
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				}
			],
			[
				
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				},
				{
					"title1":"Lorem Ipsum",
					"Description1":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
				}
			]

			

		
		
	];
	const changeSlide=(index)=>{	
		setslideNo(index)
	}
  return (
	<div>
	<div className='mainCard' style={{top:slideNo===0?'90vh':'40vh'}}>

		<div className='imgCone1' style={{marginBottom:'50vh'}}>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'40vh'}} src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'20vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Vector-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677902304136'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'50vh'}} className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Groupplane.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677315309559'/>
		</div>
		

	<div className='Main'>
        <div className='BtnGroup' style={{bottom:slideNo===0?'70vh':'30vh'}}>
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
				{<p style={{fontWeight:'bold'}}>{data[slideNo][0].title1}</p>}

				{data[slideNo][0].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}

               
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][1].title1}</p>}

				{data[slideNo][1].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}

			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][2].title1}</p>}
				<div className ='EventDetailsImg'style={{height:slideNo===0?'75vh':'0', width:slideNo===0? '55vw':'0'}}>
				
				{ <img src={data[slideNo][2].img}/>}
				</div>
				
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][3].title1}</p>}
				{data[slideNo][3].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][4].title1}</p>}
				{data[slideNo][4].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][5].title1}</p>}
				{data[slideNo][5].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}

			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][6].title1}</p>}
				{data[slideNo][6].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}

			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left'}}>
				{<p style={{fontWeight:'bold'}}>{data[slideNo][7].title1}</p>}
				{data[slideNo][7].Description1.split('\n').map(i => {
    				return <p>{i}</p>
				})}

			</div>
			
		</div>
		
	</div>
	</CSSTransition>	
		</TransitionGroup>
	</div>
	
	<div className='btn' style={{marginTop: slideNo===0?'100vh':'20vh'}}>
	{/* <Button onClick={() => navigate("/register")} variant="danger">Register Now</Button>{' '} */}
    <Button  variant="danger">Register Now</Button>{' '}
	
	</div>
	
	</div>
	<div className='imgCone2'>
		<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'50vh'}} src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/>
		<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'20vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Vector-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677902304136'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
		</div>
	
	</div>
	<EventFooter />
	</div>
  )
}
