import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Reactjs and Vite</h2>
            <p>That's it! You've set up a React project with Vite and created your first component. Vite's fast development server and optimized build process make it an excellent choice for modern web development. If you have any more questions or need further assistance, feel free to ask!</p>
            <p>That's it! You've set up a React project with Vite and created your first component. Vite's fast development server and optimized build process make it an excellent choice for modern web development. If you have any more questions or need further assistance, feel free to ask!</p>
           <p>That's it! You've set up a React project with Vite and created your first component. Vite's fast development server and optimized build process make it an excellent choice for modern web development. If you have any more questions or need further assistance, feel free to ask!</p>
            </div>
    </div>
  )
}

export default About