import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteuser } from '../../../../redux/Slices/userSlice';

function ListTeachersAdmin({ allusers, ping, setping }) {

  const dispatch=useDispatch()

        if (!allusers) {
            return null; // or any loading indicator/error message as needed
          }
        
      return (
        <div className='course-list'>
        {allusers
          .filter((user) => user.role === "instructor")
          .map((user) => (
            <div
              className='course-item'
              key={user.id}
            >
              <div className='coursesToBuy'>
                <div className='coursesPhoto'>
                  <img alt='course' src={user.avatar} className='coursesPhoto1' style={{borderRadius:'10px'}} />
                </div>
                <div className='coursesInformation'>
                  <b className='courseTitle'>{user.name}</b>
                  <br />
                  <b className='courseOwner'>{user.email}</b>
               
                </div>
                <div className='coursesPrice'>
                  <span className='nouveauPrice' style={{color:'red'}} onClick={(id)=>{dispatch( deleteuser(id = user._id));setping(!ping)}}> delete </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      )
    
}

export default ListTeachersAdmin