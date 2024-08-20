import React from 'react';
import './ModelApplicationForm.scss';
import { contactInformationFields, measurementsFields, measurement } from './data';

const ModelApplicationForm = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Contact Information</h2>
        <form>
          {contactInformationFields.map((field, index) => (
            <div className="form-group" key={index}>
              <label>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea placeholder={field.placeholder}></textarea>
              ) : (
                <input type={field.type} placeholder={field.placeholder} />
              )}
            </div>
          ))}
        </form>
      </div>

      <div className="form-section">
        <h2>Measurements</h2>
        <form>
          {measurementsFields.map((field, index) => (
            <div className="form-group" key={index}>
              <label>{field.label}</label>
              {field.type === 'select' ? (
                <select>
                  {field.options.map((option, optIndex) => (
                    <option key={optIndex}>{option}</option>
                  ))}
                </select>
              ) : (
                <input type={field.type} placeholder={field.placeholder} />
              )}
            </div>
          ))}

          <div className="measurement-grid">
            {measurement.map((field, index) => (
              <div className="form-group" key={index}>
                <label>{field.label}</label>
                {field.type === 'measurement' ? (
                  <div className="measurement-input">
                    <input type="text" placeholder={field.placeholder} />
                    <select>
                      <option>{field.unit}</option>
                    </select>
                  </div>
                ) : (
                    <div className="form-group upload">
                    <input type={field.type} placeholder={field.placeholder} />
                  </div>                  
                )}
              </div>
            ))}
          </div>
        </form>
        <div className="submit-button-container">
        <button type="submit" className="submit-button">Submit</button>
      </div>
      </div>
    </div>
  );
};

export default ModelApplicationForm;
