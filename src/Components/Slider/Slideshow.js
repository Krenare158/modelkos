import React, { useState, useRef } from 'react'; 
import './Slideshow.scss';
import { slideImages, locations } from './data';
import { BsEye, BsArrowRight } from 'react-icons/bs';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideshowWithLocationList = () => {
  const slideRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handlePrev = () => {
    if (slideRef.current) slideRef.current.goBack();
  };

  const handleNext = () => {
    if (slideRef.current) slideRef.current.goNext();
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="slideshow-with-location-list">
      <h1 className='header-models'>MODELS</h1>
      <div className="location-list-container">
        <ul className="location-list">
          {locations.map((location, index) => (
            <li
              key={index}
              className={`location-item ${selectedLocation === location ? 'active' : ''}`}
              onClick={() => handleLocationClick(location)}
            >
              {location}
            </li>
          ))}
        </ul>
        <button className="view-all-btn">
          View All <BsArrowRight className='arrow-right'/>
        </button>
      </div>
      <div className="slideshow-container">
        <Slide
          ref={slideRef}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={false}
          arrows={false}
        >
          {slideImages.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.src} alt={`Slide ${index}`} />
              <button className="view-details-bt">View Details</button>
              <div className="slide-details">
                <div className="details-left">
                  <h3 className='left-head'>{img.name}</h3>
                  <div className="location-left">
                    {img.location.map((loc, locIndex) => (
                      <span key={locIndex}>
                        {loc.icon} {loc.place}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="details-right">
                  <p>{img.time}</p>
                  <p><BsEye /> {img.watches}</p>
                </div>
              </div>
            </div>
          ))}
        </Slide>
        <button className="nav-bon prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="nav-bon next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SlideshowWithLocationList;
