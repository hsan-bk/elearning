import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getall_tags } from '../../../../../../redux/Slices/tagSlice';
import { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { getall_reviews } from '../../../../../../redux/Slices/reviewSlice';
import { BiArrowBack } from "react-icons/bi";
import { editcourse } from '../../../../../../redux/Slices/courseSlice';
import ClassRoom from './ClassRoom';

function MyCourseDetails({course, onBackButtonClick, user, ping, setping}) {
    const dispatch = useDispatch()
    const [showClassRoom, setShowClassRoom] = React.useState(false);
    useEffect(() => {
        dispatch(getall_tags());
        dispatch(getall_reviews());
    }, [dispatch, ping])

      //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  const mytag = tags.find(tag => tag._id === course.tag);
  

// Call all reviews
const reviews = useSelector((state) => state.review?.reviewlist);

if (!reviews) {
  return null; // or any loading indicator/error message as needed
}

const filteredReviews = reviews.filter(review => course.review.includes(review._id));

//remouve course from my course
const handleRemoveFromMyCourses = () => {
  const updatedAudience = course.audience.filter((userId) => userId !== user._id);
  const updatedNumStudents = course.numStudents - 1;
  const editedCourse = { audience: updatedAudience, numStudents: updatedNumStudents };
  console.log(editedCourse)

  dispatch(editcourse({id: course._id, edited: editedCourse}));
  setping(!ping);
  onBackButtonClick()

};

const handleStartCourse = () => {
  setShowClassRoom(true);
};

const handleBackCourse = () => {
  setShowClassRoom(false);
}; 

if (showClassRoom) {
  return <ClassRoom handleBackCourse={handleBackCourse} course={course} ping={ping} setping={setping} user={user}/>;
}



  return (
    <div>
    <div className='header_course' 
    style={{ backgroundImage: `url(${mytag.tag_image})` , backgroundSize:'cover'}}
    >
        <div>
        <span className='back' onClick={onBackButtonClick}><BiArrowBack/>Back to Course List</span>
        </div>
        <div>
            <h1 className='title'>{course.name}</h1>
            <h5 className='teacher'>{course.instructor}</h5>
        </div>
    </div>

    <div style={{display:"flex", justifyContent:'space-around'}}>
    <div>
    <div className='details'> <h3>Overview : </h3> <p>{course.shortdescription} </p> </div>
    <div className='details'> <h3>Description : </h3> <p>{course.description} </p> </div>
    </div >
    <div className='details course_img'><img src={course.image} alt="" style={{widh:'200px', height:'200px'}}/>
    <Button variant="warning" onClick={handleStartCourse}>Start your course Now !</Button><br/>
    <Button variant="danger" onClick={handleRemoveFromMyCourses} >Remouve from my courses !</Button></div>
    
    </div>

    <div className='details'> <h3>Course Objectives :  </h3> <p>{course.goals} </p> </div>
    <div className='details'> <h3>Course Requirements : </h3> <p>{course.requires} </p> </div>

    <div className='details'>
    {filteredReviews.map(review => (
      <div className="comment-box" key={review._id}>
        <img className="avatar" src={review.user_avatar} alt="User Avatar" />
        <div className="user-details">
          <h3 className="user-name">{review.user_name}</h3>
          <div className="rating">
            {[...Array(review.rate)].map((_, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
          </div>
          <p className="comment">{review.comment}</p>
        </div>
      </div>
    ))}
  </div>

    </div>
  )
}

export default MyCourseDetails