import React, { useEffect, useState } from 'react'
import { userRegister } from '../redux/Slices/userSlice';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import image from '../assets/Register.jpg'
import './Register.css'
import { Tilt } from 'react-tilt'


function Register() {
  const [register, setregister] = useState({
    name:"",
    role:"",
    email:"",
    password:""
    
});

const [showModal, setShowModal] = useState(false);

useEffect(() => {
  setShowModal(true);
}, []);

const handleOption1 = () => {
  console.log("Option 1 chosen");
  setShowModal(false);
};

const handleOption2 = () => {
  console.log("Option 2 chosen");
  setShowModal(false);
};

const dispatch = useDispatch();
const navigate=useNavigate();
  return (
    <div>
      <Modal show={showModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Which option would you like to choose?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Welcome to Pro Academy, where you can unlock your potential! </p>
          <p>Become an Instructor and share your expertise by adding courses, while earning revenue from the knowledge you sell. </p>
          <p>Alternatively, embark on a journey as a Student and access top-quality online courses. </p>
          <p>At Pro Academy, endless possibilities await both Instructors and Students.</p>
          <p>Let's learn, grow, and excel together!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e)=>{handleOption1();setregister({...register, role:e.target.value='student'})}}
          className="button" >
            Student
          </Button>
          <Button variant="secondary" onClick={(e)=>{handleOption2();setregister({...register, role:e.target.value='instructor'})}}
          className="button">
            Instructor
          </Button>
        </Modal.Footer>
      </Modal>
    
    <div className='register_container'>

      <div className='register_img'> <Tilt ><img src={image} alt='register' style={{width:'700px', height:'630px', borderRadius:'10%', marginLeft:'30px'}}/></Tilt></div>

    <div className="register_detail" onSubmit={(e)=>e.preventDefault()}
    style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', margin:'30px', padding:'1ox', alignItems:'center'}}>
    <div className="group">
      <label className="label" style={{padding:'20px',fontSize:'20px'}}>Name</label>
      <input type="text" className="input" onChange={(e)=>setregister({...register, name:e.target.value})} />
    </div>
    <div className="group">
      <label  className="label" style={{padding:'20px',fontSize:'20px'}}>Email Address</label>
      <input  type="text" className="input" onChange={(e)=>setregister({...register, email:e.target.value})} />
    </div>
    <div className="group">
     <label  className="label" style={{padding:'20px',fontSize:'20px'}}>Password</label>
     <input  type="password" className="input" data-type="password" onChange={(e)=>setregister({...register, password:e.target.value})} />
    </div>
    <div className="group">
     <Button className="button" onClick={() => {
      dispatch(userRegister(register));
      setTimeout(()=>{navigate("/profile")},1000);
      setTimeout(() => { window.location.reload()}, 1000);
      }}
      style={{padding:'20px',fontSize:'13px'}} > Register Now </Button>
    </div>
   <div className="hr" />
   <div className="foot-lnk"> <Link to='/login'> <label >Already Member? </label> </Link></div>
 </div>
 </div>
 </div>
  )
}

export default Register