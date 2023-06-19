import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteuser, logout } from '../../redux/Slices/userSlice';
import logo from '../../assets/logo.png';
import Myprofile from './my profile/Myprofile';
import Editprofile from './my profile/Editprofile';
import ListCoursesAdmin from './my profile/admin/ListCoursesAdmin';
import ListStudentsAdmin from './my profile/admin/ListStudentsAdmin';
import ListTeachersAdmin from './my profile/admin/ListTeachersAdmin';
// import { useEffect} from 'react';


function DashboardAdmin({admin, ping, setping, courses , allusers}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();


  return (
    <div style={{backgroundColor:'#e3e5eb'}}>
      <header className='welcome_user'>
        <img src={logo} alt='logo' style={{width:'250px', height:'50px', paddingLeft:'20px'}}/>
        <h2 style={{color:'white'}}>Dashboard {admin?admin.name:<h2>...Loading</h2>} </h2>
          <Dropdown style={{paddingRight:'20px'}}>
            <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'transparent', border:'none'}}>
              <img src={admin.avatar} alt='avatar' style={{width:'50px', height:'50px', borderRadius:'50%'}} /> 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="" onClick={()=>{dispatch(logout());navigate("/login")}}>Logout</Dropdown.Item>
              <hr/>
              <Dropdown.Item href="" onClick={(id)=>{dispatch( deleteuser(id = admin._id));navigate("/login")}}>Delete my account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </header>

      <div >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row >
        <Col className='sidebar' sm={3} >
          <div style={{ borderRadius:'20px', backgroundColor:'#f7f9fc', height:'300px', margin:'30px',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            
          <img src={admin.avatar} alt='avatar' style={{width:'120px', height:'120px', borderRadius:'50%'}} />
          <h4>{admin.name}</h4>
          <h4>I am {admin.role}</h4>
          <br/>
          <h5>Email: {admin.email}</h5>
            
          </div>
          <Nav variant="pills" className="flex-column" style={{ borderRadius:'20px', backgroundColor:'#f7f9fc',minHeight:'300px', height:'auto', margin:'20px', alignItems:'center', padding:'15px'}}>
            
            <Nav.Item>
              <Nav.Link eventKey="first">my profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">All courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3.1">All students</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3.2">All instructors</Nav.Link>
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
              <Nav.Link eventKey="5" onClick={()=>{dispatch(logout());navigate("/login")}}>logout</Nav.Link>
            </Nav.Item>
            
          </Nav>

        </Col>
        <Col className='content' sm={8}>
          <Tab.Content style={{ width:'100%', marginTop:'30px', borderRadius:'20px', backgroundColor:'#f7f9fc'}}>
            <Tab.Pane eventKey="first"><div style={{padding:'10px'}}><Myprofile user={admin} /></div></Tab.Pane>
            <Tab.Pane eventKey="2"><div style={{padding:'10px'}}><ListCoursesAdmin courses={courses} ping={ping} setping={setping}/></div></Tab.Pane>
            <Tab.Pane eventKey="3.1"><div style={{padding:'10px'}}><ListStudentsAdmin allusers={allusers} ping={ping} setping={setping}/></div></Tab.Pane>
            <Tab.Pane eventKey="3.2"><div style={{padding:'10px'}}><ListTeachersAdmin allusers={allusers} ping={ping} setping={setping}/></div></Tab.Pane>
            <Tab.Pane eventKey="4"><div style={{padding:'10px'}}><Editprofile user={admin} ping={ping} setping={setping}/></div></Tab.Pane>
            {/* <Tab.Pane eventKey="5"><div style={{padding:'10px'}}><UpdatPassword user={admin} /></div></Tab.Pane> */}
          </Tab.Content>
        </Col>
        </Row>
      </Tab.Container>
      </div>
    </div>
  )
}

export default DashboardAdmin