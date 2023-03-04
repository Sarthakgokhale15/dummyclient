import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import './Header.css'


function Header(props) {

  return (
    <Navbar expand="md" className='navbar-main' style={{backgroundColor:`${props.bgcolor}`}}>
      <Container className='navContainer'>
        <Navbar.Brand >
          <img src="https://ik.imagekit.io/suprkid/suprLegendEvent/Cardslogo5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337892412"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='navlinks'>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:`${props.color}`}}  >Home</Nav.Link>
            <Nav.Link style={{color:`${props.color}`}} >About Us</Nav.Link>
            <Nav.Link  style={{color:`${props.color}`}}  >Contact Us</Nav.Link>
          </Nav>
          <div>
          <Button variant="danger" size='sm'>Register Now</Button>{' '}
          </div>
          
        </Navbar.Collapse>
        
        </div>
        
      </Container>
    </Navbar>
  );
}

export default Header;