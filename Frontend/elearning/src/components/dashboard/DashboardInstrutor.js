import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteuser, logout } from '../../redux/Slices/userSlice';
import logo from '../../assets/logo.png'
import Myprofile from './my profile/Myprofile';
import Editprofile from './my profile/Editprofile';
// import UpdatPassword from './my profile/UpdatPassword';

function DashboardInstrutor({instructor, ping, setping}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div style={{backgroundColor:'#e3e5eb'}}>
      <header className='welcome_user'>
        <img src={logo} alt='logo' style={{width:'250px', height:'50px', paddingLeft:'20px'}}/>
        <h2 style={{color:'white'}}>Dashboard {instructor?instructor.name:<h2>...Loading</h2>} </h2>
          <Dropdown style={{paddingRight:'20px'}}>
            <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'transparent', border:'none'}}>
              <img src={instructor.avatar} alt='avatar' style={{width:'50px', height:'50px', borderRadius:'50%'}} /> 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="" onClick={()=>{dispatch(logout());navigate("/login")}}>Logout</Dropdown.Item>
              <hr/>
              <Dropdown.Item href="" onClick={(id)=>{dispatch( deleteuser(id = instructor._id));navigate("/login")}}>Delete my account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </header>

      <div >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row >
        <Col className='sidebar' sm={3} >
          <div style={{ borderRadius:'20px', backgroundColor:'#f7f9fc', height:'300px', margin:'30px',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            
          <img src={instructor.avatar} alt='avatar' style={{width:'120px', height:'120px', borderRadius:'50%'}} />
          <h4>{instructor.name}</h4>
          <h4>I am {instructor.role}</h4>
          <br/>
          <h5>Email: {instructor.email}</h5>
            
          </div>
          <Nav variant="pills" className="flex-column" style={{ borderRadius:'20px', backgroundColor:'#f7f9fc',minHeight:'300px', height:'auto', margin:'20px', alignItems:'center', padding:'15px'}}>
            
            <Nav.Item>
              <Nav.Link eventKey="first">my profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">My courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">more courses</Nav.Link>
            </Nav.Item>
              <br/>
              <br/>  
            <Nav.Item>
            <hr/>
              <Nav.Link eventKey="4">edit profile</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="5">change password</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link eventKey="6" onClick={()=>{dispatch(logout());navigate("/login")}}>logout</Nav.Link>
            </Nav.Item>
            
          </Nav>

        </Col>
        <Col className='content' sm={8}>
          <Tab.Content style={{ width:'100%', marginTop:'30px', borderRadius:'20px', backgroundColor:'#f7f9fc'}}>
            <Tab.Pane eventKey="first"><div style={{padding:'10px'}}><Myprofile user={instructor} /></div></Tab.Pane>
            <Tab.Pane eventKey="2"><div style={{padding:'10px'}}>22222</div></Tab.Pane>
            <Tab.Pane eventKey="3"><div style={{padding:'10px'}}>333333</div></Tab.Pane>
            <Tab.Pane eventKey="4"><div style={{padding:'10px'}}><Editprofile user={instructor} ping={ping} setping={setping}/></div></Tab.Pane>
            {/* <Tab.Pane eventKey="5"><div style={{padding:'10px'}}><UpdatPassword user={instructor} /></div></Tab.Pane> */}
          </Tab.Content>
        </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
  )
}

export default DashboardInstrutor