import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './checkbox';

it('renders in unchecked mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders in checked mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox isChecked/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
