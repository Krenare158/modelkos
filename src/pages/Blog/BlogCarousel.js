import React, { useRef } from 'react';
import BlogCard from './BlogCard';
import './BlogCarousel.scss';

const BlogCarousel = ({ blogs }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const track = carouselRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="blog-carousel">
      <button className="prev-blog" onClick={() => scrollCarousel('left')}>❮</button>
      <div className="carousel-track" ref={carouselRef}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            excerpt={blog.excerpt}
          />
        ))}
      </div>
      <button className="next-blog" onClick={() => scrollCarousel('right')}>❯</button>
    </div>
  );
};

export default BlogCarousel;
