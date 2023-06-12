import React from 'react'
import about_img from '../assets/about.png'
import './About.css'
import { Tilt } from 'react-tilt'

function About() {
  return (
    <div className='about_container'>
      <div className='about_us'>
        <div className='about_text'>
          <h3>About Our Company</h3>
          <h2>Master the skills to drive your career</h2>
          <p>paragraphe1</p>
          <p>paragraphe2</p>
        </div>
        <div >
          <Tilt > <img className='about_img' src={about_img} alt='about_img'/></Tilt>
        </div>
      </div>

    </div>
  )
}

export default About