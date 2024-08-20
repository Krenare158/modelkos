import React from 'react';
import ModelCard from './ModelCard';
import CategoryFilter from './CategoryFilter';
import CallToAction from './CallToAction';
import './ModelGallery.scss';
import { models } from './data';

const ModelGallery = () => {
  return (
    <div className="model-gallery">
      <h1 className='our-models'>Our Models</h1>
      <CategoryFilter />
      <div className="model-grid">
        {models.map((model, index) => (
          <ModelCard key={index} model={model} />
        ))}
        <CallToAction />
      </div>
    </div>
  );
};

export default ModelGallery;
