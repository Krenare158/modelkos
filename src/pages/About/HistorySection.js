import React from 'react';
import './HistorySection.scss';
 import historyImage from '../../../assets/images/historymg.webp'; 

export const HistorySection = () => {
  return (
    <div className="history-section">
      <div className="text-content-history">
        <h1 className='history-head'>HISTORY</h1>
        <p className='para-history'>
          ModelKos was created with the commitment and understanding that all talent
          be equally represented and that appropriate rates and fees for services be
          negotiated and paid to talent in a timely fashion. With its own in-house studio
          and technical staff, ModelKos also understands the timely needs of the Model,
          Talent, Client, Producer, Director, and all support staff in print, television and
          movie production.
        </p>
        <p className='para-history'>
          ModelKos's Social Media department is constantly working to add content, tags,
          mentions and other engagement for our models, talent, clients, and all our
          partners.
        </p>
      </div>
      <div className="image-content-history">
        {/* <img src={historyImage} alt="History" /> */}
      </div>
    </div>
  );
};

export default HistorySection;
