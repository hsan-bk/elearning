import React from 'react'
import welcome from '../assets/welcome.png'
import './Home.css'
import { Tilt } from 'react-tilt'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function Home() {

  //call all courses
  const courses = useSelector((state) => state.course?.courselist);
  console.log(courses)

  //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  console.log(tags)

  return (
    
<div className='home'>
{/* welcome-section */}
<div className='welcome-section'> 
  <div className='welcome'> 
    <div >
      <div className='welcome_text'>
      <h4> The Leader in Online Learning </h4> <br/>
      <h1> Engaging & Accessible </h1> <br/>
      <h1> Online Courses For All </h1> <br/>
      <br/>
      </div>
      <div className="search">
              <input type="text" placeholder="Search your online course here" />
      </div>
      
    </div>
    <div className='welcome_img'> 
    <Tilt ><img src={welcome} alt='' style={{ height: 500, width: 400 }}/> </Tilt> 
    </div>
  </div>
  <div className='stat'>
    <Card style={{ width: '12rem',height:'5rem', }}>
      <Card.Body>
        <Card.Title>10K</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Online Courses</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem',height:'5rem', }}>
      <Card.Body>
        <Card.Title>5K+</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Ceritified Courses</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem', height:'5rem', }}>
      <Card.Body>
        <Card.Title>55K+</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Online Students</Card.Subtitle>
      </Card.Body>
    </Card>
    </div>
</div>
<hr/>


<div className='tags'>
<div className='tag_title'> <h2> categories</h2>
<Link to='/all_tags'><button className='button' > Show more</button></Link>
</div>
<div className='tag_card'>
  {tags?.map((el)=>
     <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header><img src={el.tag_icon} alt='' style={{ height: 100, width: 150 }}/></Card.Header>
        <Card.Body>
          <Card.Title>{el.tag_name}</Card.Title>
          
          <Card.Text>
            {el.course_number} course(s)
          </Card.Text>
          <Link to={`/tag/${el._id}`} ><span>show details</span></Link>
        </Card.Body>
      </Card>
    )}
 </div>
 </div>
 <hr/>
  <div className='courses'>
  <div className='course_title'> <h2> courses</h2>
  <Link to='/all_courses'><button className='button'> Show more</button></Link></div>
  <div className='course_card'>
     {courses?.map((el)=>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{el.name}</Card.Header>
        <Card.Body>
          <Card.Title>{el.shortdescription}</Card.Title>
          <img src={el.image} alt='' style={{ height: 100, width: 150 }}/>
          <Card.Text>
           
          </Card.Text>
          <Link to={`/course/${el._id}`} ><span>show details</span></Link>
        </Card.Body>
      </Card>
      )}
 </div>
  </div>
</div>
  )
}

export default Home