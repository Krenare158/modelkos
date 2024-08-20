import React from 'react';
import './BlogCard.scss';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, title, excerpt }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{date}</h3>
        <h4>{title}</h4>
        <p>{excerpt}</p>
        <Link to='/' class="read-more">Read More →</Link>
      </div>
    </div>
  );
};

export default BlogCard;
