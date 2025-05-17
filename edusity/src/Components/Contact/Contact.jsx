import React, { useState } from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg.png'
import mail_icon from'../../assets/mail.png'
import call_icon from'../../assets/call.png'
import homo_icon from'../../assets/home.png'
import rightarrow_icon from'../../assets/rightarr.png'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (e) =>{
    e.preventDefault();
    setResult("Sending.....");

    const formData = new FormData(e.target);
    formData.append("access_key", "c70a34fe-386d-46c9-8a2f-7e8fac3f845f");

    const res = await fetch("https://api.web3forms.com/submit",{
      method:"POST",
      body: formData })
      .then((res) => res.json());

      if(res.success){
        console.log("Success", res);
        setResult(res.message);
        e.target.reset();
      } else{
        console.log("Error",res);
        setResult(res.message);
      }
  }

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon} /></h3>
            <p>Any complaint on the services rendered by the Department and concerning behavior of employees of the Department of Posts may be taken up with the Postmaster / In-charge of the Post Office where the transaction has taken place or Senior Superintendent / Superintendent of Post Offices.</p>
            <ul>
                <li><img src={mail_icon}/>Contact@univeristy.in</li>
                <li> <img src={call_icon}/>+1 123-456-7890</li>
                <li><img src={homo_icon} /> 58/5 Housing board HYd,India</li>

            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Youe Name</label>
            <input type='text' name='name' placeholder='Enter your Name' 
            required  />
            <label>Phone Number</label>
            <input type='number' name='phone' placeholder='Enter your Mobile number'
            required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' 
            required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={rightarrow_icon}/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact