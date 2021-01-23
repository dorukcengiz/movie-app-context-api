import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebContextProvider from './store/DataState';

ReactDOM.render(
  <React.StrictMode>
    <WebContextProvider>
      <App />
    </WebContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
