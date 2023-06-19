import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navigation.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Navigation() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) { // 8 rem = 8 * 16px = 128px
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={scroll ? 'light' : 'transparent'}
        style={{ transition: 'background-color 0.5s, color 0.5s' }}
      >
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt='logo' style={{width:'250px', height:'50px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  style={{marginLeft:'100px',fontSize:'15px',fontWeight:'500'}}>
              <Nav.Link style={{color:'#FF6575'}} href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              
            </Nav>

            {/* login and register button */}
            <Nav style={{marginLeft:'120px'}}>
            <Link to='/login'><Button className='button' variant="outline-success" style={{marginRight:'30px', marginLeft:'250px'}}>Login</Button></Link>
            <Link to='/register'><Button className='button' variant="outline-success">Sign In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;