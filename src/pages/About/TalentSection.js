import React from 'react';
import './TalentSection.scss';
 import talentImage from '../../../assets/images/talent2.webp'; 
 import talentImageColor from '../../../assets/images/talent1.webp'; 

export const TalentSection = () => {
  return (
    <div className="talent-section">
      <div className="image-container-talent">
         <img src={talentImage} alt="Talent" /> 
      </div>
      <div className="text-and-image">
        <div className="text-content-talent">
          <h2 className='talent-head'>ITS <span className="highlight">SHARP CAST OF TALENT</span>, STAFF,<br /> AND <span className="highlight">UNIQUE STYLE OF BRANDING THE</span> <br/>TALENT</h2>
        </div>
        <div className="image-content-talent">
          <img src={talentImageColor} alt="Talent" /> 
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
