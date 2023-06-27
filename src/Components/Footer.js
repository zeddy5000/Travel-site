import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the adventure today to receive our best deals
          </p>
          <p>You can unsubcribe at anytime</p>
          <div className='input-areas'>
            <form >
              <input type='email' name='email' placeholder='Your email' className='footer-input'></input>
              <Button buttonStyle='btn--outline'/>
            </form>
          </div>
      </section>
        <div className='footer-links'>
          <div className='footer-links-wrapper'>
            <div className='footer-links-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/sign-up'>Testimonials</Link>
              <Link to='/sign-up'>Investors</Link>
              <Link to='/sign-up'>Terms of Service</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer