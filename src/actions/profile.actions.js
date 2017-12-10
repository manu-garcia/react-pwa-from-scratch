import firebase from 'firebase';

// TODO: All that is to see firebase realtime database integrated
const userId = firebase.auth().currentUser.uid;

export function fetchProfile () {
  
  return dispatch => {
    firebase.database().ref().child(`profiles/${userId}`).on('value', data => {
      dispatch({
        type: "FETCH_PROFILE",
        data: data.val(),
      });
    })
  };
};

export function setInstruments (instruments) {
  return {
    type: "SET_INSTRUMENTS",
    data: instruments,
  };
};

export function setGenre (genre) {
  return {
    type: "SET_GENRE",
    data: genre,
  };
};
    