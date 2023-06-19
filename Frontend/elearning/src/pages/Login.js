import React, { useState } from 'react'
import {  userLogin } from '../redux/Slices/userSlice';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import image from '../assets/login.jpg'
import './Login.css'
import { Tilt } from 'react-tilt'

function Login() {
  const [login, setlogin] = useState({
    email:"",
    password:""
});


const dispatch = useDispatch();
const navigate=useNavigate();
  return (
    <div>
    
    <div className='login_container'>

      <div className='login_img'> <Tilt ><img src={image} alt='login' style={{width:'700px', height:'630px', borderRadius:'30%', marginLeft:'30px'}}/></Tilt></div>

    <div className="login_detail" onSubmit={(e)=>e.preventDefault()} 
    style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', margin:'30px', padding:'1ox', alignItems:'center'}}>
    <div className="group" style={{padding:'20px',fontSize:'20px'}} >
      <label  className="label">Email Address: </label>
      <input  type="text" className="input" onChange={(e)=>setlogin({...login, email:e.target.value})} />
    </div>
    <div className="group" style={{padding:'20px',fontSize:'20px'}}>
     <label  className="label">Password: </label>
     <input  type="password" className="input" data-type="password" onChange={(e)=>setlogin({...login, password:e.target.value})} />
    </div>
    <div className="group" >
     <Button className="button" onClick={() => {
      dispatch(userLogin(login));
      setTimeout(()=>{navigate("/profile")},1000);
      setTimeout(() => { window.location.reload()}, 1000);
      }} > Login Now </Button>
    </div>
   <div className="hr" />
   <div className="foot-lnk"> <Link to='/register'> <label >Don't Have Account? </label> </Link></div>
 </div>
 </div>
 </div>
  )
}

export default Login