import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data'; 
import './productmenu.scss'

const productmenu = () => {
  return (
    <div className='nav-menu'>
      {data.map((section, idx) => (
        <div key={idx} className='nav-menu-section'>
          {section.category && <h3>{section.category}</h3>}
          {section.linkss && (
            <div className='links-menu'>
              {section.linkss.map((link, index) => (
                <Link key={index} to={link.to}>
                  {link.link}
                </Link>
              ))}
            </div>
          )}
          {section.images && (
            <div className='images-menu'>
              {section.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`image-container ${image.position} ${image.rotate ? 'rotate' : ''}`} 
                >
                  <img src={image.src} alt={image.alt} className='menu-image' />
                  {image.text && <div className='image-text'>{image.text}</div>} 
                  {image.year && <div className='image-year'>{image.year}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button className='button-nav'>About Us</button>
    </div>
  );
};

export default productmenu;
