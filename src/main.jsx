import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App'; // this should exist
import './index.css'; // this must exist


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
