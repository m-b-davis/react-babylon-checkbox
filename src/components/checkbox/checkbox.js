import React from 'react';
import './checkbox.css';

// Stateless component purely concerned with display
const Checkbox = props => (
    <div
      onClick={props.onToggle}
      className={`react-checkbox react-checkbox--${props.isChecked ? 'checked' : 'unchecked'}`}
    >
      <label>{props.label}</label>
    </div>
);

export default Checkbox;
