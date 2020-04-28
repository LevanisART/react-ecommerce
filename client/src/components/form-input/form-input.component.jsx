import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group-container">
    <input className="form-input-container" onChange={handleChange} {...props} />
    {label ? (
      <label className={`form-input-label ${props.value.length ? 'shrink' : ''}`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
