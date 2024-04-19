import React from 'react'
import './AboutUs.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      <div className="AboutUs-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />


      </div>
      
      <div className="AboutUs-right">
        <h3>
          "You also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ."
          1 Peter 2:5 (NIV)
        </h3>
        <h2>
        ABOUT CLSF 
        </h2>
        <p>
        From its humble beginnings as a campus ministry in the 70’s, otherwise known as the Jesus People Movement, Christ, the Living Stone Fellowship blossomed into a global prophetic ministry with more than 500 churches in the Philippines and worldwide.</p>
        <p>
        Prophesied twice by leading prophets as a Philadelphia church, CLSF seeks to remain faithful to the calling, the character, grace and anointing of the Philadelphia church as written in Rev. 3:7-13. As a prophetic church, CLSF will continue to proclaim the Gospel of the Kingdom (Matt. 24:14), plant more churches all over the Philippines and many parts of the world pursuant to the Great Commission (Matt. 28:18-20) and raise up the Bride of Christ (Rev. 19:7) in these Last Days.
        </p>
      </div>
      </div>
      )
}

      export default AboutUs