import { combineReducers } from 'redux';

import searchReducer from './search.reducer';
import publishReducer from './publish.reducer';
import profileReducer from './profile.reducer';

export default combineReducers({
  search: searchReducer,
  publish: publishReducer,
  profile: profileReducer,
});
