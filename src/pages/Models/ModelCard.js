import React from 'react';
import './ModelCard.scss';

const ModelCard = ({ model }) => {
  return (
    <div className="model-card">
      <img src={model.src} alt={`Model ${model.id}`} />
    </div>
  );
};

export default ModelCard;
