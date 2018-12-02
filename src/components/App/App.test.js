import React, { render } from 'react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
