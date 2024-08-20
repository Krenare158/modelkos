import React from 'react';
import BlogCarousel from './BlogCarousel';
import './BlogSection.scss';
 import blog from '../../../assets/images/blog1.webp';
 import abo from '../../../assets/images/abo-cut.webp';
import model2 from '../../../assets/images/model2-cut.webp';

const blogs = [
  {
     image: blog,
    date: '18th July, 2022',
    title: 'THINGS YOU SHOULD KNOW ABOUT THE MODELING INDUSTRY IN 2022',
    excerpt: 'Every year, the modeling industry changes, and so do the things that aspiring models should know...'
  },
  {
     image: abo,
    date: '20th Jun, 2022',
    title: '5 SIMPLE TIPS TO HELP YOU PREPARE FOR YOUR NEXT PHOTOSHOOT',
    excerpt: 'A photoshoot is an exciting opportunity for models to show their creativity and personality...'
  },
  {
     image: model2,
    date: '1st May, 2022',
    title: 'THE BEST WAYS TO USE SOCIAL MEDIA TO START YOUR MODELING CAREER',
    excerpt: 'It’s not a secret that social media is one of the most powerful tools in marketing these days...'
  }
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h1 className="section-title-blog">OUR BLOG</h1>
      <BlogCarousel blogs={blogs} />
      <button className="read-more-btn">Read all blog</button>
    </div>
  );
};

export default BlogSection;
