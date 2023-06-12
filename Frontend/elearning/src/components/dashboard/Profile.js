import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/Slices/userSlice';
import DashboardStudent from './DashboardStudent';
import DashboardAdmin from './DashboardAdmin';
import DashboardInstrutor from './DashboardInstrutor';
import './Profile.css'

function Profile() {
    const user= useSelector((state)=> state.user.user);
    console.log(user)
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const renderDashboard = () => {
        if (user) {
          if (user.role === 'student') {
            return <DashboardStudent student={user}/>;
          } else if (user.role === 'admin') {
            return <DashboardAdmin admin={user}/>;
          } else if (user.role === 'instructor') {
            return <DashboardInstrutor instructor={user}/>;
          }
        }
        return null;
      };

  return (
    <div>
        <div className='welcome_user'>
        <h1>Pro Academy</h1>
        <h1>Welcome again {user?user.name:<h1>...Loading</h1>}</h1>
        <button className="btn_logout" onClick={()=>{dispatch(logout());navigate("/login")}}>logout</button>
        </div>
        <div>
        {renderDashboard()}
        </div>
    </div>
  )
}

export default Profile