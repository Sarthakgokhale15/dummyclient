import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import './Header.css'


function Header(props) {
  const navigate = useNavigate();

  return (
    <Navbar expand="md" className='navbar-main' style={{backgroundColor:`${props.bgcolor}`}}>
      <Container className='navContainer'>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src="https://ik.imagekit.io/suprkid/suprLegendEvent/Cardslogo5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337892412"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='navlinks'>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="navBtn">
            <Nav.Link onClick={() => navigate("/")} style={{color:`${props.color}`}}  >Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/Aboutus")} style={{color:`${props.color}`}} >About Us</Nav.Link>
            <Nav.Link  onClick={() => navigate("/Event")} style={{color:`${props.color}`}}  >About Event</Nav.Link>
            <div className='NavBtnRegister'><Button onClick={() => navigate("/register")} variant="danger" size='md'>Register Now</Button>{' '}</div>
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