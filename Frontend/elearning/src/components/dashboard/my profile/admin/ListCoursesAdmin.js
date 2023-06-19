import React from 'react'
import { useDispatch } from 'react-redux';
import { deletecourse } from '../../../../redux/Slices/courseSlice';

function ListCoursesAdmin({ courses, ping, setping }) {
  const dispatch=useDispatch()
  return (
    <div className='course-list'>
    {courses
      .map((course) => (
        <div
          className='course-item'
          key={course.id}
        >
          <div className='coursesToBuy'>
            <div className='coursesPhoto'>
              <img alt='course' src={course.image} className='coursesPhoto1' style={{borderRadius:'10px'}}/>
            </div>
            <div className='coursesInformation'>
              <b className='courseTitle'>{course.name}</b>
              <br />
              <b className='courseOwner'>{course.instructor}</b>
            </div>
            <div className='coursesPrice'>
            <span className='nouveauPrice' style={{color:'red'}} onClick={(id)=>{dispatch( deletecourse(id = course._id));setping(!ping)}}> delete </span>
            </div>
          </div>
        </div>
      ))}
  </div>
  )
}

export default ListCoursesAdmin