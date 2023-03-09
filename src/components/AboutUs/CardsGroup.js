import React from "react";
import './CardsGroup.css'
import Col from 'react-bootstrap/Col';
import Header from '../Header/Header'
import OverlayCardFooter from '../OverlayCardFooter/OverlayCardFooter'


function AboutCardsGroup() {
  return (
    <div>
        <div className="AboutBrands" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'column',marginBottom:'15vh',fontWeight:'700',color:'#101828'}}><h2>Our Brands</h2></div>
        <div className="wrapper">
      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198900198"

        description="Suprkid is a leading provider of after-school activities for children. Their programs are designed to promote holistic development, empowering children to reach their full potential. Suprkid offers a comprehensive range of customized training programs, with the aim of teaching children valuable skills and techniques. Their co-curricular activities include Martial Arts, Rubik’s, Abacus, Dance, Music, Vedic Math, and other gamified learning approaches."
      />

      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198900400"

        description="Genius Kid is the pioneer institute of Mental Math with many world records as well as international awards under its belt. They aim to improve the potential of kids all over the globe. Their techniques enables your child to have increased level of concentration, higher IQ, emotional stability, enhanced creativity and intuitiveness, greater self-confidence, improved health, motor, and character; and photographic memory.
        "
      />

      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198900131"
        description="Digital Outcomes is a full stack startup accelerator that assists early-stage startup founders with building and validating their value proposition, product development, GTM strategy, business model development, product-market fit, funding from angels, family offices and VCs, and hiring of founding teams. The accelerator aims to support startup growth and success through expert guidance and resources.
        "
      />
    </div>
    <div className="wrapper">
      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198898837"

        description="Cube Pluss/JCA aims to promote competitive puzzle-solving to younger kids according to their age category. We focus on Rubik’s based puzzles like the well-known 3x3 Rubik’s cube, 2x2, 4x4, 5x5, Megaminx, Skewb, Clock, Pyraminx, and more
        "
      />

      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198902686"

        description="One stop solution for your family's health. Maxx Wellness weaves together distinctly different services that inspire people to live healthier, happier and add value to their lives. Maxx believes in creating unique experiences for its clients by providing fitness, wellness & lifestyle solutions."
      />

      <Card
        img="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198900029"

        description="Suprmom focuses on making fitness a lifestyle for moms rather then just a season. It organises events, workshops, etc. exclusively for moms to live a healthy and fun lifestyle"
      />
    </div>
    <div style={{ position: 'relative' }}>
            <img style={{position:'relative',maxWidth:'100vw',zIndex:2}} src='https://ik.imagekit.io/suprkid/BG_GADEN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678339215345'/>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' ,zIndex:4}}>
                    <OverlayCardFooter />
                </div>
            </div>
            <Header bgcolor={'#152D5A'} color={'white'} expand={false} showFooter={true}/>
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
