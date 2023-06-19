import React from 'react'
import { useEffect} from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { getall_lessons } from '../../../../../../redux/Slices/lessonSlice';
import YouTube from 'react-youtube';

function ClassRoom({handleBackCourse, course, user, ping, setping}) {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getall_lessons());
        
    }, [dispatch, ping])

    // Call all lessons
const lessons = useSelector((state) => state.lesson?.lessonlist);

if (!lessons) {
  return null; // or any loading indicator/error message as needed
}

const filteredLessons = lessons.filter(lesson => course.content.includes(lesson._id));
const mylesson = filteredLessons[0];

function isYouTubeURL(url) {
    // Regular expression to check for YouTube URLs
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  }
  
  function getYouTubeVideoId(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[3]) {
      return match[3];
    }
    return null;
  }
  
console.log(mylesson)
  return (
<div>
    <div className='header_classroom'>
        <div>
        <span className='back' onClick={handleBackCourse}><BiArrowBack/>Back to Course List</span>
        </div>
        <div>
            <h1 className='title'>{course.name}</h1>
            <h5 className='teacher'>{course.instructor}</h5>
        </div>
    </div>
    <div><h5>In our course we have {mylesson.lessons_number} lesson(s)</h5></div>
    <div >
    { mylesson.lesson.map(lesson => (
        <div className='lesson_content'>
  <h3 className='lesson_name'>Lesson name: {lesson.lesson_name}</h3>
  <div className='lesson_description'>
    <h5>Description:</h5>
    {lesson.lesson_description}
  </div>
  <div className='lesson_video'>
    {isYouTubeURL(lesson.lesson_video) ? (
      <YouTube videoId={getYouTubeVideoId(lesson.lesson_video)} />
    ) : (
      <video controls>
        <source src={lesson.lesson_video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    )}
  </div>
  <p className='lesson_pdf'>
  you can find the lesson resume here: <a href={lesson.lesson_pdf}>lien</a>
</p>
</div>

    ))}
    </div>
</div>
  )
}

export default ClassRoom