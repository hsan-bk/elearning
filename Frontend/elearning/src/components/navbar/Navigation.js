import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        variant={scroll ? 'dark' : 'light'}
        bg={scroll ? 'dark' : 'transparent'}
        style={{ transition: 'background-color 0.5s, color 0.5s' }}
      >
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt='logo' style={{width:'250px', height:'50px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:'100px'}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <NavDropdown title="Courses" id="collasible-nav-dropdown"style={{marginRight:'50px'}}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* login and register button */}
            <Nav>
            <Link to='/login'><Button className='button' variant="outline-success" style={{marginRight:'30px'}}>Login</Button></Link>
            <Link to='/register'><Button className='button' variant="outline-success">Sign In</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
