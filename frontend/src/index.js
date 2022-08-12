import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/05-pages/app/app';
import 'styles/central.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);