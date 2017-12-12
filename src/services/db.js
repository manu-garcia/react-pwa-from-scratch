// Pomise-like warapper over IndexedDB
import idb from 'idb';
import firebase from 'firebase';

// Current database name and version
export const DB_NAME = 'react-pwa';
export const DB_VERSION = 1;
export const storeNames = ['profiles'];

/**
 * DB service will encapsulate access to both offline and online databases.
 * 
 * Offline database is the browser IndexedDB, used through a lightweight
 * promise-like wrapper called idb.
 * 
 * Online database is Firebase Realtime DB. Implements observers over data
 * changes a well as promises.
 * 
 */
class DB {

  /**
   * Opens offline databse conection and creates all necesary data stores.
   * 
   * TODO: should not be firebase initialised here too!?
   * 
   */
  openDatabase() {
    
    // If there is no support for service workers, we wont use DB for offline first techniques
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }

    // Open a connection and initialise all stores
    this._dbPromise = idb.open(DB_NAME, DB_VERSION, upgradeDb => {

      // Initialise all stores.
      storeNames.forEach(storeName => {
        upgradeDb.createObjectStore(storeName);
      });

    });

  }

  /**
   * Return a promise which will resolve on data loaded from the offline database.
   * 
   * @param {string} name: name of the object store to be read.
   * @param {string/number} id: id as index in a key/value pair to be read
   * 
   */
  getOfflineData (name, id) {
    
    return this._dbPromise.then(db => {
  
      if (!db) return;
  
      return db.transaction(name).objectStore(name).get(id);
  
    });
  }
  
  /**
   * Return a promise that will resolve in data saved to the offline database.
   * 
   * @param {string} name: name of the object store to be written.
   * @param {string/number} id: id as index in a key/value pair to be written.
   * @param {any} data: any data type as value in a key/value pair to be written.
   * 
   */
  setOfflineData (name, id, data) {
    
    return this._dbPromise.then(db => {
  
      if (!db) return;
  
      let tx = db.transaction(name, 'readwrite');
      tx.objectStore(name).put(data, id);
    
      return tx.complete;
    });
  
  }

  /**
   * An Offline first implementation of fecth.
   * 
   * Return a promise that will reolve in data read first from the offline database and,
   * a dispatch even will be trigger with the offline-data. Only after that data will 
   * be read from the online database and a second dispatch event will be trigger with
   * the online-read data.
   * 
   * @param {object} param0, where:
   * 
   */
  fetchFromDB({ name = null, id = null, eventType = null, dispatchCB = null }) {

    return dispatch => {

      // Get first the offline data if any
      this.getOfflineData(name, id).then(offlineData => {
  
        // Tell the application we have the offline data.
        dispatch({
          type: eventType,
          data: offlineData,
        });
  
        // If there is an id, compose the url
        let resourceURL = name;
        if (id) {
          resourceURL += `/${id}`;
        }
  
        // Get now the online data if there is connectivity. That is actually a subscription.
        // So every time there is a change on the data, we will get notified here.
        firebase.database().ref().child(resourceURL).on('value', snapshot => {

          // Save the new data in the offline database
          this.setOfflineData(name, id, snapshot.val()).then ( () => {
  
            // Tell the application we have the online new fresh data.
            dispatch({
              type: eventType,
              data: snapshot.val(),
            });
    
          });
        });
  
      });
    };  
  }

};

// TODO: DB Initialisation to be relocated

// Instanciate the DB
let theDB = new DB();

// Open cnonection and create stores
theDB.openDatabase();

export default theDB;