import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './EventCarousalBottom.css';
import { useNavigate } from "react-router-dom";
import EventFooter from './EventFooter.js'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { display } from '@mui/system';
import FAQ from '../FAQ/FAQ'

export default function EventCarousalBottom() {
	const navigate = useNavigate();
	const [slideNo, setslideNo] = useState(0);
	const arr=['SuprCuber','SuprGenius','SuprFounder Jr'];
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
					"title1":"Schedule",
					"Description1":"Mental Maths competition to be held on 29th and 30 April.\nAll the formats of Senior Age Category will be held on Saturday 29th April\nJunior and Toddler Categories tournament will be held on Sunday 30th April."
				},
				{
					"title1":"Formats",
					"Description1":`Competiton will have 3 different formats\n1.Addition, Subtraction, Multiplication and Division on Paper\n2.Addition on Flash Software\n3. Games specified in our Special ' I LOVE MATHS' software`
				},
				{
					"title1":"",
					"Description1":``
				},
				{
					"title1":"Rules",
					"Description1":`1.All the questions are strictly meant to solve mentally.\n2.Use of calculator or rough work on pages is not allowed\n3.Games in I Love Math Software will be each 1 min long\n4.Flash Software will have Interval and it is the speed at which each number is flashing and it will be in milliseconds\nfor eg : 3000 interval means 3000 milliseconds or 3 seconds`
				},
				
				{
					"title1":"Categories",
					"Description1":`Toddler age group is from 4 to under 7\nJunior age group is from 7 to under 11\nSenior age group is from 11 to under 14\nAll 3 Formats will have 3 Age Categories
					Knight Star I: Toddler Beginner , Toddler Intermediate ,Toddler Advance
					Knight Star II: Junior Beginner , Junior Intermediate , Junior Advance
					Knight Star III: Senior Beginner , Senior Intermediate , Senior Advance`
				},
				{
					"title1":"Senior Category ",
					"Description1":`Questions on Paper : Double Digit Addition and Subtraction (10 rows) , 2x2 , 3x3 Multiplication , 3/1 Division sums\nFlash Software: Double Digit Addition, Interval : 2000\nI Love Maths Software : Square , Square Roots , Speed Calendar  `
				},
				{
					"title1":"Junior Category",
					"Description1":`Questions on Paper : Single Digit Addition Subtraction (10 rows) , Double Digit Addition (5 rows) , 2x2, 2x1 , 3x1, 4x1 , 5x1 \nFlash Software : Single Digit Addition , Interval : 2000 - 2500\nI Love Maths Software : Multiplication`
				},
				{
					"title1":"Toddler Category ",
					"Description1":`Questions on Paper : Single Digit Addition (5 rows) , Without complement sums ( 7 rows),1 x 1\nFlash Software : Single Digit Addition 5 rows , Interval 3000 `
				},
			],
			[
				
				{
					"title1":"Introducing",
					"Description1":`Super Founder Jr - your very own Shark Tank for kids`
				},
				{
					"title1":"Brief",
					"Description1":`Groom your child to be the CEOs of tomorrow. We at DO (Digital Outcomes) are conducting a workshop & an event to educate children on Financial literacy,Presentation Skills & Pitching their own business idea / startup.This will be a great way for kids to learn about business and entrepreneurship. They will be trained to come up with ideas, develop them into viable businesses, and then pitch their ideas to investors. They will also learn about negotiation and the importance of being confident and well-prepared when pitching an idea. We want to inspire kids to pursue their own business ideas in the future.Enrol in this 3 day workshop where we give your child a chance to audition and present his very own start up idea to our panel of investors. If you are selected you will get a chance to be part of the demo day (to be held in Mumbai on 29th April at 6pm) where your child will present the idea physically to a group of actual investors.`
				},
				{
					"title1":"",
					"Description1":``
				},
				{
					"title1":"What will the workshop teach?",
					"Description1":`Day 1 : Financial Literacy: Revenue, Sales, Cost of Goods sold, Profit (Gross & net),Loss, Debt, Equity, EBITDA, Equity.\n Day 2:  Presentation Skills: Intro to Powerpoint, Slideshows, Animations/Transitions,Templates, Slides, Content on a slide, Formatting,\n Day 3:  Pitch deck/demo day: Concepts to cover for pitch deck: Problem, solution,USP, pricing. Evaluate pitches based on the business model, idea, presentation & communication skills`
				},
				{
					"title1":"Preparation for the Final Event",
					"Description1":`Offline mentoring for 5-10 selected children by our expert mentors.`
				},
				{
					"title1":"Rehearsal (Mock pitch)",
					"Description1":`We will conduct a rehearsal for the selected children. This is mandatory & will help prep up your child to present effectively in front of a real investor panel. This will be done 1-2 days prior to the actual event.`
				},
				{
					"title1":"Demo day",
					"Description1":`Every child will be given an opportunity where they would pitch their business idea to an investor panel in 5 minutes. This will include their deck which consists of the learnings of the boot camp - pain point they are solving, target audience, usp solution , business model, financial plan.  Post their pitch, the investors may ask questions to the Founders about their pitch in the next ten minutes. Based on the Q&A, the investors will grade the children and the winners will be announced towards the end of the event.`
				},
				{
					"title1":"Registration Fees",
					"Description1":`1000/- per child for the participation in the workshop`
				}
			]

			

		
		
	];
	const Btnstyles = (slideNo) => ({
		marginTop: slideNo===2?'60vh':'80vh',
		
		
	});
	const mainCardStyles=(slideNo)=>({
		top:slideNo===2?'50vh':'80vh',
		paddingBottom:slideNo===0?'25vh':'0'
	});
	const changeSlide=(index)=>{	
		setslideNo(index)
	}
  return (
	<div>
	<div>

		{/* <div className='imgCone1' style={{marginBottom:'50vh'}}>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'40vh'}} src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'20vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Vector-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677902304136'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'50vh'}} className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Groupplane.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677315309559'/>
		</div> */}
		

	<div >
		
        <div className='BtnGroup' style={{marginBottom:'10vh',marginTop:'20vh'}}>
            <Button style={ {backgroundColor:slideNo===0?'red':'',color:slideNo===0?'white':''}} onClick={()=>changeSlide(0)} variant="outline-danger">{arr[0]}</Button>{' '}
            <Button style={ {backgroundColor:slideNo===1?'red':'',color:slideNo===1?'white':''}}  onClick={()=>changeSlide(1)} variant="outline-danger">{arr[1]}</Button>{' '}
            <Button  style={ {backgroundColor:slideNo===2?'red':'',color:slideNo===2?'white':''}} onClick={()=>changeSlide(2)} variant="outline-danger">{arr[2]}</Button>{' '}
        </div>	
		
	<div>
	<TransitionGroup>
		<CSSTransition 
			timeout={100}
			classNames="silde right-to-left"
			key={slideNo} 
		>
			<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
				<h3>Most Asked Questions</h3>			
				<FAQ  slideNo={slideNo} data={data} text={slideNo===0?"cuber":"test"}/>
			</div>
	</CSSTransition>	
		</TransitionGroup>
	</div>
	
	<div className='btn'  onClick={() => navigate("/register")}>
	{/* <Button onClick={() => navigate("/register")} variant="danger">Register Now</Button>{' '} */}
    {/* <Button onClick={() => navigate("/register")} variant="danger">Register Now</Button>{' '} */}
	
	</div>
	
	</div>
	{/* <div className='imgCone2'>
		<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'50vh'}} src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/>
		<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'20vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Vector-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677902304136'/>
			<img style={{maxHeight:'10vh',maxWidth:'10vw',marginBottom:'30vh'}}className='bottomCarousalImages' src='https://ik.imagekit.io/suprkid/Group.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677409238737'/>
		</div> */}
	
	</div>
	{/* <FAQ /> */}
	<EventFooter />
	</div>
  )
}
