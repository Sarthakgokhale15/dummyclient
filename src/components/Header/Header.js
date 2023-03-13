import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

import './Header.css'


function Header(props) {
  const [tab, settab] = useState(0);
  const navigate = useNavigate();

  return (
    
    <Navbar expand="md" className='navbar-main' style={{backgroundColor:`${props.bgcolor}`}} fixed={props.fixed===true?"top":""}>
      <Container className='navContainer'>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img style={{borderRadius:'10px',maxHeight:'10vh',maxWidth:'50vw'}} src="https://ik.imagekit.io/suprkid/high_res_brand_logos/All_Logos_Suprlegend/8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678198899223"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='navlinks'>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="navBtn">
            <Nav.Link className='navlinksBtn' onClick={() => navigate("/")} style={{color:`${props.color}`}}  >Home</Nav.Link>
            <Nav.Link className='navlinksBtn' onClick={() => navigate("/Aboutus")} style={{color:`${props.color}`}} >About Us</Nav.Link>
            <Nav.Link className='navlinksBtn' onClick={() => navigate("/Event")} style={{color:`${props.color}`}}  >Events</Nav.Link>
            <div className='NavBtnRegister'>
              <Button onClick={() => navigate("/register")} variant="danger" size='md'>Register Now</Button>{' '}
              {props.showFooter?<img style={{borderRadius:'5px',marginTop:'1vh',maxHeight:'5vh',maxWidth:'5vw'}}src='https://ik.imagekit.io/suprkid/Presented_by.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678279284091'/>:<div></div> }
            </div>
          </Nav>
          
          {/* <div>
          <Button onClick={() => navigate("/register")} variant="danger" size='sm'>Register Now</Button>{' '}
          </div> */}
          
        </Navbar.Collapse>
        
        </div>
        
      </Container>
    </Navbar>

  );
}

export default Header;