import React, { useState } from 'react';
import EditCourseInstructor from './EditCourseInstructor';


function MyCoursesInstructor({user, ping, setping, courses}) {
    
  const [selectedCourse, setSelectedCourse] = useState(null);
      
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBackButtonClick = () => {
      setSelectedCourse(null);
    };

return (
<div>
{selectedCourse ? (
  <EditCourseInstructor course={selectedCourse} onBackButtonClick={handleBackButtonClick} user={user} ping={ping} setping={setping}/>
) : (
  <div className='course-list'>
    {courses
      .filter((course) => course.instructor.includes(user.name))
      .map((course) => (
        <div
          className='course-item'
          key={course.id}
          onClick={() => handleCourseClick(course)}
        >
          <div className='coursesToBuy'>
            <div className='coursesPhoto'>
              <img alt='course' src={course.image} className='coursesPhoto1' />
            </div>
            <div className='coursesInformation'>
              <b className='courseTitle'>{course.name}</b>
              <br />
              <b className='courseOwner'>{course.instructor}</b>
              <div className='ratingCourse'>
                <b>course rate: {course.rating}</b>
              </div>
            </div>
            <div className='coursesPrice'>
              <b className='nouveauPrice'>${course.price}</b>
              <b className='ancienPrice'>$94.99</b>
            </div>
          </div>
        </div>
      ))}
  </div>
)}
</div>
)
}

export default MyCoursesInstructor