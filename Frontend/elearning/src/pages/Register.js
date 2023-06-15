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
          <Modal.Title>Choose an Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Which option would you like to choose?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e)=>{handleOption1();setregister({...register, role:e.target.value='student'})} } >
            Student
          </Button>
          <Button variant="secondary" onClick={(e)=>{handleOption2();setregister({...register, role:e.target.value='instructor'})} }>
            Instructor
          </Button>
        </Modal.Footer>
      </Modal>
    
    <div className='register_container'>

      <div className='register_img'> <Tilt ><img src={image} alt='register' style={{width:'700px', height:'630px', borderRadius:'10%', marginLeft:'30px'}}/></Tilt></div>

    <div className="register_detail" onSubmit={(e)=>e.preventDefault()}>
    <div className="group">
      <label className="label">Name</label>
      <input type="text" className="input" onChange={(e)=>setregister({...register, name:e.target.value})} />
    </div>
    <div className="group">
      <label  className="label">Email Address</label>
      <input  type="text" className="input" onChange={(e)=>setregister({...register, email:e.target.value})} />
    </div>
    <div className="group">
     <label  className="label">Password</label>
     <input  type="password" className="input" data-type="password" onChange={(e)=>setregister({...register, password:e.target.value})} />
    </div>
    <div className="group">
     <Button className="btn" onClick={() => {
      dispatch(userRegister(register));
      setTimeout(()=>{navigate("/profile")},1000);
      setTimeout(() => { window.location.reload()}, 1000);
      }} > Register Now </Button>
    </div>
   <div className="hr" />
   <div className="foot-lnk"> <Link to='/login'> <label >Already Member? </label> </Link></div>
 </div>
 </div>
 </div>
  )
}

export default Register