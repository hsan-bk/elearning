import React from 'react'
import { useSelector } from 'react-redux';
import DashboardStudent from './DashboardStudent';
import DashboardAdmin from './DashboardAdmin';
import DashboardInstrutor from './DashboardInstrutor';
import './Profile.css'

function Profile({ ping, setping , allusers}) {
    const user= useSelector((state)=> state.user.user);
    console.log(user)

      //call all courses
  const courses = useSelector((state) => state.course?.courselist);

    const renderDashboard = () => {
        if (user) {
          if (user.role === 'student') {
            return <DashboardStudent student={user} ping={ping} setping={setping} courses={courses} />;
          } else if (user.role === 'admin') {
            return <DashboardAdmin admin={user} ping={ping} setping={setping} courses={courses} allusers={allusers}/>;
          } else if (user.role === 'instructor') {
            return <DashboardInstrutor instructor={user} ping={ping} setping={setping} courses={courses}/>;
          }
        }
        return null;
      };

  return (
    <div>
        <div>
        {renderDashboard()}
        </div>
    </div>
  )
}

export default Profile