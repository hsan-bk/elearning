import React from 'react'
import { BiArrowBack } from "react-icons/bi";

function EditCourseInstructor({course, onBackButtonClick, user, ping, setping}) {
  return (
    <div>EditCourseInstructor
              <div>
        <span className='back' onClick={onBackButtonClick}><BiArrowBack/>Back to Course List</span>
        </div>
    </div>
  )
}

export default EditCourseInstructor