import React from 'react';
import './Partners.scss';
 import chanel from '../../../assets/images/chanel.webp'
 import boohoo from '../../../assets/images/boohoo.webp'
 import mango from '../../../assets/images/mango.webp'
 import bershka from '../../../assets/images/bershka.webp'
 import butterfly from '../../../assets/images/butterfly.webp'
 import calvinklein from '../../../assets/images/calvinklein.webp'

const Partners = () => {
  return (
    <div className="partners-newsletter-container">
      <div className="partners-section">
        <h2 className="section-title">OUR PARTNERS</h2>
        <div className="partners-logos">
           <img src={chanel} alt="Chanel" /> 
           <img src={boohoo} alt="Boohoo" /> 
           <img src={mango} alt="Mango" /> 
           <img src={bershka} alt="Bershka" /> 
           <img src={calvinklein} alt="Calvin Klein" /> 
           <img src={butterfly}alt="KosovaGirls" /> 
        </div>
        <button className="see-all-btn">See all partners</button>
      </div>

      <div className="newsletter-section">
        <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="newsletter-description">
          Subscribe to our newsletter to receive the latest news and updates about ModelKos.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Type mail here" className="email-input" />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Partners;
