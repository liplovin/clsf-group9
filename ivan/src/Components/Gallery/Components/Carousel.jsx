import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';  

export const Carousel = ({data}) => {
  const [currentSlide, setSlide] = useState(0);
  
  const nextSlide = () => {
    setSlide(currentSlide  === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {data.map((slide, idx) => {
        return <img 
        src={slide.src} 
        alt={slide.alt} 
        key={idx} 
        className={currentSlide === idx ? "slide" : "slide slide-hidden"} 
        />;
      })}
      <BsArrowRightCircleFill className="arrow arrow-right"  onClick={nextSlide}/>
      <span className='indicators'>
        {data.map((_, idx) => {
          return <button 
          key={idx} 
          onClick={() => setSlide(idx)} 
          className={currentSlide === idx ? "indicator" : "indicator indicator-inactive"}>
            </button>;
        })}
      </span>
    </div>
  );
};
