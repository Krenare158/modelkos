import React, {  useRef} from 'react'; 
import './section/WhatweOffer.scss';
import { whatWeOffer } from './data';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { BsArrowRight } from 'react-icons/bs';

const WhatWeOffer = () => {
  const slideRef = useRef(null);

  const handlePrev = () => {
    if (slideRef.current) slideRef.current.goBack();
  };

  const handleNext = () => {
    if (slideRef.current) slideRef.current.goNext();
  };

 

  return (
      <div className="slidescontainer-offer">
        <h1 className='header-offer'>WHAT WE OFFER</h1>
        <Slide
          ref={slideRef}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={false}
          arrows={false}
        >
          {whatWeOffer.map((item, index) => (
            <div className="slide-offer" key={index}>
              <div className="slide-content-offer">
                <div className="slide-icon-offer">
                  {item.icon}
                </div>
                <h2>{item.title}</h2>
                <p>{item.p}</p>
                <button className="view-offer-btn">{item.button} <BsArrowRight className='right'/></button>
              </div>
            </div>
          ))}
        </Slide>
        <button className="buto prev-bt" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="buto next-bt" onClick={handleNext}>
          &#10095;
        </button>
        <div className='button-con'>
        <button className='seeall'>See all</button>
        </div>
      </div>
  );
};

export default WhatWeOffer;
