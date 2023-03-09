import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './CarousalBottom.css';
import { useNavigate } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
export default function CarousalBottom() {
	const navigate = useNavigate();
	const [slideNo, setslideNo] = useState(0);
	const arr=['Kids','Parents','Sponsors'];
	const data=[
		{	
			"point1":"For Kids Suprlegends is an event specially designed for kids, offering them a unique opportunity to learn and grow. Here are some reasons why kids should attend:",
			"point2":`Real-life Entrepreneurship Experience: Supr Founder Jr is a first-of-its-kind event that offers kids a chance to experience real-life entrepreneurship. The event will help them get a taste of what it's like to be an entrepreneur and equip them with the skills they need for the future.`,
			"point3":"Attending Suprlegend can help kids develop their skills, gain valuable experience, make new friends, and have fun while doing so.",
			"point4":"Win Exciting Prizes: Suprlegend offers exciting prizes that can motivate and inspire kids to give their best. Competing and winning can also help build confidence and self-esteem.",
			"point5":"Compete with the Best: Suprlegend gives kids an opportunity to compete with the best of the best. This can help them push their boundaries and develop their skills even further.",
			"point6":"Showcase Mental Agility & Talent: Suprlegend provides a platform for kids to showcase their mental agility and talent in front of talented individuals. This can help them gain recognition for their skills and talents and motivate them to continue to pursue their passions.",
			"point7":"Make New Friends: Attending Suprlegend is a great way for kids to meet and connect with other kids who share similar interests. Making new friends can be a fun and rewarding experience."

		},
		{	
			"point1":"For Parents Attend Free Workshops: Suprlegend offers a chance for parents to attend a variety of workshops on topics ranging from child development to education for free. This can help you gain new insights and knowledge to better support your child.",
			"point2":"Help Your Child Reach Their True Potential: By attending Suprlegend, you can learn about new ways to support your child's growth and development through several workshops and seminars. You can discover innovative techniques and strategies that can help your child reach their true potential.",
			"point3":"Exclusive Offers & Discounts: Suprlegend will have various brands setting up their stalls at the venue, which means you can take advantage of exclusive offers and discounts. ",
			"point4":"Build Relationships: Attending Suprlegend can also help you connect with other parents and their children. You can share experiences, insights and learn from each other. Building new relationships can be valuable for you and your child, and can help create a support network for your family.",
			"point5":""

		},
		{	
			"point1":"As a brand or sponsor, partnering with Suprlegend can offer several benefits to help you reach your target audience. Here are some reasons why you should consider partnering with Suprlegend:",
			"point2":"Reach a Large and Engaged Audience: Suprlegend is expected to attract over 3000+ visitors from across Mumbai, providing you with an excellent opportunity to reach a large and engaged audience.",

			
			
			
			"point3":"Multiple Marketing Channels: Suprlegend will activate multiple marketing channels like social media and direct messaging to reach all partner brand's customer base. This can potentially help you reach over 20,000+ people.",
			"point4":"Direct Marketing Opportunities: Sponsors will have a chance to market directly at Suprkid's offline centers, which are spread across Mumbai. This can help you reach potential customers who may not have been reached otherwise.",
			"point5":"Special Branding Activities: Suprlegend offers special branding activities during the event in addition to having stalls. This can help you create a unique and memorable experience for your target audience.",
			"point6":"Premium Location: Suprlegend takes place at a premium location in Mumbai, the Phoenix Marketcity, providing your brand with an opportunity to be showcased in a high-end setting."

		}
	];
	const changeSlide=(index)=>{	
		setslideNo(index)
	}
	// const HomeBtnstyles = (slideNo) => (`.carousalBottomBtn${slideNo}`{
		
		
		
	// });


  return (
	<div className='HomemainCard'>
		<div className='HomeimgCone1'><img src='https://ik.imagekit.io/suprkid/Group-9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649471963'/></div>
		
	<div className='Main'>
		<div className='mainTitle' style={{display:'flex',width:'100%', justifyContent:'center',fontWeight:'bolder'}}>
			<h1>Whats In It For You!</h1>
		</div>
		
        <div className='BtnGroup'>
            <Button  style={ {backgroundColor:slideNo===0?'red':'',color:slideNo===0?'white':''}} className={`carousalBottomBtn0`} onClick={()=>changeSlide(0)} variant="outline-danger">{arr[0]}</Button>{' '}
            <Button  style={{backgroundColor:slideNo===1?'red':'',color:slideNo===1?'white':''}} className={`carousalBottomBtn1`} onClick={()=>changeSlide(1)} variant="outline-danger">{arr[1]}</Button>{' '}
            <Button  style={{backgroundColor:slideNo===2?'red':'',color:slideNo===2?'white':''}} className={`carousalBottomBtn1`} onClick={()=>changeSlide(2)} variant="outline-danger">{arr[2]}</Button>{' '}
        </div>	
	<div className='bottomCard'>
	<TransitionGroup>
		<CSSTransition 
			timeout={100}
			classNames="silde right-to-left"
			key={slideNo} 
		>
	<div className='CarousalCardContent homecarousalCard' style={{marginTop:slideNo===1?'0vh':'1vh',color:(slideNo===0 || slideNo===1 || slideNo===2)?'#03265A':''}}>
		
		
		<div className='CarousalCardItem'>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point1}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point2}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point3}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point4}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point5}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'2vh'}}>

				<p>{data[slideNo].point6}</p>
			</div>
			<div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',textAlign:'left',paddingBottom:'1vh'}}>
				
				<p>{data[slideNo].point7}</p>
			</div>
			
		</div>
		
	</div>
	</CSSTransition>	
		</TransitionGroup>
	</div>

	<div className='dummy'></div>
	<div className='homeRegBtnParent' style={{display:'flex',justifyContent:"center"}}><Button  className='Reg Homereg'onClick={() => navigate("/register")} variant="danger" size='lg'>Register Now</Button>{' '}</div>
	
	{/* <div className='btn' style={{marginTop:'15vh'}}> */}
	{/* <Button onClick={() => navigate("/Event")} variant="danger">register Now</Button>{' '} */}
    
	{/* </div> */}
	</div>
	<div className='imgCone2 homecone'><img src='https://ik.imagekit.io/suprkid/Group-8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677649469283'/></div>
	</div>
	
  )
}
