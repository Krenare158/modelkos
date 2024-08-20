import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FooterData } from './data';
import { BiCopyright, BiLogoTiktok } from 'react-icons/bi';
import { FiFacebook, FiInstagram, FiTwitch } from 'react-icons/fi';
import logo from '../../../assets/images/logo.jpg';
import footer from '../../../assets/images/footer.png';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

const Footer = () => {

  const lastRow = FooterData.find(section => section.category === 'MODELKOS');

  return (
    <div className='footer'>
      <img src={footer} alt="Footer Decoration" className="footer-image" />
      
      {FooterData.filter(section => section.category !== 'MODELKOS').map((section, index) => (
        <div
          className={`col ${section.category1 === 'Models' ? 'with-line' : ''} ${section.category1 === 'Jobs' ? 'jobs' : ''}`}
          key={index}
        >
          <h6>{section.category || section.category1}</h6>
          {section.linkss && (
            <div className='linkss'>
              {section.linkss.map((link, idx) => (
                <Link key={idx} to={link.to}>
                  {link.link}
                </Link>
              ))}
            </div>
          )}
          {section.details && (
            <div className='details'>
              {section.details.map((detail, idx) => (
                <div key={idx} className='detail-item'>
                  {detail.description && <p>{detail.description}</p>}
                  {detail.email && <p>{detail.email}</p>}
                  {detail.address && <p>{detail.address}</p>}
                  {detail.phone && <p>{detail.phone}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {lastRow && (
        <div className="footer-section last-row">
          <img src={lastRow.img} alt="Logo" className="footer-logo" />
          <div className="category">{lastRow.category}</div>
          <div className="icon">{lastRow.icon}</div>
          <div className="name">{lastRow.name}</div>
          <div className="linka">
            {lastRow.linka.map((link, idx) => (
              <a key={idx} href={link.to}>{link.link}</a>
            ))}
          </div>
          <div className="social">
            {lastRow.social.map((socialIcon, index) => (
              <a href="#" key={index}>{socialIcon.icon}</a>
            ))}
          </div>
          <div className="phone">{lastRow.phone}</div>
          <SelectLanguage />
        </div>
      )}
    </div>
  );
}

export default Footer;
