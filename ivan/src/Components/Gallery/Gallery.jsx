import './Gallery.css';
import { Carousel } from './Components/Carousel';
import {slides} from "./Components";

function Gallery()  {
  return (
  <div className='Gallery'>
    <Carousel data={slides} />
  </div>
  );
};

export default Gallery;
