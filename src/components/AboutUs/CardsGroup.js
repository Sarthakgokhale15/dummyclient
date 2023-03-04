import React from "react";
import './CardsGroup.css'
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header'



function AboutCardsGroup() {
  return (
    <div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'column',marginBottom:'15vh'}}><h1>Our brands</h1></div>
        <div className="wrapper">
      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/image_18headerlogo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677340400051"

        description="Suprkid is a leading provider of after-school activities for children. Their programs are designed to promote holistic development, empowering children to reach their full potential. Suprkid offers a comprehensive range of customized training programs, with the aim of teaching children valuable skills and techniques. Their co-curricular activities include Martial Arts, Rubik’s, Abacus, Dance, Music, Vedic Math, and other gamified learning approaches. In addition to these activities, Suprkid also promotes essential fitness and wellness concepts to encourage a healthy and active lifestyle"
      />

      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/Cardslogo2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337892643"

        description="Genius Kid is the pioneer institute of Mental Math with many world records as well as international awards under its belt. They aim to improve the potential of kids all over the globe. Their techniques enables your child to have increased level of concentration, higher IQ, emotional stability, enhanced creativity and intuitiveness, greater self-confidence, improved health, motor, and character; and photographic memory.
        "
      />

      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/image_24.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677914199430"
        description="Digital Outcomes is a full stack startup accelerator that assists early-stage startup founders with building and validating their value proposition, product development, GTM strategy, business model development, product-market fit, funding from angels, family offices and VCs, and hiring of founding teams. The accelerator aims to support startup growth and success through expert guidance and resources.
        "
      />
    </div>
    <div className="wrapper">
      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/image_22.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677914755221"

        description="Cube Pluss/JCA aims to promote competitive puzzle-solving to younger kids according to their age category. We focus on Rubik’s based puzzles like the well-known 3x3 Rubik’s cube, 2x2, 4x4, 5x5, Megaminx, Skewb, Clock, Pyraminx, and more
        "
      />

      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/Cardslogo1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337892464"

        description="One stop solution for your family's health. Maxx Wellness weaves together distinctly different services that inspire people to live healthier, happier and add value to their lives. Maxx believes in creating unique experiences for its clients by providing fitness, wellness & lifestyle solutions."
      />

      <Card
        img="https://ik.imagekit.io/suprkid/suprLegendEvent/Cardslogo4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337892507"

        description="Suprmom focuses on making fitness a lifestyle for moms rather then just a season. It organises events, workshops, etc. exclusively for moms to live a healthy and fun lifestyle"
      />
    </div>
    <img style={{position:'relative',maxWidth:'100vw',zIndex:2}} src='https://ik.imagekit.io/suprkid/CTA_section.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677853015317'/>
    <Header bgcolor={'#152D5A'} color={'white'} expand={false}/>
    </div>
    
  );
}

function Card(props) {
  return (
    <div className="cardAbout">
      <div className="card__body">
        <img src={props.img} className="card__image" />
        
        <p className="card__description">{props.description}</p>
      </div>
      
    </div>
  );
}


export default AboutCardsGroup;
