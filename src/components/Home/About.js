import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
// import FlippableCard from './flippable-card';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import FlipCard from './FlipCard'
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <div className='about'>
        <div className='HomeaboutText'>
        <h2>About the event</h2>
        <p className='Homeparagraph'>The two-day event will be a fun-filled extravaganza for kids and parents! It will feature a variety of activities such as competitions (Rubiks, Mental Maths, Supr Shark India), art and craft workshops, dance / music performances, games, as well as mental agility camps, talent competitions and more.</p>
        
        </div>
        <Button onClick={() => navigate("/Event")} variant="light">Know more</Button>{' '}
        <div className='box'>
            <img className='boximg'src='https://ik.imagekit.io/suprkid/Groupbox.png'/>
        </div>
        <h2 className='aboutBody'>Competitions</h2>
        <div className='box2'><img className='box2img' src='https://ik.imagekit.io/suprkid/Group-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677505845780'/></div>
        <div className='clouds'>
              {/* <div><img className='cloud11' src='https://ik.imagekit.io/suprkid/Vectorcloud.png'/></div> */}
            <div className='cloudPlane'>
                <img className='image1' src='https://ik.imagekit.io/suprkid/Group_8plane.png'/>
                <img className='image2' src='https://ik.imagekit.io/suprkid/Vectorcloud.png'/>
            </div>
            
            
            
        </div>
        <div className='cardGroup'>
            
                <FlipCard text={'SuprCuber'} img={'https://ik.imagekit.io/suprkid/suprLegendEvent/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678368070759'}/>
                <FlipCard text={'SuprGenius'} img={'https://ik.imagekit.io/suprkid/suprLegendEvent/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678368067158'}/>
                <FlipCard text={'SuprFounder Jr'} img={'https://ik.imagekit.io/suprkid/suprLegendEvent/3__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678368070685'} />
           </div>
       


    </div>
  )
}
