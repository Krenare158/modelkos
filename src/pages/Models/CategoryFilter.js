import React from 'react';
import './CategoryFilter.scss';

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <button className='category-button'>Any</button>
      <button className='category-button'>Kids</button>
      <button className='category-button'>Female</button>
      <button className='category-button'>Male</button>
      <button className='category-button'>Mature</button>
    </div>
  );
};

export default CategoryFilter;
