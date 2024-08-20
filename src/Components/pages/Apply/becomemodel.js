import React from 'react';
import './becomemodel.scss';
import modelImage from '../../../assets/images/apply.webp'; 

const BecomeAModelSection = () => {
  return (
    <div className="become-a-model-section">
      <div className="content">
        <h1 className="heading">
          BECOME A <br /> MODEL
        </h1>
        <p className="description">
          If you are interested in commercial representation, please email headshot and resume to <a href="mailto:info@modelkos.com">info@modelkos.com</a>
        </p>
      </div>
      <div className="image-container">
       <img src={modelImage} alt="Become a Model" /> 
      </div>
    </div>
  );
};

export default BecomeAModelSection;
