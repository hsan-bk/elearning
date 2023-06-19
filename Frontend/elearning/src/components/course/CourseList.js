import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import lesson from '../../assets/lesson.png';

function CourseList() {

      //call all courses
      const courses = useSelector((state) => state.course?.courselist);
      return (
        <div >
          <div style={{ backgroundColor:'pink', marginBottom:'70px'}}>
            <div style={{  justifyContent:'flex-start', alignItems:'flex-start', textDecoration:'none'}}> <Link to='/'><p> Go home </p></Link></div>
          <div style={{height:'300px', backgroundColor:'pink', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}> 
                  <h1>All Courses</h1>
            </div>
          </div>
            
            
            <div className='best-cat'  style={{display:'flex', justifyContent:'space-around'}}>
      {courses? courses.map((course) => (
        <div className='course-box'>
        <div  style={{maxWidth:'330px',maxHeight:'350px',overflow:'hidden'}}>
          <img className='zoom' style={{maxWidth:'100%',maxHeight:'100%',borderRadius:'10px'}} src={course.image} alt=''/>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',gap:'5px',paddingRight:'170px'}}>
        
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h6 >{course.instructor}</h6>
            <p style={{color:'#685F78',fontSize:'12px'}}>Instructor</p>
          </div>
        </div>
        <h5 style={{paddingLeft:'30px'}} >{course.name}</h5>
        <div style={{display:'flex',gap:'100px'}}>
        <div style={{display:'flex'}}>  
        <img style={{width:'20px',height:'20px', marginRight:'10px'}} src={lesson} alt=''/>
        <p> 2 Lessons</p>
        </div>
        <div  style={{display:'flex'}}>  
        {[...Array(course.rating)].map((_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
        </div>
        </div>
        <Link to={`/course/${course._id}`}><button className='btn8' style={{width:'100px'}}>Details</button></Link>
        </div>
                )): null}
    </div>
        </div>
  )
}

export default CourseList