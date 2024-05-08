import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'

import PlayGround from './playground/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PlayGround />
  </React.StrictMode>
);