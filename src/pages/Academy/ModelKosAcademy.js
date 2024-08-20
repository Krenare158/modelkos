import React from 'react';
import './ModelKosAcademy.scss';
 import academy from '../../../assets/images/threimg.webp';

const ModelKosAcademy = () => {
  return (
    <div className="academy-container">
      <div className="academy-slide">
        <div className="image-secttion">
          {/* <img src={academy} alt="Academy Slide" className="background-image" /> */}
        </div>
        <div className="overlay-content-aca">
          <h1>MODELKOS Academy</h1>
          <p>
            If you want to be a model then we are here to offer advice and create a platform for new aspiring models.
            We endeavor to work across a diverse range of talent and champion every individual regardless of their background or ability.
            We are a female-led team of accomplished, diverse women.
          </p>
          <button className="join-button">Join academy</button>
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="nav-bu prev-prev">&#10094;</button>
        <button className="nav-bu next-next">&#10095;</button>
      </div>
    </div>
  );
};

export default ModelKosAcademy ;
