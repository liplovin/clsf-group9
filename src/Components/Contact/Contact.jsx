import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import locationicon from '../../assets/location.png'
import faxicon from '../../assets/fax.png'
import phoneicon from '../../assets/phone.png'
import emailicon from '../../assets/email.png'

const Contact = () => {
  return (
    <div className='contact'>
     <div className="contact-col">
        <h3>
        <img src={msgIcon} alt=""/>  Send us a message 
        </h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.
        </p>
        <ul>
            <li><img src={locationicon} alt=""/>
            453 Calbayog St., Highway Hills Mandaluyong City, Metro Manila 1550 Philippines
            </li>
            <li><img src={phoneicon} alt=""/>
            +63 (2) 533-5171 / 533-5179            
            </li>
            <li><img src={faxicon} alt=""/>
            +63 (2) 533-0017
            </li>
            <li><img src={emailicon} alt=""/>
            webmaster@clsfchurch.org            
            </li>
        </ul>


     </div>
     <div className="contact-col">
     </div>
    </div>
  )
}

export default Contact