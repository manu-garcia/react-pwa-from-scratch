import firebase from 'firebase';

class Session {

  getUserId () {
    return firebase.auth().currentUser.uid;
  }

}

export default new Session ();