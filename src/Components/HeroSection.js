import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/video/video-1.mp4" autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>Travel with us today</p>
        <div className='hero-btns'>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER<i className='far fa-play-circle'/></Button>
        </div>
    </div>
  )
}

export default HeroSection