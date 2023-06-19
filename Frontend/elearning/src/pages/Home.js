import React from 'react'
import welcome from '../assets/welcome.png'
import './Home.css'
import { Tilt } from 'react-tilt'
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import search from '../assets/search.svg';
import search2 from '../assets/search2.svg'
import stat1 from '../assets/homework.png';
import stat2 from '../assets/expert.png';
import stat3 from '../assets/certified.png';
import stat4 from '../assets/graduated.png';
import lesson from '../assets/lesson.png';

import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';


function Home({allusers}) {

  //call all courses
  const courses = useSelector((state) => state.course?.courselist);
  console.log(courses)

  //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  console.log(tags)

  return (
    
<>{/* welcome-section */}
<div className='welcome-section'> 
  <div className='welcome'> 
    <div >
      <div className='welcome_text'>
      <h5 style={{color:'#685F78',fontSize:'20px',marginBottom:'25px',fontWeight:'500'}}> The Leader in Online Learning </h5>
      <h1 style={{color:'#002058',fontWeight:'700',fontSize:'48px' ,maxWidth:'500px',lineHeight:'1.2',marginBottom:'40px'}}> Engaging & Accessible Online Courses For All </h1>
      <br/>
      </div>
      <div className="search">
      <img src={search} alt='' style={{height:'30px',width:'30px',marginLeft:'20px'}}></img>
              <input style={{border:'none'}} type="text" placeholder="Search your online course here" />
              <img src={search2} alt='' style={{height:'30px',width:'30px',marginRight:'20px'}}></img>

      </div>
      
    </div>
    <div className='welcome_img'> 
    <Tilt ><img src={welcome} alt='' style={{ height: 500, width: 400 }}/> </Tilt> 
    </div>
  </div>
 
</div>
 <div className='stat'>
<div className='stat-Box'>
  <img src={stat1} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}> <CountUp  end={500} duration={5}/>+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Online Courses</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat2} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={700} duration={5}/>+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Expert Tutors</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat3} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={300} duration={5}/>+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Certified Courses</h5>
  </div>
</div>
<div className='stat-Box'>
  <img src={stat4} alt='' style={{height: 90, width: 90 , objectFit: "cover", borderRadius: "50%"}}/>
  <div>
    <h1 style={{fontSize:'28px',fontWeight:'600'}}><CountUp  end={1000} duration={5}/>+</h1>
    <h5 style={{color:'#685F78',fontWeight:'400',fontSize:'16px'}}>Online Students</h5>
  </div>
</div>
    </div>
    <div>
      <h5 style={{letterSpacing:'0.9px',color:'#FF6575',fontSize:'18px',fontWeight:'700',paddingLeft:'80px'}}>Favourite Course</h5>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingLeft:'80px',paddingTop:'20px'}}>Top Category</h2>
    <Link to='/all_tags'><Button className='btnn' style={{marginRight:'40px'}}>All Categories</Button></Link>
  </div>

  {/*  map categories here  */}
  <div className='best-cat'>
  {tags? tags.map((tag) => (
                    <Link to={`/tag/${tag._id}`} style={{textDecoration:'none'}}>
                      <div className='cat-box' >
                        <img src={tag.tag_icon} alt='' style={{width:'120px',height:'120px', borderRadius:'50%'}}/>
                        <h4 >{tag.tag_name}</h4>
                        <p style={{color:'#685F78'}}>{tag.course_number} Courses</p>
                      </div>
                      </Link>
            )): null}
</div>
</div>
    <div className='best-courses'>
    <h5 style={{letterSpacing:'0.9px',color:'#FF6575',fontSize:'18px',fontWeight:'700',paddingLeft:'80px'}}>What's New !</h5>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingLeft:'80px',paddingTop:'20px'}}>Featured Courses</h2>
  <Link to='/all_courses'><Button className='btnn'>All Courses</Button></Link>
  </div>
{/* map courses here */}
    <div className='course-conatainer' style={{display:'flex', justifyContent:'space-around'}}>
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

<h2 style={{color:'#002058',fontSize:'36px',fontWeight:'700',letterSpacing:'0.9px',paddingTop:'50px',textAlign:'center'}}>Featured Instructor</h2>
  
    </div>
    {/* related feature here */}
    <div className='best-cat' style={{marginTop:'-500px'}}>
    
    {allusers? allusers
          .filter((teacher) => teacher.role === "instructor")
          .map((teacher) => (
                   <div >
                   <div className='inst-box'>
                     <img src={teacher.avatar} alt=''/>
                     <h4>{teacher.name}</h4>
               <p style={{color:'#685F78'}}>1 Courses</p>
                   </div>
                   </div>
                  
          )): null}

</div>
<hr></hr>
</>  )
}

export default Home