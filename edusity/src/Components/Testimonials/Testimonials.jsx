import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/rightarr.png'
import back_icon from '../../assets/leftarr.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'


const Testimonials = () => {

    const slider =useRef();
      let tx =0; // 

    const slideForward =()=>{
      if(tx > -50){
    tx -=25;
      }
slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward=()=>{
        if(tx < 0){
            tx +=25;
              }
        slider.current.style.transform =`translateX(${tx}%)`;
            
    }

  return (
    <div className='testimonials'>
<img src={back_icon} className='back-btn' onClick={slideBackward} />
<img src={next_icon} className='next-btn' onClick={slideForward}/>
<div className='slider'>
    <ul ref={slider}>
        <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user1} />
                    <div >
                        <h3>UserName-1</h3>
                        <span>India, Hyd</span>
                    </div>
                    <div>
                        <p>
                        It is great that you are trying your best, but don’t stop here – keep pushing yourself to get even better results. It would be good to see you editing your work to remove the small errors creeping into your work….
                        </p>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user2} />
                    <div >
                        <h3>UserName-2</h3>
                        <span>India, Hyd</span>
                    </div>
                    <div>
                        <p>
                        It is great that you are trying your best, but don’t stop here – keep pushing yourself to get even better results. It would be good to see you editing your work to remove the small errors creeping into your work….
                        </p>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user3} />
                    <div >
                        <h3>UserName-3</h3>
                        <span>India, Hyd</span>
                    </div>
                    <div>
                        <p>
                        It is great that you are trying your best, but don’t stop here – keep pushing yourself to get even better results. It would be good to see you editing your work to remove the small errors creeping into your work….
                        </p>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div className='slide'>
                <div className='user-info'>
                    <img src={user4} />
                    <div >
                        <h3>UserName-4</h3>
                        <span>India, Hyd</span>
                    </div>
                    <div>
                        <p>
                        It is great that you are trying your best, but don’t stop here – keep pushing yourself to get even better results. It would be good to see you editing your work to remove the small errors creeping into your work….
                        </p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Testimonials