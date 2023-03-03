import React from 'react'
import './About.css'
import Button from 'react-bootstrap/Button';
// import FlippableCard from './flippable-card';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import FlipCard from './FlipCard'
export default function About() {
  return (
    <div className='about'>
        <div className='aboutText'>
        <h2>About the event</h2>
        <p className='paragraph'>The two-day event will be a fun-filled extravaganza for kids and parents! It will feature a variety of activities such as competitions (Rubiks, Mental Maths, Supr Shark India), art and craft workshops, dance / music performances, games, as well as mental agility camps, talent competitions and more.</p>
        
        </div>
        <Button variant="light">Know more</Button>{' '}
        <div className='box'>
            <img className='boximg'src='https://ik.imagekit.io/suprkid/Groupbox.png'/>
        </div>
        <h2 className='aboutBody'>About Competition</h2>
        <div className='box2'><img className='box2img' src='https://ik.imagekit.io/suprkid/Group-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677505845780'/></div>
        <div className='clouds'>
              {/* <div><img className='cloud11' src='https://ik.imagekit.io/suprkid/Vectorcloud.png'/></div> */}
            <div className='cloudPlane'>
                <img className='image1' src='https://ik.imagekit.io/suprkid/Group_8plane.png'/>
                <img className='image2' src='https://ik.imagekit.io/suprkid/Vectorcloud.png'/>
            </div>
            
            
            
        </div>
        <div className='cardGroup'>
            
                <FlipCard img={'https://ik.imagekit.io/suprkid/imgcube-2-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677577069663'}/>
                <FlipCard img={'https://ik.imagekit.io/suprkid/2ndimg_X2f856_xa?ik-sdk-version=javascript-1.4.3&updatedAt=1677312967421'}/>
                <FlipCard img={'https://ik.imagekit.io/suprkid/3rdImg_wRNEc8EGj?ik-sdk-version=javascript-1.4.3&updatedAt=1677312849855'} />
           </div>
       


    </div>
  )
}
