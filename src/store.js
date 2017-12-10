import { applyMiddleware, createStore } from 'redux';

// Thunk middleware for async actions
import thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
