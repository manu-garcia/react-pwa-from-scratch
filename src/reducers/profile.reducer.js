const defaults = {
  genres: [],
  instruments: [],
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {...action.data};
    case 'FETCH_GENRES':
      return {...state, genres: action.data};
    case 'FETCH_INSTRUMENTS':
      return {...state, instruments: action.data };
    case 'SET_GENRE':
      
    default:
      return state;
  }
};

module.exports = reducer;
