import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

ReactDOM.render(<App/>, document.getElementById('application'));

if ('serviceWorker' in navigator) {

  // Register a single service worker for the whole application at the root of the app.
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then((serviceWorkerRegistration) => {
      // Service worker registered
      console.log('Service worker registered!!', serviceWorkerRegistration);
    })
    .catch((error) => {
      console.log('Service worker registration failed with error: ', error);
    });
}