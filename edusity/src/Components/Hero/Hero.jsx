import React from 'react'
import './Hero.css'
import rightarrow from '../../assets/right.png'

const Hero = () => {
  return (
    <div className='hero container'>
<div className='hero-text'>
    <h1>Welcome to edusity University</h1>
<p>
React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[5][6] that aims to make building user interfaces based on components more "seamless".[5] It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
<button className='btn'>Explore More<img src={rightarrow} /></button>
</div>
    </div>
  )
}

export default Hero