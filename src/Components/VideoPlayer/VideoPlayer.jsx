import React from 'react'
import video from '../../assets/video.mp4'

const VideoPlayer = () => {
  return (
    <div className='video-player'>
        <video src={video} autoPlay controls ></video>
        </div>
  )
}

export default VideoPlayer;