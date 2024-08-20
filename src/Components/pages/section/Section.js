import React from 'react';
import '../section/Section.scss';
import { data } from './data';

const Section = () => {
 
  const [{ images }] = data;

  return (
    <div className="section">
      <div className="header">
        <h1 className="header-one">THE DAY OF</h1>
        <h1 className="header-two">MODELING </h1>
        <h1 className="header-three">MODELKOS</h1>
      </div>
      
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={`section-image-${index}`} />
        ))}
      </div>
      <div className="header1">
        <h1 className="header1-one">THE DAY OF</h1>
        <h1 className="header1-two">MODELING </h1>
      </div>
    </div>
  );
};

export default Section;
