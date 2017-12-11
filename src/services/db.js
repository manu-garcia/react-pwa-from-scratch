// Pomise-like warapper over IndexedDB
import idb from 'idb';
import firebase from 'firebase';

class DB {

  openDatabase() {
    
    // If there is no supoprt for service workers, we wont use DB for offline first techniques
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }

    this._dbPromise = idb.open('react-pwa', 1, function(upgradeDb) {
      let store = upgradeDb.createObjectStore('profiles');
    });

  }

  getOfflineData (name, id) {
    
    return this._dbPromise.then(function(db) {
  
      if (!db) return;
  
      return db.transaction(name).objectStore(name).get(id);
  
    });
  }
    
  setOfflineData (name, id, data) {
    
    return this._dbPromise.then(function(db) {
  
      if (!db) return;
  
      let tx = db.transaction(name, 'readwrite');
      tx.objectStore(name).put(data, id);
    
      return tx.complete;
    });
  
  }

  fetchFromDB({ name = null, id = null, eventType = null, dispatchCB = null }) {

    let self = this;

    return dispatch => {
      self.getOfflineData(name, id).then(offlineData => {
  
        dispatch({
          type: eventType,
          data: offlineData,
        });
  
        let resourceURL = name;
        if (id) {
          resourceURL += `/${id}`;
        }
  
        firebase.database().ref().child(resourceURL).on('value', snapshot => {
          self.setOfflineData(name, id, snapshot.val()).then ( () => {
  
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

let theDB = new DB();
theDB.openDatabase();

export default theDB;