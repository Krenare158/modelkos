import React from 'react';
import './Home.scss';
 import home from '../../../assets/images/home.webp';
import { data, modelOptions, locationOptions } from './data'; 
import About from '../About/About';
import Section from '../../../Components/pages/section/Section';
import ModelGallery from '../Models/ModelGallery';
import SectionTwo from '../../../Components/pages/section/Section-two';
import SlideshowWithLocationList from '../../../Components/Slider/Slideshow';
import BlogSection from '../Blog/BlogSection';
import ModelKosAcademy from '../Academy/ModelKosAcademy';
import Partners from '../Partners/Partners';

const Home = () => {
  const section = data[0]; 

  return (
    <div>
      <div className="home-container">
        <div className="background-overlay-home"></div>
        <div className="image-container-home">
           <img src={home} alt="Hire a Model or Become One" className="background-image-home" /> 
          <div className="overlay-home">
          <h1 className='hire'>HIRE A MODEL OR<br /><span className="indented-line">BECOME ONE</span></h1>
            <div className="search-container">
              <select className="dropdown">
                {modelOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <select className="dropdown">
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                   {option.icon} {option.label}
                  </option>
                ))}
              </select>
              <button className="find-model-button">Find model</button>
            </div>
          </div>
        </div>
        {section.images && (
          <div className="images-menu">
            {section.images.map((image, index) => (
              <div
                key={index}
                className={`image-con ${image.position} ${image.rotate ? 'rotate' : ''}`}
              >
                <img src={image.src} alt={image.alt} className="menu-image" />
              </div>
            ))}
          </div>
        )}
      </div>
      <About/>
      <ModelGallery/> 
      <BlogSection/>
      <ModelKosAcademy />
      <Partners/>
    </div>
  );
};

export default Home;
