import React from 'react'
import './Contact.css'
import { Tilt } from 'react-tilt'
import contact from '../assets/contact.png'

function Contact() {
  return (
    <div className='contact_container'>
      <div className='img_contact'><Tilt ><img src={contact} alt='' style={{ height: 600, width: 500 }}/> </Tilt></div>

      <div className="contact-page">
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button className='contact_btn' type="submit">Submit</button>
      </form>
    </div>
    </div>
    

  )
}

export default Contact