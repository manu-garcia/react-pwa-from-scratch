export function fetchInstruments () {
  return {
    type: "FETCH_INSTRUMENTS",
    data: [
      {name: 'Guitar', selected: false},
      {name: 'Banjo', selected: false},
      {name: 'Drums', selected: false},
    ],
  };
};

export function fetchGenres () {
  return {
    type: "FETCH_GENRES",
    data: [
      {name: 'Rock', selected: false},
      {name: 'Blues', selected: false},
      {name: 'Jazz', selected: false},
    ],
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
    