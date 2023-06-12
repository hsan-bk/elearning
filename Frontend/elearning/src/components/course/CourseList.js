import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function CourseList() {

      //call all courses
  const courses = useSelector((state) => state.course?.courselist);
  console.log(courses)

  return (
    <div>
        <div className='header'>

        </div>

        <div>
                 {courses?.map((el)=>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{el.name}</Card.Header>
        <Card.Body>
          <Card.Title>{el.shortdescription}</Card.Title>
          <img src={el.image} alt='' style={{ height: 100, width: 150 }}/>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
      )}
        </div>
    </div>
  )
}

export default CourseList