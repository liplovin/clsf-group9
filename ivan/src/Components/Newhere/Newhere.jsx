import React from 'react';
import './Newhere.css';
import noteIcon from '../../assets/note.png';

const Newhere = () => {
  return (
    <div className='newhere'>
      <div className="newhere-left">
        <h3>What to Expect?</h3>
        <p>No matter what you look like, what you are about, or what you believe about God, you will feel welcome at CLSF</p>
        <h2>Know More About Jesus?"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." - John 3:16</h2>
        <div className="newhere-box">
          <li>The service to start at 9:30 AM on Sundays</li>
          <li>A greeting team that will welcome you and help you find a seat</li>
          <li>A copy of the CLSF's weekly newsletter, Eagle Christian</li>
          <li> A big group of people fellowshipping together as one family</li>
          <li>A message based on Scripture that is relevant to your life</li>
          <li>A contemporary worship band that will lead the congregation into worshipping God</li>
          <li>A separate Sunday School for children</li>
          <li>Casual to semi-formal attire: jeans, shorts, t-shirts, etc.</li>
          <li>Friendly people</li>
        </div>
      </div>
      <div className="newhere-right">
        <img src={noteIcon} alt="" className='newhereimage' />
      </div>
    </div>
  );
};

export default Newhere;