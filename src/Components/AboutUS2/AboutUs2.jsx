import React from 'react';
import './AboutUs2.css';
import visionIcon from '../../assets/vision.png';
import missionIcon from '../../assets/mission.png';
import coreValueIcon from '../../assets/core-value.png';

const AboutUs2 = () => {
  return (
    <div className='aboutus2'>
      <div className="aboutus-box">
        <h1>
          Our Vision
        </h1>
        <p>
          We are a Christ-centered, Spirit-filled, missions-oriented church, where every member is a minister, transforming individuals, communities, and nations through the Gospel of the Kingdom of God
        </p>
        <div className='caption'>
          <img src={visionIcon} alt=""/>
        </div>
      </div>

      <div className="aboutus-box">
        <h1>
          Our Mission
        </h1>
        <p>
          To bring Individuals, communities and nations to the saving knowledge of the Lord Jesus Christ through gospel proclamation, bringing the believers to intimacy with God through a lifestyle of worship and prayer and equipping them for ministry work through effective and dynamic discipleship and leadership training.
        </p>
        <div className='caption'>
          <img src={missionIcon} alt=""/>
        </div>
      </div>

      <div className="aboutus-box">
        <h2>
          Core Values
        </h2>
        <p>
          Christ-Likeness (Romans 8:29)
        </p>
        <p>
          Love for God (Matthew 22:37)
        </p>
        <p>
          Servant-Leadership (Matthew 20:28)
        </p>
        <p>
          Faithfulness to the Gospel
        </p>
        <p>
          Intercession and Prayer (Matthew 21:13)
        </p>
        <p>
          Nationalism (Romans 10:1)
        </p>
        <p>
          Covenant Leadership (1 John 3:16)
        </p>
        <div className='caption'>
          <img src={coreValueIcon} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
