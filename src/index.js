import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(<App/>, document.getElementById('application'));

if ('serviceWorker' in navigator) {

  // Register a single service worker for the whole application at the root of the app.
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then((serviceWorkerRegistration) => {
      // Service worker registered
      console.log('Service worker registered!!', serviceWorkerRegistration);

      // If page is not controlled by a service worker exit
      if (!navigator.serviceWorker.controller) return;

      // Show the user there is a new version of the app
      let showUpdateToUser = (sw) => {
        console.log("There is a new version of the app. Would you like to get the new version?");
        console.log("If yes sw.postMessage({action: 'skipWaiting'})");
        setTimeout(() => {
          console.log('Accepting new app version...');
          sw.postMessage({action: 'skipWaiting'});
        }, 3000);
      };

      // Wait until the sw is fully installed and show the user there is a new version of the app
      let waitUntilSWInstalled = (sw) => {
        sw.addEventListener('statechange', () => {
          if (sw.state == "installed") {
            console.log('There is a new service worker!');
            showUpdateToUser(sw);
          }
        });
      };

      if (serviceWorkerRegistration.waiting) {
        // There is a new version of the app waiting
        showUpdateToUser(serviceWorkerRegistration.waiting);
      }

      if (serviceWorkerRegistration.installing) {
        // Service worker is still installing
        waitUntilSWInstalled(serviceWorkerRegistration.installing);
      }

      // Avoid refreshing multiple times when reloading page or forcing to update
      var refreshing = false;
      serviceWorkerRegistration.addEventListener('new-service-worker-found', () => {
        if(refreshing) return;
        refreshing = true;
        window.location.reload();
      });

    })
    .catch((error) => {
      console.log('Service worker registration failed with error: ', error);
    });
}