import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getall_tags } from '../../redux/Slices/tagSlice';
import { getall_reviews } from '../../redux/Slices/reviewSlice';
import { BiArrowBack } from "react-icons/bi";
import Button from 'react-bootstrap/Button';

function CourseDetails() {
  const { id } = useParams(); // useParams is a function, so it should be invoked with parentheses

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getall_tags());
    dispatch(getall_reviews());
  }, [dispatch]);

  const courses = useSelector((state) => state.course?.courselist);
  const course = courses.find((el) => el._id === id); // Use the correct comparison operator '===' instead of '='

  const tags = useSelector((state) => state.tag?.taglist);
  const mytag = tags.find((tag) => tag._id === course.tag);

  const reviews = useSelector((state) => state.review?.reviewlist);

  if (!reviews) {
    return null; // or any loading indicator/error message as needed
  }

  const filteredReviews = reviews.filter((review) => course.review.includes(review._id));

  return (
    <div>
      <div
        className='header_course'
        style={{ backgroundImage: `url(${mytag?.tag_image})`, backgroundSize: 'cover', backgroundPosition:'center' }}
      >
        <div>
          <Link to='/' className='back'><BiArrowBack />Back to Home page</Link>
        </div>
        <div>
          <h1 className='title'>{course?.name}</h1>
          <h5 className='teacher'>{course?.instructor}</h5>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: 'space-around' }}>
        <div>
          <div className='details'> <h3>Overview :</h3> <p>{course?.shortdescription}</p> </div>
          <div className='details'> <h3>Description :</h3> <p>{course?.description}</p> </div>
        </div>
        <div className='details course_img'><img src={course?.image} alt="" style={{ width: '450px', height: '350px' }} />
          <Button variant="success" href="/login">Join us now to get the course!</Button>
        </div>
      </div>

      <div className='details'> <h3>Course Objectives:</h3> <p>{course?.goals}</p> </div>
      <div className='details'> <h3>Course Requirements:</h3> <p>{course?.requires}</p> </div>

      <div className='details'>
        {filteredReviews.map((review) => (
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
  );
}

export default CourseDetails;
