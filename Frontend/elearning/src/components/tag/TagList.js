import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

function TagList() {
      //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  console.log(tags)
  return (
    <div>
        <div className='header'> 
        
        </div>
        
        <div> 
            <div className='tag_card'>
  {tags?.map((el)=>
     <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>{el.tag_name}</Card.Title>
          <img src={el.tag_icon} alt='' style={{ height: 100, width: 150 }}/>
          <Card.Text>
            {el.course_number} course(s)
          </Card.Text>
        </Card.Body>
      </Card>
    )}
            </div>
        </div>
    </div>
  )
}

export default TagList