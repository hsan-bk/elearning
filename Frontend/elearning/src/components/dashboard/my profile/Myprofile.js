import React from 'react'
import '../Profile.css'

function Myprofile({user}) {
      // Convert the registration timestamp to a Date object
  const registrationDate = new Date(user.createdAt);

  // Format the date and time
  const formattedDate = registrationDate.toLocaleDateString();
  const formattedTime = registrationDate.toLocaleTimeString();
  return (
    <div className='profile_conatainer' style={{padding:'20px'}}>
    <div className="profile">
      <div className="info">
        <h2>Full Name:  </h2> <h3> {user.name}</h3>
        <h2>Email: </h2> <h3> {user.email}</h3>
      </div>
      <div className="avatar">
        <img src={user.avatar} alt="User Avatar" />
      </div>
      
    </div>
    <h4>Registration Date: {formattedDate}</h4>
    <h4>Registration Time: {formattedTime}</h4>
    </div>
  )
}

export default Myprofile