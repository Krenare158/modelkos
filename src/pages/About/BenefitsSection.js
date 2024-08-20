import React from 'react';
import './BenefitsSection.scss';

export const BenefitsSection = () => {
  const benefits = [
    {
      text: "Exclusive deals with exclusive top brands",
    },
    {
      text: "Affiliate partnerships for direct deals and ambassador programs with big fashion brands",
    },
    {
      text: "Work in interesting sectors, such as TV & Entertainment, Music, Movie Industry, Online Influencer, Gaming or Fashion",
    },
    {
      text: "Dedicated social and business management for a successful social media presence: We manage YouTube channel, Instagram, TikTok, Facebook and Twitter accounts for any of our models in partnership with MediaKos",
    },
  ];

  return (
    <div className="benefits-section">
      <h1>BENEFITS</h1>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="image-overlay-benefit">
              <p className='benefit-para'>{benefit.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all</button>
    </div>
  );
};

export default BenefitsSection;
