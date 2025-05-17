import React from 'react'
import './Programs.css'
import prog1 from'../../assets/prog.jpg'
import prog2 from'../../assets/prog33.jpg'
import prog3 from'../../assets/prog2.jpg'
import prog_icon from'../../assets/degree.png'

const Programs = () => {
  return (
    <div className='programs'>
<div className='program'>
    <img src={prog1} />
    <div className="caption">
    <img src={prog_icon} />
    <p>Gradution Degree</p>
    </div>

</div>
<div className='program'>
<img src={prog2} />
<div className="caption">
    <img src={prog_icon} />
    <p>Masters Degree</p>
    </div>
</div>
<div className='program'>
<img src={prog3} />
<div className="caption">
    <img src={prog_icon} />
    <p> Post Gradution Degree</p>
    </div>
</div>
    </div>
  )
}

export default Programs