const defaults = {
  genres: [],
  instruments: [],
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case 'FETCH_GENRES':
      return Object.assign({}, state, { genres: action.data });
    case 'FETCH_INSTRUMENTS':
      return Object.assign({}, state, { instruments: action.data });
    case 'SET_GENRE':
      
    default:
      return state;
  }
};

module.exports = reducer;
