import React from 'react'
import './BG.css'
import arrowdown from '../../assets/arrow-down.png'

const BG = () => {
  return (
    <div className='bg container'>
     <div className="bg-text">
      <h1>Welcome to Christ, the Living Stone, Fellowship</h1>
      <p>Christ, the Living Stone, Fellowship (CLSF) is a Christ-centered church, encouraging one another as one family, transforming individuals, communities and nations through the proclamation of the Gospel of the Kingdom of God.</p>
     <button className='btn'>Explore More <img src={arrowdown} alt="" /></button>
     </div>
    </div>
  )
}

export default BG