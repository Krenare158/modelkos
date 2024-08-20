import React from 'react';
import './About.scss';
import { about } from './aboutdata';

const About = () => {
  const [textData, imageData] = about; 

  return (
    <section className="about">
      <div className="text-content">
        <h2>{textData.head}</h2>
        <p>{textData.para}</p>
      </div>

      <div className="images">
        {imageData.images.map((image, index) => (
          <div
             key={index}
            className={`image-con ${image.position} ${image.rotate ? 'rotate' : ''}`}
          >
            <img src={image.src} alt={image.alt} className="menu-image" />
            <div className="image-info">
                <h3>{image.name}</h3>
                <div className="details-row">
                    {image.Details.map((detail, i) => (
                        <p key={i}>{detail.description}</p>
                    ))}
                </div>
                <p className="date">{image.date}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
