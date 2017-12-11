
import Session from '../services/session';
import DB from '../services/db';

export function fetchProfile () {

  return DB.fetchFromDB({
    eventType: "FETCH_PROFILE",
    name: 'profiles',
    id: Session.getUserId()
  });

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
    