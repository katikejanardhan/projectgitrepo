import React from 'react'
import './Campus.css'
import gallery1 from'../../assets/gal1.jpg'
import gallery2 from'../../assets/gal2.jpg'
import gallery3 from'../../assets/gal3.jpg'
import gallery4 from'../../assets/gal4.jpg'
import arrow_icon from'../../assets/right.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery1} />
            <img src={gallery2} />
            <img src={gallery3} />
            <img src={gallery4} />
            </div>  
            <button className='btn dark-btn'>See More Here<img src={arrow_icon} /></button>
              </div>
  )
}

export default Campus