import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TagList() {
      //call all tags
  const tags = useSelector((state) => state.tag?.taglist);
  console.log(tags)
  return (
    <div >
      <div style={{ backgroundColor:'pink', marginBottom:'70px'}}>
        <div style={{  justifyContent:'flex-start', alignItems:'flex-start', textDecoration:'none'}}> <Link to='/'><p> Go home </p></Link></div>
      <div style={{height:'300px', backgroundColor:'pink', display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}> 
              <h1>All Categories</h1>
        </div>
      </div>
        
        
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
  )
}

export default TagList